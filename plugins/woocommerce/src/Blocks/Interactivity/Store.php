<?php
declare(strict_types=1);

namespace Automattic\WooCommerce\Blocks\Interactivity;

/**
 * Store class.
 */
class Store {
	/**
	 * Cart.
	 *
	 * @var array
	 */
	private static $cart = null;

	/**
	 * Create interactivity state containing cart items.
	 *
	 * @return array
	 */
	public static function initialize_cart_state() {
		if ( null === self::$cart ) {
			$cart_items = isset( WC()->cart )
				? rest_do_request( new \WP_REST_Request( 'GET', '/wc/store/v1/cart/items' ) )->data
				: array();

			return wp_interactivity_state(
				'woocommerce',
				array(
					'cart'     => array( 'items' => $cart_items ),
					'nonce'    => wp_create_nonce( 'wc_store_api' ),
					'noticeId' => '',

					// Todo: move this to wp_interactivity_config.
					'restUrl'  => get_rest_url(),
				)
			);
		}
		return self::$cart;
	}
}
