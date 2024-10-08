<?php
/**
 * Class for filter counts.
 */

namespace Automattic\WooCommerce\Internal\ProductFilters;

use WC_Cache_Helper;
use Automattic\WooCommerce\Internal\ProductFilters\Interfaces\QueryClausesGenerator;

defined( 'ABSPATH' ) || exit;

/**
 * Class for filter counts.
 */
class Counts {
	/**
	 * Instance of QueryClauses.
	 *
	 * @var QueryClausesGenerator
	 */
	private $query_clauses;

	/**
	 * @var Cache
	 */
	private $cache;

	/**
	 * Initialize dependencies.
	 *
	 * @internal
	 *
	 * @param QueryClauses $query_clauses Instance of QueryClauses.
	 *
	 * @return void
	 */
	final public function init( QueryClausesGenerator $query_clauses, Cache $cache ): void {
		$this->set_query_clauses( $query_clauses );
		$this->cache = $cache;
	}

	/**
	 * Allow setting the clauses provider at run time.
	 *
	 * @param ClausesGeneratorInterface $query_clauses Instance of QueryClauses.
	 *
	 * @return void
	 */
	final public function set_query_clauses( QueryClausesGenerator $query_clauses ): void {
		$this->query_clauses = $query_clauses;
	}

	/**
	 * Get price data for current products.
	 *
	 * @param array $query_vars The WP_Query arguments.
	 * @return object
	 */
	public function get_filtered_price( array $query_vars ) {
		$pre_filter_counts = $this->pre_get_filter_counts( 'price', $query_vars, );

		if ( is_array( $pre_filter_counts ) ) {
			return $pre_filter_counts;
		}

		$transient_key = $this->cache->get_transient_key( 'price', $query_vars );
		$cached_data   = $this->cache->get_transient( $transient_key );

		if ( ! empty( $cached_data ) ) {
			return $cached_data;
		}

		global $wpdb;

		add_filter( 'posts_clauses', array( $this->query_clauses, 'add_query_clauses' ), 10, 2 );
		add_filter( 'posts_pre_query', '__return_empty_array' );

		$query_vars['no_found_rows']  = true;
		$query_vars['posts_per_page'] = -1;
		$query_vars['fields']         = 'ids';
		$query                        = new \WP_Query();

		$query->query( $query_vars );
		$product_query_sql = $query->request;

		remove_filter( 'posts_clauses', array( $this->query_clauses, 'add_query_clauses' ), 10 );
		remove_filter( 'posts_pre_query', '__return_empty_array' );

		$price_filter_sql = "
		SELECT min( min_price ) as min_price, MAX( max_price ) as max_price
		FROM {$wpdb->wc_product_meta_lookup}
		WHERE product_id IN ( {$product_query_sql} )
		";

		return $this->cache->set_transient( $transient_key, $wpdb->get_row( $price_filter_sql ) ); // phpcs:ignore
	}

	/**
	 * Get stock status counts for the current products.
	 *
	 * @param array $query_vars The WP_Query arguments.
	 * @return array status=>count pairs.
	 */
	public function get_stock_status_counts( array $query_vars ) {
		$pre_filter_counts = $this->pre_get_filter_counts( 'stock', $query_vars );

		if ( is_array( $pre_filter_counts ) ) {
			return $pre_filter_counts;
		}

		$transient_key = $this->cache->get_transient_key( 'stock', $query_vars );
		$cached_data   = $this->cache->get_transient( $transient_key );

		if ( ! empty( $cached_data ) ) {
			return $cached_data;
		}

		global $wpdb;
		$stock_status_options = array_map( 'esc_sql', array_keys( wc_get_product_stock_status_options() ) );

		add_filter( 'posts_clauses', array( $this->query_clauses, 'add_query_clauses' ), 10, 2 );
		add_filter( 'posts_pre_query', '__return_empty_array' );

		$query_vars['no_found_rows']  = true;
		$query_vars['posts_per_page'] = -1;
		$query_vars['fields']         = 'ids';
		$query                        = new \WP_Query();

		$query->query( $query_vars );
		$product_query_sql = $query->request;

		remove_filter( 'posts_clauses', array( $this->query_clauses, 'add_query_clauses' ), 10 );
		remove_filter( 'posts_pre_query', '__return_empty_array' );

		$stock_status_counts = array();

		foreach ( $stock_status_options as $status ) {
			$stock_status_count_sql = "
				SELECT COUNT( DISTINCT posts.ID ) as status_count
				FROM {$wpdb->posts} as posts
				INNER JOIN {$wpdb->postmeta} as postmeta ON posts.ID = postmeta.post_id
				AND postmeta.meta_key = '_stock_status'
				AND postmeta.meta_value = '{$status}'
				WHERE posts.ID IN ( {$product_query_sql} )
			";

			$result = $wpdb->get_row( $stock_status_count_sql ); // phpcs:ignore
			$stock_status_counts[ $status ] = $result->status_count;
		}

		$this->cache->set_transient( $transient_key, $stock_status_counts );

		return $stock_status_counts;
	}

