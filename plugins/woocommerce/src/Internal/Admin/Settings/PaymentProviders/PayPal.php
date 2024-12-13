<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\Settings\PaymentProviders;

use WC_Payment_Gateway;

defined( 'ABSPATH' ) || exit;

/**
 * PayPal payment gateway provider class.
 *
 * This class handles all the custom logic for the PayPal payment gateway provider.
 */
class PayPal extends PaymentGateway {

	/**
	 * Try to determine if the payment gateway is in test mode.
	 *
	 * This is a best-effort attempt, as there is no standard way to determine this.
	 * Trust the true value, but don't consider a false value as definitive.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 *
	 * @return bool True if the payment gateway is in test mode, false otherwise.
	 */
	public function is_in_test_mode( WC_Payment_Gateway $payment_gateway ): bool {
		if ( class_exists( '\WooCommerce\PayPalCommerce\PPCP' ) &&
			method_exists( '\WooCommerce\PayPalCommerce\PPCP', 'container' ) ) {

			try {
				$sandbox_on_option = \WooCommerce\PayPalCommerce\PPCP::container()->get( 'wcgateway.settings' )->get( 'sandbox_on' );
				$sandbox_on_option = filter_var( $sandbox_on_option, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE );
				if ( ! is_null( $sandbox_on_option ) ) {
					return $sandbox_on_option;
				}
			} catch ( \Exception $e ) { // phpcs:ignore Generic.CodeAnalysis.EmptyStatement.DetectedCatch
				// Ignore any exceptions.
			}
		}

		return parent::is_in_test_mode( $payment_gateway );
	}
}
