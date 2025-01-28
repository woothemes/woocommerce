<?php

declare( strict_types = 1 );

namespace Automattic\WooCommerce\Tests\Blocks\BlockTypes;

use Automattic\WooCommerce\Tests\Blocks\Utils\WC_Product_Custom;
use Automattic\WooCommerce\Tests\Blocks\Mocks\AddToCartWithOptionsMock;

/**
 * Tests for the AddToCartWithOptions block type
 */
class AddToCartWithOptions extends \WP_UnitTestCase {
	/**
	 * This variable holds our Add to Cart with Options block mock.
	 *
	 * @var AddToCartWithOptionsMock
	 */
	private $block_instance;

	/**
	 * Initiate the mock object.
	 */
	protected function setUp(): void {
		parent::setUp();

		$this->block_instance = new AddToCartWithOptionsMock();
	}

	/**
	 * Print custom product type add to cart markup.
	 *
	 * Outputs the HTML markup for the custom product type add to cart form.
	 */
	public function print_custom_product_type_add_to_cart_markup() {
		echo 'Custom Product Type Add to Cart Form';
	}

	/**
	 * Hook into the Quantity Selector Block render, that's because the block
	 * is not registered (because tests are set up in a classic theme),
	 *
	 * @return string The rendered quantity selector block markup.
	 */
	public function render_quantity_selector_block() {
		return 'QUANTITY_SELECTOR_BLOCK';
	}

	/**
	 * Tests that the correct content is rendered for each product type.
	 */
	public function test_product_type_add_to_cart_render() {
		add_filter( 'woocommerce_custom_add_to_cart', array( $this, 'print_custom_product_type_add_to_cart_markup' ) );
		add_filter(
			'render_block_woocommerce/add-to-cart-with-options-quantity-selector',
			array( $this, 'render_quantity_selector_block' )
		);

		global $product;
		$product = new \WC_Product_Simple();
		$product->set_regular_price( 10 );
		$product_id = $product->save();
		$markup     = $this->block_instance->render_with_product_id( $product_id );

		// Single Products contain the Add to Cart button and the quantity selector blocks.
		$this->assertStringContainsString( 'wp-block-woocommerce-product-button', $markup, 'The Simple Product Add to Cart with Options contains the product button block.' );
		$this->assertStringContainsString( 'QUANTITY_SELECTOR_BLOCK', $markup, 'The Simple Product Add to Cart with Options contains the quantity selector block.' );

		$product    = new \WC_Product_External();
		$product_id = $product->save();
		$markup     = $this->block_instance->render_with_product_id( $product_id );

		// External Products contain the Add to Cart button block but do not contain the quantity selector block.
		$this->assertStringContainsString( 'wp-block-woocommerce-product-button', $markup, 'The External Product Add to Cart with Options contains the product button block.' );
		$this->assertStringNotContainsString( 'QUANTITY_SELECTOR_BLOCK', $markup, 'The External Product Add to Cart with Options does not contain the quantity selector block.' );

		$product    = new WC_Product_Custom();
		$product_id = $product->save();
		$markup     = $this->block_instance->render_with_product_id( $product_id );

		// Third-party product types use their own template.
		$this->assertStringContainsString( 'Custom Product Type Add to Cart Form', $markup, 'The Custom Product Type Add to Cart with Options contains the custom product type add to cart form.' );

		remove_action( 'woocommerce_custom_add_to_cart', array( $this, 'print_custom_product_type_add_to_cart_markup' ) );
		remove_filter(
			'render_block_woocommerce/add-to-cart-with-options-quantity-selector',
			array( $this, 'render_quantity_selector_block' )
		);
	}
}
