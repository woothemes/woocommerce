<?php

namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\Utils\ProductCollectionUtils;
use InvalidArgumentException;
use WP_Query;
use WC_Tax;

/**
 * ProductCollection class.
 */
class ProductCollection extends AbstractBlock {

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-collection';

	/**
	 * An associative array of collection handlers.
	 *
	 * @var array<string, callable> $collection_handler_store
	 * Keys are collection names, values are callable handlers for custom collection behavior.
	 */
	protected $collection_handler_store = array();

	/**
	 * The Block with its attributes before it gets rendered
	 *
	 * @var array
	 */
	protected $parsed_block;

	/**
	 * All the query args related to the filter by attributes block.
	 *
	 * @var array
	 */
	protected $attributes_filter_query_args = array();

	/**
	 * The render state of the product collection block.
	 *
	 * These props are runtime-based and reinitialize for every block on a page.
	 *
	 * @var array
	 */
	private $render_state = array(
		'has_results'          => false,
		'has_no_results_block' => false,
	);

	/**
	 * Instance of ProductQueryBuilder.
	 *
	 * @var ProductQueryBuilder
	 */
	protected $query_builder;

	/**
	 * Initialize this block type.
	 *
	 * - Hook into WP lifecycle.
	 * - Register the block with WordPress.
	 * - Hook into pre_render_block to update the query.
	 */
	protected function initialize() {
		parent::initialize();

		$this->query_builder = new ProductQueryBuilder();

		// Update query for frontend rendering.
		add_filter(
			'query_loop_block_query_vars',
			array( $this, 'build_frontend_query' ),
			10,
			3
		);

		add_filter(
			'pre_render_block',
			array( $this, 'add_support_for_filter_blocks' ),
			10,
			2
		);

		// Update the query for Editor.
		add_filter( 'rest_product_query', array( $this, 'update_rest_query_in_editor' ), 10, 2 );

		// Extend allowed `collection_params` for the REST API.
		add_filter( 'rest_product_collection_params', array( $this, 'extend_rest_query_allowed_params' ), 10, 1 );

		// Provide location context into block's context.
		add_filter( 'render_block_context', array( $this, 'provide_location_context_for_inner_blocks' ), 11, 1 );

		// Disable block render if the ProductTemplate block is empty.
		add_filter(
			'render_block_woocommerce/product-template',
			function ( $html ) {
				$this->render_state['has_results'] = ! empty( $html );
				return $html;
			},
			100,
			1
		);

		// Enable block render if the ProductCollectionNoResults block is rendered.
		add_filter(
			'render_block_woocommerce/product-collection-no-results',
			function ( $html ) {
				$this->render_state['has_no_results_block'] = ! empty( $html );
				return $html;
			},
			100,
			1
		);

		// Interactivity API: Add navigation directives to the product collection block.
		add_filter( 'render_block_woocommerce/product-collection', array( $this, 'handle_rendering' ), 10, 2 );
		add_filter( 'render_block_core/query-pagination', array( $this, 'add_navigation_link_directives' ), 10, 3 );
		add_filter( 'render_block_core/post-title', array( $this, 'add_product_title_click_event_directives' ), 10, 3 );

		// Disable client-side-navigation if incompatible blocks are detected.
		add_filter( 'render_block_data', array( $this, 'disable_enhanced_pagination' ), 10, 1 );

		$this->register_core_collections();
	}

	/**
	 * Get the styles for the list element (fixed width).
	 *
	 * @param string $fixed_width Fixed width value.
	 * @return string
	 */
	protected function get_list_styles( $fixed_width ) {
		$style = '';

		if ( isset( $fixed_width ) ) {
			$style .= sprintf( 'width:%s;', esc_attr( $fixed_width ) );
			$style .= 'margin: 0 auto;';
		}
		return $style;
	}

	/**
	 * Set the style attribute for fixed width.
	 *
	 * @param WP_HTML_Tag_Processor $p          The HTML tag processor.
	 * @param string                $fixed_width The fixed width value.
	 */
	private function set_fixed_width_style( $p, $fixed_width ) {
		$p->set_attribute( 'style', $this->get_list_styles( $fixed_width ) );
	}

	/**
	 * Handle block dimensions if width type is set to 'fixed'.
	 *
	 * @param WP_HTML_Tag_Processor $p     The HTML tag processor.
	 * @param array                 $block The block details.
	 */
	private function handle_block_dimensions( $p, $block ) {
		if ( isset( $block['attrs']['dimensions'] ) && isset( $block['attrs']['dimensions']['widthType'] ) ) {
			if ( 'fixed' === $block['attrs']['dimensions']['widthType'] ) {
				$this->set_fixed_width_style( $p, $block['attrs']['dimensions']['fixedWidth'] );
			}
		}
	}

