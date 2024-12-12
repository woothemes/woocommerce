<?php
/*
 * Plugin Name: BIS Acceptance Test Helper
 * Description: Back in stock acceptance testing infrastructure.
 * Version: 1.0
 * Author: SomewhereWarm Team
 * Author URI: https://somewherewarm.com/
 */

class SW_BIS_Acceptance_Test_Helper {

	protected static $default_settings = array(
		'wc_bis_account_required'                   => 'no',
		'wc_bis_opt_in_required'                    => 'no',
		'wc_bis_double_opt_in_required'             => 'no',
		'wc_bis_create_new_account_on_registration' => 'no',
		'wc_bis_show_product_registrations_count'   => 'no',
		'wc_bis_loop_signup_prompt_status'          => 'no',
	);

	/*
	 * Add Hooks.
	 */
	public static function init() {

		// Handle requests.
		add_action( 'woocommerce_init', array( __CLASS__, 'handle_request' ), 100 );

		// Register shortcodes for viewing confirmation emails.
		add_action( 'plugins_loaded', array( __CLASS__, 'register_shortcodes' ) );

		// Update the password of users that are automatically generated.
		add_filter( 'woocommerce_new_customer_data', array( __CLASS__, 'force_change_password' ) );

		// Creates some notifications that are required for tests.
		add_action( 'wc_e2e_provision', array( __CLASS__, 'create_notifications' ) );

		// Fix nightly tests.
		add_action( 'wp_plugin_dependencies_slug', array( __CLASS__, 'fix_nightly_slugs' ) );
	}

	/**
	 * Fix nightly tests.
	 *
	 * @param  string $slug
	 * @return string
	 */
	public static function fix_nightly_slugs( $slug ) {
		if ( 'woocommerce' === $slug ) {
			$slug = '';
		}

		return $slug;
	}

	/*
	 * Functions.
	 */
	/**
	 * What type of request is this?
	 *
	 * @param  string $type admin, ajax, cron or frontend.
	 * @return bool
	 */
	protected static function is_request( $type ) {

		switch ( $type ) {
			case 'admin':
				return is_admin();
			case 'ajax':
				return defined( 'DOING_AJAX' );
			case 'cron':
				return defined( 'DOING_CRON' );
			case 'frontend':
				return ( ! is_admin() || defined( 'DOING_AJAX' ) ) && ! defined( 'DOING_CRON' );
		}
	}


	/*
	 * Callbacks.
	 */

	/**
	 * Handles requests to interact with the back-end.
	 *
	 * @return  void
	 */
	public static function handle_request() {

		if ( ! self::is_request( 'frontend' ) ) {
			return;
		}

		if ( isset( $_GET[ 'apply_settings' ], $_GET[ 'reset_all' ] ) ) {
			// Update all settings to default.
			foreach ( self::$default_settings as $key => $value ) {
				update_option( $key, $value );
			}
		} elseif ( isset( $_GET[ 'apply_settings' ] ) ) {
			foreach ( self::$default_settings as $key => $value ) {
				if ( isset( $_GET[ $key ] ) ) {
					update_option( $key, $_GET[ $key ] );
				}
			}
		}

		if ( ! empty( $_GET[ 'process_notifications' ] ) ) {

			$action_id = ActionScheduler::store()->query_action( array(
				'hook' => 'wc_bis_process_notifications_batch',
			) );

			if ( $action_id ) {
				$runner = ActionScheduler_QueueRunner::instance();
				$runner->process_action( $action_id, 'E2E Tester' );
			}
		}

		if ( ! empty( $_GET[ 'process_outofstock_products' ] ) ) {

			$action_id = ActionScheduler::store()->query_action( array(
				'hook' => 'wc_bis_process_outofstock_products',
			) );

			if ( $action_id ) {
				$runner = ActionScheduler_QueueRunner::instance();
				$runner->process_action( $action_id, 'E2E Tester' );
			}
		}
	}

	/**
	 * Registers shortcodes for viewing BIS e-mail contents.
	 *
	 * @return  void
	 */
	public static function register_shortcodes() {
		add_shortcode( 'confirmation_received_email', array( __CLASS__, 'render_confirmation_received_email_shortcode' ) );
		add_shortcode( 'notification_received_email', array( __CLASS__, 'render_notification_received_email_shortcode' ) );
		add_shortcode( 'verify_received_email', array( __CLASS__, 'render_verification_received_email_shortcode' ) );
	}

	/**
	 * Renders the 'confirmation_received_email' shortcode.
	 *
	 * @param  array $atts
	 * @return string
	 */
	public static function render_confirmation_received_email_shortcode( $atts ) {

		$args = shortcode_atts( array(
			'notification_id' => ''
		), $atts );

		$notification_id = ! empty( $_GET[ 'notification_id' ] ) ? intval( $_GET[ 'notification_id' ] ) : intval( $args[ 'notification_id' ] );

		if ( ! $notification_id ) {
			return;
		}

		$notification = new WC_BIS_Notification_Data( $notification_id );

		if ( ! $notification->get_id() ) {
			return;
		}

		$emails = new WC_Emails();
		$emails->init();

		$email = new WC_BIS_Email_Notification_Confirm();

		$email->object = $notification;
		$email->set_placeholders_value();

		ob_start();
		echo '<h2 class="bis-confirm-email-title">' . $email->get_subject() . '</h2>';
		WC_BIS()->emails->confirm_notification_email_html( $notification, $email );
		$content = ob_get_clean();

		return '<div class="bis-confirm-email-content">' . $content . '</div>';
	}

