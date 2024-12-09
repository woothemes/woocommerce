<?php
declare(strict_types=1);

namespace Automattic\WooCommerce\Blocks\BlockTypes\ProductCollection;

use Automattic\WooCommerce\Blocks\BlockTypes\ProductCollection\Utils as ProductCollectionUtils;
use WP_HTML_Tag_Processor;

/**
 * Renderer class.
 * Handles rendering of the block and adds interactivity.
 */
class Renderer {

	/**
	 * The render state of the product collection block.
	 *
	 * @var array
	 */
	private $render_state = [
		'has_results'          => false,
		'has_no_results_block' => false,
	];

	/**
	 * The Block with its attributes before it gets rendered
	 *
	 * @var array
	 */
	protected $parsed_block;

	/**
	 * Constructor.
	 */
	public function __construct() {
		// Interactivity API: Add navigation directives to the product collection block.
		add_filter( 'render_block_woocommerce/product-collection', array( $this, 'handle_rendering' ), 10, 2 );

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

		// Enable block render if the NoResults block is rendered.
		add_filter(
			'render_block_woocommerce/product-collection-no-results',
			function ( $html ) {
				$this->render_state['has_no_results_block'] = ! empty( $html );
				return $html;
			},
			100,
			1
		);
		add_filter( 'render_block_core/query-pagination', array( $this, 'add_navigation_link_directives' ), 10, 3 );

		// // Provide location context into block's context.
		add_filter( 'render_block_context', array( $this, 'provide_location_context_for_inner_blocks' ), 11, 1 );
	}

	/**
	 * Set the parsed block.
	 *
	 * @param array $block The block to be parsed.
	 */
	public function set_parsed_block( $block ) {
		$this->parsed_block = $block;
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
		if ( $this->is_next_tag_product_collection( $p ) && isset( $this->parsed_block ) ) {
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
}