	/**
	 * Handle the rendering of the block.
	 *
	 * @param string $block_content The block content about to be rendered.
	 * @param array  $block The block being rendered.
	 *
	 * @return string
	 */
	public function handle_rendering( $block_content, $block ) {
		if ( $this->should_prevent_render() ) {
			return ''; // Prevent rendering.
		}

		// Reset the render state for the next render.
		$this->reset_render_state();

		return $this->enhance_product_collection_with_interactivity( $block_content, $block );
	}

	/**
	 * Check if the block should be prevented from rendering.
	 *
	 * @return bool
	 */
	private function should_prevent_render() {
		return ! $this->render_state['has_results'] && ! $this->render_state['has_no_results_block'];
	}

	/**
	 * Reset the render state.
	 */
	private function reset_render_state() {
		$this->render_state = array(
			'has_results'          => false,
			'has_no_results_block' => false,
		);
	}



	/**
	 * Provides the location context to each inner block of the product collection block.
	 * Hint: Only blocks using the 'query' context will be affected.
	 *
	 * The sourceData structure depends on the context type as follows:
	 * - site:    [ ]
	 * - order:   [ 'orderId'    => int ]
	 * - cart:    [ 'productIds' => int[] ]
	 * - archive: [ 'taxonomy'   => string, 'termId' => int ]
	 * - product: [ 'productId'  => int ]
	 *
	 * @example array(
	 *   'type'       => 'product',
	 *   'sourceData' => array( 'productId' => 123 ),
	 * )
	 *
	 * @param array $context  The block context.
	 * @return array $context {
	 *     The block context including the product collection location context.
	 *
	 *     @type array $productCollectionLocation {
	 *         @type string  $type        The context type. Possible values are 'site', 'order', 'cart', 'archive', 'product'.
	 *         @type array   $sourceData  The context source data. Can be the product ID of the viewed product, the order ID of the current order viewed, etc. See structure above for more details.
	 *     }
	 * }
	 */
	public function provide_location_context_for_inner_blocks( $context ) {
		// Run only on frontend.
		// This is needed to avoid SSR renders while in editor. @see https://github.com/woocommerce/woocommerce/issues/45181.
		if ( is_admin() || \WC()->is_rest_api_request() ) {
			return $context;
		}

		// Target only product collection's inner blocks that use the 'query' context.
		if ( ! isset( $context['query'] ) || ! isset( $context['query']['isProductCollectionBlock'] ) || ! $context['query']['isProductCollectionBlock'] ) {
			return $context;
		}

		$is_in_single_product                 = isset( $context['singleProduct'] ) && ! empty( $context['postId'] );
		$context['productCollectionLocation'] = $is_in_single_product ? array(
			'type'       => 'product',
			'sourceData' => array(
				'productId' => absint( $context['postId'] ),
			),
		) : $this->get_location_context();

		return $context;
	}

	/**
	 * Get the global location context.
	 * Serve as a runtime cache for the location context.
	 *
	 * @see ProductCollectionUtils::parse_frontend_location_context()
	 *
	 * @return array The location context.
	 */
	private function get_location_context() {
		static $location_context = null;
		if ( null === $location_context ) {
			$location_context = ProductCollectionUtils::parse_frontend_location_context();
		}
		return $location_context;
	}

	/**
	 * Check if next tag is a PC block.
	 *
	 * @param WP_HTML_Tag_processor $p Initial tag processor.
	 *
	 * @return bool Answer if PC block is available.
	 */
	private function is_next_tag_product_collection( $p ) {
		return $p->next_tag( array( 'class_name' => 'wp-block-woocommerce-product-collection' ) );
	}

