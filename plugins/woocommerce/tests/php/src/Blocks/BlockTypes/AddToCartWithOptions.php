<?php

declare( strict_types = 1 );

namespace Automattic\WooCommerce\Tests\Blocks\BlockTypes;

use Automattic\WooCommerce\Tests\Blocks\Utils\WC_Product_Custom;

/**
 * Tests for the AddToCartWithOptions block type
 */
class AddToCartWithOptions extends \WP_UnitTestCase {
	/**
	 * Print custom product type add to cart markup.
	 *
	 * Outputs the HTML markup for the custom product type add to cart form.
	 */
	public function print_custom_product_type_add_to_cart_markup() {
		echo 'Custom Product Type Add to Cart Form';
	}

	/**
	 * Tests that the correct content is rendered for each product type.
	 */
	public function test_product_type_add_to_cart_render() {
		add_action( 'woocommerce_custom_add_to_cart', array( $this, 'print_custom_product_type_add_to_cart_markup' ) );

		global $product;
		$product = new \WC_Product_Simple();
		$product->set_regular_price( 10 );
		$product_id = $product->save();
		$markup     = do_blocks( '<!-- wp:woocommerce/single-product {"productId":' . $product_id . '} --><!-- wp:woocommerce/add-to-cart-with-options /--><!-- /wp:woocommerce/single-product -->' );

		// Single Products contain the quantity selector block.
		$this->assertStringContainsString( 'wp-block-woocommerce-product-button', $markup, 'The Single Product Add to Cart with Options contains the product button block.' );
		$this->assertStringContainsString( 'woocommerce/add-to-cart-with-options-quantity-selector', $markup, 'The Single Product Add to Cart with Options contains the quantity selector block.' );

		$product    = new \WC_Product_External();
		$product_id = $product->save();
		$markup     = do_blocks( '<!-- wp:woocommerce/single-product {"productId":' . $product_id . '} --><!-- wp:woocommerce/add-to-cart-with-options /--><!-- /wp:woocommerce/single-product -->' );

		// External Products do not contain the quantity selector block.
		$this->assertStringContainsString( 'wp-block-woocommerce-product-button', $markup, 'The External Product Add to Cart with Options contains the product button block.' );
		$this->assertStringNotContainsString( 'woocommerce/add-to-cart-with-options-quantity-selector', $markup, 'The External Product Add to Cart with Options does not contain the quantity selector block.' );

		$product    = new WC_Product_Custom();
		$product_id = $product->save();
		$markup     = do_blocks( '<!-- wp:woocommerce/single-product {"productId":' . $product_id . '} --><!-- wp:woocommerce/add-to-cart-with-options /--><!-- /wp:woocommerce/single-product -->' );

		$this->assertStringContainsString( 'Custom Product Type Add to Cart Form', $markup, 'The Custom Product Type Add to Cart with Options contains the custom product type add to cart form.' );

		remove_action( 'woocommerce_custom_add_to_cart', array( $this, 'print_custom_product_type_add_to_cart_markup' ) );
	}
}
