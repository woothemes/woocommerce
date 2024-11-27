<?php

namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\Utils\StyleAttributesUtils;

/**
 * CatalogSorting class.
 */
class ProductAddToCartWithOptions extends AbstractBlock {

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-add-to-cart-with-options';

	/**
	 * Initialize the block type
	 */
	public function initialize() {
		parent::initialize();
		add_filter( 'register_block_type_args', array( $this, 'add_attributes_to_button_blocks' ), 10, 2 );
	}

	/**
	 * Add attributes to button blocks.
	 *
	 * @param array  $args Block type args.
	 * @param string $block_name Block name.
	 * @return array
	 */
	public function add_attributes_to_button_blocks( $args, $block_name ) {
		if ( 'core/button' === $block_name ) {
			if ( ! isset( $args['attributes'] ) ) {
				$args['attributes'] = array();
			}
	
			$args['attributes']['withRole'] = array(
				'type'    => 'string',
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
				'scope'        => array(
					'block',
				),
				'isActive'     => [ 'withRole' ],
				'isDefault'    => false,
			);
		}

		return $args;
	}

	/**
	 * Render the block.
	 *
	 * @param array    - $attributes Block attributes.
	 * @param string   - $content Block content.
	 * @param WP_Block - $block Block instance.
	 *
	 * @return string | void Rendered block output.
	 */
	protected function render( $attributes, $content, $block ) {
		// Interactivity API - Namespace and Context
		$i_api_namespace     = $this->get_full_block_name();
		$data_wc_interactive = wp_json_encode( array( 'namespace' => $i_api_namespace ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP );

		// Interactivity API - Add to Cart Button / Actions
		$data_wc_add_to_cart_action = $i_api_namespace . '::actions.addToCart';

		$processor = new \WP_HTML_Tag_Processor( $content );

		if ( $processor->next_tag( array( 'tag_name' => 'div', 'class_name' => 'wp-block-woocommerce-product-add-to-cart-with-options' ) ) ) {
			$processor->set_attribute( 'data-wc-interactive', $data_wc_interactive );

			if ( $processor->next_tag( array( 'tag_name' => 'a', 'class_name' => 'wp-element-button' ) ) ) {
				$processor->set_attribute( 'data-wc-on--click', $data_wc_add_to_cart_action );
			}
        }

		return $processor->get_updated_html();
	}
}