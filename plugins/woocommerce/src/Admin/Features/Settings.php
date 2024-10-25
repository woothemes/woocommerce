<?php //phpcs:ignore Generic.PHP.RequireStrictTypes.MissingDeclaration
/**
 * WooCommerce Settings.
 */

namespace Automattic\WooCommerce\Admin\Features;

use Automattic\WooCommerce\Admin\PageController;

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
