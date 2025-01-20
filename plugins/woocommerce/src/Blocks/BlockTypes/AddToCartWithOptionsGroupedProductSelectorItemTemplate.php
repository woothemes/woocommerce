<?php
declare(strict_types=1);

namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Admin\Features\Features;
use Automattic\WooCommerce\Blocks\Utils\StyleAttributesUtils;
use WP_Block;

/**
 * Block type for grouped product selector in add to cart with options.
 */
class AddToCartWithOptionsGroupedProductSelectorItemTemplate extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'add-to-cart-with-options-grouped-product-selector-product-item-template';

	/**
	 * Get product row HTML.
	 *
	 * @param string   $product_id Product ID.
	 * @param array    $attributes Block attributes.
	 * @param WP_Block $block The Block.
	 * @return string Row HTML
	 */
	private function get_product_row( $product_id, $attributes, $block ): string {
		$product = wc_get_product( $product_id );

		// Get an instance of the current Post Template block.
		$block_instance = $block->parsed_block;

		// Set the block name to one that does not correspond to an existing registered block.
		// This ensures that for the inner instances of the Post Template block, we do not render any block supports.
		$block_instance['blockName'] = 'core/null';

		$new_block = new WP_Block(
			$block_instance,
			array(
				'postType' => 'product',
				'postId'   => $product->get_ID(),
			),
		);

		// Render the inner blocks of the Post Template block with `dynamic` set to `false` to prevent calling
		// `render_callback` and ensure that no wrapper markup is included.
		$block_content = $new_block->render( array( 'dynamic' => false ) );

		return $block_content;
		// return $block->render( array( 'dynamic' => false ) );

		// $interactive = array();

		// $context = array(
		// 	'productId' => $product->get_ID(),
		// );

		// $li_directives = '
		// 	data-wc-interactive=\'' . wp_json_encode( $interactive, JSON_NUMERIC_CHECK | JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ) . '\'
		// 	data-wc-context=\'' . wp_json_encode( $context, JSON_NUMERIC_CHECK | JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ) . '\'
		// 	data-wc-key="product-item-' . $product->get_ID() . '"
		// ';

		// // Wrap the render inner blocks in a `li` element with the appropriate post classes.
		// $wrapper_attributes = get_block_wrapper_attributes( array_merge( $attributes, array( 'role' => 'listitem' ) ) );
		
		// return strtr(
		// 	'<div
		// 		{li_directives}
		// 		{attributes}
		// 	>
		// 		{content}
		// 	</div>',
		// 	array(
		// 		'{attributes}'    => $wrapper_attributes,
		// 		'{li_directives}' => $li_directives,
		// 		'{content}'       => $block_content,
		// 	)
		// );
	}

	/**
	 * Render the block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	protected function render( $attributes, $content, $block ): string {
		if ( ! isset( $block->context['postId'] ) ) {
			return '';
		}

		global $product;
		$previous_product = $product;
		$product          = wc_get_product( $block->context['postId'] );

		if ( ! $product instanceof \WC_Product || ! $product->is_type( 'grouped' ) ) {
			$product = $previous_product;
			return '';
		}

		$content = '';

		foreach ( $product->get_children() as $child_id ) {
			$content .= $this->get_product_row( $child_id, $attributes, $block );
		}

		return $content;
	}
}
