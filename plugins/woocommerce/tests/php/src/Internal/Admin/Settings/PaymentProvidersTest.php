<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\Settings;

use Automattic\WooCommerce\Internal\Admin\Settings\PaymentProviders;
use Automattic\WooCommerce\Internal\Admin\Settings\Payments;
use Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensionSuggestions;
use Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensionSuggestions as ExtensionSuggestions;
use Automattic\WooCommerce\Tests\Internal\Admin\Settings\Mocks\FakePaymentGateway;
use PHPUnit\Framework\MockObject\MockObject;
use WC_REST_Unit_Test_Case;

/**
 * Payment Providers service test.
 *
 * @class PaymentProviders
 */
class PaymentProvidersTest extends WC_REST_Unit_Test_Case {

	/**
	 * @var PaymentProviders
	 */
	protected $service;

	/**
	 * @var PaymentExtensionSuggestions|MockObject
	 */
	protected $mock_extension_suggestions;

	/**
	 * The ID of the store admin user.
	 *
	 * @var int
	 */
	protected $store_admin_id;

	/**
	 * Set up test.
	 */
	public function setUp(): void {
		parent::setUp();

		$this->store_admin_id = $this->factory->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $this->store_admin_id );

		$this->mock_extension_suggestions = $this->getMockBuilder( PaymentExtensionSuggestions::class )
			->disableOriginalConstructor()
			->getMock();

