<?php
declare( strict_types = 1 );
namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\Utils\ProductCollectionUtils;
use Automattic\WooCommerce\Blocks\QueryFilters;
use Automattic\WooCommerce\Blocks\Package;

/**
 * Product Filter: Status Block.
 */
final class ProductFilterStatus extends AbstractBlock {

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-filter-status';

	/**
	 * Status options.
	 *
	 * @var array
	 */
	protected $status_options;

	const FILTER_STATUS_QUERY_VAR = 'filter_status';

	/**
	 * Initialize this block type.
	 *
	 * - Hook into WP lifecycle.
	 * - Register the block with WordPress.
	 */
	protected function initialize() {
		parent::initialize();

		$stock_status_options = wc_get_product_stock_status_options();

		$onsale_status_options = array(
			'onsale' => __( 'On sale', 'woocommerce' ),
		);

		$featured_status_options = array(
			'featured' => __( 'Featured', 'woocommerce' ),
		);

		$this->status_options = array_merge( $stock_status_options, $onsale_status_options, $featured_status_options );

		add_filter( 'collection_filter_query_param_keys', array( $this, 'get_filter_query_param_keys' ), 10, 2 );
		add_filter( 'collection_active_filters_data', array( $this, 'register_active_filters_data' ), 10, 2 );
	}

	/**
	 * Register the query param keys.
	 *
	 * @param array $filter_param_keys The active filters data.
	 * @param array $url_param_keys    The query param parsed from the URL.
	 *
	 * @return array Active filters param keys.
	 */
	public function get_filter_query_param_keys( $filter_param_keys, $url_param_keys ) {
		$filter_status_param_keys = array_filter(
			$url_param_keys,
			function ( $param ) {
				return self::FILTER_STATUS_QUERY_VAR === $param;
			}
		);

		return array_merge(
			$filter_param_keys,
			$filter_status_param_keys,
		);
	}

	/**
	 * Register the active filters data.
	 *
	 * @param array $data   The active filters data.
	 * @param array $params The query param parsed from the URL.
	 * @return array Active filters data.
	 */
	public function register_active_filters_data( $data, $params ) {
		if ( empty( $params[ self::FILTER_STATUS_QUERY_VAR ] ) ) {
			return $data;
		}

		$status_options = $this->status_options;

		$active_statuses = array_filter(
			explode( ',', $params[ self::FILTER_STATUS_QUERY_VAR ] )
		);

		$action_namespace = $this->get_full_block_name();

		$active_statuses = array_map(
			function ( $status ) use ( $status_options, $action_namespace ) {
				return array(
					'title'      => $status_options[ $status ],
					'attributes' => array(
						'value'             => $status,
						'data-wc-on--click' => "$action_namespace::actions.toggleFilter",
					),
				);
			},
			$active_statuses
		);

		$data['status'] = array(
			'type'  => __( 'Status', 'woocommerce' ),
			'items' => $active_statuses,
		);

		return $data;
	}

	/**
	 * Extra data passed through from server to client for block.
	 *
	 * @param array $statuses  Any statuses that currently are available from the block.
	 *                               Note, this will be empty in the editor context when the block is
	 *                               not in the post content on editor load.
	 */
	protected function enqueue_data( array $statuses = array() ) {
		parent::enqueue_data( $statuses );
		$this->asset_data_registry->add( 'statusOptions', $this->status_options );
		$this->asset_data_registry->add( 'hideOutOfStockItems', 'yes' === get_option( 'woocommerce_hide_out_of_stock_items' ) );
	}

