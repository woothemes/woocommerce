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
					'desc'  => __( 'Options for attribute fields dropdowns', 'woocommerce' ),
					'type'  => 'title',
					'id'    => 'attributes_dropdown_options',
				),

				array(
					'title'    => __( 'Auto-select', 'woocommerce' ),
					'desc'     => __( 'This controls what attribute fields will be auto-selected relative to the changed field.', 'woocommerce' ),
					'id'       => 'attributes_autoselect_type',
					'class'    => 'wc-enhanced-select',
					'css'      => 'min-width:300px;',
					'default'  => 'none',
					'type'     => 'select',
					'options'  => array(
						'none'       => 'None',
						'previous' => 'Previous attribute fields',
						'all'      => 'All other attribute fields',
						'next'     => 'Next attribute fields',
					),
					'desc_tip' => true,
				),

				array(
					'title'    => __( 'Values in conflict with current selection', 'woocommerce' ),
					'desc'     => __( 'What to do with values that cannot be applied to current attributes selection.', 'woocommerce' ),
					'id'       => 'attributes_unattached_action',
					'class'    => 'wc-enhanced-select',
					'css'      => 'min-width:300px;',
					'default'  => 'delete',
					'type'     => 'select',
					'options'  => array(
						'hide'    => __( 'Hidden', 'woocommerce' ),
						'disable' => __( 'Grayed-out and disabled', 'woocommerce' ),
						'gray'    => __( 'Grayed-out but selectable (will clear all other attributes if selected)', 'woocommerce' ),
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