	/**
	 * Renders the 'notification_received_email' shortcode.
	 *
	 * @param  array $atts
	 * @return string
	 */
	public static function render_notification_received_email_shortcode( $atts ) {

		$args = shortcode_atts( array(
			'notification_id' => ''
		), $atts );

		$notification_id = ! empty( $_GET[ 'notification_id' ] ) ? intval( $_GET[ 'notification_id' ] ) : intval( $args[ 'notification_id' ] );

		if ( ! $notification_id ) {
			return;
		}

		$notification = new WC_BIS_Notification_Data( $notification_id );

		if ( ! $notification->get_id() ) {
			return;
		}

		$emails = new WC_Emails();
		$emails->init();

		$email = new WC_BIS_Email_Notification_Received();

		$email->object = $notification;
		$email->set_placeholders_value();

		ob_start();
		echo '<h2 class="bis-notify-email-title">' . $email->get_subject() . '</h2>';
		WC_BIS()->emails->notification_email_html( $notification, $email );
		$content = ob_get_clean();

		return '<div class="bis-notify-email-content">' . $content . '</div>';
	}

	/**
	 * Renders the 'verification_received_email' shortcode.
	 *
	 * @param  array $atts
	 * @return string
	 */
	public static function render_verification_received_email_shortcode( $atts ) {

		$args = shortcode_atts( array(
			'notification_id' => ''
		), $atts );

		$notification_id = ! empty( $_GET[ 'notification_id' ] ) ? intval( $_GET[ 'notification_id' ] ) : intval( $args[ 'notification_id' ] );

		if ( ! $notification_id ) {
			return;
		}

		$notification = new WC_BIS_Notification_Data( $notification_id );

		if ( ! $notification->get_id() ) {
			return;
		}

		$emails = new WC_Emails();
		$emails->init();

		$email = new WC_BIS_Email_Notification_Verify();

		$email->object = $notification;
		$email->set_placeholders_value();

		ob_start();
		echo '<h2 class="bis-verify-email-title">' . $email->get_subject() . '</h2>';
		WC_BIS()->emails->verify_notification_email_html( $notification, $email );
		$content = ob_get_clean();

		return '<div class="bis-verify-email-content">' . $content . '</div>';
	}

	/**
	 * Forces the user password to be the same as the user login.
	 *
	 * @param  array $args
	 * @return array
	 */
	public static function force_change_password( $args ) {
		$args[ 'user_pass' ] = $args[ 'user_login' ];

		return $args;
	}

	/**
	 * Creates some notifications that are required for tests.
	 *
	 */
	public static function create_notifications() {

		$id = wc_get_product_id_by_sku( 'out-of-stock-beanie-to-be-cancelled' );

		$notification = new WC_BIS_Notification_Data( array(
			'type'                 => 'one-time',
			'product_id'           => $id,
			'user_id'              => 2,
			'user_email'           => 'test@test.com',
			'create_date'          => 0,
			'last_notified_date'   => 0,
			'subscribe_date'       => 0,
			'is_queued'            => 'off',
			'is_active'            => 'on',
			'is_verified'          => 'yes'
		) );

		$notification->save();

		$notification = new WC_BIS_Notification_Data( array(
			'type'                 => 'one-time',
			'product_id'           => $id,
			'user_id'              => 0,
			'user_email'           => 'guest@guest.local',
			'create_date'          => 0,
			'last_notified_date'   => 0,
			'subscribe_date'       => 0,
			'is_queued'            => 'off',
			'is_active'            => 'on',
			'is_verified'          => 'yes'
		) );

		$notification->save();

		$id = wc_get_product_id_by_sku( 'out-of-stock-beanie' );

		$notification = new WC_BIS_Notification_Data( array(
			'type'                 => 'one-time',
			'product_id'           => $id,
			'user_id'              => 0,
			'user_email'           => 'guest@guest.local',
			'create_date'          => 0,
			'last_notified_date'   => 0,
			'subscribe_date'       => 0,
			'is_queued'            => 'off',
			'is_active'            => 'on',
			'is_verified'          => 'yes'
		) );

		$notification->save();

	}

	/*
	 * Helpers.
	 */

	/**
	 * Log using 'WC_Logger' class.
	 *
	 * @param  string $message
	 * @param  string $level
	 * @param  string $context
	 */
	public static function log( $message, $level, $context ) {
		$logger = wc_get_logger();
		$logger->log( $level, $message, array( 'source' => $context ) );
	}
}

SW_BIS_Acceptance_Test_Helper::init();
