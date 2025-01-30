<?php
declare(strict_types=1);

namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\Package;
use Automattic\WooCommerce\Admin\Features\Features;
use Automattic\WooCommerce\Blocks\Utils\StyleAttributesUtils;
use Automattic\WooCommerce\Enums\ProductType;
use Automattic\WooCommerce\Blocks\Utils\BlockTemplateUtils;

/**
 * AddToCartWithOptions class.
 */
class AddToCartWithOptions extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'add-to-cart-with-options';

	/**
	 * Extra data passed through from server to client for block.
	 *
	 * @param array $attributes  Any attributes that currently are available from the block.
	 *                           Note, this will be empty in the editor context when the block is
	 *                           not in the post content on editor load.
	 */
	protected function enqueue_data( array $attributes = [] ) {
		parent::enqueue_data( $attributes );
		$this->asset_data_registry->add( 'isBlockifiedAddToCart', Features::is_enabled( 'blockified-add-to-cart' ) );
		$this->asset_data_registry->add( 'productTypes', wc_get_product_types() );
	}

	/**
	 * Render the block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 *
	 * @return string | void Rendered block output.
	 */
	protected function render( $attributes, $content, $block ) {
		global $product;

		$post_id = $block->context['postId'];

		if ( ! isset( $post_id ) ) {
			return '';
		}

		$previous_product = $product;
		$product          = wc_get_product( $post_id );
		if ( ! $product instanceof \WC_Product ) {
			$product = $previous_product;

			return '';
		}

		$product_type = $product->get_type();

		if ( in_array( $product_type, array( ProductType::SIMPLE, ProductType::EXTERNAL, ProductType::VARIABLE, ProductType::GROUPED ), true ) ) {
			$template_part_contents = '';
			$slug                   = $product_type . '-product-add-to-cart-with-options';
			// Determine if we need to load the template part from the DB, the theme or WooCommerce in that order.
			$templates_from_db = BlockTemplateUtils::get_block_templates_from_db( array( $slug ), 'wp_template_part' );
			if ( is_countable( $templates_from_db ) && count( $templates_from_db ) > 0 ) {
				$template_slug_to_load = $templates_from_db[0]->theme;
			} else {
				$theme_has_template_part = BlockTemplateUtils::theme_has_template_part( $slug );
				$template_slug_to_load   = $theme_has_template_part ? get_stylesheet() : BlockTemplateUtils::PLUGIN_SLUG;
			}
			$template_part = get_block_template( $template_slug_to_load . '//' . $slug, 'wp_template_part' );

			if ( $template_part && ! empty( $template_part->content ) ) {
				$template_part_contents = do_blocks( $template_part->content );
			}

			if ( '' === $template_part_contents ) {
				$template_part_contents = do_blocks( file_get_contents( Package::get_path() . 'templates/' . BlockTemplateUtils::DIRECTORY_NAMES['TEMPLATE_PARTS'] . '/' . $slug . '.html' ) ); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			}

			$classes_and_styles = StyleAttributesUtils::get_classes_and_styles_by_attributes( $attributes, array(), array( 'extra_classes' ) );

			$classes = implode(
				' ',
				array_filter(
					array(
						'wp-block-add-to-cart-with-options wc-block-add-to-cart-with-options',
						esc_attr( $classes_and_styles['classes'] ),
					)
				)
			);

			$wrapper_attributes = get_block_wrapper_attributes(
				array(
					'class' => $classes,
					'style' => esc_attr( $classes_and_styles['styles'] ),
				)
			);

			$form_html = sprintf(
				'<form %1$s %2$s>%3$s</form>',
				$wrapper_attributes,
				'',
				$template_part_contents
			);

			$product = $previous_product;
		} else {
			ob_start();

			/**
			 * Trigger the single product add to cart action that prints the markup.
			 *
			 * @since 9.7.0
			 */
			do_action( 'woocommerce_' . $product->get_type() . '_add_to_cart' );

			$form_html = ob_get_clean();
		}

		return $form_html;
	}
}
