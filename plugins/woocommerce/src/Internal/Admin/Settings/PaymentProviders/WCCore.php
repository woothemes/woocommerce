<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\Settings\PaymentProviders;

use Automattic\WooCommerce\Enums\PaymentMethods;
use WC_Payment_Gateway;

defined( 'ABSPATH' ) || exit;

/**
 * WooCommerce core payment gateways provider class.
 *
 * This class handles all the custom logic for the payment gateways built into the WC core.
 */
class WCCore extends PaymentGateway {

	/**
	 * Get the provider icon URL of the payment gateway.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 *
	 * @return string The provider icon URL of the payment gateway.
	 */
	public function get_icon( WC_Payment_Gateway $payment_gateway ): string {
		// Provide custom icons for core payment gateways.
		switch ( $payment_gateway->id ) {
			case PaymentMethods::BACS:
				return plugins_url( 'assets/images/payment_methods/bacs.svg', WC_PLUGIN_FILE );
			case PaymentMethods::CHEQUE:
				return plugins_url( 'assets/images/payment_methods/cheque.svg', WC_PLUGIN_FILE );
			case PaymentMethods::COD:
				return plugins_url( 'assets/images/payment_methods/cod.svg', WC_PLUGIN_FILE );
			case PaymentMethods::PAYPAL:
				return plugins_url( 'assets/images/payment_methods/72x72/paypal.png', WC_PLUGIN_FILE );
		}

		return parent::get_icon( $payment_gateway );
	}
}
