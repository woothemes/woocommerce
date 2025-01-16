<?php

declare( strict_types = 1 );

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
	 * Tests that the 3rd party product type add to cart form is rendered.
	 */
	public function test_3rd_party_product_type_add_to_cart_render() {
		add_filter( 'woocommerce_custom_add_to_cart', array( $this, 'print_custom_product_type_add_to_cart_markup' ) );

		global $product;
		$product    = new \WC_Product_Custom();
		$product_id = $product->save();
		$markup     = do_blocks( '<!-- wp:woocommerce/single-product {"productId":' . $product_id . '} --><!-- wp:woocommerce/add-to-cart-with-options /--><!-- /wp:woocommerce/single-product -->' );

		$this->assertStringContainsString( 'Custom Product Type Add to Cart Form', $markup );

		remove_filter( 'woocommerce_custom_add_to_cart', array( $this, 'print_custom_product_type_add_to_cart_markup' ) );
	}
}
