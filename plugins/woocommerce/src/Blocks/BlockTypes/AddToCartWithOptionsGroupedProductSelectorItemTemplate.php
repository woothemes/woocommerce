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
		global $post;
		$previous_post = $post;
		
		$post = get_post( $product_id );

		// Get an instance of the current Post Template block.
		$block_instance = $block->parsed_block;

		$new_block = new WP_Block(
			$block_instance,
			array(
				'postType' => 'product',
				'postId'   => $post->ID,
			),
		);

		// Render the inner blocks of the Post Template block with `dynamic` set to `false` to prevent calling
		// `render_callback` and ensure that no wrapper markup is included.
		$block_content = $new_block->render( array( 'dynamic' => false ) );

		$post = $previous_post;

		return $block_content;
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

		$product = wc_get_product( $block->context['postId'] );

		if ( ! $product instanceof \WC_Product || ! $product->is_type( 'grouped' ) ) {
			return '';
		}

		$content = '';

		foreach ( $product->get_children() as $child_id ) {
			$content .= $this->get_product_row( $child_id, $attributes, $block );
		}

		return $content;
	}
}
