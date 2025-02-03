<?php

declare( strict_types = 1);

namespace Automattic\WooCommerce\Admin\Features\Blueprint\Exporters;

use Automattic\WooCommerce\Admin\Features\Blueprint\Steps\SetWCTaxRates;
use Automattic\WooCommerce\Blueprint\ClassExtractor;
use Automattic\WooCommerce\Blueprint\Exporters\HasAlias;
use Automattic\WooCommerce\Blueprint\Exporters\StepExporter;
use Automattic\WooCommerce\Blueprint\Steps\RunPHP;

/**
 * Class ExportWCTaxRates
 *
 * This class exports WooCommerce tax rates and implements the StepExporter interface.
 *
 * @package Automattic\WooCommerce\Admin\Features\Blueprint\Exporters
 */
class ExportWCTaxRates implements StepExporter, HasAlias {

	/**
	 * Export WooCommerce tax rates.
	 *
	 * @return RunPHP
	 */
	public function export() {
		global $wpdb;

		// Fetch tax rates from the database.
		$rates = $wpdb->get_results(
			"
            SELECT *
            FROM {$wpdb->prefix}woocommerce_tax_rates as tax_rates
            ",
			ARRAY_A
		);

		// Fetch tax rate locations from the database.
		$locations = $wpdb->get_results(
			"
            SELECT *
            FROM {$wpdb->prefix}woocommerce_tax_rate_locations as locations
            ",
			ARRAY_A
		);

		$class_extractor = new ClassExtractor( __DIR__ . '/../RunPHPTemplates/ImportSetWCTaxRates.php' );
		$class_extractor->replace_class_variable( 'rates', $rates );
		$class_extractor->replace_class_variable( 'locations', $locations );
		$code = $class_extractor->with_wp_load()->get_code();

		return new RunPHP( $code );
	}

	/**
	 * Get the name of the step.
	 *
	 * @return string
	 */
	public function get_step_name() {
		return 'runPHP';
	}

	/**
	 * Return label used in the frontend.
	 *
	 * @return string
	 */
	public function get_label() {
		return __( 'Tax Rates', 'woocommerce' );
	}

	/**
	 * Return description used in the frontend.
	 *
	 * @return string
	 */
	public function get_description() {
		return __( 'It includes tax rates and locations.', 'woocommerce' );
	}

	/**
	 * Get the alias
	 *
	 * @return string
	 */
	public function get_alias() {
		return 'setWCTaxRates';
	}
}
