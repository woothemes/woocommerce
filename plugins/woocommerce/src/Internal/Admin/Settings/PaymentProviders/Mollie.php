<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\Settings\PaymentProviders;

use WC_Payment_Gateway;

defined( 'ABSPATH' ) || exit;

/**
 * Mollie payment gateway provider class.
 *
 * This class handles all the custom logic for the Mollie payment gateway provider.
 */
class Mollie extends PaymentGateway {

	/**
	 * Get the settings URL for a payment gateway.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 *
	 * @return string The settings URL for the payment gateway.
	 */
	public function get_settings_url( WC_Payment_Gateway $payment_gateway ): string {
		return $this->get_custom_settings_url();
	}

	/**
	 * Determine if at least a Mollie gateway is registered.
	 *
	 * @param array $payment_gateways The payment gateways objects.
	 *
	 * @return bool True if at least a Mollie gateway is registered, false otherwise.
	 */
	public function is_gateway_registered( array $payment_gateways ): bool {
		$mollie_gateways = array_filter(
			$payment_gateways,
			function ( $gateway ) {
				return str_starts_with( $gateway->id, 'mollie_wc_gateway_' );
			}
		);

		return ! empty( $mollie_gateways );
	}

	/**
	 * Get the pseudo Mollie gateway object.
	 *
	 * @param array $suggestion The suggestion data.
	 *
	 * @return PseudoWCPaymentGateway The pseudo gateway object.
	 */
	public function get_pseudo_gateway( array $suggestion ): PseudoWCPaymentGateway {
		// We will generate a generic gateway to represent Mollie in the settings page.
		// The generic gateway's state will be not enabled, not connected, and not onboarded.
		// The presentational details will be minimal, letting the suggestion provide most of the information.
		return new PseudoWCPaymentGateway(
			'mollie_stand_in',
			array(
				'method_title'         => $suggestion['title'],
				'enabled'		  	   => false,
				'test_mode'            => false,
				'dev_mode'             => false,
				'account_connected'    => false,
				'onboarding_started'   => false,
				'onboarding_completed' => false,
				'settings_url'         => $this->get_custom_settings_url(),
				'plugin_slug'          => $suggestion['plugin']['slug'],
				'plugin_file'          => $suggestion['plugin']['file'],
			),
		);
	}

	/**
	 * Get the URL to the custom settings page for Mollie.
	 *
	 * @return string The URL to the custom settings page for Mollie.
	 */
	private function get_custom_settings_url(): string {
		return admin_url( 'admin.php?page=wc-settings&tab=mollie_settings' );
	}
}
