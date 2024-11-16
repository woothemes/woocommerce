<?php
/**
 * Provider class file.
 */

declare(strict_types=1);

namespace Automattic\WooCommerce\Internal\ProductFilters;

use Automattic\WooCommerce\Internal\ProductFilters\Interfaces\QueryClausesGenerator;

defined( 'ABSPATH' ) || exit;

/**
 * Provider class.
 */
class FilterDataProvider {
	/**
	 * Hold initialized providers.
	 */
	private $providers = array();

	/**
	 * Get the data provider with desired query clauses generator.
	 *
	 * @param string $class_path Namespace name of the query clauses generator.
	 */
	public function with( QueryClausesGenerator $query_clauses_generator ) {
		if ( ! isset( $this->providers[ $query_clauses_generator::class ] ) ) {
			$this->providers[ $query_clauses_generator::class ] = new FilterData( $query_clauses_generator );
		}

		return $this->providers[ $query_clauses_generator::class ];
	}
}
