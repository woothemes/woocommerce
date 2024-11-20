<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\Settings;

use Automattic\WooCommerce\Internal\Admin\Settings\Payments;
use Automattic\WooCommerce\Internal\Admin\Settings\PaymentsRestController;
use PHPUnit\Framework\MockObject\MockObject;
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
	protected PaymentsRestController $controller;

	/**
	 * @var MockObject|Payments
	 */
	protected $mock_service;

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
	}

	/**
	 * Set up test.
	 */
	public function setUp(): void {
		parent::setUp();

		$this->store_admin_id = $this->factory->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $this->store_admin_id );

		$this->mock_service = $this->getMockBuilder( Payments::class )->getMock();

		$this->controller = new PaymentsRestController();
		$this->controller->init( $this->mock_service );
		$this->controller->register_routes( true );
	}

	/**
	 * Test getting payment providers by a user without the needed capabilities.
	 */
	public function test_get_payment_providers_by_user_without_caps() {
		// Arrange.
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
		$filter_callback = fn( $caps ) => array(
			'manage_woocommerce' => true,
			'install_plugins'    => false,
		);
		add_filter( 'user_has_cap', $filter_callback );

		$this->mock_core_paypal_pg();
		$this->mock_core_offline_payment_methods();
		$this->mock_extension_suggestions();
		$this->mock_extension_suggestions_categories();

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

		// Assert that the core PayPal gateway has all the details.
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
		$this->mock_core_paypal_pg();
		$this->mock_core_offline_payment_methods();
		$this->mock_extension_suggestions( 'US' );
		$this->mock_extension_suggestions_categories();

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
		$this->assertCount( 2, $data['other_suggestions'] );
		// Assert we get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );

		// Assert that the suggestions have all the details.
		foreach ( $data['preferred_suggestions'] as $suggestion ) {
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
		$this->mock_core_paypal_pg( true );
		$this->mock_core_offline_payment_methods();
		$this->mock_extension_suggestions( 'US' );
		$this->mock_extension_suggestions_categories();

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
		$this->assertCount( 2, $data['other_suggestions'] );
		// Assert we get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );

		// Assert that the PayPal gateway is returned as enabled.
		$gateway = $data['gateways'][0];
		$this->assertTrue( $gateway['state']['enabled'] );
	}

	/**
	 * Test getting payment providers without specifying a location.
	 *
	 * It should default to the store location.
	 */
	public function test_get_payment_providers_with_no_location() {
		// Arrange.
		$this->mock_core_paypal_pg();
		$this->mock_core_offline_payment_methods();
		$this->mock_extension_suggestions( 'LI' );
		$this->mock_extension_suggestions_categories();

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
		$this->assertCount( 2, $data['other_suggestions'] );
		// Assert we get the suggestion categories.
		$this->assertCount( 3, $data['suggestion_categories'] );
	}

	/**
	 * Test getting payment providers with invalid location.
	 */
	public function test_get_payment_providers_with_invalid_location() {
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
		$this->mock_service
			->expects( $this->once() )
			->method( 'get_payment_extension_suggestion_by_id' )
			->with( 'suggestion_id' )
			->willReturn(
				array(
					'id' => 'suggestion_id',
				)
			);

		// Assert.
		$this->mock_service
			->expects( $this->once() )
			->method( 'hide_payment_extension_suggestion' )
			->with( 'suggestion_id' )
			->willReturn( true );

		// Act.
		$request  = new WP_REST_Request( 'POST', self::ENDPOINT . '/suggestion/suggestion_id/hide' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );
		$this->assertTrue( $response->get_data()['success'] );
	}

	/**
	 * Test hiding a payment extension suggestion that fails.
	 */
	public function test_hide_payment_extension_suggestion_failure() {
		// Arrange.
		$this->mock_service
			->expects( $this->once() )
			->method( 'get_payment_extension_suggestion_by_id' )
			->with( 'suggestion_id' )
			->willReturn(
				array(
					'id' => 'suggestion_id',
				)
			);

		// Assert.
		$this->mock_service
			->expects( $this->once() )
			->method( 'hide_payment_extension_suggestion' )
			->with( 'suggestion_id' )
			->willReturn( false );

		// Act.
		$request  = new WP_REST_Request( 'POST', self::ENDPOINT . '/suggestion/suggestion_id/hide' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 200, $response->get_status() );
		$this->assertFalse( $response->get_data()['success'] );
	}

	/**
	 * Test hiding a payment extension suggestion with an invalid suggestion ID.
	 */
	public function test_hide_payment_extension_suggestion_invalid_suggestion_id() {
		// Arrange.
		$this->mock_service
			->expects( $this->once() )
			->method( 'get_payment_extension_suggestion_by_id' )
			->with( 'suggestion_id' )
			->willReturn( null );

		// Assert.
		$this->mock_service
			->expects( $this->never() )
			->method( 'hide_payment_extension_suggestion' );

		// Act.
		$request  = new WP_REST_Request( 'POST', self::ENDPOINT . '/suggestion/suggestion_id/hide' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( 400, $response->get_status() );
	}

	/**
	 * Test hiding a payment extension suggestion by a user without the proper capabilities.
	 */
	public function test_hide_payment_extension_suggestion_user_without_caps() {
		// Arrange.
		$user_id = $this->factory->user->create( array( 'role' => 'editor' ) );
		wp_set_current_user( $user_id );

		$this->mock_service
			->expects( $this->never() )
			->method( 'get_payment_extension_suggestion_by_id' );

		// Assert.
		$this->mock_service
			->expects( $this->never() )
			->method( 'hide_payment_extension_suggestion' );

		// Act.
		$request  = new WP_REST_Request( 'POST', self::ENDPOINT . '/suggestion/suggestion_id/hide' );
		$response = $this->server->dispatch( $request );

		// Assert.
		$this->assertEquals( rest_authorization_required_code(), $response->get_status() );
	}

	/**
	 * Mock the core PayPal gateway.
	 */
	private function mock_core_paypal_pg( bool $enabled = false ) {
		$this->mock_service
			->expects( $this->once() )
			->method( 'get_payment_providers' )
			->willReturn(
				array(
					array(
						'id'          => 'paypal',
						'_order'      => 0,
						'title'       => 'PayPal',
						'description' => 'PayPal',
						'supports'    => array( 'products' ),
						'state'       => array(
							'enabled'     => $enabled,
							'needs_setup' => false,
							'test_mode'   => false,
						),
						'management'  => array(
							'settings_url' => 'admin.php?page=wc-settings&tab=checkout&section=paypal',
						),
						'image'       => 'https://example.com/image.png',
						'icon'        => 'https://example.com/icon.png',
						'links'       => array(
							array(
								'_type' => 'about',
								'url'   => 'https://woocommerce.com/paypal',
							),
						),
						'plugin'      => array(
							'_type'  => 'wporg',
							'slug'   => 'woocommerce',
							'status' => 'active',
						),
					),
				)
			);
	}

	/**
	 * Mock the core offline payment methods.
	 */
	private function mock_core_offline_payment_methods( bool $enabled = false ) {
		$offline_payment_methods = array();
		$order                   = 0;
		foreach ( Payments::OFFLINE_METHODS as $id ) {
			$offline_payment_methods[] = array(
				'id'          => $id,
				'_order'      => $order++,
				'title'       => $id,
				'description' => 'Offline payment method',
				'state'       => array(
					'enabled'     => $enabled,
					'needs_setup' => false,
					'test_mode'   => false,
				),
				'management'  => array(
					'settings_url' => 'admin.php?page=wc-settings&tab=checkout&section=' . $id,
				),
				'icon'        => 'https://example.com/icon.png',
			);
		}
		$this->mock_service
			->expects( $this->any() )
			->method( 'get_offline_payment_methods' )
			->willReturn( $offline_payment_methods );
	}

	/**
	 * Mock extension suggestions.
	 *
	 * If a location is provided, only when called with that location will return the suggestions.
	 */
	private function mock_extension_suggestions( string $location = null ) {
		$mocker = $this->mock_service
			->expects( $this->any() )
			->method( 'get_extension_suggestions' );

		if ( ! is_null( $location ) ) {
			$mocker->with( $location );
		}

		$mocker->willReturn(
			array(
				'preferred' => array(
					array(
						'id'          => 'woopayments',
						'_priority'   => 1,
						'_type'       => 'psp',
						'title'       => 'WooPayments',
						'description' => 'WooPayments',
						'plugin'      => array(
							'_type'  => 'wporg',
							'slug'   => 'woocommerce-payments',
							'status' => 'not_installed',
						),
						'image'       => 'https://example.com/image.png',
						'icon'        => 'https://example.com/icon.png',
						'links'       => array(
							array(
								'_type' => 'link',
								'url'   => 'https://woocommerce.com/payments',
							),
						),
						'tags'        => array( 'preferred' ),
						'category'    => '',
					),
					array(
						'id'          => 'paypal_full_stack',
						'_priority'   => 2,
						'_type'       => 'apm',
						'title'       => 'PayPal',
						'description' => 'PayPal',
						'plugin'      => array(
							'_type'  => 'wporg',
							'slug'   => 'some-slug',
							'status' => 'not_installed',
						),
						'image'       => 'https://example.com/image.png',
						'icon'        => 'https://example.com/icon.png',
						'links'       => array(
							array(
								'_type' => 'link',
								'url'   => 'https://woocommerce.com/payments',
							),
						),
						'tags'        => array( 'preferred' ),
						'category'    => '',
					),
				),
				'other'     => array(
					array(
						'id'          => 'stripe',
						'_priority'   => 0,
						'_type'       => 'psp',
						'title'       => 'Stripe',
						'description' => 'Stripe',
						'plugin'      => array(
							'_type'  => 'wporg',
							'slug'   => 'some-slug',
							'status' => 'not_installed',
						),
						'image'       => 'https://example.com/image.png',
						'icon'        => 'https://example.com/icon.png',
						'links'       => array(
							array(
								'_type' => 'link',
								'url'   => 'https://woocommerce.com/stripe',
							),
						),
						'tags'        => array(),
						'category'    => 'category3',
					),
					array(
						'id'          => 'affirm',
						'_priority'   => 1,
						'_type'       => 'bnpl',
						'title'       => 'Affirm',
						'description' => 'Affirm',
						'plugin'      => array(
							'_type'  => 'wporg',
							'slug'   => 'some-slug',
							'status' => 'not_installed',
						),
						'image'       => 'https://example.com/image.png',
						'icon'        => 'https://example.com/icon.png',
						'links'       => array(
							array(
								'_type' => 'link',
								'url'   => 'https://woocommerce.com/affirm',
							),
						),
						'tags'        => array(),
						'category'    => 'category2',
					),
				),
			)
		);
	}

	/**
	 * Mock extension suggestions categories.
	 */
	private function mock_extension_suggestions_categories() {
		$this->mock_service
			->expects( $this->any() )
			->method( 'get_extension_suggestion_categories' )
			->willReturn(
				array(
					array(
						'id'          => 'category1',
						'_priority'   => 10,
						'title'       => esc_html__( 'Category1', 'woocommerce' ),
						'description' => esc_html__( 'Description.', 'woocommerce' ),
					),
					array(
						'id'          => 'category2',
						'_priority'   => 20,
						'title'       => esc_html__( 'Category2', 'woocommerce' ),
						'description' => esc_html__( 'Description.', 'woocommerce' ),
					),
					array(
						'id'          => 'category3',
						'_priority'   => 30,
						'title'       => esc_html__( 'Category3', 'woocommerce' ),
						'description' => esc_html__( 'Description.', 'woocommerce' ),
					),
				)
			);
	}
}
