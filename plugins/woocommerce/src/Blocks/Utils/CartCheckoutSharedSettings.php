<?php
declare(strict_types=1);
namespace Automattic\WooCommerce\Blocks\Utils;

/**
 * Class containing shared settings for Cart and Checkout blocks.
 */
class CartCheckoutSharedSettings {

	/**
	 * Registers the order summary heading options shared by cart and checkout.
	 *
	 * @param AssetDataRegistry $asset_data_registry Asset data registry.
	 */
	public static function register_data( $asset_data_registry ) {
		$asset_data_registry->add( 'woocommerce_order_summary_heading', get_option( 'woocommerce_order_summary_heading' ) );
		$asset_data_registry->add( 'woocommerce_order_summary_footer_heading', get_option( 'woocommerce_order_summary_footer_heading' ) );
		$asset_data_registry->add( 'woocommerce_order_summary_subtotal_heading', get_option( 'woocommerce_order_summary_subtotal_heading' ) );
		$asset_data_registry->add( 'woocommerce_order_summary_shipping_heading', get_option( 'woocommerce_order_summary_shipping_heading' ) );
		$asset_data_registry->add( 'woocommerce_order_summary_coupon_heading', get_option( 'woocommerce_order_summary_coupon_heading' ) );
		$asset_data_registry->add( 'woocommerce_order_summary_fee_heading', get_option( 'woocommerce_order_summary_fee_heading' ) );
	}

	/**
	 * Registers the order summary heading options shared by cart and checkout.
	 */
	public static function register_order_summary_heading_options() {
		register_setting(
			'woocommerce_order_summary',
			'woocommerce_order_summary_heading',
			array(
				'type'              => 'string',
				'label'             => __( 'Order summary heading', 'woocommerce' ),
				'description'       => __( 'Heading for the order summary.', 'woocommerce' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => null,
				'show_in_rest'      => true,
			)
		);

		register_setting(
			'woocommerce_order_summary',
			'woocommerce_order_summary_footer_heading',
			array(
				'type'              => 'string',
				'label'             => __( 'Order summary subtotal footer heading', 'woocommerce' ),
				'description'       => __( 'Heading for the footer of the order summary subtotal.', 'woocommerce' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => null,
				'show_in_rest'      => true,
			)
		);

		register_setting(
			'woocommerce_order_summary',
			'woocommerce_order_summary_subtotal_heading',
			array(
				'type'              => 'string',
				'label'             => __( 'Order summary subtotal heading', 'woocommerce' ),
				'description'       => __( 'Heading for the order summary subtotal.', 'woocommerce' ),
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
				'description'       => __( 'Heading for the order summary shipping section.', 'woocommerce' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => null,
				'show_in_rest'      => true,
			)
		);

		register_setting(
			'woocommerce_order_summary',
			'woocommerce_order_summary_coupon_heading',
			array(
				'type'              => 'string',
				'label'             => __( 'Order summary coupon heading', 'woocommerce' ),
				'description'       => __( 'Heading for the order summary coupon section.', 'woocommerce' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => null,
				'show_in_rest'      => true,
			)
		);

		register_setting(
			'woocommerce_order_summary',
			'woocommerce_order_summary_fee_heading',
			array(
				'type'              => 'string',
				'label'             => __( 'Order summary fee heading', 'woocommerce' ),
				'description'       => __( 'Heading for the order summary fee section.', 'woocommerce' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => null,
				'show_in_rest'      => true,
			)
		);
	}
}
