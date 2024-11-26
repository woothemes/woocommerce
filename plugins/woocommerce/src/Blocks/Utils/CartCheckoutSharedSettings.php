<?php
declare(strict_types=1);
namespace Automattic\WooCommerce\Blocks\Utils;

/**
 * Class containing shared settings for Cart and Checkout blocks.
 */
class CartCheckoutSharedSettings {
	/**
	 * Registers the order summary heading options shared by cart and checkout.
	 */
	public static function register_order_summary_heading_options() {
		register_setting(
			'woocommerce_order_summary',
			'woocommerce_order_summary_subtotal_heading',
			array(
				'type'              => 'string',
				'label'             => __( 'Order summary subtotal heading', 'woocommerce' ),
				'description'       => __( 'Heading for the subtotal section in the order summary.', 'woocommerce' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => null,
				'show_in_rest'      => true,
			)
		);

		register_setting(
			'woocommerce_order_summary',
			'woocommerce_order_summary_shipping_heading',
			array(
				'type'              => 'string',
				'label'             => __( 'Order summary shipping heading', 'woocommerce' ),
				'description'       => __( 'Heading for the shipping section in the order summary.', 'woocommerce' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => null,
				'show_in_rest'      => true,
			)
		);

		register_setting(
			'woocommerce_order_summary',
			'woocommerce_order_summary_total_heading',
			array(
				'type'              => 'string',
				'label'             => __( 'Order summary total heading', 'woocommerce' ),
				'description'       => __( 'Heading for the total section in the order summary.', 'woocommerce' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => null,
				'show_in_rest'      => true,
			)
		);
	}
}
