<?php
/*
 * Plugin Name: E2E tests Provision manager
 * Description: Test-specific WPCLI commands.
 * Version: 1.0
 * Author: WooCommerce
 * Author URI: https://woocommerce.com/
 */

/**
 * Provision manager as a mu-plugin for the docker container.
 */
class WC_Docker_Provision_Manager {

	/**
	 * Internal ref to the importer progress.
	 */
	protected static $importer_progress;

	/**
	 * Add Hooks.
	 */
	public static function init() {

		// Fix add-to-cart URLs.
		add_filter( 'woocommerce_add_to_cart_product_id', array( __CLASS__, 'translate_add_to_cart_sku_to_id' ) );

		add_action( 'template_redirect', array( __CLASS__, 'set_test_mode' ), -PHP_INT_MAX );

		add_filter( 'woocommerce_get_cart_page_id', array( __CLASS__, 'filter_cart_page_id' ) );
		add_filter( 'woocommerce_get_checkout_page_id', array( __CLASS__, 'filter_checkout_page_id' ) );

		if ( ! self::is_cli_running() ) {
			return;
		}

		self::define_constants();

		// Init cli.
		add_action( 'init', array( __CLASS__, 'init_cli' ) );

		// Update progress bar.
		add_action( 'woocommerce_product_import_inserted_product_object', array( __CLASS__, 'tick_import_process' ) );
	}

	/**
	 * Check context.
	 */
	public static function is_cli_running() {
		return defined( 'WP_CLI' ) && WP_CLI;
	}

	/**
	 * Initialize test constants.
	 */
	public static function define_constants() {
		define( 'WC_E2E_TEST_DATA_PATH', 'wp-content/_data' );
	}

	/**
	 * Initialize WP_CLI.
	 */
	public static function init_cli() {
		WP_CLI::add_hook( 'after_wp_load', array( __CLASS__, 'register_commands' ) );
	}

	/**
	 * Add test-specific WP_CLI commands.
	 */
	public static function register_commands() {
		WP_CLI::add_command( 'wc docker-e2e provision', array( __CLASS__, 'provision' ) );
	}

	/**
	 * Update importing progress bar.
	 */
	public static function tick_import_process() {
		if ( is_null( self::$importer_progress ) ) {
			return;
		}

		self::$importer_progress->tick();
	}

	/**
	 * Provision WP_CLI command.
	 */
	public static function provision() {

		WP_CLI::log( WP_CLI::colorize( "%BStart provisioning docker instance%n " ) );

		/**
		 * Hook `wc_e2e_before_provision`.
		 *
		 * Used to set up the system for the provision phase. Runs before the importer.
		 */
		do_action( 'wc_e2e_before_provision' );


		/**
		 * Hook `wc_e2e_provision`.
		 *
		 * Filter to add plugin-specific provision tasks.
		 */
		do_action( 'wc_e2e_provision' );

		WP_CLI::success( 'Provision done.' );
	}

	/*---------------------------------------------------*/
	/*  Callbacks                                        */
	/*---------------------------------------------------*/

	/**
	 * Translate SKUs to IDs when adding to cart.
	 *
	 * @param  string $type admin, ajax, cron or frontend.
	 * @return bool
	 */
	public static function translate_add_to_cart_sku_to_id( $product_id ) {

		// Check if other includes.
		if ( isset( $_REQUEST[ 'e2e_tests_sku' ] ) && ! empty( $_REQUEST[ 'e2e_tests_sku' ] ) ) {
			$sku        = wc_clean( $_REQUEST[ 'e2e_tests_sku' ] );
			$product_id = wc_get_product_id_by_sku( $sku );
		}

		return $product_id;
	}

	public static function set_test_mode() {

		if ( isset( $_REQUEST[ 'set_blocks_test_mode' ] ) && ! empty( $_REQUEST[ 'set_blocks_test_mode' ] ) ) {
			update_option( 'e2e_tests_mode', 'blocks' );
			update_option( 'template', 'tsubaki' );
			update_option( 'stylesheet', 'tsubaki' );

			// Updating this option manually to automatically enable the block-based single product template.
			// This option is normally updated during the 'after_switch_theme' action, which doesn't run when switching themes programmatically.
			update_option( 'wc_blocks_use_blockified_product_grid_block_as_template', 'yes' );
		}
	}

	public static function filter_cart_page_id( $cart_page_id ) {

		if ( 'legacy' === get_option( 'e2e_tests_mode', 'legacy' ) ) {
			return (int) get_option( 'tests_legacy_woocommerce_cart_page_id' );
		}

		return $cart_page_id;
	}

	public static function filter_checkout_page_id( $checkout_page_id ) {

		if ( 'legacy' === get_option( 'e2e_tests_mode', 'legacy' ) ) {
			return (int) get_option( 'tests_legacy_woocommerce_checkout_page_id' );
		}

		return $checkout_page_id;
	}
}

WC_Docker_Provision_Manager::init();