		$this->service = new PaymentProviders();
		$this->service->init( $this->mock_extension_suggestions );
	}

	/**
	 * Test getting payment gateways.
	 */
	public function test_get_payment_gateways() {
		// Arrange.
		$this->load_core_paypal_pg();

		// Act.
		$data = $this->service->get_payment_gateways();

		// We have the core PayPal gateway registered and the 3 offline payment methods.
		$this->assertCount( 4, $data );
		$this->assertEquals(
			array( 'bacs', 'cheque', 'cod', 'paypal' ),
			// Extract the IDs from the list of objects.
			array_values(
				array_map(
					function ( $gateway ) {
						return $gateway->id;
					},
					$data
				)
			)
		);

		// Clean up.
		$this->service->reset_memo();
	}

	/**
	 * Test getting payment gateway base details.
	 */
	public function test_get_payment_gateway_base_details() {
		// Arrange.
		$fake_gateway = new FakePaymentGateway(
			'woocommerce_payments',
			array(
				'enabled'                     => true,
				'needs_setup'                 => true,
				'test_mode'                   => true,
				'dev_mode'                    => true,
				'plugin_slug'                 => 'woocommerce-payments',
				'plugin_file'                 => 'woocommerce-payments/woocommerce-payments.php',
				'recommended_payment_methods' => array(
					// Basic PM.
					array(
						'id'      => 'basic',
						// No order, should be last.
						'enabled' => true,
						'title'   => 'Title',
					),
					// Basic PM with priority instead of order.
					array(
						'id'       => 'basic2',
						'priority' => 30,
						'enabled'  => false,
						'title'    => 'Title',
					),
					array(
						'id'          => 'card',
						'order'       => 20,
						'enabled'     => true,
						'title'       => '<b>Credit/debit card (required)</b>', // All tags should be stripped.
						// Paragraphs and line breaks should be stripped.
						'description' => '<p><strong>Accepts</strong> <b>all major</b></br><em>credit</em> and <a href="#" target="_blank">debit cards</a>.</p>',
						'icon'        => 'https://example.com/card-icon.png',
					),
					array(
						'id'          => 'woopay',
						'order'       => 10,
						'enabled'     => false,
						'title'       => 'WooPay',
						'description' => 'WooPay express checkout',
						// Not a good URL.
						'icon'        => 'not_good_url/icon.svg',
					),
					// Invalid PM, should be ignored. No data.
					array(),
					// Invalid PM, should be ignored. No ID.
					array( 'title' => 'Card' ),
					// Invalid PM, should be ignored. No title.
					array( 'id' => 'card' ),
				),
			),
		);

		// Act.
		$gateway_details = $this->service->get_payment_gateway_base_details( $fake_gateway, 999 );

		// Assert that have all the details.
		$this->assertArrayHasKey( 'id', $gateway_details, 'Gateway `id` entry is missing' );
		$this->assertArrayHasKey( '_order', $gateway_details, 'Gateway `_order` entry is missing' );
		$this->assertArrayHasKey( 'title', $gateway_details, 'Gateway `title` entry is missing' );
		$this->assertArrayHasKey( 'description', $gateway_details, 'Gateway `description` entry is missing' );
		$this->assertArrayHasKey( 'supports', $gateway_details, 'Gateway `supports` entry is missing' );
		$this->assertIsList( $gateway_details['supports'], 'Gateway `supports` entry is not a list' );
		$this->assertArrayHasKey( 'state', $gateway_details, 'Gateway `state` entry is missing' );
		$this->assertArrayHasKey( 'enabled', $gateway_details['state'], 'Gateway `state[enabled]` entry is missing' );
		$this->assertTrue( $gateway_details['state']['enabled'], 'Gateway `state[enabled]` entry is not true' );
		$this->assertArrayHasKey( 'needs_setup', $gateway_details['state'], 'Gateway `state[needs_setup]` entry is missing' );
		$this->assertTrue( $gateway_details['state']['needs_setup'], 'Gateway `state[needs_setup]` entry is not true' );
		$this->assertArrayHasKey( 'test_mode', $gateway_details['state'], 'Gateway `state[test_mode]` entry is missing' );
		$this->assertTrue( $gateway_details['state']['test_mode'], 'Gateway `state[test_mode]` entry is not true' );
		$this->assertArrayHasKey( 'dev_mode', $gateway_details['state'], 'Gateway `state[dev_mode]` entry is missing' );
		$this->assertTrue( $gateway_details['state']['dev_mode'], 'Gateway `state[dev_mode]` entry is not true' );
		$this->assertArrayHasKey( 'management', $gateway_details, 'Gateway `management` entry is missing' );
		$this->assertArrayHasKey( '_links', $gateway_details['management'], 'Gateway `management[_links]` entry is missing' );
		$this->assertArrayHasKey( 'settings', $gateway_details['management']['_links'], 'Gateway `management[_links][settings]` entry is missing' );
		$this->assertArrayHasKey( 'plugin', $gateway_details, 'Gateway `plugin` entry is missing' );
		$this->assertArrayHasKey( 'slug', $gateway_details['plugin'], 'Gateway `plugin[slug]` entry is missing' );
		$this->assertSame( 'woocommerce-payments', $gateway_details['plugin']['slug'] );
		$this->assertArrayHasKey( 'file', $gateway_details['plugin'], 'Gateway `plugin[file]` entry is missing' );
		$this->assertSame( 'woocommerce-payments/woocommerce-payments', $gateway_details['plugin']['file'] ); // No more .php extension.
		$this->assertArrayHasKey( 'status', $gateway_details['plugin'], 'Gateway `plugin[status]` entry is missing' );
		$this->assertSame( PaymentProviders::EXTENSION_ACTIVE, $gateway_details['plugin']['status'] );
		$this->assertArrayHasKey( 'onboarding', $gateway_details, 'Gateway `onboarding` entry is missing' );
		$this->assertArrayHasKey( '_links', $gateway_details['onboarding'], 'Gateway `onboarding[_links]` entry is missing' );
		$this->assertArrayHasKey( 'onboard', $gateway_details['onboarding']['_links'], 'Gateway `onboarding[_links][onboard]` entry is missing' );
		$this->assertArrayHasKey( 'recommended_payment_methods', $gateway_details['onboarding'], 'Gateway `onboarding[recommended_payment_methods]` entry is missing' );
		$this->assertCount( 4, $gateway_details['onboarding']['recommended_payment_methods'] ); // Receives recommended PMs.
		$this->assertSame(
			array(
				array(
					'id'          => 'woopay',
					'_order'      => 0,
					'enabled'     => false,
					'title'       => 'WooPay',
					'description' => 'WooPay express checkout',
					'icon'        => '', // The icon with an invalid URL is ignored.
				),
				array(
					'id'          => 'card',
					'_order'      => 1,
					'enabled'     => true,
					'title'       => 'Credit/debit card (required)',
					'description' => '<strong>Accepts</strong> <b>all major</b><em>credit</em> and <a href="#" target="_blank">debit cards</a>.',
					'icon'        => 'https://example.com/card-icon.png',
				),
				array(
					'id'          => 'basic2',
					'_order'      => 2,
					'enabled'     => false,
					'title'       => 'Title',
					'description' => '',
					'icon'        => '',
				),
				array(
					'id'          => 'basic',
					'_order'      => 3,
					'enabled'     => true,
					'title'       => 'Title',
					'description' => '',
					'icon'        => '',
				),
			),
			$gateway_details['onboarding']['recommended_payment_methods']
		);
	}

	/**
	 * Test getting the plugin slug of a payment gateway instance.
	 */
	public function test_get_payment_gateway_plugin_slug() {
		// Arrange.
		$this->load_core_paypal_pg();

		// Act.
		$paypal_gateway = array_filter(
			WC()->payment_gateways()->payment_gateways,
			function ( $gateway ) {
				return 'paypal' === $gateway->id;
			}
		);
		$paypal_gateway = reset( $paypal_gateway );
		$slug           = $this->service->get_payment_gateway_plugin_slug( $paypal_gateway );

		// Assert.
		// The PayPal gateway is a core gateway, so the slug is 'woocommerce'.
		$this->assertSame( 'woocommerce', $slug );
	}

	/**
	 * Test updating the payment providers order map.
	 *
	 * @dataProvider data_provider_test_update_payment_providers_order_map
	 *
	 * @param array $start_order    The starting order map.
	 * @param array $new_order_map  The new order map.
	 * @param array $expected_order The expected order map.
	 * @param array $gateways       The payment gateways to mock.
	 * @param array $suggestions    The extension suggestions to mock.
	 */
	public function test_update_payment_providers_order_map( array $start_order, array $new_order_map, array $expected_order, array $gateways, array $suggestions ) {
		// Arrange.
		$this->mock_payment_gateways( $gateways );

		// Mock getting suggestions by plugin slug.
		$this->mock_extension_suggestions
			->expects( $this->any() )
			->method( 'get_by_plugin_slug' )
			->willReturnCallback(
				function ( $plugin_slug ) use ( $suggestions ) {
					foreach ( $suggestions as $suggestion ) {
						if ( $suggestion['plugin']['slug'] === $plugin_slug ) {
							return $suggestion;
						}
					}
					return null;
				}
			);
		// Mock getting suggestions by id.
		$this->mock_extension_suggestions
			->expects( $this->any() )
			->method( 'get_by_id' )
			->willReturnCallback(
				function ( $id ) use ( $suggestions ) {
					foreach ( $suggestions as $suggestion ) {
						if ( $suggestion['id'] === $id ) {
							return $suggestion;
						}
					}
					return null;
				}
			);

		// Set the starting order map.
		$start_order_map = array_flip( $start_order );
		update_option( PaymentProviders::PROVIDERS_ORDER_OPTION, $start_order_map );

		// Act.
		$result = $this->service->update_payment_providers_order_map( $new_order_map );

		// Assert.
		$expected_order_map   = array_flip( $expected_order );
		$expect_option_update = $start_order_map !== $expected_order_map;
		$this->assertSame(
			$expect_option_update,
			$result,
			$expect_option_update ? 'Expected order map option to BE updated but it was not.' : 'Expected order map option to NOT BE updated but it was.'
		);
		$this->assertSame( $expected_order_map, get_option( PaymentProviders::PROVIDERS_ORDER_OPTION ) );

		// Clean up.
		$this->unmock_payment_gateways();
	}

	/**
	 * Mock a set of payment gateways.
	 *
	 * @param array $gateways The list of gateway details keyed by the gateway id.
	 * @param bool  $append   Whether to append the gateways to the existing ones.
	 *                        Defaults to false, which means the existing gateways will be removed.
	 */
	protected function mock_payment_gateways( array $gateways, bool $append = false ) {
		if ( ! empty( $gateways ) ) {
			add_action(
				'wc_payment_gateways_initialized',
				function ( \WC_Payment_Gateways $wc_payment_gateways ) use ( $gateways, $append ) {
					if ( ! $append ) {
						$wc_payment_gateways->payment_gateways = array();
					}

					$order = 99999;
					foreach ( $gateways as $gateway_id => $gateway_data ) {
						$fake_gateway          = new FakePaymentGateway();
						$fake_gateway->id      = $gateway_id;
						$fake_gateway->enabled = ( $gateway_data['enabled'] ?? false ) ? 'yes' : 'no';
						if ( isset( $gateway_data['plugin_slug'] ) ) {
							$fake_gateway->plugin_slug = $gateway_data['plugin_slug'];
						}
						if ( isset( $gateway_data['recommended_payment_methods'] ) ) {
							$fake_gateway->recommended_payment_methods = $gateway_data['recommended_payment_methods'];
						}

						$wc_payment_gateways->payment_gateways[ $order++ ] = $fake_gateway;
					}
				},
				100
			);
		} else {
			// If there are no gateways, just reset the gateways.
			add_action(
				'wc_payment_gateways_initialized',
				function ( \WC_Payment_Gateways $wc_payment_gateways ) {
					$wc_payment_gateways->payment_gateways = array();
				},
				100
			);
		}

		WC()->payment_gateways()->init();

		$this->service->reset_memo();
	}

	/**
	 * Unmock the payment gateways.
	 */
	protected function unmock_payment_gateways() {
		remove_all_actions( 'wc_payment_gateways_initialized' );
		WC()->payment_gateways()->payment_gateways = array();
		WC()->payment_gateways()->init();

		$this->service->reset_memo();
	}

	/**
	 * Data provider for the test_update_payment_providers_order_map.
	 *
	 * @return array
	 */
	public function data_provider_test_update_payment_providers_order_map(): array {
		$gateways = array(
			'gateway1'   => array(
				'enabled'     => false,
				'plugin_slug' => 'plugin1',
			),
			'gateway2'   => array(
				'enabled'     => false,
				'plugin_slug' => 'plugin2',
			),
			'gateway3_0' => array(
				'enabled'     => false,
				'plugin_slug' => 'plugin3',
			), // Same plugin slug.
			'gateway3_1' => array(
				'enabled'     => false,
				'plugin_slug' => 'plugin3',
			), // Same plugin slug.
		);

		$offline_payment_methods_gateways = array(
			'bacs'   => array(
				'enabled'     => false,
				'plugin_slug' => 'woocommerce',
			),
			'cheque' => array(
				'enabled'     => false,
				'plugin_slug' => 'woocommerce',
			),
			'cod'    => array(
				'enabled'     => false,
				'plugin_slug' => 'woocommerce',
			),
		);

		$suggestions = array(
			array(
				'id'        => 'suggestion1',
				'_type'     => ExtensionSuggestions::TYPE_PSP,
				'_priority' => 0,
				'plugin'    => array( 'slug' => 'plugin1' ),
			),
			array(
				'id'        => 'suggestion3',
				'_type'     => ExtensionSuggestions::TYPE_PSP,
				'_priority' => 1,
				'plugin'    => array( 'slug' => 'plugin3' ),
			),
			array(
				'id'        => 'suggestion-other',
				'_type'     => ExtensionSuggestions::TYPE_PSP,
				'_priority' => 2,
				'plugin'    => array( 'slug' => 'plugin-other' ),
			),
		);

		return array(
			'empty start, no ordering - no gateways | no offline PMs | no suggestions' => array(
				array(),
				array(),
				array(),
				array(),
				array(),
			),
			'empty start, no ordering - gateways | no offline PMs | no suggestions' => array(
				array(),
				array(),
				array(
					'gateway1',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways,
				array(),
			),
			'empty start, no ordering #2 - gateways | no offline PMs | no suggestions' => array(
				array(),
				array(
					'gateway1'       => null, // These should all be ignored.
					'gateway2'       => 1.2,
					'gateway3_0'     => 'bogus',
					'gateway3_1'     => false,
					'something'      => array( '0' ),
					'something_else' => new \stdClass(),
				),
				array(
					'gateway1',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways,
				array(),
			),
			'empty start, no ordering - no gateways | offline PMs | no suggestions' => array(
				array(),
				array(),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$offline_payment_methods_gateways,
				array(),
			),
			'empty start, no ordering - gateways | offline PMs | no suggestions' => array(
				array(),
				array(),
				array(
					'gateway1',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				array(),
			),
			'empty start, no ordering - offline PMs | gateways | no suggestions' => array(
				array(),
				array(),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
					'gateway1',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
				),
				$offline_payment_methods_gateways + $gateways,
				array(),
			),
			'empty start, no ordering - gateways | no offline PMs | suggestions' => array(
				array(),
				array(),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways,
				$suggestions,
			),
			'empty start, no ordering - gateways | offline PMs | suggestions'    => array(
				array(),
				array(),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'empty start, no ordering - offline PMs | gateways | suggestions'    => array(
				array(),
				array(),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
				),
				$offline_payment_methods_gateways + $gateways,
				$suggestions,
			),
			'empty start, move offline PMs - gateways | offline PMs | suggestions'    => array(
				array(),
				array(
					'cheque' => 1,
					'bacs'   => 2,
				),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cheque',
					'bacs',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'empty start, move all offline PMs - gateways | offline PMs | suggestions'    => array(
				array(),
				array(
					'cod'    => 0,
					'cheque' => 1,
					'bacs'   => 2,
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'cheque',
					'bacs',
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'empty start, move offline PMs group - gateways | offline PMs | no suggestions'    => array(
				array(),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 0,
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
					'gateway1',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				array(),
			),
			'empty start, move offline PMs group - gateways | offline PMs | suggestions'    => array(
				array(),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 0,
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'empty start, move offline PMs group - no gateways | offline PMs | no suggestions'    => array(
				array(),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 10,
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$offline_payment_methods_gateways,
				array(),
			),
			'empty start, move offline PMs group - no gateways | offline PMs | suggestions'    => array(
				array(),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 10,
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$offline_payment_methods_gateways,
				$suggestions,
			),
			'empty start, move offline PM - no gateways | offline PMs | suggestions'    => array(
				array(),
				array(
					'cod' => 0,
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'bacs',
					'cheque',
				),
				$offline_payment_methods_gateways,
				$suggestions,
			),
			'empty start, move all offline PMs - no gateways | offline PMs | suggestions'    => array(
				array(),
				array(
					'cod'    => 0,
					'cheque' => 1,
					'bacs'   => 2,
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'cheque',
					'bacs',
				),
				$offline_payment_methods_gateways,
				$suggestions,
			),
			'empty start, move gateway - gateways | offline PMs | suggestions'    => array(
				array(),
				array(
					'gateway3_0' => 3,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'empty start, move gateways - gateways | offline PMs | suggestions'    => array(
				array(),
				array(
					'gateway1'   => 2,
					'gateway3_0' => 3,
				),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'empty start, move gateways #2 - gateways | offline PMs | suggestions'    => array(
				array(),
				array(
					'gateway1' => 2,
					'gateway2' => 3,
				),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'empty start, move gateways #3 - gateways | offline PMs | suggestions'    => array(
				array(),
				array(
					'gateway1'   => 2,
					'gateway3_1' => 3,
				),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					'_wc_pes_suggestion3',
					'gateway3_1',
					'gateway2',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'empty start, move gateways and offline PMs group - gateways | offline PMs | suggestions'    => array(
				array(),
				array(
					'gateway1'   => 2,
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 3,
					'gateway3_1' => 4,
				),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
					'_wc_pes_suggestion3',
					'gateway3_1',
					'gateway2',
					'gateway3_0',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'empty start, move gateway - offline PMs | gateways | suggestions'    => array(
				array(),
				array(
					'gateway3_0' => 3,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'gateway3_1',
				),
				$offline_payment_methods_gateways + $gateways,
				$suggestions,
			),
			'empty start, move gateways - offline PMs | gateways | suggestions'    => array(
				array(),
				array(
					'gateway3_0' => 3,
					'gateway1'   => 4,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'_wc_pes_suggestion1',
					'gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
					'gateway2',
					'gateway3_1',
				),
				$offline_payment_methods_gateways + $gateways,
				$suggestions,
			),
			'empty start, move gateways #2 - offline PMs | gateways | suggestions'    => array(
				array(),
				array(
					'gateway3_0' => 3,
					'gateway2'   => 4,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway3_1',
				),
				$offline_payment_methods_gateways + $gateways,
				$suggestions,
			),
			'empty start, move gateways #3 - offline PMs | gateways | suggestions'    => array(
				array(),
				array(
					'gateway3_0' => 3,
					'gateway3_1' => 4,
					'gateway2'   => 5,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
					'gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$offline_payment_methods_gateways + $gateways,
				$suggestions,
			),
			'empty start, move gateways and offline PMs group - offline PMs | gateways | suggestions'    => array(
				array(),
				array(
					'gateway3_0' => 3,
					'gateway3_1' => 4,
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 5,
					'gateway2'   => 6,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
					'gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$offline_payment_methods_gateways + $gateways,
				$suggestions,
			),
			'legacy order, no ordering - no gateways | offline PMs | no suggestions'    => array(
				array(
					'bacs',
					'cheque',
					'cod',
				),
				array(),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$offline_payment_methods_gateways,
				array(),
			),
			'legacy order with non-existent gateways, no ordering - no gateways | offline PMs | no suggestions'    => array(
				array(
					'non_existent_gateway1',
					'non_existent_gateway2',
					'bacs',
					'cheque',
					'cod',
				),
				array(),
				array(
					'non_existent_gateway1',
					'non_existent_gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$offline_payment_methods_gateways,
				array(),
			),
			'legacy order, no ordering - gateways | offline PMs | no suggestions'    => array(
				array(
					'bacs',
					'cod',
					'cheque',
				),
				array(),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway1',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				array(),
			),
			'legacy order, no ordering #2 - gateways | offline PMs | no suggestions'    => array(
				array(
					'gateway1',
					'gateway2',
					'bacs',
					'cod',
					'cheque',
				),
				array(),
				array(
					'gateway1',
					'gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				array(),
			),
			'legacy order, no ordering #3 - gateways | offline PMs | no suggestions'    => array(
				array(
					'gateway1',
					'bacs',
					'gateway2',
					'cod',
					'cheque',
				),
				array(),
				array(
					'gateway1',
					'gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				array(),
			),
			'legacy order, no ordering #4 - gateways | offline PMs | no suggestions'    => array(
				array(
					'gateway1',
					'bacs',
					'cod',
					'cheque',
					'gateway2',
				),
				array(),
				array(
					'gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				array(),
			),
			'legacy order, no ordering #5 - gateways | offline PMs | no suggestions'    => array(
				array(
					'gateway1',
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
				),
				array(),
				array(
					'gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				array(),
			),
			'legacy order, no ordering #6 - gateways | offline PMs | no suggestions'    => array(
				array(
					'gateway1',
					'bacs',
					'cod',
					'gateway2',
					'gateway3_0',
					'cheque',
					'gateway3_1',
				),
				array(),
				array(
					'gateway1',
					'gateway2',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				array(),
			),
			'legacy order, no ordering #7 - gateways | offline PMs | no suggestions'    => array(
				array(
					'gateway1',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
					'cheque',
					'bacs',
					'cod',
				),
				array(),
				array(
					'gateway1',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cheque',
					'bacs',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				array(),
			),
			'legacy order, no ordering #8 - gateways | offline PMs | no suggestions'    => array(
				array(
					'gateway2',
					'gateway3_0',
					'gateway1',
					'gateway3_1',
					'cheque',
					'bacs',
					'cod',
				),
				array(),
				array(
					'gateway2',
					'gateway3_0',
					'gateway1',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cheque',
					'bacs',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				array(),
			),
			'legacy order, no ordering - gateways | offline PMs | suggestions'    => array(
				array(
					'bacs',
					'cod',
					'cheque',
				),
				array(),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, no ordering #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway1',
					'gateway2',
					'bacs',
					'cod',
					'cheque',
				),
				array(),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, no ordering #3 - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway1',
					'gateway2',
					'bacs',
					'cod',
					'cheque',
					'gateway3_0',
				),
				array(),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, no ordering #4 - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway1',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
					'bacs',
					'cod',
					'cheque',
				),
				array(),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, no ordering #5 - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway2',
					'gateway3_0',
					'gateway3_1',
					'gateway1',
					'bacs',
					'cheque',
					'cod',
				),
				array(),
				array(
					'gateway2',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, no ordering #6 - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'gateway1',
					'bacs',
					'cheque',
					'cod',
				),
				array(),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order with non-existent, no ordering - gateways | offline PMs | no suggestions'    => array(
				array(
					'non_existent_gateway1',
					'non_existent_gateway2',
					'cheque',
					'bacs',
					'cod',
				),
				array(),
				array(
					'non_existent_gateway1',
					'non_existent_gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cheque',
					'bacs',
					'cod',
					'gateway1',
					'gateway2',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				array(),
			),
			'legacy order with both existent and non-existent, no ordering - gateways | offline PMs | no suggestions'    => array(
				array(
					'non_existent_gateway1',
					'non_existent_gateway2',
					'gateway1',
					'gateway2',
					'cod',
					'cheque',
					'bacs',
				),
				array(),
				array(
					'non_existent_gateway1',
					'non_existent_gateway2',
					'gateway1',
					'gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'cheque',
					'bacs',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				array(),
			),
			'legacy order with non-existent, no ordering - gateways | offline PMs | suggestions'    => array(
				array(
					'non_existent_gateway1',
					'non_existent_gateway2',
					'cheque',
					'bacs',
					'cod',
				),
				array(),
				array(
					'non_existent_gateway1',
					'non_existent_gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cheque',
					'bacs',
					'cod',
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order with both existent and non-existent, no ordering - gateways | offline PMs | suggestions'    => array(
				array(
					'non_existent_gateway1',
					'non_existent_gateway2',
					'gateway1',
					'gateway2',
					'cod',
					'cheque',
					'bacs',
				),
				array(),
				array(
					'non_existent_gateway1',
					'non_existent_gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'cheque',
					'bacs',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order with both existent and non-existent, no ordering #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'non_existent_gateway1',
					'non_existent_gateway2',
					'gateway1',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'cod',
					'cheque',
					'bacs',
				),
				array(),
				array(
					'non_existent_gateway1',
					'non_existent_gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'cheque',
					'bacs',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order with both existent and non-existent, no ordering #3 - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway1',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'cod',
					'cheque',
					'bacs',
					'non_existent_gateway1',
					'non_existent_gateway2',
				),
				array(),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'cheque',
					'bacs',
					'non_existent_gateway1',
					'non_existent_gateway2',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order with both existent and non-existent, no ordering #4 - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway1',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'non_existent_gateway1',
					'cod',
					'cheque',
					'non_existent_gateway2',
					'bacs',
				),
				array(),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'non_existent_gateway1',
					'non_existent_gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'cheque',
					'bacs',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, move gateways - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'gateway1',
					'bacs',
					'cheque',
					'cod',
				),
				array(
					'gateway1'   => 2,
					'gateway3_0' => 3,
				),
				array(
					'gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
					'_wc_pes_suggestion3',
					'gateway3_1',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, move gateway - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'gateway1',
					'bacs',
					'cheque',
					'cod',
				),
				array(
					'gateway1' => 1,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, move gateway #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'gateway1',
					'bacs',
					'cheque',
					'cod',
				),
				array(
					'gateway3_1' => 0,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_1',
					'gateway3_0',
					'gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cheque',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, move offline PM - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'gateway1',
					'bacs',
					'cod',
					'cheque',
				),
				array(
					'bacs' => 0,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, move offline PM #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'gateway1',
					'bacs',
					'cod',
					'cheque',
				),
				array(
					'cod' => 0,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'bacs',
					'cheque',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, move offline PM #3 - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'gateway1',
					'bacs',
					'cod',
					'cheque',
				),
				array(
					'cheque' => 1,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cheque',
					'bacs',
					'cod',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, move all offline PMs - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'gateway1',
					'bacs',
					'cod',
					'cheque',
				),
				array(
					'cod'    => 0,
					'cheque' => 1,
					'bacs'   => 2,
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'cheque',
					'bacs',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, move offline PMs group - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'gateway1',
					'bacs',
					'cod',
					'cheque',
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 0,
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'legacy order, move offline PMs group #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'gateway1',
					'bacs',
					'cod',
					'cheque',
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 1,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, no ordering - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order with non-existent payment gateways, no ordering - gateways | offline PMs | suggestions'    => array(
				array(
					'non_existent_gateway1',
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'non_existent_gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(),
				array(
					'non_existent_gateway1',
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'non_existent_gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order with non-existent payment gateways #2, no ordering - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_non_existent_gateway1',
					'non_existent_gateway1',
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_non_existent_gateway2',
					'non_existent_gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(),
				array(
					'_wc_pes_non_existent_gateway1',
					'non_existent_gateway1',
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_non_existent_gateway2',
					'non_existent_gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order with suggestions but no matching gateways, no ordering - gateways | offline PMs | suggestions'       => array(
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway2',
				),
				array(),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0', // Suggestion matching gateways (via the plugin slug) are added after their suggestion, in order.
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway1', // Gateway added after its suggestion.
					'gateway2',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order with suggestions but no matching gateways, ordering #1 - gateways | offline PMs | suggestions'       => array(
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway2',
				),
				array(
					'gateway2' => 0,
				),
				array(
					'gateway2',
					'_wc_pes_suggestion3',
					'gateway3_0', // Suggestion matching gateways (via the plugin slug) are added after their suggestion, in order.
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway1', // Gateway added after its suggestion.
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order with suggestions but no matching gateways, ordering #2 - gateways | offline PMs | suggestions'       => array(
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway2',
				),
				array(
					'gateway2' => 0,
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 1,
				),
				array(
					'gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion3',
					'gateway3_0', // Suggestion matching gateways (via the plugin slug) are added after their suggestion, in order.
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1', // Gateway added after its suggestion.
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order with suggestions but no matching gateways, ordering #3 - gateways | offline PMs | suggestions'       => array(
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway2',
				),
				array(
					'bacs'   => 0, // Special offline PMs normalized order map - no-op.
					'cod'    => 1,
					'cheque' => 2,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0', // Suggestion matching gateways (via the plugin slug) are added after their suggestion, in order.
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs', // no-op.
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway1', // Gateway added after its suggestion.
					'gateway2',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order with suggestions but no matching gateways, ordering #4 - gateways | offline PMs | suggestions'       => array(
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway2',
				),
				array(
					'cod'    => 0, // Special offline PMs normalized order map.
					'bacs'   => 1,
					'cheque' => 2,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0', // Suggestion matching gateways (via the plugin slug) are added after their suggestion, in order.
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'bacs',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway1', // Gateway added after its suggestion.
					'gateway2',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order with suggestions but no matching gateways, ordering #5 - gateways | offline PMs | suggestions'       => array(
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs', // This has order 2.
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway2',
				),
				array(
					'cod'    => 2, // Special offline PMs non-normalized order map.
					'bacs'   => 3,
					'cheque' => 4,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0', // Suggestion matching gateways (via the plugin slug) are added after their suggestion, in order.
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'bacs',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway1', // Gateway added after its suggestion.
					'gateway2',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order with non-existent payment gateways, move payment gateways - gateways | offline PMs | suggestions'    => array(
				array(
					'non_existent_gateway1',
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_non_existent_gateway2',
					'non_existent_gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'gateway3_0' => 0,
					'gateway1'   => 1,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'_wc_pes_suggestion1',
					'gateway1',
					'non_existent_gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_non_existent_gateway2',
					'non_existent_gateway2',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order with non-existent payment gateways, move payment gateway - gateways | offline PMs | suggestions'    => array(
				array(
					'non_existent_gateway1',
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_non_existent_gateway2',
					'non_existent_gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'gateway1' => 1,
				),
				array(
					'non_existent_gateway1',
					'_wc_pes_suggestion1',
					'gateway1',
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_non_existent_gateway2',
					'non_existent_gateway2',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move payment gateway - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'gateway1' => 1,
				),
				array(
					'_wc_pes_suggestion1',
					'gateway1',
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move payment gateway #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'gateway2' => 2,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move payment gateway #3 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs', // This has order 3.
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'gateway2' => 3,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2', // Because the offline PMs group was present, the offline PMs stuck with it.
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move payment gateway lower #1 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1', // This has order 7.
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'gateway2' => 7,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway3_1',
					'gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move payment gateway lower #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1', // This has order 8.
					'gateway1',
				),
				array(
					'gateway2' => 8,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway3_1',
					'gateway2',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move payment gateway lower #3 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1', // This has order 9.
				),
				array(
					'gateway2' => 9,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
					'gateway2',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move offline PMs group on itself - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs', // This has order 3.
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 3,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move offline PMs group on itself #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque', // This has order 5.
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 5,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move offline PMs group on next - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2', // This has order 6.
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 6,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move offline PMs group - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1', // This has order 7.
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 7,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move offline PMs group #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1', // This has order 8.
					'gateway1', // This should remain in place because registered PGs have more power than suggestions.
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 8,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1', // Because the corresponding PG remained in place, this stuck with it.
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move offline PMs group #3 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1', // This has order 9.
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 9,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move offline PMs group #4 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP => 10,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move offline PM - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs', // This had order 3.
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'bacs' => 3,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move offline PM #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod', // This had order 4.
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'bacs' => 4,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'bacs', // Because the offline PG was present, the reordering took place only inside the offline PMs group.
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move offline PM #3 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque', // This had order 5.
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'bacs' => 5,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'cheque',
					'bacs', // Because the offline PG was present, the reordering took place only inside the offline PMs group.
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move offline PM #4 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2', // This has order 6.
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'bacs' => 6,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'cheque',
					'bacs', // Because the offline PG was present, the reordering took place only inside the offline PMs group.
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move only offline PMs #1 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs', // This has order 3.
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'bacs'   => 4,
					'cod'    => 5,
					'cheque' => 6,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs', // No change here because the ordering was done inside the offline PMs group.
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move only offline PMs #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'bacs'   => 4, // Sorting doesn't matter.
					'cod'    => 3,
					'cheque' => 5,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'bacs',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move only offline PMs #3 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'bacs'   => 5,
					'cod'    => 3,
					'cheque' => 4,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'cheque',
					'bacs',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move only offline PMs normalized #1 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs', // This has order 3.
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'bacs'   => 0,
					'cod'    => 1,
					'cheque' => 2,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move only offline PMs normalized #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs', // This has order 3.
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'cod'    => 0,
					'bacs'   => 1,
					'cheque' => 2,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cod',
					'bacs',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move only offline PMs normalized #3 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs', // This has order 3.
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'cheque' => 0,
					'bacs'   => 1,
					'cod'    => 2,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'cheque',
					'bacs',
					'cod',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion #1 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion-other', // This has order 8.
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'_wc_pes_suggestion-other' => 7,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'_wc_pes_suggestion-other',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion-other', // This has order 8.
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'_wc_pes_suggestion-other' => 6,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion-other',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion #3 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion-other', // This has order 8.
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'_wc_pes_suggestion-other' => 5,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion-other', // Because we have an offline PMs group, the PMs stuck with it.
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion #4 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion-other', // This has order 8.
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'_wc_pes_suggestion-other' => 2,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					'_wc_pes_suggestion-other',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion #5 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion-other', // This has order 8.
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'_wc_pes_suggestion-other' => 1,
				),
				array(
					'_wc_pes_suggestion-other',
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion #6 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion-other', // This has order 8.
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'_wc_pes_suggestion-other' => 0,
				),
				array(
					'_wc_pes_suggestion-other',
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion lower #1 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion-other', // This has order 8.
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'_wc_pes_suggestion-other' => 9,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion-other',
					'_wc_pes_suggestion1', // This has a matching PG, so it stuck with it.
					'gateway1',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion lower #2 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion-other', // This has order 8.
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'_wc_pes_suggestion-other' => 10,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
					'_wc_pes_suggestion-other',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion lower #3 - gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion-other', // This has order 8.
					'_wc_pes_suggestion1',
					'gateway1',
				),
				array(
					'_wc_pes_suggestion-other' => 11,
				),
				array(
					'_wc_pes_suggestion3',
					'gateway3_0',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'gateway2',
					'gateway3_1',
					'_wc_pes_suggestion1',
					'gateway1',
					'_wc_pes_suggestion-other',
				),
				$gateways + $offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion #1 - no gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion-other',
					'_wc_pes_suggestion1',
				),
				array(
					'_wc_pes_suggestion-other' => 1,
				),
				array(
					'_wc_pes_suggestion3',
					'_wc_pes_suggestion-other',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
				),
				$offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion #2 - no gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion-other',
					'_wc_pes_suggestion1',
				),
				array(
					'_wc_pes_suggestion-other' => 1,
				),
				array(
					'_wc_pes_suggestion3',
					'_wc_pes_suggestion-other',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
				),
				$offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion #3 - no gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs', // This has order 2.
					'cod',
					'cheque',
					'_wc_pes_suggestion-other',
					'_wc_pes_suggestion1',
				),
				array(
					'_wc_pes_suggestion-other' => 2,
				),
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion-other',
					'_wc_pes_suggestion1',
				),
				$offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion lower #1 - no gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion-other',
					'_wc_pes_suggestion1',
				),
				array(
					'_wc_pes_suggestion3' => 1,
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion3',
					'_wc_pes_suggestion-other',
					'_wc_pes_suggestion1',
				),
				$offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion lower #2 - no gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion-other',
					'_wc_pes_suggestion1', // This has order 6.
				),
				array(
					'_wc_pes_suggestion-other' => 6,
				),
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion1',
					'_wc_pes_suggestion-other',
				),
				$offline_payment_methods_gateways,
				$suggestions,
			),
			'new order, move suggestion lower #3 - no gateways | offline PMs | suggestions'    => array(
				array(
					'_wc_pes_suggestion3',
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod', // This has order 3.
					'cheque',
					'_wc_pes_suggestion-other',
					'_wc_pes_suggestion1',
				),
				array(
					'_wc_pes_suggestion3' => 3,
				),
				array(
					PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
					'bacs',
					'cod',
					'cheque',
					'_wc_pes_suggestion3', // Because the suggestion, jumped the offline PMs group, all the offline PMs jumped it also.
					'_wc_pes_suggestion-other',
					'_wc_pes_suggestion1',
				),
				$offline_payment_methods_gateways,
				$suggestions,
			),
		);
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
		WC()->payment_gateways()->payment_gateways = array();
		WC()->payment_gateways()->init();

		// Reset the controller memo to pick up the new gateway details.
		$this->service->reset_memo();
	}
}
