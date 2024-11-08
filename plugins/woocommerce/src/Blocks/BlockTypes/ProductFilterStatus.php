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

	/**
	 * Stock status options.
	 *
	 * @var array
	 */
	protected $stock_status_options;

	/**
	 * All status options.
	 *
	 * @var array
	 */
	protected $all_status_options;

	const FILTER_STATUS_QUERY_VAR = 'filter_status';

	/**
	 * Registers the block type with WordPress.
	 *
	 * @return void
	 */
	protected function register_block_type() {
		register_block_type(
			$this->get_block_type(),
			$this->get_block_settings(),
		);
	}

	/**
	 * Get the block settings.
	 * Because this block processes dynamic stock status, the block settings
	 * will also need to be dynamic and therefore we cannot use block.json during
	 * registration.
	 *
	 * @return array $block_settings
	 */
	protected function get_block_settings() {
		$block_settings = [
			'name'         => 'woocommerce/product-filter-status',
			'version'      => '1.0.0',
			'title'        => __( 'Status (Experimental)', 'woocommerce' ),
			'description'  => __( 'Let shoppers filter by product status, like stock or sale.', 'woocommerce' ),
			'category'     => 'woocommerce',
			'keywords'     => [ 'WooCommerce' ],
			'textdomain'   => 'woocommerce',
			'api_version'  => 3,
			'ancestor'     => [ 'woocommerce/product-filters' ],
			'uses_context' => [ 'query', 'filterParams' ],
			'example'      => [
				'attributes' => [
					'isPreview' => true,
				],
			],
			'supports'     => [
				'interactivity'        => true,
				'html'                 => false,
				'color'                => [
					'text'                          => true,
					'background'                    => false,
					'__experimentalDefaultControls' => [
						'text' => false,
					],
				],
				'typography'           => [
					'fontSize'                      => true,
					'lineHeight'                    => true,
					'__experimentalFontWeight'      => true,
					'__experimentalFontFamily'      => true,
					'__experimentalFontStyle'       => true,
					'__experimentalTextTransform'   => true,
					'__experimentalTextDecoration'  => true,
					'__experimentalLetterSpacing'   => true,
					'__experimentalDefaultControls' => [
						'fontSize' => false,
					],
				],
				'spacing'              => [
					'margin'                        => true,
					'padding'                       => true,
					'blockGap'                      => true,
					'__experimentalDefaultControls' => [
						'margin'   => false,
						'padding'  => false,
						'blockGap' => false,
					],
				],
				'__experimentalBorder' => [
					'color'                         => true,
					'radius'                        => true,
					'style'                         => true,
					'width'                         => true,
					'__experimentalDefaultControls' => [
						'color'  => false,
						'radius' => false,
						'style'  => false,
						'width'  => false,
					],
				],
			],
			'attributes'   => [
				'showCounts'   => [
					'type'    => 'boolean',
					'default' => false,
				],
				'displayStyle' => [
					'type'    => 'string',
					'default' => 'woocommerce/product-filter-checkbox-list',
				],
				'isPreview'    => [
					'type'    => 'boolean',
					'default' => false,
				],
				'hideEmpty'    => [
					'type'    => 'boolean',
					'default' => true,
				],
				'clearButton'  => [
					'type'    => 'boolean',
					'default' => false,
				],
			],
		];

		$block_settings['render_callback'] = $this->get_block_type_render_callback();
		$block_settings['editor_script']   = $this->get_block_type_editor_script( 'handle' );
		$block_settings['editor_style']    = $this->get_block_type_editor_style();
		$block_settings['style']           = $this->get_block_type_style();

		if ( isset( $this->api_version ) && '2' === $this->api_version ) {
			$block_settings['api_version'] = 2;
		}

		/**
		 * We always want to load block styles separately, for every theme.
		 * When the core assets are loaded separately, other blocks' styles get
		 * enqueued separately too. Thus we only need to handle the remaining
		 * case.
		 */
		if (
			! is_admin() &&
			! wc_current_theme_is_fse_theme() &&
			$block_settings['style'] &&
			(
				! function_exists( 'wp_should_load_separate_core_block_assets' ) ||
				! wp_should_load_separate_core_block_assets()
			)
		) {
			$style_handles           = $block_settings['style'];
			$block_settings['style'] = null;
			add_filter(
				'render_block',
				function ( $html, $block ) use ( $style_handles ) {
					if ( $block['blockName'] === $this->get_block_type() ) {
						array_map( 'wp_enqueue_style', $style_handles );
					}
					return $html;
				},
				10,
				2
			);
		}

		if ( $this->stock_status_options ) {
			foreach ( wc_get_product_stock_status_options() as $key => $value ) {
				$block_settings['attributes'][ $key ] = [
					'type'    => 'boolean',
					'default' => true,
				];
			}
		}

		if ( $this->status_options ) {
			foreach ( $this->status_options as $key => $value ) {
				$block_settings['attributes'][ $key ] = [
					'type'    => 'boolean',
					'default' => true,
				];
			}
		}

		return $block_settings;
	}

	/**
	 * Initialize this block type.
	 *
	 * - Hook into WP lifecycle.
	 * - Register the block with WordPress.
	 */
	protected function initialize() {
		$this->stock_status_options = wc_get_product_stock_status_options();

		$this->status_options = array(
			'onsale' => __( 'On sale', 'woocommerce' ),
		);

		$this->all_status_options = array_merge( $this->stock_status_options, $this->status_options );

		parent::initialize();

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

		$status_options = $this->all_status_options;

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
		$this->asset_data_registry->add( 'stockStatusOptions', $this->stock_status_options );
		$this->asset_data_registry->add( 'hideOutOfStockItems', 'yes' === get_option( 'woocommerce_hide_out_of_stock_items' ) );
		$this->asset_data_registry->add( 'blockSettings', $this->get_block_settings() );
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
		$stock_status_data  = array();
		$onsale_status_data = array();
		$query              = isset( $_GET[ self::FILTER_STATUS_QUERY_VAR ] ) ? sanitize_text_field( wp_unslash( $_GET[ self::FILTER_STATUS_QUERY_VAR ] ) ) : '';  // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$selected_statuses  = array_filter( explode( ',', $query ) );
		$onsale_status_data = $attributes['onsale'] ? $this->get_onsale_status_counts( $block ) : array();
		$stock_status_data  = $this->get_stock_status_counts( $block, $attributes );
		$status_data        = array_merge( $stock_status_data, $onsale_status_data );
		$filter_params      = $block->context['filterParams'] ?? array();
		$query              = $filter_params[ self::FILTER_STATUS_QUERY_VAR ] ?? '';

		$filter_options = array_map(
			function ( $item ) use ( $selected_statuses, $attributes ) {
				$statuses = $this->all_status_options;
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
	 * @param array    $attributes Block attributes.
	 */
	private function get_stock_status_counts( $block, $attributes ) {
		$filters    = Package::container()->get( QueryFilters::class );
		$query_vars = ProductCollectionUtils::get_query_vars( $block, 1 );

		unset( $query_vars['filter_status'] );

		if ( ! empty( $query_vars['meta_query'] ) ) {
			// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
			$query_vars['meta_query'] = ProductCollectionUtils::remove_query_array( $query_vars['meta_query'], 'key', '_stock_status' );
		}

		$counts = $filters->get_stock_status_counts( $query_vars, $attributes );
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
}
