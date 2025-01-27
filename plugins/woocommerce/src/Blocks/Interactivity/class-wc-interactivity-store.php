<?php
namespace Automattic\WooCommerce\Blocks\Interactivity;

class Store {
	private static $cart = null;

	public static function cart_items() {
		if ( self::$cart === null ) {
			$cart_items = isset( WC()->cart )
				? rest_do_request( new \WP_REST_Request( 'GET', '/wc/store/v1/cart/items' ) )->data
				: array();

			return wc_initial_state(
				'woocommerce',
				array(
					'cart' => array( 'items' => $cart_items ),
					'nonce'   => wp_create_nonce( 'wc_store_api' ),

					// Todo: move this to wp_interactivity_config.
					'restUrl' => get_rest_url(),
				)
			);
		}
		return self::$cart;
	}
}