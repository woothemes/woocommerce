<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\CostOfGoodsSold;

use Automattic\WooCommerce\Internal\Features\FeaturesController;
use Automattic\WooCommerce\Internal\RegisterHooksInterface;

/**
 * Main controller for the Cost of Goods Sold feature.
 */
class CostOfGoodsSoldController implements RegisterHooksInterface {

	/**
	 * The instance of FeaturesController to use.
	 *
	 * @var FeaturesController
	 */
	private FeaturesController $features_controller;

	/**
	 * Register hooks.
	 */
	public function register() {
		add_action( 'woocommerce_register_feature_definitions', array( $this, 'add_feature_definition' ) );
	}

	/**
	 * Initialize the instance, runs when the instance is created by the dependency injection container.
	 *
	 * @internal
	 * @param FeaturesController $features_controller The instance of FeaturesController to use.
	 */
	final public function init( FeaturesController $features_controller ) {
		$this->features_controller = $features_controller;
	}

	/**
	 * Is the Cost of Goods Sold engine enabled?
	 *
	 * @return bool True if the engine is enabled, false otherwise.
	 */
	public function feature_is_enabled(): bool {
		return $this->features_controller->feature_is_enabled( 'cost_of_goods_sold' );
	}

	/**
	 * Add the feature information for the features settings page.
	 *
	 * @param FeaturesController $features_controller The instance of FeaturesController to use.
	 *
	 * @internal For exclusive usage of WooCommerce core, backwards compatibility not guaranteed.
	 */
	public function add_feature_definition( $features_controller ) {
		$definition = array(
			'description'        => __( 'Allows entering cost of goods sold information for products. Feature under active development, enable only for testing purposes', 'woocommerce' ),
			'is_experimental'    => true,
			'enabled_by_default' => false,
		);

		$features_controller->add_feature_definition(
			'cost_of_goods_sold',
			__( 'Cost of Goods Sold', 'woocommerce' ),
			$definition
		);
	}

	/**
	 * Get the count of variations that have a custom Cost of Goods Sold value set.
	 * For non-variable products this will always return zero.
	 *
	 * @param int $product_id Product id.
	 * @return int|null Count of variations that have a custom Cost of Goods Sold value set, null in case of error.
	 */
	public function get_variations_with_custom_cost_count( int $product_id ): ?int {
		try {
			return self::get_variations_with_custom_cost_count_core( $product_id );
		} catch ( \Exception $e ) {
			return null;
		}
	}

	/**
	 * Core function to get the count of variations that have a custom Cost of Goods Sold value set
	 * (doesn't catch exceptions).
	 *
	 * @param int $product_id Product id.
	 * @return int|null Count of variations that have a custom Cost of Goods Sold value set, null in case of error.
	 */
	private function get_variations_with_custom_cost_count_core( int $product_id ): ?int {
		$counts = get_transient( 'woocommerce_variations_with_custom_cost_counts' );
		if ( false === $counts ) {
			$counts = array();
		}

		$count = $counts[ $product_id ] ?? null;
		if ( is_null( $count ) ) {
			global $wpdb;

			$count = $wpdb->get_var(
				$wpdb->prepare(
					"SELECT COUNT(*) FROM {$wpdb->postmeta} pm
					JOIN {$wpdb->posts} p ON pm.post_id=p.ID
					WHERE p.post_parent=%d AND pm.meta_key='_cogs_total_value' AND post_type=%s",
					$product_id,
					'product_variation'
				)
			);

			if ( ! is_null( $count ) ) {
				$count                 = (int) $count;
				$counts[ $product_id ] = $count;
				set_transient( 'woocommerce_variations_with_custom_cost_counts', $counts, HOUR_IN_SECONDS );
			}
		}

		return $count;
	}

	/**
	 * Remove the cached count of variations that have a custom Cost of Goods Sold value set,
	 * if that value is actually cached.
	 *
	 * @param int $product_id Parent product or variation id.
	 */
	public function remove_cached_variations_with_custom_cost_count( int $product_id ): void {
		try {
			self::remove_cached_variations_with_custom_cost_count_core( $product_id );
		} catch ( \Exception $e ) {
			delete_transient( 'woocommerce_variations_with_custom_cost_counts' );
		}
	}

	/**
	 * Core function to remove the cached count of variations that have a custom Cost of Goods Sold value set
	 * (doesn't catch exceptions).
	 *
	 * @param int $product_id Parent product or variation id.
	 */
	private function remove_cached_variations_with_custom_cost_count_core( int $product_id ): void {
		$counts = get_transient( 'woocommerce_variations_with_custom_cost_counts' );
		if ( false === $counts ) {
			return;
		}

		global $wpdb;
		$parent_id = $wpdb->get_var(
			$wpdb->prepare(
				"SELECT id FROM wp_posts WHERE ID=%d and post_type='product'
                union
                SELECT post_parent as id FROM wp_posts WHERE id=%d and post_type='product_variation'",
				$product_id,
				$product_id
			)
		);

		if ( is_null( $parent_id ) ) {
			if ( $wpdb->last_error ) {
				delete_transient( 'woocommerce_variations_with_custom_cost_counts' );
			}
			return;
		}

		$parent_id = (int) $parent_id;
		if ( ! array_key_exists( $parent_id, $counts ) ) {
			return;
		}

		unset( $counts[ $parent_id ] );
		if ( empty( $counts ) ) {
			delete_transient( 'woocommerce_variations_with_custom_cost_counts' );
		} else {
			set_transient( 'woocommerce_variations_with_custom_cost_counts', $counts, HOUR_IN_SECONDS );
		}
	}
}