	/**
	 * Get rating counts for the current products.
	 *
	 * @param array $query_vars The WP_Query arguments.
	 * @return array rating=>count pairs.
	 */
	public function get_rating_counts( array $query_vars ) {
		$pre_filter_counts = $this->pre_get_filter_counts( 'rating', $query_vars );

		if ( is_array( $pre_filter_counts ) ) {
			return $pre_filter_counts;
		}

		$transient_key = $this->cache->get_transient_key( 'rating', $query_vars );
		$cached_data   = $this->cache->get_transient( $transient_key );

		if ( ! empty( $cached_data ) ) {
			return $cached_data;
		}

		global $wpdb;

		add_filter( 'posts_clauses', array( $this->query_clauses, 'add_query_clauses' ), 10, 2 );
		add_filter( 'posts_pre_query', '__return_empty_array' );

		$query_vars['no_found_rows']  = true;
		$query_vars['posts_per_page'] = -1;
		$query_vars['fields']         = 'ids';
		$query                        = new \WP_Query();

		$query->query( $query_vars );
		$product_query_sql = $query->request;

		remove_filter( 'posts_clauses', array( $this->query_clauses, 'add_query_clauses' ), 10 );
		remove_filter( 'posts_pre_query', '__return_empty_array' );

		$rating_count_sql = "
			SELECT COUNT( DISTINCT product_id ) as product_count, ROUND( average_rating, 0 ) as rounded_average_rating
			FROM {$wpdb->wc_product_meta_lookup}
			WHERE product_id IN ( {$product_query_sql} )
			AND average_rating > 0
			GROUP BY rounded_average_rating
			ORDER BY rounded_average_rating ASC
		";

		$results = $wpdb->get_results( $rating_count_sql ); // phpcs:ignore
		$results = array_map( 'absint', wp_list_pluck( $results, 'product_count', 'rounded_average_rating' ) );

		$this->cache->set_transient( $transient_key, $results );

		return $results;
	}

	/**
	 * Get attribute counts for the current products.
	 *
	 * @param array  $query_vars         The WP_Query arguments.
	 * @param string $attribute_to_count Attribute taxonomy name.
	 * @return array termId=>count pairs.
	 */
	public function get_attribute_counts( array $query_vars, string $attribute_to_count ) {
		$pre_filter_counts = $this->pre_get_filter_counts( 'attribute', $query_vars, array( 'taxonomy' => $attribute_to_count ) );

		if ( is_array( $pre_filter_counts ) ) {
			return $pre_filter_counts;
		}

		$transient_key = $this->cache->get_transient_key( 'attribute', $query_vars, $attribute_to_count );
		$cached_data   = $this->cache->get_transient( $transient_key );

		if ( ! empty( $cached_data ) ) {
			return $cached_data;
		}

		global $wpdb;

		add_filter( 'posts_clauses', array( $this->query_clauses, 'add_query_clauses' ), 10, 2 );
		add_filter( 'posts_pre_query', '__return_empty_array' );

		$query_vars['no_found_rows']  = true;
		$query_vars['posts_per_page'] = -1;
		$query_vars['fields']         = 'ids';
		$query                        = new \WP_Query();

		$query->query( $query_vars );
		$product_query_sql = $query->request;

		remove_filter( 'posts_clauses', array( $this->query_clauses, 'add_query_clauses' ), 10 );
		remove_filter( 'posts_pre_query', '__return_empty_array' );

		$attributes_to_count_sql = 'AND term_taxonomy.taxonomy IN ("' . esc_sql( wc_sanitize_taxonomy_name( $attribute_to_count ) ) . '")';
		$attribute_count_sql     = "
			SELECT COUNT( DISTINCT posts.ID ) as term_count, terms.term_id as term_count_id
			FROM {$wpdb->posts} AS posts
			INNER JOIN {$wpdb->term_relationships} AS term_relationships ON posts.ID = term_relationships.object_id
			INNER JOIN {$wpdb->term_taxonomy} AS term_taxonomy USING( term_taxonomy_id )
			INNER JOIN {$wpdb->terms} AS terms USING( term_id )
			WHERE posts.ID IN ( {$product_query_sql} )
			{$attributes_to_count_sql}
			GROUP BY terms.term_id
		";

		$results = $wpdb->get_results( $attribute_count_sql ); // phpcs:ignore
		$results = array_map( 'absint', wp_list_pluck( $results, 'term_count', 'term_count_id' ) );

		$this->cache->set_transient( $transient_key, $results );

		return $results;
	}

	/**
	 * Get the offload filter counts.
	 *
	 * @param string $filter_type The type of filter. Accepts price|stock|rating|attribute.
	 * @param array  $query_vars  The query arguments to calculate the filter data.
	 * @param array  $extra       Some filter types require extra arguments for calculation, like attribute.
	 */
	private function pre_get_filter_counts( string $filter_type, array $query_vars, array $extra = array() ) {
		/**
		 * Allows offloading the filter data.
		 *
		 * @hook woocommerce_pre_filter_data
		 *
		 * @since 8.7.0
		 *
		 * @param array $results      The results for current query.
		 * @param string $filter_type The type of filter. Accepts price|stock|rating|attribute.
		 * @param array $query_vars   The query arguments to calculate the filter data.
		 * @param array $extra        Some filter types require extra arguments for calculation, like attribute.
		 */
		return apply_filters( 'woocommerce_pre_product_filter_counts', null, $filter_type, $query_vars, $extra );
	}
}
