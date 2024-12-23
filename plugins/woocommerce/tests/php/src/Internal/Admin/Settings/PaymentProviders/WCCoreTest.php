<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\Settings\PaymentProviders;

use Automattic\WooCommerce\Internal\Admin\Settings\PaymentProviders\WCCore;
use Automattic\WooCommerce\Tests\Internal\Admin\Settings\Mocks\FakePaymentGateway;
use WC_Unit_Test_Case;

/**
 * WC core payment gateway provider service test.
 *
 * @class WCCore
 */
class WCCoreTest extends WC_Unit_Test_Case {

	/**
	 * @var WCCore
	 */
	protected $sut;

	/**
	 * Set up test.
	 */
	public function setUp(): void {
		parent::setUp();

		$this->sut = new WCCore();
	}

	/**
	 * Test get_icon.
	 */
	public function test_get_icon() {
		// Arrange.
		$fake_gateway = new FakePaymentGateway(
			'bacs',
			array(
				'enabled'            => true,
				'plugin_slug'        => 'woocommerce',
				'plugin_file'        => 'woocommerce/woocommerce.php',
				'method_title'       => 'BACS',
				'method_description' => 'Bacs is good.',
				'supports'           => array( 'products', 'something', 'bogus' ),
				'icon'               => 'https://example.com/icon.png',
			),
		);

		// Act.
		$gateway_details = $this->sut->get_icon( $fake_gateway );

		// Assert.
		$this->assertEquals( plugins_url( 'assets/images/payment_methods/bacs.svg', WC_PLUGIN_FILE ), $gateway_details );

		// Arrange.
		$fake_gateway = new FakePaymentGateway(
			'cheque',
			array(
				'enabled'            => true,
				'plugin_slug'        => 'woocommerce',
				'plugin_file'        => 'woocommerce/woocommerce.php',
				'method_title'       => 'Cheque',
				'method_description' => 'Cheque is good.',
				'supports'           => array( 'products', 'something', 'bogus' ),
				'icon'               => 'https://example.com/icon.png',
			),
		);

		// Act.
		$gateway_details = $this->sut->get_icon( $fake_gateway );

		// Assert.
		$this->assertEquals( plugins_url( 'assets/images/payment_methods/cheque.svg', WC_PLUGIN_FILE ), $gateway_details );

		// Arrange.
		$fake_gateway = new FakePaymentGateway(
			'cod',
			array(
				'enabled'            => true,
				'plugin_slug'        => 'woocommerce',
				'plugin_file'        => 'woocommerce/woocommerce.php',
				'method_title'       => 'COD',
				'method_description' => 'COD is good.',
				'supports'           => array( 'products', 'something', 'bogus' ),
				'icon'               => 'https://example.com/icon.png',
			),
		);

		// Act.
		$gateway_details = $this->sut->get_icon( $fake_gateway );

		// Assert.
		$this->assertEquals( plugins_url( 'assets/images/payment_methods/cod.svg', WC_PLUGIN_FILE ), $gateway_details );

		// Arrange.
		$fake_gateway = new FakePaymentGateway(
			'paypal',
			array(
				'enabled'            => true,
				'plugin_slug'        => 'woocommerce',
				'plugin_file'        => 'woocommerce/woocommerce.php',
				'method_title'       => 'Paypal',
				'method_description' => 'Paypal is good.',
				'supports'           => array( 'products', 'something', 'bogus' ),
				'icon'               => 'https://example.com/icon.png',
			),
		);

		// Act.
		$gateway_details = $this->sut->get_icon( $fake_gateway );

		// Assert.
		$this->assertEquals( plugins_url( 'assets/images/payment_methods/72x72/paypal.png', WC_PLUGIN_FILE ), $gateway_details );
	}
}
