<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\Settings;

use Automattic\WooCommerce\Internal\Admin\Settings\PaymentsRestController;
use Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensionSuggestions;
use WC_REST_Unit_Test_Case;
use WP_REST_Request;

/**
 * PaymentsRestController API controller test.
 *
 * @class PaymentsRestController
 */
class PaymentsRestControllerTest extends WC_REST_Unit_Test_Case {
	/**
	 * Endpoint.
	 *
	 * @var string
	 */
	const ENDPOINT = '/wc-admin/settings/payments';

	/**
	 * @var PaymentsRestController
	 */
	protected $controller;

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

		$this->controller = wc_get_container()->get( PaymentsRestController::class );
		$this->controller->register_routes();
	}

	/**
	 * Test getting payment providers by a user without the capability to install plugins.
	 *
	 * This means no suggestions are returned.
	 */
	public function test_get_payment_providers_by_shop_manager() {
		// Arrange.
		$user_shop_manager = $this->factory->user->create( array( 'role' => 'shop_manager' ) );
		wp_set_current_user( $user_shop_manager );

		// Act.
		$request  = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert all the entries are in the response.
		$this->assertArrayHasKey( 'gateways', $data );
		$this->assertArrayHasKey( 'offline_payment_methods', $data );
		$this->assertArrayHasKey( 'preferred_suggestions', $data );
		$this->assertArrayHasKey( 'other_suggestions', $data );
		$this->assertArrayHasKey( 'suggestion_categories', $data );

		// We have the core PayPal gateway registered and the 3 offline payment methods.
		$this->assertCount( 1, $data['gateways'] );
		$this->assertCount( 3, $data['offline_payment_methods'] );
		// No suggestions are returned because the user can't install plugins.
		$this->assertCount( 0, $data['preferred_suggestions'] );
		$this->assertCount( 0, $data['other_suggestions'] );
		// But we do get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );

		// Assert that the PayPal gateway has all the details.
		$gateway = $data['gateways'][0];
		$this->assertArrayHasKey( 'id', $gateway, 'Gateway `id` entry is missing' );
		$this->assertArrayHasKey( '_order', $gateway, 'Gateway `_order` entry is missing' );
		$this->assertArrayHasKey( 'title', $gateway, 'Gateway `title` entry is missing' );
		$this->assertArrayHasKey( 'description', $gateway, 'Gateway `description` entry is missing' );
		$this->assertArrayHasKey( 'supports', $gateway, 'Gateway `supports` entry is missing' );
		$this->assertIsList( $gateway['supports'], 'Gateway `supports` entry is not a list' );
		$this->assertArrayHasKey( 'state', $gateway, 'Gateway `state` entry is missing' );
		$this->assertArrayHasKey( 'enabled', $gateway['state'], 'Gateway `state[enabled]` entry is missing' );
		$this->assertArrayHasKey( 'needs_setup', $gateway['state'], 'Gateway `state[needs_setup]` entry is missing' );
		$this->assertArrayHasKey( 'test_mode', $gateway['state'], 'Gateway `state[test_mode]` entry is missing' );
		$this->assertArrayHasKey( 'management', $gateway, 'Gateway `management` entry is missing' );
		$this->assertArrayHasKey( 'settings_url', $gateway['management'], 'Gateway `management[settings_url]` entry is missing' );
		$this->assertArrayHasKey( 'links', $gateway, 'Gateway `links` entry is missing' );
		$this->assertCount( 1, $gateway['links'] );
		$this->assertArrayHasKey( 'plugin', $gateway, 'Gateway `plugin` entry is missing' );
		$this->assertArrayHasKey( 'slug', $gateway['plugin'], 'Gateway `plugin[slug]` entry is missing' );
		$this->assertArrayHasKey( 'status', $gateway['plugin'], 'Gateway `plugin[status]` entry is missing' );

		// Assert that the offline payment methods have all the details.
		$offline_pm = $data['offline_payment_methods'][0];
		$this->assertArrayHasKey( 'id', $offline_pm, 'Offline payment method `id` entry is missing' );
		$this->assertArrayHasKey( '_order', $offline_pm, 'Offline payment method `_order` entry is missing' );
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
	}

	/**
	 * Test getting payment providers by a user with the capability to install plugins.
	 *
	 * This means suggestions are returned.
	 */
	public function test_get_payment_providers_by_admin() {
		// Arrange.
		$user_admin = $this->factory->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $user_admin );

		// Act.
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$request->set_param( 'location', 'US' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert all the entries are in the response.
		$this->assertArrayHasKey( 'gateways', $data );
		$this->assertArrayHasKey( 'offline_payment_methods', $data );
		$this->assertArrayHasKey( 'preferred_suggestions', $data );
		$this->assertArrayHasKey( 'other_suggestions', $data );
		$this->assertArrayHasKey( 'suggestion_categories', $data );

		// We have the core PayPal gateway registered and the 3 offline payment methods.
		$this->assertCount( 1, $data['gateways'] );
		$this->assertCount( 3, $data['offline_payment_methods'] );
		// Suggestions are returned because the user can install plugins.
		$this->assertCount( 2, $data['preferred_suggestions'] );
		// We only have PSPs because there is no payment gateway enabled.
		$this->assertCount( 3, $data['other_suggestions'] );
		// Assert we get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );

		// Assert that the preferred suggestions are WooPayments and PayPal (full stack), in this order.
		$preferred_suggestions = $data['preferred_suggestions'];
		$this->assertEquals( PaymentExtensionSuggestions::WOOPAYMENTS, $preferred_suggestions[0]['id'] );
		$this->assertEquals( PaymentExtensionSuggestions::PAYPAL_FULL_STACK, $preferred_suggestions[1]['id'] );

		// Assert that the other suggestions are all PSPs.
		$other_suggestions = $data['other_suggestions'];
		$this->assertEquals( array( PaymentExtensionSuggestions::TYPE_PSP ), array_unique( array_column( $other_suggestions, '_type' ) ) );

		// Assert that the suggestions have all the details.
		foreach ( $preferred_suggestions as $suggestion ) {
			$this->assertArrayHasKey( 'id', $suggestion, 'Suggestion `id` entry is missing' );
			$this->assertArrayHasKey( '_priority', $suggestion, 'Suggestion `_priority` entry is missing' );
			$this->assertIsInteger( $suggestion['_priority'], 'Suggestion `_priority` entry is not an integer' );
			$this->assertArrayHasKey( '_type', $suggestion, 'Suggestion `_type` entry is missing' );
			$this->assertArrayHasKey( 'title', $suggestion, 'Suggestion `title` entry is missing' );
			$this->assertArrayHasKey( 'description', $suggestion, 'Suggestion `description` entry is missing' );
			$this->assertArrayHasKey( 'plugin', $suggestion, 'Suggestion `plugin` entry is missing' );
			$this->assertArrayHasKey( '_type', $suggestion['plugin'], 'Suggestion `plugin[_type]` entry is missing' );
			$this->assertArrayHasKey( 'slug', $suggestion['plugin'], 'Suggestion `plugin[slug]` entry is missing' );
			$this->assertArrayHasKey( 'status', $suggestion['plugin'], 'Suggestion `plugin[status]` entry is missing' );
			$this->assertArrayHasKey( 'icon', $suggestion, 'Suggestion `icon` entry is missing' );
			$this->assertArrayHasKey( 'links', $suggestion, 'Suggestion `links` entry is missing' );
			$this->assertIsArray( $suggestion['links'] );
			$this->assertNotEmpty( $suggestion['links'] );
			$this->assertArrayHasKey( '_type', $suggestion['links'][0], 'Suggestion `link[_type]` entry is missing' );
			$this->assertArrayHasKey( 'url', $suggestion['links'][0], 'Suggestion `link[url]` entry is missing' );
			$this->assertArrayHasKey( 'tags', $suggestion, 'Suggestion `tags` entry is missing' );
			$this->assertIsArray( $suggestion['tags'] );
			$this->assertArrayHasKey( 'category', $suggestion, 'Suggestion `category` entry is missing' );
		}
	}

	/**
	 * Test getting payment providers with an enabled payment gateway.
	 *
	 * This means suggestions are returned.
	 */
	public function test_get_payment_providers_with_enabled_pg() {
		// Arrange.
		$user_admin = $this->factory->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $user_admin );
		$this->enable_core_paypal_pg();

		// Act.
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$request->set_param( 'location', 'US' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert all the entries are in the response.
		$this->assertArrayHasKey( 'gateways', $data );
		$this->assertArrayHasKey( 'offline_payment_methods', $data );
		$this->assertArrayHasKey( 'preferred_suggestions', $data );
		$this->assertArrayHasKey( 'other_suggestions', $data );
		$this->assertArrayHasKey( 'suggestion_categories', $data );

		// We have the core PayPal gateway registered and the 3 offline payment methods.
		$this->assertCount( 1, $data['gateways'] );
		$this->assertCount( 3, $data['offline_payment_methods'] );
		// Suggestions are returned because the user can install plugins.
		$this->assertCount( 2, $data['preferred_suggestions'] );
		// We get all the suggestions.
		$this->assertCount( 7, $data['other_suggestions'] );
		// Assert we get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );

		// Assert that the PayPal gateway is returned as enabled.
		$gateway = $data['gateways'][0];
		$this->assertTrue( $gateway['state']['enabled'] );

		// Assert that the preferred suggestions are WooPayments and PayPal (full stack), in this order.
		$preferred_suggestions = $data['preferred_suggestions'];
		$this->assertEquals( PaymentExtensionSuggestions::WOOPAYMENTS, $preferred_suggestions[0]['id'] );
		$this->assertEquals( PaymentExtensionSuggestions::PAYPAL_FULL_STACK, $preferred_suggestions[1]['id'] );

		// Assert that PayPal Wallet is not in the other suggestions since we have the full stack variant in the preferred suggestions.
		$other_suggestions = $data['other_suggestions'];
		$this->assertNotContains( PaymentExtensionSuggestions::PAYPAL_WALLET, array_column( $other_suggestions, 'id' ) );
	}

	/**
	 * Test getting payment providers without specifying a location.
	 *
	 * It should default to the store location.
	 */
	public function test_get_payment_providers_with_no_location() {
		// Arrange.
		$user_admin = $this->factory->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $user_admin );
		$this->enable_core_paypal_pg();

		update_option( 'woocommerce_default_country', 'LI' ); // Liechtenstein.

		// Act.
		$request  = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert all the entries are in the response.
		$this->assertArrayHasKey( 'gateways', $data );
		$this->assertArrayHasKey( 'offline_payment_methods', $data );
		$this->assertArrayHasKey( 'preferred_suggestions', $data );
		$this->assertArrayHasKey( 'other_suggestions', $data );
		$this->assertArrayHasKey( 'suggestion_categories', $data );

		// We have the core PayPal gateway registered and the 3 offline payment methods.
		$this->assertCount( 1, $data['gateways'] );
		$this->assertCount( 3, $data['offline_payment_methods'] );
		// Suggestions are returned because the user can install plugins.
		$this->assertCount( 2, $data['preferred_suggestions'] );
		// We get all the suggestions.
		$this->assertCount( 1, $data['other_suggestions'] );
		// Assert we get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );

		// Assert that the preferred suggestions are Stripe and PayPal (full stack), in this order.
		$preferred_suggestions = $data['preferred_suggestions'];
		$this->assertEquals( PaymentExtensionSuggestions::STRIPE, $preferred_suggestions[0]['id'] );
		$this->assertEquals( PaymentExtensionSuggestions::PAYPAL_FULL_STACK, $preferred_suggestions[1]['id'] );

		// The other suggestion is Mollie.
		$other_suggestions = $data['other_suggestions'];
		$this->assertEquals( PaymentExtensionSuggestions::MOLLIE, $other_suggestions[0]['id'] );
	}

	/**
	 * Test getting payment providers with an unsupported location.
	 *
	 * It should default to the store location.
	 */
	public function test_get_payment_providers_with_unsupported_location() {
		// Arrange.
		$user_admin = $this->factory->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $user_admin );
		$this->enable_core_paypal_pg();

		// Act.
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$request->set_param( 'location', 'XX' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert all the entries are in the response.
		$this->assertArrayHasKey( 'gateways', $data );
		$this->assertArrayHasKey( 'offline_payment_methods', $data );
		$this->assertArrayHasKey( 'preferred_suggestions', $data );
		$this->assertArrayHasKey( 'other_suggestions', $data );
		$this->assertArrayHasKey( 'suggestion_categories', $data );

		// We have the core PayPal gateway registered and the 3 offline payment methods.
		$this->assertCount( 1, $data['gateways'] );
		$this->assertCount( 3, $data['offline_payment_methods'] );
		// No suggestions are returned.
		$this->assertCount( 0, $data['preferred_suggestions'] );
		$this->assertCount( 0, $data['other_suggestions'] );
		// Assert we get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );
	}

	/**
	 * Test getting payment providers with invalid location.
	 */
	public function test_get_payment_providers_with_invalid_location() {
		// Arrange.
		$user_admin = $this->factory->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $user_admin );
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
		$user_admin = $this->factory->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $user_admin );

		// Act.
		$request  = new WP_REST_Request( 'POST', self::ENDPOINT . '/suggestion/woopayments/hide' );
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

		// Assert that the suggestion is not in the preferred suggestions anymore.
		$preferred_suggestions = $data['preferred_suggestions'];
		$this->assertNotContains( PaymentExtensionSuggestions::WOOPAYMENTS, array_column( $preferred_suggestions, 'id' ) );
		// But it is in the other list.
		$other_suggestions = $data['other_suggestions'];
		$this->assertContains( PaymentExtensionSuggestions::WOOPAYMENTS, array_column( $other_suggestions, 'id' ) );

		// Delete the user meta.
		delete_user_meta( $user_admin, PaymentsRestController::USER_PAYMENTS_NOX_PROFILE_KEY );

		// Act.
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/providers' );
		$request->set_param( 'location', 'US' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();

		// Assert that the suggestion is in the preferred suggestions again.
		$preferred_suggestions = $data['preferred_suggestions'];
		$this->assertContains( PaymentExtensionSuggestions::WOOPAYMENTS, array_column( $preferred_suggestions, 'id' ) );
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

		// Reset the controller memo to pick up the new gateway details.
		$this->controller->reset_memo();
	}
}
