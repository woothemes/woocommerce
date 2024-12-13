<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\Settings\PaymentProviders;

use WC_Payment_Gateway;

defined( 'ABSPATH' ) || exit;

/**
 * The payment gateway provider class to handle all payment gateways that don't have a dedicated class.
 *
 * Extend this class for introducing gateway-specific behavior.
 */
class PaymentGatewayProvider {
	/**
	 * The single instance of the payment gateway provider class.
	 *
	 * @var static
	 */
	protected static PaymentGatewayProvider $instance;

	/**
	 * Get the instance of the class.
	 *
	 * @return static
	 */
	public static function get_instance(): self {
		if ( ! isset( static::$instance ) ) {
			static::$instance = new static();
		}

		return static::$instance;
	}

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
		// Try various gateway methods to check if the payment gateway is in test mode.
		if ( method_exists( $payment_gateway, 'is_test_mode' ) ) {
			return filter_var( $payment_gateway->is_test_mode(), FILTER_VALIDATE_BOOLEAN );
		}
		if ( method_exists( $payment_gateway, 'is_in_test_mode' ) ) {
			return filter_var( $payment_gateway->is_in_test_mode(), FILTER_VALIDATE_BOOLEAN );
		}

		// Try various gateway option entries to check if the payment gateway is in test mode.
		if ( method_exists( $payment_gateway, 'get_option' ) ) {
			$test_mode = filter_var( $payment_gateway->get_option( 'test_mode', 'not_found' ), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE );
			if ( ! is_null( $test_mode ) ) {
				return $test_mode;
			}

			$test_mode = filter_var( $payment_gateway->get_option( 'testmode', 'not_found' ), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE );
			if ( ! is_null( $test_mode ) ) {
				return $test_mode;
			}
		}

		return false;
	}

	/**
	 * Try to determine if the payment gateway is in dev mode.
	 *
	 * This is a best-effort attempt, as there is no standard way to determine this.
	 * Trust the true value, but don't consider a false value as definitive.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 *
	 * @return bool True if the payment gateway is in dev mode, false otherwise.
	 */
	public function is_in_dev_mode( WC_Payment_Gateway $payment_gateway ): bool {
		// Try various gateway methods to check if the payment gateway is in dev mode.
		if ( method_exists( $payment_gateway, 'is_dev_mode' ) ) {
			return filter_var( $payment_gateway->is_dev_mode(), FILTER_VALIDATE_BOOLEAN );
		}
		if ( method_exists( $payment_gateway, 'is_in_dev_mode' ) ) {
			return filter_var( $payment_gateway->is_in_dev_mode(), FILTER_VALIDATE_BOOLEAN );
		}

		return false;
	}

	/**
	 * Try and determine a list of recommended payment methods for a payment gateway.
	 *
	 * This data is not always available, and it is up to the payment gateway to provide it.
	 * This is not a definitive list of payment methods that the gateway supports.
	 * The data is aimed at helping the user understand what payment methods are recommended for the gateway
	 * and potentially help them make a decision on which payment methods to enable.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 * @param string             $country_code    Optional. The country code for which to get recommended payment methods.
	 *                                            This should be a ISO 3166-1 alpha-2 country code.
	 *
	 * @return array The recommended payment methods list for the payment gateway.
	 *               Empty array if there are none.
	 */
	private function get_recommended_payment_methods( WC_Payment_Gateway $payment_gateway, string $country_code = '' ): array {
		// Bail if the payment gateway does not implement the method.
		if ( ! method_exists( $payment_gateway, 'get_recommended_payment_methods' ) ) {
			return array();
		}

		// Get the "raw" recommended payment methods from the payment gateway.
		$recommended_pms = call_user_func_array(
			array( $payment_gateway, 'get_recommended_payment_methods' ),
			array( 'country_code' => $country_code ),
		);

		// Validate the received list items.
		// We require at least `id` and `title`.
		$recommended_pms = array_filter(
			$recommended_pms,
			function ( $recommended_pm ) {
				return is_array( $recommended_pm ) &&
					   ! empty( $recommended_pm['id'] ) &&
					   ! empty( $recommended_pm['title'] );
			}
		);

		// Sort the recommended payment methods by order/priority, if available.
		usort(
			$recommended_pms,
			function ( $a, $b ) {
				// `order` takes precedence over `priority`.
				// Entries that don't have the order/priority are placed at the end.
				return array( ( $a['order'] ?? PHP_INT_MAX ), ( $a['priority'] ?? PHP_INT_MAX ) ) <=> array( ( $b['order'] ?? PHP_INT_MAX ), ( $b['priority'] ?? PHP_INT_MAX ) );
			}
		);
		$recommended_pms = array_values( $recommended_pms );

		// Extract, standardize, and sanitize the details for each recommended payment method.
		$standardized_pms = array();
		foreach ( $recommended_pms as $index => $recommended_pm ) {
			$standard_details = array(
				'id'          => sanitize_key( $recommended_pm['id'] ),
				'_order'      => $index, // Normalize the order to the zero-based index.
				'enabled'     => (bool) $recommended_pm['enabled'] ?? true, // Default to enabled if not explicit.
				'title'       => sanitize_text_field( $recommended_pm['title'] ),
				'description' => '',
				'icon'        => '',
			);

			// If the payment method has a description, sanitize it before use.
			if ( ! empty( $recommended_pm['description'] ) ) {
				$standard_details['description'] = $recommended_pm['description'];
				// Make sure that if we have HTML tags, we only allow stylistic tags and anchors.
				if ( preg_match( '/<[^>]+>/', $standard_details['description'] ) ) {
					// Only allow stylistic tags with a few modifications.
					$allowed_tags = wp_kses_allowed_html( 'data' );
					$allowed_tags = array_merge(
						$allowed_tags,
						array(
							'a' => array(
								'href'   => true,
								'target' => true,
							),
						)
					);

					$standard_details['description'] = wp_kses( $standard_details['description'], $allowed_tags );
				}
			}

			// If the payment method has an icon, try to use it.
			if ( ! empty( $recommended_pm['icon'] ) && wc_is_valid_url( $recommended_pm['icon'] ) ) {
				$standard_details['icon'] = sanitize_url( $recommended_pm['icon'] );
			}

			$standardized_pms[] = $standard_details;
		}

		return $standardized_pms;
	}
}
