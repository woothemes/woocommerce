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

	if ( empty( $message ) ) {
		return; // Nothing to log.
	}

	// Generate a place order unique ID for logging purposes. If this is called multiple times,
	// the same UID will be used, enabling us to track recursion and race-condition issues on order processing methods
	// or other problems related to third-party plugins.
	if ( ! defined( 'WC_ORDER_STEP_LOGGER_UID' ) ) {
		define( 'WC_ORDER_STEP_LOGGER_UID', wp_generate_uuid4() );
	}

	// Without a string place order request's unique ID to add to the log context, bail.
	if ( ! is_string( WC_ORDER_STEP_LOGGER_UID ) ) {
		return;
	}

	$context['order_uid'] = WC_ORDER_STEP_LOGGER_UID;
	$context['source']    = 'checkout-step-debug';

	global $wc_log_order_logger;

	if ( ! isset( $wc_log_order_logger ) ) {
		// Instantiate and store the logger instance in a global to avoid creating multiple instances.
		$wc_log_order_logger = new WC_Logger();
	}

	// Logging the place order flow step completed. Logs are grouped per day to make is easier to navigate.
	$wc_log_order_logger->info( $message, $context );
}
