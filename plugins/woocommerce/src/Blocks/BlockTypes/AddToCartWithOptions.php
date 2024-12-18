<?php
declare(strict_types=1);

namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Admin\Features\Features;
use Automattic\WooCommerce\Blocks\Utils\StyleAttributesUtils;

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
	 * Initializes the AddToCartWithOptions block and hooks into the `wc_add_to_cart_message_html` filter
	 * to prevent displaying the Cart Notice when the block is inside the Single Product block
	 * and the Add to Cart button is clicked.
	 *
	 * It also hooks into the `woocommerce_add_to_cart_redirect` filter to prevent redirecting
	 * to another page when the block is inside the Single Product block and the Add to Cart button
	 * is clicked.
	 *
	 * @return void
	 */
	protected function initialize() {
		parent::initialize();
		add_filter( 'wc_add_to_cart_message_html', array( $this, 'add_to_cart_message_html_filter' ), 10, 2 );
		add_filter( 'woocommerce_add_to_cart_redirect', array( $this, 'add_to_cart_redirect_filter' ), 10, 1 );
	}

	/**
	 * Get the block's attributes.
	 *
	 * @param array $attributes Block attributes. Default empty array.
	 * @return array  Block attributes merged with defaults.
	 */
	private function parse_attributes( $attributes ) {
		// These should match what's set in JS `registerBlockType`.
		$defaults = array(
			'isDescendentOfSingleProductBlock' => false,
		);

		return wp_parse_args( $attributes, $defaults );
	}

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

		$is_external_product_with_url = $product instanceof \WC_Product_External && $product->get_product_url();
		/**
		 * Filter to modify the add to cart with options HTML output.
		 *
		 * @since 9.6.0
		 *
		 * @param string $content The HTML content for the add to cart with options block.
		 */
		$product_html = apply_filters( 'woocommerce_add_to_cart_with_options_html', $content );

		if ( ! $product_html ) {
			$product = $previous_product;

			return '';
		}
		$product_name                          = $product->get_name();
		$parsed_attributes                     = $this->parse_attributes( $attributes );
		$is_descendent_of_single_product_block = $parsed_attributes['isDescendentOfSingleProductBlock'];

		if ( ! $is_external_product_with_url ) {
			$product_html = $this->add_is_descendent_of_single_product_block_hidden_input_to_product_form( $product_html, $is_descendent_of_single_product_block );
		}

		$classes_and_styles = StyleAttributesUtils::get_classes_and_styles_by_attributes( $attributes, array(), array( 'extra_classes' ) );

		$product_classname = $is_descendent_of_single_product_block ? 'product' : '';

		$classes = implode(
			' ',
			array_filter(
				array(
					'wp-block-add-to-cart-with-options wc-block-add-to-cart-with-options',
					esc_attr( $classes_and_styles['classes'] ),
					esc_attr( $product_classname ),
					'wc-block-add-to-cart-with-options--input',
				)
			)
		);

		$wrapper_attributes = get_block_wrapper_attributes(
			array(
				'class' => $classes,
				'style' => esc_attr( $classes_and_styles['styles'] ),
			)
		);

		$form = sprintf(
			'<div %1$s %2$s>%3$s</div>',
			$wrapper_attributes,
			'',
			$product_html
		);

		$product = $previous_product;

		return $form;
	}

	/**
	 * Add a hidden input to the Add to Cart form to indicate that it is a descendent of a Single Product block.
	 *
	 * @param string $product_html The Add to Cart Form HTML.
	 * @param string $is_descendent_of_single_product_block Indicates if block is descendent of Single Product block.
	 *
	 * @return string The Add to Cart Form HTML with the hidden input.
	 */
	protected function add_is_descendent_of_single_product_block_hidden_input_to_product_form( $product_html, $is_descendent_of_single_product_block ) {
		$hidden_is_descendent_of_single_product_block_input = sprintf(
			'<input type="hidden" name="is-descendent-of-single-product-block" value="%1$s">',
			$is_descendent_of_single_product_block ? 'true' : 'false'
		);
		$regex_pattern                                      = '/<button\s+type="submit"[^>]*>.*?<\/button>/i';

		preg_match( $regex_pattern, $product_html, $input_matches );

		if ( ! empty( $input_matches ) ) {
			$product_html = preg_replace( $regex_pattern, $hidden_is_descendent_of_single_product_block_input . $input_matches[0], $product_html );
		}

		return $product_html;
	}

	/**
	 * Filter the add to cart message to prevent the Notice from being displayed when the Add to Cart form is a descendent of a Single Product block
	 * and the Add to Cart button is clicked.
	 *
	 * @param string $message Message to be displayed when product is added to the cart.
	 */
	public function add_to_cart_message_html_filter( $message ) {
		// phpcs:ignore
		if ( isset( $_POST['is-descendent-of-single-product-block'] ) && 'true' === $_POST['is-descendent-of-single-product-block'] ) {
			return false;
		}
		return $message;
	}

	/**
	 * Hooks into the `woocommerce_add_to_cart_redirect` filter to prevent redirecting
	 * to another page when the block is inside the Single Product block and the Add to Cart button
	 * is clicked.
	 *
	 * @param string $url The URL to redirect to after the product is added to the cart.
	 * @return string The filtered redirect URL.
	 */
	public function add_to_cart_redirect_filter( $url ) {
		// phpcs:ignore
		if ( isset( $_POST['is-descendent-of-single-product-block'] ) && 'true' == $_POST['is-descendent-of-single-product-block'] ) {

			if ( 'yes' === get_option( 'woocommerce_cart_redirect_after_add' ) ) {
				return wc_get_cart_url();
			}

			return wp_validate_redirect( wp_get_referer(), $url );
		}

		return $url;
	}
}
