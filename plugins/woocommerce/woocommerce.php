<?php
/**
 * Plugin Name: WooCommerce
 * Plugin URI: https://woocommerce.com/
 * Description: An ecommerce toolkit that helps you sell anything. Beautifully.
 * Version: 9.6.0-dev
 * Author: Automattic
 * Author URI: https://woocommerce.com
 * Text Domain: woocommerce
 * Domain Path: /i18n/languages/
 * Requires at least: 6.5
 * Requires PHP: 7.4
 *
 * @package WooCommerce
 */

defined( 'ABSPATH' ) || exit;

if ( ! defined( 'WC_PLUGIN_FILE' ) ) {
	define( 'WC_PLUGIN_FILE', __FILE__ );
}

// Load core packages and the autoloader.
require __DIR__ . '/src/Autoloader.php';
require __DIR__ . '/src/Packages.php';

if ( ! \Automattic\WooCommerce\Autoloader::init() ) {
	return;
}
\Automattic\WooCommerce\Packages::init();

// Include the main WooCommerce class.
if ( ! class_exists( 'WooCommerce', false ) ) {
	include_once dirname( WC_PLUGIN_FILE ) . '/includes/class-woocommerce.php';
}

// Initialize dependency injection.
$GLOBALS['wc_container'] = new Automattic\WooCommerce\Container();

/**
 * Returns the main instance of WC.
 *
 * @since  2.1
 * @return WooCommerce
 */
function WC() { // phpcs:ignore WordPress.NamingConventions.ValidFunctionName.FunctionNameInvalid
	return WooCommerce::instance();
}

/**
 * Returns the WooCommerce object container.
 * Code in the `includes` directory should use the container to get instances of classes in the `src` directory.
 *
 * @since  4.4.0
 * @return \Automattic\WooCommerce\Container The WooCommerce object container.
 */
function wc_get_container() {
	return $GLOBALS['wc_container'];
}

// Global for backwards compatibility.
$GLOBALS['woocommerce'] = WC();

// Jetpack's Rest_Authentication needs to be initialized even before plugins_loaded.
if ( class_exists( \Automattic\Jetpack\Connection\Rest_Authentication::class ) ) {
	\Automattic\Jetpack\Connection\Rest_Authentication::init();
}
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
	wc_maybe_define_constant( 'ORDER_UID', wp_generate_uuid4() );

	if ( empty( $message ) ) {
		return;
	}

	global $wc_log_order_hash;

	if ( ! isset( $wc_log_order_hash ) ) {
		// Generate a unique but consistent hash for the log name, to make it unguessable since the default log file location is web accessible.
		// fnv1a32 algorithm is used for performance reasons, while still providing a better distribution of hash values than md5.
		$wc_log_order_hash = hash( 'fnv1a32', get_site_url() . DB_NAME . DB_USER . DB_HOST . WC()->version );
	}

	global $wc_log_order_logger;

	if ( ! isset( $wc_log_order_logger ) ) {
		// Store the logger instance in a global to avoid creating multiple instances.
		$wc_log_order_logger = wc_get_logger();
	}

	$context['source'] = 'place-order-debug-' . $wc_log_order_hash;

	// Add the place order request's unique ID to the log context if it's defined.
	if ( defined( 'ORDER_UID' ) && is_string( ORDER_UID ) && '' !== ORDER_UID ) {
		$context['order_uid'] = ORDER_UID;
	}

	// Logging the place order flow step completed. Logs are grouped per day to make is easier to navigate.
	$wc_log_order_logger->info( $message, $context );
}

