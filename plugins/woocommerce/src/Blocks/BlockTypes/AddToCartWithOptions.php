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

		// Register a core/button variation for the Add To Cart Button block.
		add_filter( 'register_block_type_args', array( $this, 'add_core_button_variation_for_add_to_cart_button' ), 10, 2 );

		// Extend core/block rendering.
		add_filter( 'render_block', array( $this, 'render_product_add_to_cart_with_options_button' ), 10, 3 );

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
		ob_start();

		/**
		 * Trigger the single product add to cart action for each product type.
		 *
		 * @since 9.7.0
		 */
		do_action( 'woocommerce_' . $product->get_type() . '_add_to_cart' );

		$product_html = ob_get_clean();

		if ( ! $product_html ) {
			$product = $previous_product;

			return '';
		}
		$product_name = $product->get_name();

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

	/**
	 * Add a core/button variation for the Add To Cart Button block.
	 * It registers a new block `withRole` attribute
	 * to identify when it's active.
	 *
	 * @param array  $args Block type args.
	 * @param string $block_name Block name.
	 * @return array
	 */
	public function add_core_button_variation_for_add_to_cart_button( $args, $block_name ) {
		if ( 'core/button' !== $block_name ) {
			return $args;
		}

		/*
		 * Add withRole attribute to the block.
		 * This attribute is used to identify when the block is active.
		 */
		$args['attributes']['withRole'] = array(
			'type' => 'string',
		);

		if ( ! isset( $args['variations'] ) ) {
			$args['variations'] = array();
		}

		$args['variations'][] = array(
			'name'        => 'woocommerce/product-add-to-cart-with-options-button',
			'title'       => __( 'Add To Cart Button (Experimental)', 'woocommerce' ),
			'description' => __( 'Add a Button block to add product quantity to cart.', 'woocommerce' ),
			'attributes'  => array(
				'className' => 'wc-block-product-add-to-cart-with-options-button',
				'withRole'  => 'add-to-cart-with-options-button',
				'text'      => __( 'Add to Cart', 'woocommerce' ),
			),
			'isActive'    => [ 'withRole' ],
			'isDefault'   => false,
		);

		return $args;
	}

	/**
	 * Render the Add To Cart Button block.
	 *
	 * @param string $block_content The block content.
	 * @param array  $block The block.
	 * @return string
	 */
	public function render_product_add_to_cart_with_options_button( $block_content, $block ) {
		// Only extend the core/button block.
		if ( 'core/button' !== $block['blockName'] ) {
			return $block_content;
		}

		/*
		 * Only extend the Add To Cart Button variation,
		 * identified by the `withRole` attribute.
		 */
		if ( ! isset( $block['attrs']['withRole'] ) || 'add-to-cart-with-options-button' !== $block['attrs']['withRole'] ) {
			return $block_content;
		}

		/*
		 * Register the frontend script for the block.
		 */
		$block_name = $this->block_name . '-button';
		$path       = $this->asset_api->get_block_asset_build_path( $block_name . '-frontend' );

		$this->asset_api->register_script(
			$block_name,
			$path,
			$this->integration_registry->get_all_registered_script_handles()
		);

		wp_enqueue_script( $block_name );

		// Interactivity API - Namespace and Context.
		$i_api_namespace     = $this->get_full_block_name();
		$data_wc_interactive = wp_json_encode( array( 'namespace' => $i_api_namespace ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP );

		// Interactivity API - Add to Cart Button / Actions.
		$data_wc_add_to_cart_action = $i_api_namespace . '::actions.addToCart';

		$processor = new \WP_HTML_Tag_Processor( $block_content );

		if ( $processor->next_tag(
			array(
				'tag_name'   => 'div',
				'class_name' => 'wc-block-product-add-to-cart-with-options-button',
			)
		) ) {
			$processor->set_attribute( 'data-wc-interactive', $data_wc_interactive );

			if ( $processor->next_tag( array( 'tag_name' => 'a', 'class_name' => 'wp-element-button' ) ) ) {
				$processor->set_attribute( 'data-wc-on--click', $data_wc_add_to_cart_action );
			}
		}

		return $processor->get_updated_html();
	}
}
