<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\Utils\ProductGalleryUtils;
use Automattic\WooCommerce\Blocks\Utils\StyleAttributesUtils;

/**
 * ProductGalleryPager class.
 */
class ProductGalleryPager extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-gallery-pager';

	/**
	 * It isn't necessary register block assets because it is a server side block.
	 */
	protected function register_block_type_assets() {
		return null;
	}

	/**
	 * Get the frontend style handle for this block type.
	 *
	 * @return null
	 */
	protected function get_block_type_style() {
		return null;
	}

	/**
	 *  Register the context
	 *
	 * @return string[]
	 */
	protected function get_block_type_uses_context() {
		return [ 'postId' ];
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
		$post_id              = $block->context['postId'] ?? '';
		$product              = wc_get_product( $post_id );

		if ( $product ) {
			$product_gallery_images_ids = ProductGalleryUtils::get_product_gallery_image_ids( $product );
			$total_images = count( $product_gallery_images_ids );

			if ( $total_images === 0 ) {
				return '';
			}

			$current_image = 1;

			return sprintf(
				'<div class="wc-block-product-gallery-pager">
					%1$s / %2$s
				</div>',
				$current_image,
				$total_images,
			);
		}
	}
}
