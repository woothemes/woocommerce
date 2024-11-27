<?php

/**
 * WooCommerce Order Step Logging Functions
 *
 * Tracks the steps of the checkout process for place order debugging.
 *
 * @package WooCommerce\Functions
 * @version 9.6.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Log an order-related message. This is not public API and should not be used by plugins or themes.
 *
 * @param string $message Message to log.
 * @param array $context Optional. Additional information for log handlers.
 *
 * @internal This function is intended for internal use only.
 */
function wc_log_order_step( string $message, array $context = array() ) {
	// Generate a place order unique ID for logging purposes. If this is called multiple times,
	// the same UID will be used, enabling us to track recursion and race-condition issues on order processing methods
	// or other problems related to third-party plugins.
	if ( ! defined( 'ORDER_UID' ) ) {
		define( 'ORDER_UID', wp_generate_uuid4() );
	}

	$message = trim( $message );

	if ( empty( $message ) ) {
		return;
	}

	global $wc_log_order_logger;

	if ( ! isset( $wc_log_order_logger ) ) {
		// Instantiate and store the logger instance in a global to avoid creating multiple instances.
		$wc_log_order_logger = new WC_Logger();
	}

	$context['source'] = 'checkout-step-debug';

	// Add the place order request's unique ID to the log context if it's defined.
	if ( defined( 'ORDER_UID' ) && is_string( ORDER_UID ) && '' !== trim( ORDER_UID ) ) {
		$context['order_uid'] = ORDER_UID;
	}

	// Logging the place order flow step completed. Logs are grouped per day to make is easier to navigate.
	$wc_log_order_logger->info( $message, $context );
}
