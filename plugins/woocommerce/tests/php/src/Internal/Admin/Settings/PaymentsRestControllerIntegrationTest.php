<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\Settings;

use Automattic\WooCommerce\Internal\Admin\Settings\Payments;
use Automattic\WooCommerce\Internal\Admin\Settings\PaymentsRestController;
use Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensionSuggestions;
use WC_REST_Unit_Test_Case;
use WP_REST_Request;

/**
 * PaymentsRestController API controller integration test.
 *
 * @class PaymentsRestController
 */
class PaymentsRestControllerIntegrationTest extends WC_REST_Unit_Test_Case {
	/**
	 * Endpoint.
	 *
	 * @var string
	 */
	const ENDPOINT = '/wc-admin/settings/payments';

	/**
	 * @var PaymentsRestController
	 */
	protected PaymentsRestController $controller;

	/**
	 * @var Payments
	 */
	protected Payments $service;

	/**
	 * The ID of the store admin user.
	 *
	 * @var int
	 */
	protected $store_admin_id;

	/**
	 * The initial country that is set before running tests in this test suite.
	 *
	 * @var string $initial_country
	 */
	private static string $initial_country = '';

	/**
	 * The initial currency that is set before running tests in this test suite.
	 *
	 * @var string $initial_currency
	 */
	private static string $initial_currency = '';

	/**
	 * Saves values of initial country and currency before running test suite.
	 */
	public static function wpSetUpBeforeClass(): void {
		self::$initial_country  = WC()->countries->get_base_country();
		self::$initial_currency = get_woocommerce_currency();
	}

	/**
	 * Restores initial values of country and currency after running test suite.
	 */
	public static function wpTearDownAfterClass(): void {
		update_option( 'woocommerce_default_country', self::$initial_country );
		update_option( 'woocommerce_currency', self::$initial_currency );

		delete_option( 'woocommerce_paypal_settings' );
	}

	/**
	 * Set up test.
	 */
	public function setUp(): void {
		parent::setUp();

		$this->store_admin_id = $this->factory->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $this->store_admin_id );

		$this->controller = wc_get_container()->get( PaymentsRestController::class );
		$this->controller->register_routes();

		$this->service = wc_get_container()->get( Payments::class );

