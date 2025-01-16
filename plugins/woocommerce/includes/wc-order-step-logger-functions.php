<?php
/**
 * WooCommerce Order Step Logging Functions
 *
 * Tracks the steps of the checkout process for place order debugging.
 *
 * @package WooCommerce\Functions
 * @version 9.6.0
 */

declare(strict_types=1);

defined( 'ABSPATH' ) || exit;

/**
 * Log an order-related message. This is not public API and should not be used by plugins or themes.
 *
 * @param string     $message Message to log.
 * @param array|null $context Optional. Additional information for log handlers.
 * @param bool       $final_step Optional. Whether this is the final step of the order logging, and should clear the log.
 *
 * @internal This function is intended for internal use only.
 * @since 9.7.0
 */
function wc_log_order_step( string $message, ?array $context = null, bool $final_step = false ): void {

	if ( '' === $message ) {
		return; // Nothing to log.
	}

	static $logger, $order_uid, $order_uid_short;
	static $steps = array(); // Static array to store the messages and validate against unique messages before clearing the log.

	// Generate a static place order unique ID for logging purposes. When this is called multiple times in the same request,
	// the same UID will be used, enabling us to track recursion and race-condition issues on order processing methods
	// or other problems related to third-party plugins and filters.
	$order_uid       = $order_uid ? $order_uid : wp_generate_uuid4();
	$order_uid_short = $order_uid_short ? $order_uid_short : substr( $order_uid, 0, 8 );

	$context['order_uid'] = $order_uid;
	$context['source']    = 'place-order-debug-' . $order_uid_short; // Source is segmented per order unique id.

	if ( ! $logger ) {
		// Use a static logger instance to avoid unnecessary instantiations.
		$logger = new WC_Logger( null, WC_Log_Levels::DEBUG );
	}

	$steps[] = $message;
	// Logging the place order flow step. Log files are grouped per order to make is easier to navigate.
	$logger->log( WC_Log_Levels::DEBUG, $message, $context );

	// Clears the log if instructed and all steps are unique.
	if ( $final_step && count( array_unique( $steps ) ) === count( $steps ) ) {
		$logger->clear( $context['source'], true );
	}
}
