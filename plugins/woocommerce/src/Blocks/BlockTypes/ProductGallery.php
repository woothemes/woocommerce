<?php
declare( strict_types=1 );
namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\Utils\ProductGalleryUtils;
use Automattic\WooCommerce\Blocks\Utils\StyleAttributesUtils;
use Automattic\WooCommerce\Enums\ProductType;

/**
 * ProductGallery class.
 */
class ProductGallery extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-gallery';

	/**
	 *  Register the context
	 *
	 * @return string[]
	 */
	protected function get_block_type_uses_context() {
		return [ 'postId' ];
	}

	/**
	 * Return the dialog content.
	 *
	 * @return string
	 */
	protected function render_dialog() {
		return '';
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
		$post_id = $block->context['postId'] ?? '';
		$product = wc_get_product( $post_id );

		if ( ! $product instanceof \WC_Product ) {
			return '';
		}

		$product_gallery_images = ProductGalleryUtils::get_product_gallery_images( $post_id, 'thumbnail', array() );
		$classname_single_image = '';

		if ( count( $product_gallery_images ) < 2 ) {
			// The gallery consists of a single image.
			$classname_single_image = 'is-single-product-gallery-image';
		}

		$number_of_thumbnails           = $block->attributes['thumbnailsNumberOfThumbnails'] ?? 0;
		$classname                      = StyleAttributesUtils::get_classes_by_attributes( $attributes, array( 'extra_classes' ) );
		$product_gallery_first_image    = ProductGalleryUtils::get_product_gallery_image_ids( $product, 1 );
		$product_gallery_first_image_id = reset( $product_gallery_first_image );
		$product_id                     = strval( $product->get_id() );
		$p                              = new \WP_HTML_Tag_Processor( $content );

		if ( $p->next_tag() ) {
			$p->set_attribute( 'data-wc-interactive', wp_json_encode( array( 'namespace' => 'woocommerce/product-gallery' ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ) );
			$p->set_attribute(
				'data-wc-context',
				wp_json_encode(
					array(
						'firstMainImageId'                => $product_gallery_first_image_id,
						'selectedImageNumber'             => 1,
						'isDialogOpen'                    => false,
						'visibleImagesIds'                => ProductGalleryUtils::get_product_gallery_image_ids( $product, $number_of_thumbnails, true ),
						'dialogVisibleImagesIds'          => ProductGalleryUtils::get_product_gallery_image_ids( $product, null, false ),
						'mouseIsOverPreviousOrNextButton' => false,
						'productId'                       => $product_id,
						'elementThatTriggeredDialogOpening' => null,
						'disableLeft'                     => true,
						'disableRight'                    => false,
					),
					JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP
				)
			);

			if ( $product->is_type( ProductType::VARIABLE ) ) {
				$p->set_attribute( 'data-wc-init--watch-changes-on-add-to-cart-form', 'callbacks.watchForChangesOnAddToCartForm' );
			}

			$p->add_class( $classname );
			$p->add_class( $classname_single_image );
			$html = $p->get_updated_html();
		}

		return $html;
	}
}
