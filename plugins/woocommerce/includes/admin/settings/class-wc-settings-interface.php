<?php
/**
 * WooCommerce interface settings
 *
 * @package WooCommerce\Admin
 */

defined( 'ABSPATH' ) || exit;

if ( class_exists( 'WC_Settings_Interface', false ) ) {
	return new WC_Settings_Interface();
}

/**
 * WC_Settings_Interface.
 */
class WC_Settings_Interface extends WC_Settings_Page {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->id    = 'interface';
		$this->label = __( 'Interface', 'woocommerce' );

		parent::__construct();
	}

	/**
	 * Get own sections.
	 *
	 * @return array
	 */
	protected function get_own_sections() {
		return array(
			'' => __( 'General', 'woocommerce' ),
		);
	}

	/**
	 * Get settings for the default section.
	 *
	 * @return array
	 */
	protected function get_settings_for_default_section() {
		$settings =
			array(
				array(
					'title' => __( 'Attribute dropdowns options', 'woocommerce' ),
					'desc'  => __( 'Options for attribute dropdowns', 'woocommerce' ),
					'type'  => 'title',
					'id'    => 'attributes_dropdown_options',
				),

				array(
					'title'    => __( 'Auto-select', 'woocommerce' ),
					'desc'     => __( 'This controls what attributes will be auto-selected.', 'woocommerce' ),
					'id'       => 'attributes_autoselect_type',
					'class'    => 'wc-enhanced-select',
					'css'      => 'min-width:300px;',
					'default'  => null,
					'type'     => 'select',
					'options'  => array(
						null       => 'None',
						'previous' => 'Previous attributes',
						'all'      => 'All attributes',
						'next'     => 'Next attributes',
					),
					'desc_tip' => true,
				),

				array(
					'type' => 'sectionend',
					'id'   => 'attributes_dropdown_options',
				),
			);

		$settings = apply_filters( 'woocommerce_interface_settings_general', $settings );
		return $settings;
	}

	/**
	 * Save settings.
	 */
	public function save() {
		$this->save_settings_for_current_section();
		$this->do_update_options_action();
	}
}

return new WC_Settings_Interface;
