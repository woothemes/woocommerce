<?php //phpcs:ignore Generic.PHP.RequireStrictTypes.MissingDeclaration
/**
 * WooCommerce Settings.
 */

namespace Automattic\WooCommerce\Admin\Features;

use Automattic\WooCommerce\Internal\Admin\WCAdminAssets;

/**
 * Contains backend logic for the Settings feature.
 */
class Settings {
	/**
	 * Class instance.
	 *
	 * @var Settings instance
	 */
	protected static $instance = null;

	/**
	 * Get class instance.
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Hook into WooCommerce.
	 */
	public function __construct() {
		if ( ! is_admin() ) {
			return;
		}

		add_filter( 'woocommerce_admin_shared_settings', array( __CLASS__, 'add_component_settings' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_settings_editor_scripts' ) );
	}

	/**
	 * Enqueue scripts for the settings editor.
	 */
	public function enqueue_settings_editor_scripts() {
		$screen = get_current_screen();
		if ( ! $screen || 'woocommerce_page_wc-settings' !== $screen->id ) {
			return;
		}

		// Make sure the Settings Editor package is loaded.
		wp_enqueue_script( 'wc-settings-editor' );

		$script_handle          = 'wc-admin-edit-settings';
		$script_path_name       = 'wp-admin-scripts/settings';
		$script_assets_filename = WCAdminAssets::get_script_asset_filename( 'wp-admin-scripts', 'settings' );
		$script_assets          = require WC_ADMIN_ABSPATH . WC_ADMIN_DIST_JS_FOLDER . 'wp-admin-scripts/' . $script_assets_filename;
		$script_version         = WCAdminAssets::get_file_version( 'js', $script_assets['version'] );

		wp_register_script(
			$script_handle,
			WCAdminAssets::get_url( $script_path_name, 'js' ),
			$script_assets['dependencies'],
			$script_version,
			true
		);

		// Load the main Settings script.
		wp_enqueue_script( $script_handle );
	}

	/**
	 * Add the necessary data to initially load the WooCommerce Settings pages.
	 *
	 * @param array $settings Array of component settings.
	 * @return array Array of component settings.
	 */
	public static function add_component_settings( $settings ) {
		if ( ! is_admin() ) {
			return $settings;
		}

		$setting_pages = \WC_Admin_Settings::get_settings_pages();
		$pages         = array();
		foreach ( $setting_pages as $setting_page ) {
			$pages = $setting_page->add_settings_page( $pages );
		}

		$settings['settingsPages'] = $pages;

		return $settings;
	}
}