	/**
	 * Set PC block namespace for Interactivity API.
	 *
	 * @param WP_HTML_Tag_processor $p Initial tag processor.
	 */
	private function set_product_collection_namespace( $p ) {
		$p->set_attribute( 'data-wc-interactive', wp_json_encode( array( 'namespace' => 'woocommerce/product-collection' ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ) );
	}

	/**
	 * Attach the init directive to Product Collection block to call
	 * the onRender callback.
	 *
	 * @param string $block_content The HTML content of the block.
	 * @param string $collection Collection type.
	 *
	 * @return string Updated HTML content.
	 */
	private function add_rendering_callback( $block_content, $collection ) {
		$p = new \WP_HTML_Tag_Processor( $block_content );

		// Add `data-init to the product collection block so we trigger JS event on render.
		if ( $this->is_next_tag_product_collection( $p ) ) {
			$p->set_attribute(
				'data-wc-init',
				'callbacks.onRender'
			);
			$p->set_attribute(
				'data-wc-context',
				$collection ? wp_json_encode(
					array( 'collection' => $collection ),
					JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP
				) : '{}'
			);
		}

		return $p->get_updated_html();
	}

	/**
	 * Attach all the Interactivity API directives responsible
	 * for client-side navigation.
	 *
	 * @param string $block_content The HTML content of the block.
	 *
	 * @return string Updated HTML content.
	 */
	private function enable_client_side_navigation( $block_content ) {
		$p = new \WP_HTML_Tag_Processor( $block_content );

		// Add `data-wc-navigation-id to the product collection block.
		if ( $this->is_next_tag_product_collection( $p ) ) {
			$p->set_attribute(
				'data-wc-navigation-id',
				'wc-product-collection-' . $this->parsed_block['attrs']['queryId']
			);
			$current_context = json_decode( $p->get_attribute( 'data-wc-context' ) ?? '{}', true );
			$p->set_attribute(
				'data-wc-context',
				wp_json_encode(
					array_merge(
						$current_context,
						array(
							// The message to be announced by the screen reader when the page is loading or loaded.
							'accessibilityLoadingMessage'  => __( 'Loading page, please wait.', 'woocommerce' ),
							'accessibilityLoadedMessage'   => __( 'Page Loaded.', 'woocommerce' ),
							// We don't prefetch the links if user haven't clicked on pagination links yet.
							// This way we avoid prefetching when the page loads.
							'isPrefetchNextOrPreviousLink' => false,
						),
					),
					JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP
				)
			);
			$block_content = $p->get_updated_html();
		}

		/**
		 * Add two div's:
		 * 1. Pagination animation for visual users.
		 * 2. Accessibility div for screen readers, to announce page load states.
		 */
		$last_tag_position                = strripos( $block_content, '</div>' );
		$accessibility_and_animation_html = '
				<div
					data-wc-interactive="{&quot;namespace&quot;:&quot;woocommerce/product-collection&quot;}"
					class="wc-block-product-collection__pagination-animation"
					data-wc-class--start-animation="state.startAnimation"
					data-wc-class--finish-animation="state.finishAnimation">
				</div>
				<div
					data-wc-interactive="{&quot;namespace&quot;:&quot;woocommerce/product-collection&quot;}"
					class="screen-reader-text"
					aria-live="polite"
					data-wc-text="context.accessibilityMessage">
				</div>
			';
		return substr_replace(
			$block_content,
			$accessibility_and_animation_html,
			$last_tag_position,
			0
		);
	}

	/**
	 * Enhances the Product Collection block with client-side pagination.
	 *
	 * This function identifies Product Collection blocks and adds necessary data attributes
	 * to enable client-side navigation and animation effects. It also enqueues the Interactivity API runtime.
	 *
	 * @param string $block_content The HTML content of the block.
	 * @param array  $block         Block details, including its attributes.
	 *
	 * @return string Updated block content with added interactivity attributes.
	 */
	public function enhance_product_collection_with_interactivity( $block_content, $block ) {
		$is_product_collection_block = $block['attrs']['query']['isProductCollectionBlock'] ?? false;

		if ( $is_product_collection_block ) {
			// Enqueue the Interactivity API runtime and set the namespace.
			wp_enqueue_script( 'wc-interactivity' );
			$p = new \WP_HTML_Tag_Processor( $block_content );
			if ( $this->is_next_tag_product_collection( $p ) ) {
				$this->set_product_collection_namespace( $p );
			}
			// Check if dimensions need to be set and handle accordingly.
			$this->handle_block_dimensions( $p, $block );
			$block_content = $p->get_updated_html();

			$collection    = $block['attrs']['collection'] ?? '';
			$block_content = $this->add_rendering_callback( $block_content, $collection );

			$is_enhanced_pagination_enabled = ! ( $block['attrs']['forcePageReload'] ?? false );
			if ( $is_enhanced_pagination_enabled ) {
				$block_content = $this->enable_client_side_navigation( $block_content );
			}
		}
		return $block_content;
	}

	/**
	 * Add interactive links to all anchors inside the Query Pagination block.
	 * This enabled client-side navigation for the product collection block.
	 *
	 * @param string    $block_content The block content.
	 * @param array     $block         The full block, including name and attributes.
	 * @param \WP_Block $instance      The block instance.
	 */
	public function add_navigation_link_directives( $block_content, $block, $instance ) {
		$query_context                  = $instance->context['query'] ?? array();
		$is_product_collection_block    = $query_context['isProductCollectionBlock'] ?? false;
		$query_id                       = $instance->context['queryId'] ?? null;
		$parsed_query_id                = $this->parsed_block['attrs']['queryId'] ?? null;
		$is_enhanced_pagination_enabled = ! ( $this->parsed_block['attrs']['forcePageReload'] ?? false );

		// Only proceed if the block is a product collection block,
		// enhanced pagination is enabled and query IDs match.
		if ( $is_product_collection_block && $is_enhanced_pagination_enabled && $query_id === $parsed_query_id ) {
			$block_content = $this->process_pagination_links( $block_content );
		}

		return $block_content;
	}

	/**
	 * Add interactivity to the Product Title block within Product Collection.
	 * This enables the triggering of a custom event when the product title is clicked.
	 *
	 * @param string    $block_content The block content.
	 * @param array     $block         The full block, including name and attributes.
	 * @param \WP_Block $instance      The block instance.
	 * @return string   Modified block content with added interactivity.
	 */
	public function add_product_title_click_event_directives( $block_content, $block, $instance ) {
		$namespace              = $instance->attributes['__woocommerceNamespace'] ?? '';
		$is_product_title_block = 'woocommerce/product-collection/product-title' === $namespace;
		$is_link                = $instance->attributes['isLink'] ?? false;

		// Only proceed if the block is a Product Title (Post Title variation) block.
		if ( $is_product_title_block && $is_link ) {
			$p = new \WP_HTML_Tag_Processor( $block_content );
			$p->next_tag( array( 'class_name' => 'wp-block-post-title' ) );
			$is_anchor = $p->next_tag( array( 'tag_name' => 'a' ) );

			if ( $is_anchor ) {
				$p->set_attribute( 'data-wc-on--click', 'woocommerce/product-collection::actions.viewProduct' );

				$block_content = $p->get_updated_html();
			}
		}

		return $block_content;
	}

	/**
	 * Process pagination links within the block content.
	 *
	 * @param string $block_content The block content.
	 * @return string The updated block content.
	 */
	private function process_pagination_links( $block_content ) {
		if ( ! $block_content ) {
			return $block_content;
		}

		$p = new \WP_HTML_Tag_Processor( $block_content );
		$p->next_tag( array( 'class_name' => 'wp-block-query-pagination' ) );

		// This will help us to find the start of the block content using the `seek` method.
		$p->set_bookmark( 'start' );

		$this->update_pagination_anchors( $p, 'page-numbers', 'product-collection-pagination-numbers' );
		$this->update_pagination_anchors( $p, 'wp-block-query-pagination-next', 'product-collection-pagination--next' );
		$this->update_pagination_anchors( $p, 'wp-block-query-pagination-previous', 'product-collection-pagination--previous' );

		return $p->get_updated_html();
	}

	/**
	 * Sets up data attributes required for interactivity and client-side navigation.
	 *
	 * @param \WP_HTML_Tag_Processor $processor The HTML tag processor.
	 * @param string                 $class_name The class name of the anchor tags.
	 * @param string                 $key_prefix The prefix for the data-wc-key attribute.
	 */
	private function update_pagination_anchors( $processor, $class_name, $key_prefix ) {
		// Start from the beginning of the block content.
		$processor->seek( 'start' );

		while ( $processor->next_tag(
			array(
				'tag_name'   => 'a',
				'class_name' => $class_name,
			)
		) ) {
			$this->set_product_collection_namespace( $processor );
			$processor->set_attribute( 'data-wc-on--click', 'actions.navigate' );
			$processor->set_attribute( 'data-wc-key', $key_prefix . '--' . esc_attr( wp_rand() ) );

			if ( in_array( $class_name, array( 'wp-block-query-pagination-next', 'wp-block-query-pagination-previous' ), true ) ) {
				$processor->set_attribute( 'data-wc-watch', 'callbacks.prefetch' );
				$processor->set_attribute( 'data-wc-on--mouseenter', 'actions.prefetchOnHover' );
			}
		}
	}

	/**
	 * Verifies if the inner block is compatible with Interactivity API.
	 *
	 * @param string $block_name Name of the block to verify.
	 * @return boolean
	 */
	private function is_block_compatible( $block_name ) {
		// Check for explicitly unsupported blocks.
		$unsupported_blocks = array(
			'core/post-content',
			'woocommerce/mini-cart',
			'woocommerce/featured-product',
			'woocommerce/active-filters',
			'woocommerce/price-filter',
			'woocommerce/stock-filter',
			'woocommerce/attribute-filter',
			'woocommerce/rating-filter',
		);

		if ( in_array( $block_name, $unsupported_blocks, true ) ) {
			return false;
		}

		// Check for supported prefixes.
		if (
			str_starts_with( $block_name, 'core/' ) ||
			str_starts_with( $block_name, 'woocommerce/' )
		) {
			return true;
		}

		// Otherwise block is unsupported.
		return false;
	}

	/**
	 * Check inner blocks of Product Collection block if there's one
	 * incompatible with the Interactivity API and if so, disable client-side
	 * navigation.
	 *
	 * @param array $parsed_block The block being rendered.
	 * @return string Returns the parsed block, unmodified.
	 */
	public function disable_enhanced_pagination( $parsed_block ) {
		static $enhanced_query_stack               = array();
		static $dirty_enhanced_queries             = array();
		static $render_product_collection_callback = null;

		$block_name                  = $parsed_block['blockName'];
		$is_product_collection_block = $parsed_block['attrs']['query']['isProductCollectionBlock'] ?? false;
		$force_page_reload_global    =
			$parsed_block['attrs']['forcePageReload'] ?? false &&
			isset( $block['attrs']['queryId'] );

		if (
			$is_product_collection_block &&
			'woocommerce/product-collection' === $block_name &&
			! $force_page_reload_global
		) {
			$enhanced_query_stack[] = $parsed_block['attrs']['queryId'];

			if ( ! isset( $render_product_collection_callback ) ) {
				/**
				 * Filter that disables the enhanced pagination feature during block
				 * rendering when a plugin block has been found inside. It does so
				 * by adding an attribute called `data-wp-navigation-disabled` which
				 * is later handled by the front-end logic.
				 *
				 * @param string   $content  The block content.
				 * @param array    $block    The full block, including name and attributes.
				 * @return string Returns the modified output of the query block.
				 */
				$render_product_collection_callback = static function ( $content, $block ) use ( &$enhanced_query_stack, &$dirty_enhanced_queries, &$render_product_collection_callback ) {
					$force_page_reload =
						$parsed_block['attrs']['forcePageReload'] ?? false &&
						isset( $block['attrs']['queryId'] );

					if ( $force_page_reload ) {
						return $content;
					}

					if ( isset( $dirty_enhanced_queries[ $block['attrs']['queryId'] ] ) ) {
						$p = new \WP_HTML_Tag_Processor( $content );
						if ( $p->next_tag() ) {
							$p->set_attribute( 'data-wc-navigation-disabled', 'true' );
						}
						$content = $p->get_updated_html();
						$dirty_enhanced_queries[ $block['attrs']['queryId'] ] = null;
					}

					array_pop( $enhanced_query_stack );

					if ( empty( $enhanced_query_stack ) ) {
						remove_filter( 'render_block_woocommerce/product-collection', $render_product_collection_callback );
						$render_product_collection_callback = null;
					}

					return $content;
				};

				add_filter( 'render_block_woocommerce/product-collection', $render_product_collection_callback, 10, 2 );
			}
		} elseif (
			! empty( $enhanced_query_stack ) &&
			isset( $block_name ) &&
			! $this->is_block_compatible( $block_name )
		) {
			foreach ( $enhanced_query_stack as $query_id ) {
				$dirty_enhanced_queries[ $query_id ] = true;
			}
		}

		return $parsed_block;
	}

	/**
	 * Extra data passed through from server to client for block.
	 *
	 * @param array $attributes  Any attributes that currently are available from the block.
	 *                           Note, this will be empty in the editor context when the block is
	 *                           not in the post content on editor load.
	 */
	protected function enqueue_data( array $attributes = array() ) {
		parent::enqueue_data( $attributes );

		// The `loop_shop_per_page` filter can be found in WC_Query::product_query().
		// phpcs:ignore WooCommerce.Commenting.CommentHooks.MissingHookComment
		$this->asset_data_registry->add( 'loopShopPerPage', apply_filters( 'loop_shop_per_page', wc_get_default_products_per_row() * wc_get_default_product_rows_per_page() ) );
	}

	/**
	 * Update the query for the product query block in Editor.
	 *
	 * @param array           $query   Query args.
	 * @param WP_REST_Request $request Request.
	 */
	public function update_rest_query_in_editor( $query, $request ): array {
		// Only update the query if this is a product collection block.
		$is_product_collection_block = $request->get_param( 'isProductCollectionBlock' );
		if ( ! $is_product_collection_block ) {
			return $query;
		}

		$product_collection_query_context = $request->get_param( 'productCollectionQueryContext' );
		$collection_args                  = array(
			'name'                      => $product_collection_query_context['collection'] ?? '',
			// The editor uses a REST query to grab product post types. This means we don't have a block
			// instance to work with and the client needs to provide the location context.
			'productCollectionLocation' => $request->get_param( 'productCollectionLocation' ),
		);

		// Allow collections to modify the collection arguments passed to the query builder.
		$handlers = $this->collection_handler_store[ $collection_args['name'] ] ?? null;
		if ( isset( $handlers['editor_args'] ) ) {
			$collection_args = call_user_func( $handlers['editor_args'], $collection_args, $query, $request );
		}

		// When requested, short-circuit the query and return the preview query args.
		$preview_state = $request->get_param( 'previewState' );
		if ( isset( $preview_state['isPreview'] ) && 'true' === $preview_state['isPreview'] ) {
			return $this->query_builder->get_preview_query_args( $collection_args, $query, $request );
		}

		$orderby             = $request->get_param( 'orderby' );
		$on_sale             = $request->get_param( 'woocommerceOnSale' ) === 'true';
		$stock_status        = $request->get_param( 'woocommerceStockStatus' );
		$product_attributes  = $request->get_param( 'woocommerceAttributes' );
		$handpicked_products = $request->get_param( 'woocommerceHandPickedProducts' );
		$featured            = $request->get_param( 'featured' );
		$time_frame          = $request->get_param( 'timeFrame' );
		$price_range         = $request->get_param( 'priceRange' );
		// This argument is required for the tests to PHP Unit Tests to run correctly.
		// Most likely this argument is being accessed in the test environment image.
		$query['author'] = '';

		// Use ProductQueryBuilder to get the final query args.
		return $this->query_builder->get_final_query_args(
			$collection_args,
			$query,
			array(
				'orderby'             => $orderby,
				'on_sale'             => $on_sale,
				'stock_status'        => $stock_status,
				'product_attributes'  => $product_attributes,
				'handpicked_products' => $handpicked_products,
				'featured'            => $featured,
				'timeFrame'           => $time_frame,
				'priceRange'          => $price_range,
			)
		);
	}

	/**
	 * Add support for filter blocks:
	 * - Price filter block
	 * - Attributes filter block
	 * - Rating filter block
	 * - In stock filter block etc.
	 *
	 * @param array $pre_render   The pre-rendered block.
	 * @param array $parsed_block The parsed block.
	 */
	public function add_support_for_filter_blocks( $pre_render, $parsed_block ) {
		$is_product_collection_block = $parsed_block['attrs']['query']['isProductCollectionBlock'] ?? false;

		if ( ! $is_product_collection_block ) {
			return $pre_render;
		}

		$this->parsed_block = $parsed_block;
		$this->asset_data_registry->add( 'hasFilterableProducts', true );
		/**
		 * It enables the page to refresh when a filter is applied, ensuring that the product collection block,
		 * which is a server-side rendered (SSR) block, retrieves the products that match the filters.
		 */
		$this->asset_data_registry->add( 'isRenderingPhpTemplate', true );

		return $pre_render;
	}

	/**
	 * Return a custom query based on attributes, filters and global WP_Query.
	 *
	 * @param WP_Query $query The WordPress Query.
	 * @param WP_Block $block The block being rendered.
	 * @param int      $page  The page number.
	 *
	 * @return array
	 */
	public function build_frontend_query( $query, $block, $page ) {
		// If not in context of product collection block, return the query as is.
		$is_product_collection_block = $block->context['query']['isProductCollectionBlock'] ?? false;
		if ( ! $is_product_collection_block ) {
			return $query;
		}

		$block_context_query = $block->context['query'];

		// phpcs:ignore WordPress.DB.SlowDBQuery
		$block_context_query['tax_query'] = ! empty( $query['tax_query'] ) ? $query['tax_query'] : array();

		$inherit    = $block->context['query']['inherit'] ?? false;
		$filterable = $block->context['query']['filterable'] ?? false;

		$is_exclude_applied_filters = ! ( $inherit || $filterable );

		$collection_args = array(
			'name'                      => $block->context['collection'] ?? '',
			'productCollectionLocation' => $block->context['productCollectionLocation'] ?? null,
		);

		// Use ProductQueryBuilder to construct the query.
		return $this->query_builder->get_final_frontend_query(
			$collection_args,
			$block_context_query,
			$page,
			$is_exclude_applied_filters
		);
	}

	/**
	 * Extends allowed `collection_params` for the REST API
	 *
	 * By itself, the REST API doesn't accept custom `orderby` values,
	 * even if they are supported by a custom post type.
	 *
	 * @param array $params  A list of allowed `orderby` values.
	 *
	 * @return array
	 */
	public function extend_rest_query_allowed_params( $params ) {
		$original_enum             = isset( $params['orderby']['enum'] ) ? $params['orderby']['enum'] : array();
		$params['orderby']['enum'] = array_unique( array_merge( $original_enum, $this->query_builder->get_custom_order_opts() ) );
		return $params;
	}

	/**
	 * Registers handlers for a collection.
	 *
	 * @param string        $collection_name The name of the custom collection.
	 * @param callable      $build_query     A hook returning any custom query arguments to merge with the collection's query.
	 * @param callable|null $frontend_args   An optional hook that returns any frontend collection arguments to pass to the query builder.
	 * @param callable|null $editor_args     An optional hook that returns any REST collection arguments to pass to the query builder.
	 * @param callable|null $preview_query   An optional hook that returns a query to use in preview mode.
	 *
	 * @throws \InvalidArgumentException If collection handlers are already registered for the given collection name.
	 */
	protected function register_collection_handlers( $collection_name, $build_query, $frontend_args = null, $editor_args = null, $preview_query = null ) {
		if ( isset( $this->collection_handler_store[ $collection_name ] ) ) {
			throw new \InvalidArgumentException( 'Collection handlers already registered for ' . esc_html( $collection_name ) );
		}

		$this->collection_handler_store[ $collection_name ] = array(
			'build_query'   => $build_query,
			'frontend_args' => $frontend_args,
			'editor_args'   => $editor_args,
			'preview_query' => $preview_query,
		);
	}

	/**
	 * Registers any handlers for the core collections.
	 */
	protected function register_core_collections() {
		$this->register_collection_handlers(
			'woocommerce/product-collection/hand-picked',
			function ( $collection_args, $common_query_values, $query ) {
				// For Hand-Picked collection, if no products are selected, we should return an empty result set.
				// This ensures that the collection doesn't display any products until the user explicitly chooses them.
				if ( empty( $query['handpicked_products'] ) ) {
					return array(
						'post__in' => array( -1 ),
					);
				}
			}
		);

		$this->register_collection_handlers(
			'woocommerce/product-collection/related',
			function ( $collection_args ) {
				// No products should be shown if no related product reference is set.
				if ( empty( $collection_args['relatedProductReference'] ) ) {
					return array(
						'post__in' => array( -1 ),
					);
				}

				$related_products = wc_get_related_products(
					$collection_args['relatedProductReference'],
					// Use a higher limit so that the result set contains enough products for the collection to subsequently filter.
					100
				);
				if ( empty( $related_products ) ) {
					return array(
						'post__in' => array( -1 ),
					);
				}

				// Have it filter the results to products related to the one provided.
				return array(
					'post__in' => $related_products,
				);
			},
			function ( $collection_args, $query ) {
				$product_reference = $query['productReference'] ?? null;
				// Infer the product reference from the location if an explicit product is not set.
				if ( empty( $product_reference ) ) {
					$location = $collection_args['productCollectionLocation'];
					if ( isset( $location['type'] ) && 'product' === $location['type'] ) {
						$product_reference = $location['sourceData']['productId'];
					}
				}

				$collection_args['relatedProductReference'] = $product_reference;
				return $collection_args;
			},
			function ( $collection_args, $query, $request ) {
				$product_reference = $request->get_param( 'productReference' );
				// In some cases the editor will send along block location context that we can infer the product reference from.
				if ( empty( $product_reference ) ) {
					$location = $collection_args['productCollectionLocation'];
					if ( isset( $location['type'] ) && 'product' === $location['type'] ) {
						$product_reference = $location['sourceData']['productId'];
					}
				}

				$collection_args['relatedProductReference'] = $product_reference;
				return $collection_args;
			}
		);

		$this->register_collection_handlers(
			'woocommerce/product-collection/upsells',
			function ( $collection_args ) {
				$product_reference = $collection_args['upsellsProductReferences'] ?? null;
				// No products should be shown if no upsells product reference is set.
				if ( empty( $product_reference ) ) {
					return array(
						'post__in' => array( -1 ),
					);
				}

				$products = array_map( 'wc_get_product', $product_reference );

				if ( empty( $products ) ) {
					return array(
						'post__in' => array( -1 ),
					);
				}

				$all_upsells = array_reduce(
					$products,
					function ( $acc, $product ) {
						return array_merge(
							$acc,
							$product->get_upsell_ids()
						);
					},
					array()
				);

				// Remove duplicates and product references. We don't want to display
				// what's already in cart.
				$unique_upsells = array_unique( $all_upsells );
				$upsells        = array_diff( $unique_upsells, $product_reference );

				return array(
					'post__in' => empty( $upsells ) ? array( -1 ) : $upsells,
				);
			},
			function ( $collection_args, $query ) {
				$product_references = isset( $query['productReference'] ) ? array( $query['productReference'] ) : null;
				// Infer the product reference from the location if an explicit product is not set.
				if ( empty( $product_references ) ) {
					$location = $collection_args['productCollectionLocation'];
					if ( isset( $location['type'] ) && 'product' === $location['type'] ) {
						$product_references = array( $location['sourceData']['productId'] );
					}

					if ( isset( $location['type'] ) && 'cart' === $location['type'] ) {
						$product_references = $location['sourceData']['productIds'];
					}

					if ( isset( $location['type'] ) && 'order' === $location['type'] ) {
						$product_references = $this->get_product_ids_from_order( $location['sourceData']['orderId'] ?? 0 );
					}
				}

				$collection_args['upsellsProductReferences'] = $product_references;
				return $collection_args;
			},
			function ( $collection_args, $query, $request ) {
				$product_reference = $request->get_param( 'productReference' );
				// In some cases the editor will send along block location context that we can infer the product reference from.
				if ( empty( $product_reference ) ) {
					$location = $collection_args['productCollectionLocation'];
					if ( isset( $location['type'] ) && 'product' === $location['type'] ) {
						$product_reference = $location['sourceData']['productId'];
					}
				}

				$collection_args['upsellsProductReferences'] = array( $product_reference );
				return $collection_args;
			}
		);

		$this->register_collection_handlers(
			'woocommerce/product-collection/cross-sells',
			function ( $collection_args ) {
				$product_reference = $collection_args['crossSellsProductReferences'] ?? null;
				// No products should be shown if no cross-sells product reference is set.
				if ( empty( $product_reference ) ) {
					return array(
						'post__in' => array( -1 ),
					);
				}

				$products = array_filter( array_map( 'wc_get_product', $product_reference ) );

				if ( empty( $products ) ) {
					return array(
						'post__in' => array( -1 ),
					);
				}

				$product_ids = array_map(
					function ( $product ) {
						return $product->get_id();
					},
					$products
				);

				$all_cross_sells = array_reduce(
					$products,
					function ( $acc, $product ) {
						return array_merge(
							$acc,
							$product->get_cross_sell_ids()
						);
					},
					array()
				);

				// Remove duplicates and product references. We don't want to display
				// what's already in cart.
				$unique_cross_sells = array_unique( $all_cross_sells );
				$cross_sells        = array_diff( $unique_cross_sells, $product_ids );

				return array(
					'post__in' => empty( $cross_sells ) ? array( -1 ) : $cross_sells,
				);
			},
			function ( $collection_args, $query ) {
				$product_references = isset( $query['productReference'] ) ? array( $query['productReference'] ) : null;
				// Infer the product reference from the location if an explicit product is not set.
				if ( empty( $product_references ) ) {
					$location = $collection_args['productCollectionLocation'];
					if ( isset( $location['type'] ) && 'product' === $location['type'] ) {
						$product_references = array( $location['sourceData']['productId'] );
					}

					if ( isset( $location['type'] ) && 'cart' === $location['type'] ) {
						$product_references = $location['sourceData']['productIds'];
					}

					if ( isset( $location['type'] ) && 'order' === $location['type'] ) {
						$product_references = $this->get_product_ids_from_order( $location['sourceData']['orderId'] ?? 0 );
					}
				}

				$collection_args['crossSellsProductReferences'] = $product_references;
				return $collection_args;
			},
			function ( $collection_args, $query, $request ) {
				$product_reference = $request->get_param( 'productReference' );
				// In some cases the editor will send along block location context that we can infer the product reference from.
				if ( empty( $product_reference ) ) {
					$location = $collection_args['productCollectionLocation'];
					if ( isset( $location['type'] ) && 'product' === $location['type'] ) {
						$product_reference = $location['sourceData']['productId'];
					}
				}

				$collection_args['crossSellsProductReferences'] = array( $product_reference );
				return $collection_args;
			}
		);
	}

	/**
	 * Get product IDs from an order.
	 *
	 * @param int $order_id The order ID.
	 * @return array<int> The product IDs.
	 */
	private function get_product_ids_from_order( $order_id ) {
		$product_references = array();
		if ( empty( $order_id ) ) {
			return $product_references;
		}

		$order = wc_get_order( $order_id );
		if ( $order ) {
			$product_references = array_filter(
				array_map(
					function ( $item ) {
						return $item->get_product_id();
					},
					$order->get_items( 'line_item' )
				)
			);
		}
		return $product_references;
	}
}