		$this->load_core_paypal_pg();
	}

	/**
	 * Test getting payment providers by a user without the needed capabilities.
	 */
	public function test_get_payment_providers_by_user_without_caps() {
		// Arrange.
		// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
		$filter_callback = fn( $caps ) => array(
			'manage_woocommerce' => false,
			'install_plugins'    => false,
		);
		add_filter( 'user_has_cap', $filter_callback );

		// Act.
		$request  = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( rest_authorization_required_code(), $response->get_status() );

		// Clean up.
		remove_filter( 'user_has_cap', $filter_callback );
	}

	/**
	 * Test getting payment providers by a user without the capability to install plugins.
	 *
	 * This means no suggestions are returned.
	 */
	public function test_get_payment_providers_by_manager_without_install_plugins_cap() {
		// Arrange.
		// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
		$filter_callback = fn( $caps ) => array(
			'manage_woocommerce' => true,
			'install_plugins'    => false,
		);
		add_filter( 'user_has_cap', $filter_callback );

		// Act.
		$request  = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert all the entries are in the response.
		$this->assertArrayHasKey( 'providers', $data );
		$this->assertArrayHasKey( 'offline_payment_methods', $data );
		$this->assertArrayHasKey( 'suggestions', $data );
		$this->assertArrayHasKey( 'suggestion_categories', $data );

		// We have the core PayPal gateway registered and the offline PMs group entry.
		$this->assertCount( 2, $data['providers'] );
		// Because the core registers the PayPal PG after the offline PMs, the order we expect is this.
		$this->assertSame(
			array( Payments::OFFLINE_METHODS_ORDERING_GROUP, 'paypal' ),
			array_column( $data['providers'], 'id' )
		);
		// We have the 3 offline payment methods.
		$this->assertCount( 3, $data['offline_payment_methods'] );
		$this->assertSame( array( 'bacs', 'cheque', 'cod' ), array_column( $data['offline_payment_methods'], 'id' ) );
		// No suggestions are returned because the user can't install plugins.
		$this->assertCount( 0, $data['suggestions'] );
		// But we do get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );

		// Assert that the PayPal gateway has all the details.
		$provider = $data['providers'][1];
		$this->assertArrayHasKey( 'id', $provider, 'Provider (gateway) `id` entry is missing' );
		$this->assertArrayHasKey( '_order', $provider, 'Provider (gateway) `_order` entry is missing' );
		$this->assertArrayHasKey( '_type', $provider, 'Provider (gateway) `_order` entry is missing' );
		$this->assertEquals( Payments::PROVIDER_TYPE_GATEWAY, $provider['_type'], 'Provider (gateway) `_type` entry is not `' . Payments::PROVIDER_TYPE_GATEWAY . '`' );
		$this->assertArrayHasKey( 'title', $provider, 'Provider (gateway) `title` entry is missing' );
		$this->assertArrayHasKey( 'description', $provider, 'Provider (gateway) `description` entry is missing' );
		$this->assertArrayHasKey( 'supports', $provider, 'Provider (gateway) `supports` entry is missing' );
		$this->assertIsList( $provider['supports'], 'Provider (gateway) `supports` entry is not a list' );
		$this->assertArrayHasKey( 'state', $provider, 'Provider (gateway) `state` entry is missing' );
		$this->assertArrayHasKey( 'enabled', $provider['state'], 'Provider (gateway) `state[enabled]` entry is missing' );
		$this->assertArrayHasKey( 'needs_setup', $provider['state'], 'Provider (gateway) `state[needs_setup]` entry is missing' );
		$this->assertArrayHasKey( 'test_mode', $provider['state'], 'Provider (gateway) `state[test_mode]` entry is missing' );
		$this->assertArrayHasKey( 'management', $provider, 'Provider (gateway) `management` entry is missing' );
		$this->assertArrayHasKey( 'settings_url', $provider['management'], 'Provider (gateway) `management[settings_url]` entry is missing' );
		$this->assertArrayHasKey( 'links', $provider, 'Provider (gateway) `links` entry is missing' );
		$this->assertCount( 1, $provider['links'] );
		$this->assertArrayHasKey( 'plugin', $provider, 'Provider (gateway) `plugin` entry is missing' );
		$this->assertArrayHasKey( 'slug', $provider['plugin'], 'Provider (gateway) `plugin[slug]` entry is missing' );
		$this->assertArrayHasKey( 'status', $provider['plugin'], 'Provider (gateway) `plugin[status]` entry is missing' );

		// Assert that the offline payment methods group has all the details.
		$offline_pms_group = $data['providers'][0];
		$this->assertArrayHasKey( 'id', $offline_pms_group, 'Provider (offline payment methods group) `id` entry is missing' );
		$this->assertArrayHasKey( '_type', $offline_pms_group, 'Provider (offline payment methods group) `_type` entry is missing' );
		$this->assertEquals( Payments::PROVIDER_TYPE_OFFLINE_PMS_GROUP, $offline_pms_group['_type'], 'Provider (offline payment methods group) `_type` entry is not `' . Payments::PROVIDER_TYPE_OFFLINE_PMS_GROUP . '`' );
		$this->assertArrayHasKey( '_order', $offline_pms_group, 'Provider (offline payment methods group) `_order` entry is missing' );
		$this->assertArrayHasKey( 'title', $offline_pms_group, 'Provider (offline payment methods group) `title` entry is missing' );
		$this->assertArrayHasKey( 'description', $offline_pms_group, 'Provider (offline payment methods group) `description` entry is missing' );

		// Assert that the offline payment methods have all the details.
		$offline_pm = $data['offline_payment_methods'][0];
		$this->assertArrayHasKey( 'id', $offline_pm, 'Offline payment method `id` entry is missing' );
		$this->assertArrayHasKey( '_order', $offline_pm, 'Offline payment method `_order` entry is missing' );
		$this->assertArrayHasKey( '_type', $offline_pm, 'Offline payment method `_type` entry is missing' );
		$this->assertEquals( Payments::PROVIDER_TYPE_OFFLINE_PM, $offline_pm['_type'], 'Offline payment method `_type` entry is not `' . Payments::PROVIDER_TYPE_OFFLINE_PM . '`' );
		$this->assertArrayHasKey( 'title', $offline_pm, 'Offline payment method `title` entry is missing' );
		$this->assertArrayHasKey( 'description', $offline_pm, 'Offline payment method `description` entry is missing' );
		$this->assertArrayHasKey( 'state', $offline_pm, 'Offline payment method `state` entry is missing' );
		$this->assertArrayHasKey( 'enabled', $offline_pm['state'], 'Offline payment method `state[enabled]` entry is missing' );
		$this->assertArrayHasKey( 'needs_setup', $offline_pm['state'], 'Offline payment method `state[needs_setup]` entry is missing' );
		$this->assertArrayHasKey( 'management', $offline_pm, 'Offline payment method `management` entry is missing' );
		$this->assertArrayHasKey( 'icon', $offline_pm, 'Offline payment method `icon` entry is missing' );

		// Assert that the suggestion categories have all the details.
		$suggestion_category = $data['suggestion_categories'][0];
		$this->assertArrayHasKey( 'id', $suggestion_category, 'Suggestion category `id` entry is missing' );
		$this->assertArrayHasKey( '_priority', $suggestion_category, 'Suggestion category `_order` entry is missing' );
		$this->assertArrayHasKey( 'title', $suggestion_category, 'Suggestion category `title` entry is missing' );
		$this->assertArrayHasKey( 'description', $suggestion_category, 'Suggestion category `description` entry is missing' );

		// Clean up.
		remove_filter( 'user_has_cap', $filter_callback );
	}

	/**
	 * Test getting payment providers by a user with the capability to install plugins.
	 *
	 * This means suggestions are returned.
	 */
	public function test_get_payment_providers_by_manager_with_install_plugins_cap() {
		// Arrange.
		// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
		$filter_callback = fn( $caps ) => array(
			'manage_woocommerce' => true,
			'install_plugins'    => true,
		);
		add_filter( 'user_has_cap', $filter_callback );

		// Act.
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$request->set_param( 'location', 'US' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert all the entries are in the response.
		$this->assertArrayHasKey( 'providers', $data );
		$this->assertArrayHasKey( 'offline_payment_methods', $data );
		$this->assertArrayHasKey( 'suggestions', $data );
		$this->assertArrayHasKey( 'suggestion_categories', $data );

		// We have the core PayPal gateway registered, the offline PMs group entry, and 2 suggestions.
		$this->assertCount( 4, $data['providers'] );
		// We also have the 3 offline payment methods.
		$this->assertCount( 3, $data['offline_payment_methods'] );
		// We only have PSPs because there is no payment gateway enabled.
		$this->assertCount( 3, $data['suggestions'] );
		// Assert we get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );

		// Assert that the preferred suggestions are WooPayments and PayPal (full stack), in this order.
		$this->assertEquals( Payments::SUGGESTION_ORDERING_PREFIX . PaymentExtensionSuggestions::WOOPAYMENTS, $data['providers'][0]['id'] );
		$this->assertEquals( Payments::SUGGESTION_ORDERING_PREFIX . PaymentExtensionSuggestions::PAYPAL_FULL_STACK, $data['providers'][1]['id'] );

		// Assert that the other suggestions are all PSPs.
		$other_suggestions = $data['suggestions'];
		$this->assertEquals( array( PaymentExtensionSuggestions::TYPE_PSP ), array_unique( array_column( $other_suggestions, '_type' ) ) );

		// Clean up.
		remove_filter( 'user_has_cap', $filter_callback );
	}

	/**
	 * Test getting payment providers with an enabled payment gateway.
	 *
	 * This means suggestions are returned.
	 */
	public function test_get_payment_providers_with_enabled_pg() {
		// Arrange.
		$this->enable_core_paypal_pg();

		// Act.
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$request->set_param( 'location', 'US' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert all the entries are in the response.
		$this->assertArrayHasKey( 'providers', $data );
		$this->assertArrayHasKey( 'offline_payment_methods', $data );
		$this->assertArrayHasKey( 'suggestions', $data );
		$this->assertArrayHasKey( 'suggestion_categories', $data );

		// We have the core PayPal gateway registered, the offline PMs group entry, and 2 suggestions.
		$this->assertCount( 4, $data['providers'] );
		// We also have the 3 offline payment methods.
		$this->assertCount( 3, $data['offline_payment_methods'] );
		// We get all the suggestions.
		$this->assertCount( 7, $data['suggestions'] );
		// Assert we get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );

		// Assert that the PayPal gateway is returned as enabled.
		$gateway = $data['providers'][3];
		$this->assertTrue( $gateway['state']['enabled'] );

		// Assert that the preferred suggestions are WooPayments and PayPal (full stack), in this order.
		$this->assertEquals( Payments::SUGGESTION_ORDERING_PREFIX . PaymentExtensionSuggestions::WOOPAYMENTS, $data['providers'][0]['id'] );
		$this->assertEquals( Payments::SUGGESTION_ORDERING_PREFIX . PaymentExtensionSuggestions::PAYPAL_FULL_STACK, $data['providers'][1]['id'] );

		// Assert that PayPal Wallet is not in the other suggestions since we have the full stack variant in the preferred suggestions.
		$other_suggestions = $data['suggestions'];
		$this->assertNotContains( PaymentExtensionSuggestions::PAYPAL_WALLET, array_column( $other_suggestions, 'id' ) );
	}

	/**
	 * Test getting payment providers without specifying a location.
	 *
	 * It should default to the store location.
	 */
	public function test_get_payment_providers_with_no_location() {
		// Arrange.
		$this->enable_core_paypal_pg();

		update_option( 'woocommerce_default_country', 'LI' ); // Liechtenstein.

		// Act.
		$request  = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert all the entries are in the response.
		$this->assertArrayHasKey( 'providers', $data );
		$this->assertArrayHasKey( 'offline_payment_methods', $data );
		$this->assertArrayHasKey( 'suggestions', $data );
		$this->assertArrayHasKey( 'suggestion_categories', $data );

		// We have the core PayPal gateway registered, the offline PMs group entry, and 2 suggestions.
		$this->assertCount( 4, $data['providers'] );
		// We also have the 3 offline payment methods.
		$this->assertCount( 3, $data['offline_payment_methods'] );
		// We get all the suggestions.
		$this->assertCount( 1, $data['suggestions'] );
		// Assert we get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );

		// Assert that the preferred suggestions are Stripe and PayPal (full stack), in this order.
		$this->assertEquals( Payments::SUGGESTION_ORDERING_PREFIX . PaymentExtensionSuggestions::STRIPE, $data['providers'][0]['id'] );
		$this->assertEquals( Payments::SUGGESTION_ORDERING_PREFIX . PaymentExtensionSuggestions::PAYPAL_FULL_STACK, $data['providers'][1]['id'] );

		// The other suggestion is Mollie.
		$other_suggestions = $data['suggestions'];
		$this->assertEquals( PaymentExtensionSuggestions::MOLLIE, $other_suggestions[0]['id'] );
	}

	/**
	 * Test getting payment providers with an unsupported location.
	 *
	 * It should default to the store location.
	 */
	public function test_get_payment_providers_with_unsupported_location() {
		// Arrange.
		$this->enable_core_paypal_pg();

		// Act.
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$request->set_param( 'location', 'XX' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert all the entries are in the response.
		$this->assertArrayHasKey( 'providers', $data );
		$this->assertArrayHasKey( 'offline_payment_methods', $data );
		$this->assertArrayHasKey( 'suggestions', $data );
		$this->assertArrayHasKey( 'suggestion_categories', $data );

		// We have the core PayPal gateway registered and the offline PMs group entry.
		$this->assertCount( 2, $data['providers'] );
		// We also have the 3 offline payment methods.
		$this->assertCount( 3, $data['offline_payment_methods'] );
		// No suggestions are returned.
		$this->assertCount( 0, $data['suggestions'] );
		// Assert we get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );
	}

	/**
	 * Test getting payment providers with invalid location.
	 */
	public function test_get_payment_providers_with_invalid_location() {
		// Arrange.
		$this->enable_core_paypal_pg();

		// Act.
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$request->set_param( 'location', 'U' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 400, $response->get_status() );

		// Act.
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$request->set_param( 'location', '12' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 400, $response->get_status() );

		// Act.
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$request->set_param( 'location', 'USA' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 400, $response->get_status() );
	}

	/**
	 * Test hiding a payment extension suggestion.
	 */
	public function test_hide_payment_extension_suggestion() {
		// Arrange.
		$suggestion_order_map_id = Payments::SUGGESTION_ORDERING_PREFIX . PaymentExtensionSuggestions::WOOPAYMENTS;

		// Act.
		$request  = new WP_REST_Request( 'POST', self::ENDPOINT . '/suggestion/' . $suggestion_order_map_id . '/hide' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		// Act.
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$request->set_param( 'location', 'US' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert that the suggestion is not in the providers list anymore.
		$this->assertNotContains( $suggestion_order_map_id, array_column( $data['providers'], 'id' ) );
		// But it is in the other list.
		$other_suggestions = $data['suggestions'];
		$this->assertContains( PaymentExtensionSuggestions::WOOPAYMENTS, array_column( $other_suggestions, 'id' ) );

		// Delete the user meta.
		delete_user_meta( $this->store_admin_id, Payments::USER_PAYMENTS_NOX_PROFILE_KEY );

		// Act.
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$request->set_param( 'location', 'US' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert that the suggestion is in the providers list again.
		$this->assertContains( $suggestion_order_map_id, array_column( $data['providers'], 'id' ) );
	}

	/**
	 * Load the WC core PayPal gateway but not enable it.
	 *
	 * @return void
	 */
	private function load_core_paypal_pg() {
		// Make sure the WC core PayPal gateway is loaded.
		update_option(
			'woocommerce_paypal_settings',
			array(
				'_should_load' => 'yes',
				'enabled'      => 'no',
			)
		);
		// Make sure the store currency is supported by the gateway.
		update_option( 'woocommerce_currency', 'USD' );
		WC()->payment_gateways()->init();

		// Reset the controller memo to pick up the new gateway details.
		$this->service->reset_memo();
	}

	/**
	 * Enable the WC core PayPal gateway.
	 *
	 * @return void
	 */
	private function enable_core_paypal_pg() {
		// Enable the WC core PayPal gateway.
		update_option( 'woocommerce_paypal_settings', array( 'enabled' => 'yes' ) );
		// Make sure the store currency is supported by the gateway.
		update_option( 'woocommerce_currency', 'USD' );
		WC()->payment_gateways()->init();

		// Reset the service memo to pick up the new gateway details.
		$this->service->reset_memo();
	}
}
