<?php
/**
 * FilterDataProvider class file.
 */

declare(strict_types=1);

namespace Automattic\WooCommerce\Internal\ProductFilters;

use WC_Cache_Helper;

defined( 'ABSPATH' ) || exit;

/**
 * Class for filter counts.
 */
class Cache {
	const CACHE_GROUP = 'product_filters';

	/**
	 * Get filter data transient key.
	 *
	 * @param string $id   The id of entity.
	 * @param array  $args Data to be hashed for an unique key.
	 */
	public function get_transient_key( string $id, ...$args ) {
		return sprintf(
			'wc_%s_%s_%s',
			self::CACHE_GROUP,
			$id,
			md5( wp_json_encode( $args ) )
		);
	}

	/**
	 * Get cached filter data.
	 *
	 * @param string $key Transient key.
	 */
	public function get_transient( string $key ) {
		$cache             = get_transient( $key );
		$transient_version = WC_Cache_Helper::get_transient_version( self::CACHE_GROUP );

		if ( empty( $cache['version'] ) ||
			$transient_version !== $cache['version']
		) {
			return null;
		}

		return $cache['value'];
	}

	/**
	 * Set the cache with transient version to invalidate all at once when needed.
	 *
	 * @param string $key   Transient key.
	 * @param mixed  $value Value to set.
	 */
	public function set_transient( string $key, $value ) {
		$transient_version = WC_Cache_Helper::get_transient_version( self::CACHE_GROUP );
		$transient_value   = array(
			'version' => $transient_version,
			'value'   => $value,
		);

		$result = set_transient( $key, $transient_value );

		return $result;
	}

	/**
	 * Get the key for object cache.
	 *
	 * @param string $id ID of the data being cached.
	 */
	public function get_object_cache_key( string $id ) {
		return WC_Cache_Helper::get_cache_prefix( self::CACHE_GROUP ) . $id;
	}

	/**
	 * Get cached product IDs from a SQL query.
	 *
	 * Executes the product query and returns a comma-separated string of product IDs.
	 * Results are cached to avoid repeated database queries.
	 *
	 * @param string $product_query_sql SQL query to get product IDs.
	 * @return string Comma-separated list of product IDs.
	 */
	public function get_cached_product_ids( $product_query_sql ) {
		return $this->get_cached_subquery(
			$product_query_sql,
			function ( $product_query_sql ) {
				global $wpdb;

				$results = $wpdb->get_results( $product_query_sql, ARRAY_A );

				if ( ! $results ) {
					$results = array();
				}
				return implode( ',', array_column( $results, 'ID' ) );
			}
		);
	}

	/**
	 * Get cached results for any SQL subquery.
	 *
	 * Checks object cache for results first. If not found, executes the callback
	 * function to run the query and caches the results.
	 *
	 * @param string   $sql_query SQL query string.
	 * @param callable $callback  Callback function to execute the query if not cached.
	 * @return mixed|null Cached query results or null if no callback provided.
	 */
	public function get_cached_subquery( string $sql_query, $callback ) {
		$cache_key = $this->get_object_cache_key( md5( $sql_query ) );
		$cache     = wp_cache_get( $cache_key );

		if ( $cache ) {
			return $cache;
		}

		if ( ! $callback ) {
			return null;
		}

		$results = call_user_func( $callback, $sql_query );

		wp_cache_set( $cache_key, $results );

		return $results;
	}
}
