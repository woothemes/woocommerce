<?php
declare(strict_types=1);

namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Admin\Features\Features;
use Automattic\WooCommerce\Blocks\Utils\StyleAttributesUtils;

add_action(
	'init',
	function () {
	}
);

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

		$this->register_block_patterns();
	}

	/**
	 * Register block patterns used to render the correct layout for each product type.
	 *
	 * @return void
	 */
	private function register_block_patterns() {
		register_block_pattern_category( 'woocommerce/add-to-cart', array( 'label' => __( 'Add to Cart', 'woocommerce' ) ) );
		register_block_pattern(
			'woocommerce/add-to-cart-simple',
			array(
				'title'       => __( 'Simple Products Add to Cart', 'woocommerce' ),
				'content'     => '<!-- wp:woocommerce/add-to-cart-with-options-quantity-selector /-->
<!-- wp:woocommerce/product-button {"textAlign":"center","fontSize":"small"} -->
<div class="wp-block-woocommerce-product-button is-loading has-small-font-size"></div>
<!-- /wp:woocommerce/product-button -->',
				'description' => __( 'Add to Cart form rendered in Simple Products', 'woocommerce' ),
				// 'inserter'    => false,
				'categories'  => array( 'woocommerce/add-to-cart' ),
			)
		);
		register_block_pattern(
			'woocommerce/add-to-cart-external',
			array(
				'title'       => __( 'External Products Add to Cart', 'woocommerce' ),
				'content'     => 'External Add to Cart Form :)',
				'description' => __( 'Add to Cart form rendered in External Products', 'woocommerce' ),
				// 'inserter'    => false,
				'categories'  => array( 'woocommerce/add-to-cart' ),
			)
		);
		register_block_pattern(
			'woocommerce/add-to-cart-variable',
			array(
				'title'       => __( 'Variable Products Add to Cart', 'woocommerce' ),
				'content'     => 'Variable Add to Cart Form :)',
				'description' => __( 'Add to Cart form rendered in Variable Products', 'woocommerce' ),
				// 'inserter'    => false,
				'categories'  => array( 'woocommerce/add-to-cart' ),
			)
		);
		register_block_pattern(
			'woocommerce/add-to-cart-grouped',
			array(
				'title'       => __( 'Grouped Products Add to Cart', 'woocommerce' ),
				'content'     => 'Grouped Add to Cart Form :)',
				'description' => __( 'Add to Cart form rendered in Grouped Products', 'woocommerce' ),
				// 'inserter'    => false,
				'categories'  => array( 'woocommerce/add-to-cart' ),
			)
		);
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

	protected function get_block_pattern_content( $pattern_name ) {
		// Get the block patterns registry instance.
		$registry = \WP_Block_Patterns_Registry::get_instance();

		// Check if the pattern exists.
		if ( $registry->is_registered( $pattern_name ) ) {
			// Get the pattern details.
			$pattern = $registry->get_registered( $pattern_name );

			// Return the content of the pattern.
			return isset( $pattern['content'] ) ? $pattern['content'] : '';
		}

		return '';
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

		$synced_pattern_content = do_blocks( $this->get_block_pattern_content( 'woocommerce/add-to-cart-' . $product_type ) );

		$form_html = '';
		if ( $synced_pattern_content ) {
			$block_html = $synced_pattern_content;

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
				$block_html
			);

			$product = $previous_product;
		} elseif ( ! in_array( $product_type, array( 'simple', 'variable', 'external', 'grouped' ), true ) ) {

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
