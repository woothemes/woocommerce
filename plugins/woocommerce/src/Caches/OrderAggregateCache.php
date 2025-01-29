<?php

declare( strict_types=1 );

namespace Automattic\WooCommerce\Caches;

use Automattic\WooCommerce\Internal\DataStores\Orders\OrdersTableDataStore;

/**
 * A class to cache aggregates from orders.
 */
class OrderAggregateCache {

	/**
	 * Option name.
	 */
	const OPTION_NAME = 'woocommerce_orders_aggregate_cache';

	/**
	 * The running totals for all order statuses.
	 *
	 * @var array|null
	 */
	private $totals = null;

	/**
	 * Whether or not the count has changed since loading.
	 *
	 * @var bool
	 */
	private $has_changed = false;

	/**
	 * Get the aggregate by identifier.
	 *
	 * @param string|string[] $status The order status to count.
	 * @return int
	 * @throws \Exception Exception thrown if status it not valid.
	 */
	public function get_count( $status ): int {
		$status         = (array) $status;
		$valid_statuses = $this->get_valid_statuses();

		if ( ! empty( array_diff( $status, $valid_statuses ) ) ) {
			throw new \Exception();
		}

		if ( ! $this->totals ) {
			$cache        = get_option( self::OPTION_NAME );
			$this->totals = $cache ? $cache : $this->count_orders_by_status();
		}

		return array_sum( array_intersect_key( $this->totals, array_flip( $status ) ) );
	}

	/**
	 * Get valid statuses.
	 *
	 * @return string[]
	 */
	private function get_valid_statuses() {
		return array_merge(
			array_keys( wc_get_order_statuses() ),
			array(
				'trash',
				'draft',
				'auto-draft',
			)
		);
	}

	/**
	 * Hydrate the initial cache.
	 *
	 * @return array
	 */
	private function count_orders_by_status() {
		global $wpdb;

		$orders_table = OrdersTableDataStore::get_orders_table_name();

		$res = $wpdb->get_results(
			"SELECT status, COUNT(*) AS cnt FROM {$orders_table} WHERE type = 'shop_order' GROUP BY status", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
			ARRAY_A
		);

		$this->has_changed = true;

		return $res
			? array_combine( array_column( $res, 'status' ), array_map( 'absint', array_column( $res, 'cnt' ) ) )
			: array();
	}

	/**
	 * Update the visible order count cache.
	 *
	 * @param string  $status The identifier of the aggregate.
	 * @param integer $count The count of which to update with.
	 * @return void
	 */
	public function update_count( $status, $count ): void {
		if ( ! $this->totals ) {
			$cache        = get_option( self::OPTION_NAME );
			$this->totals = $cache ?? array();
		}

		$this->totals[ $status ] = $count;
		$this->has_changed       = true;
	}

	/**
	 * Persist any updates if the cache has changed.
	 *
	 * @return bool|null
	 */
	public function persist_updates() {
		if ( ! $this->has_changed ) {
			return false;
		}

		return update_option( self::OPTION_NAME, $this->totals );
	}
}