	/**
	 * Include and render the block.
	 *
	 * @param array    $attributes Block attributes. Default empty array.
	 * @param string   $content    Block content. Default empty string.
	 * @param WP_Block $block      Block instance.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content, $block ) {
		$stock_status_data    = $this->get_stock_status_counts( $block );
		$onsale_status_data   = $this->get_onsale_status_counts( $block );
		$featured_status_data = $this->get_featured_status_counts( $block );
		$query                = isset( $_GET[ self::FILTER_STATUS_QUERY_VAR ] ) ? sanitize_text_field( wp_unslash( $_GET[ self::FILTER_STATUS_QUERY_VAR ] ) ) : '';  // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$selected_statuses    = array_filter( explode( ',', $query ) );
		$status_data          = array_merge( $stock_status_data, $onsale_status_data, $featured_status_data );

		$onsale_enabled      = ! empty( $attributes['onsale'] ) ?? $attributes['onsale'];
		$featured_enabled    = ! empty( $attributes['featured'] ) ?? $attributes['featured'];
		$instock_enabled     = ! empty( $attributes['instock'] ) ?? $attributes['instock'];
		$onbackorder_enabled = ! empty( $attributes['onbackorder'] ) ?? $attributes['onbackorder'];
		$outofstock_enabled  = ! empty( $attributes['outofstock'] ) ?? $attributes['outofstock'];

		$i = 0;

		foreach ( $status_data as $data ) {
			foreach ( $data as $key => $value ) {
				if ( ! $onsale_enabled && 'onsale' === $value ) {
					unset( $status_data[ $i ] );
					continue;
				}

				if ( ! $featured_enabled && 'featured' === $value ) {
					unset( $status_data[ $i ] );
					continue;
				}

				if ( ! $instock_enabled && 'instock' === $value ) {
					unset( $status_data[ $i ] );
					continue;
				}

				if ( ! $onbackorder_enabled && 'onbackorder' === $value ) {
					unset( $status_data[ $i ] );
					continue;
				}

				if ( ! $outofstock_enabled && 'outofstock' === $value ) {
					unset( $status_data[ $i ] );
					continue;
				}
			}

			++$i;
		}

		// Re-index the array.
		$status_data = array_values( $status_data );

		$filter_options = array_map(
			function ( $item ) use ( $selected_statuses, $attributes ) {
				$statuses = $this->status_options;
				$label    = $statuses[ $item['status'] ] . ( $attributes['showCounts'] ? ' (' . $item['count'] . ')' : '' );

				return array(
					'label'    => $label,
					'value'    => $item['status'],
					'selected' => in_array( $item['status'], $selected_statuses, true ),
					'rawData'  => $item,
				);
			},
			$status_data
		);

		$filter_context = array(
			'filterData'         => array(
				'items'   => $filter_options,
				'actions' => array(
					'toggleFilter' => "{$this->get_full_block_name()}::actions.toggleFilter",
				),
			),
			'hasSelectedFilters' => ! empty( $selected_statuses ),
		);

		$wrapper_attributes = array(
			'data-wc-interactive'  => wp_json_encode( array( 'namespace' => $this->get_full_block_name() ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ),
			'data-wc-context'      => wp_json_encode(
				array(
					'hasSelectedFilters' => $filter_context['hasSelectedFilters'],
					'hasFilterOptions'   => ! empty( $filter_options ),
				),
				JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP
			),
			'data-wc-bind--hidden' => '!context.hasFilterOptions',
		);

		if ( empty( $filter_options ) ) {
			$wrapper_attributes['hidden'] = true;
		}

		return sprintf(
			'<div %1$s>%2$s</div>',
			get_block_wrapper_attributes(
				$wrapper_attributes
			),
			array_reduce(
				$block->parsed_block['innerBlocks'],
				function ( $carry, $parsed_block ) use ( $filter_context ) {
					$carry .= ( new \WP_Block( $parsed_block, array( 'filterData' => $filter_context['filterData'] ) ) )->render();
					return $carry;
				},
				''
			)
		);
	}

	/**
	 * Retrieve the status filter data for current block.
	 *
	 * @param WP_Block $block Block instance.
	 */
	private function get_stock_status_counts( $block ) {
		$filters    = Package::container()->get( QueryFilters::class );
		$query_vars = ProductCollectionUtils::get_query_vars( $block, 1 );

		unset( $query_vars['filter_status'] );

		if ( ! empty( $query_vars['meta_query'] ) ) {
			// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
			$query_vars['meta_query'] = ProductCollectionUtils::remove_query_array( $query_vars['meta_query'], 'key', '_stock_status' );
		}

		$counts = $filters->get_stock_status_counts( $query_vars );
		$data   = array();

		foreach ( $counts as $key => $value ) {
			$data[] = array(
				'status' => $key,
				'count'  => $value,
			);
		}

		return array_filter(
			$data,
			function ( $stock_count ) {
				return $stock_count['count'] > 0;
			}
		);
	}

	/**
	 * Retrieve the status filter data for current block.
	 *
	 * @param WP_Block $block Block instance.
	 */
	private function get_onsale_status_counts( $block ) {
		$filters    = Package::container()->get( QueryFilters::class );
		$query_vars = ProductCollectionUtils::get_query_vars( $block, 1 );

		unset( $query_vars['filter_status'] );

		if ( ! empty( $query_vars['meta_query'] ) ) {
			// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
			$query_vars['meta_query'] = ProductCollectionUtils::remove_query_array( $query_vars['meta_query'], 'key', '_onsale_status' );
		}

		$counts = $filters->get_onsale_status_counts( $query_vars );
		$data   = array();

		foreach ( $counts as $key => $value ) {
			$data[] = array(
				'status' => $key,
				'count'  => $value,
			);
		}

		return array_filter(
			$data,
			function ( $onsale_count ) {
				return $onsale_count['count'] > 0;
			}
		);
	}

	/**
	 * Retrieve the status filter data for current block.
	 *
	 * @param WP_Block $block Block instance.
	 */
	private function get_featured_status_counts( $block ) {
		$filters    = Package::container()->get( QueryFilters::class );
		$query_vars = ProductCollectionUtils::get_query_vars( $block, 1 );

		unset( $query_vars['filter_status'] );

		if ( ! empty( $query_vars['meta_query'] ) ) {
			// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
			$query_vars['meta_query'] = ProductCollectionUtils::remove_query_array( $query_vars['meta_query'], 'key', '_featured_status' );
		}

		$counts = $filters->get_featured_status_counts( $query_vars );
		$data   = array();

		foreach ( $counts as $key => $value ) {
			$data[] = array(
				'status' => $key,
				'count'  => $value,
			);
		}

		return array_filter(
			$data,
			function ( $featured_count ) {
				return $featured_count['count'] > 0;
			}
		);
	}
}
