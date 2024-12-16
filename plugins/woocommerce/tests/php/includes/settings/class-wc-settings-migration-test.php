<?php
/**
 * Class WC_Settings_Example file.
 *
 * @package WooCommerce\Tests\Settings
 */

declare(strict_types=1);

/**
 * Helper class to test base functionality of WC_Settings_Page.
 */
class WC_Settings_Migration_Test extends WC_Settings_Page {
	// phpcs:disable Squiz.Commenting.FunctionComment.Missing

	public function __construct() {
		$this->id    = 'migration';
		$this->label = 'Migration Test';
		parent::__construct();

		add_action( 'woocommerce_admin_field_foobar_section_custom_type_field', array( $this, 'foobar_section_custom_type_field' ) );
	}

	protected function get_settings_for_default_section() {
		return array(
			array(
				'title' => 'Default Section',
				'type'  => 'text',
			),
		);
	}

	protected function get_settings_for_foobar_section() {
		return array(
			array(
				'title' => 'Foobar Section',
				'type'  => 'text',
			),
			array(
				'title' => 'Custom Type Field',
				'type'  => 'foobar_section_custom_type_field',
			),
		);
	}

	protected function get_own_sections() {
		return array(
			''       => __( 'Default', 'woocommerce' ),
			'foobar' => __( 'Foobar', 'woocommerce' ),
		);
	}

	public function foobar_section_custom_type_field( $setting ) {
		?>
		<div><?php echo esc_html( $setting['title'] ); ?></div>
		<?php
	}

	// phpcs:enable Squiz.Commenting.FunctionComment.Missing
}
