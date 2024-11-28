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
 * @param string     $message Message to log.
 * @param array|null $context Optional. Additional information for log handlers.
 *
 * @internal This function is intended for internal use only.
 * @since 9.6.0
 */
function wc_log_order_step( string $message, ?array $context = null ) {

	if ( '' === $message ) {
		return; // Nothing to log.
	}

	static $order_uid = null;
	static $logger = null;

	// Generate a static place order unique ID for logging purposes. When this is called multiple times,
	// the same UID will be used, enabling us to track recursion and race-condition issues on order processing methods
	// or other problems related to third-party plugins and filters.
	if ( ! $order_uid ) {
		$order_uid = wp_generate_uuid4();
	}

	$context              = $context ?? [];
	$context['order_uid'] = $order_uid;
	$context['source']    = 'place-order-debug-' . substr( $order_uid, 0, 8 );

	if ( ! $logger ) {
		// Use a static logger instance to avoid unnecessary instantiations.
		$logger = new WC_Logger();
	}

	// Logging the place order flow step completed. Log files are grouped per order to make is easier to navigate.
	$logger->log( WC_Log_Levels::INFO, $message, $context );
}
