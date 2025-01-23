<?php
declare(strict_types=1);
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * BlockifiedProductDetails class.
 */
class BlockifiedProductDetails extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'blockified-product-details';

	/**
	 * Create accordion item block markup
	 *
	 * @param string $title Accordion Title.
	 * @param string $content Accordion Content.
	 * @return array
	 */
	private function create_accordion_item( $title, $content ) {
		$markup_html = sprintf(
			'<!-- wp:woocommerce/accordion-item {"openByDefault": false} --><div class="wp-block-woocommerce-accordion-item"><!-- wp:woocommerce/accordion-header -->
		<h3 class="wp-block-woocommerce-accordion-header accordion-item__heading"><button class="accordion-item__toggle"><span>%1$s</span><span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path></svg></span></button></h3>
		<!-- /wp:woocommerce/accordion-header -->
		<!-- wp:woocommerce/accordion-panel -->
		<div class="wp-block-woocommerce-accordion-panel"><div class="accordion-content__wrapper"><!-- wp:html -->%2$s<!-- /wp:html --></div></div><!-- /wp:woocommerce/accordion-panel --></div><!-- /wp:woocommerce/accordion-item --></div>',
			$title,
			$content
		);
		return parse_blocks( $markup_html )[0];
	}


	/**
	 * Add new accordion item to the parsed block
	 *
	 * @param array $parsed_block Parsed block.
	 * @param array $parsed_tabs_added_via_hook Parsed tabs added via hook.
	 */
	private function add_new_accordion_item( &$parsed_block, $parsed_tabs_added_via_hook ) {
		foreach ( $parsed_block['innerBlocks'] as &$inner_block ) {
			if ( 'woocommerce/accordion-group' === $inner_block['blockName'] ) {
					$inner_block['innerBlocks'] = array_merge( $inner_block['innerBlocks'], $parsed_tabs_added_via_hook );
					array_pop( $inner_block['innerContent'] );
				foreach ( $parsed_tabs_added_via_hook as $block ) {
					// It is necessary update the innerContent given that the block is being added to the innerBlocks array.
					$inner_block['innerContent'][] = "\n\n";
					$inner_block['innerContent'][] = null;
				}
				$inner_block['innerContent'][] = "</div>\n";
			}
			self::add_new_accordion_item( $inner_block, $parsed_tabs_added_via_hook );
		}
	}

	/**
	 * Sort tabs by priority
	 *
	 * @param array $tabs Tabs.
	 * @return array
	 */
	private function sort_tabs_by_priority( array $tabs ): array {
		uasort(
			$tabs,
			function ( $a, $b ) {
				$priority_a = isset( $a['priority'] ) ? $a['priority'] : 10;
				$priority_b = isset( $b['priority'] ) ? $b['priority'] : 10;

				return $priority_a - $priority_b;
			}
		);

		return $tabs;
	}


	/**
	 * Render the block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 *
	 * @return string Rendered block output.
	 */
	protected function render( $attributes, $content, $block ) {

		$parsed_block = $block->parsed_block;

		if ( is_admin() || WC()->is_rest_api_request() ) {
			return $content;
		}

		/**
		 * Filter the product tabs in the product details block.
		 *
		 * @since 3.3.0
		 * @param array $tabs Array of product tabs.
		 */
		$product_tabs = apply_filters(
			'woocommerce_product_tabs',
			array()
		);

		$product_tabs_without_native_tabs = array_filter(
			$product_tabs,
			function ( $tab ) {
				$default_tab = array( 'description', 'reviews', 'additional_information' );
				return ! in_array( $tab, $default_tab, true );
			},
			ARRAY_FILTER_USE_KEY
		);

		$parsed_tabs_added_via_hook = array_reduce(
			$product_tabs_without_native_tabs,
			function ( $carry, $tab ) {
				ob_start();
				call_user_func( $tab['callback'] );
				$content = ob_get_clean();

				$carry[] = $this->create_accordion_item( $tab['title'], $content );
				return $carry;
			},
			array()
		);

		$this->add_new_accordion_item( $parsed_block, $this->sort_tabs_by_priority( $parsed_tabs_added_via_hook ) );

		return do_blocks( serialize_blocks( $parsed_block['innerBlocks'] ) );
	}
}
