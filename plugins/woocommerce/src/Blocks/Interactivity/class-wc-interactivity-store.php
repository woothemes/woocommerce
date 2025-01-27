<?php
namespace Automattic\WooCommerce\Blocks\Interactivity;

class Store {
	private static $cart = null;

	public static function add_to_cart() {
		if ( self::$cart === null ) {
			$cart = rest_do_request( new \WP_REST_Request( 'GET', '/wc/store/v1/cart' ) );
			return wp_interactivity_state(
				'woocommerce',
				array(
					'cart'    => $cart->data,
					'nonce'   => $cart->headers['Nonce'],
					'restUrl' => get_rest_url(),
				)
			);
		}
		return self::$cart;
	}
}
