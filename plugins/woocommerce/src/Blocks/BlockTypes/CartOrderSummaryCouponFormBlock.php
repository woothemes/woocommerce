<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * CartOrderSummaryCouponFormBlock class.
 */
class CartOrderSummaryCouponFormBlock extends AbstractInnerBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'cart-order-summary-coupon-form-block';

	/**
	 * Heading setting.
	 *
	 * @var string
	 */
	const HEADING_OPTION = 'woocommerce_order_summary_coupon_heading';

	/**
	 * Render the block.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $content    Block content.
	 * @param object $block      Block object.
	 * @return string Rendered block.
	 */
	protected function render( $attributes, $content, $block ) {
		$extra_attributes = $this->get_heading() ? array( 'data-heading' => $this->get_heading() ) : array();

		return sprintf(
			'<div %s></div>',
			get_block_wrapper_attributes( $extra_attributes ),
		);
	}

	/**
	 * Initialize the block.
	 */
	protected function initialize() {
		$this->register_settings();
		parent::initialize();
	}


	/**
	 * Register the settings.
	 */
	public function register_settings() {
		register_setting(
			'woocommerce_order_summary',
			self::HEADING_OPTION,
			array(
				'type'              => 'string',
				'label'             => __( 'Order summary coupon heading', 'woocommerce' ),
				'description'       => __( 'Heading for the order summary coupon.', 'woocommerce' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => null,
				'show_in_rest'      => true,
			)
		);
	}

	/**
	 * Get the subtotal heading option.
	 *
	 * @return string
	 */
	protected function get_heading() {
		return get_option( self::HEADING_OPTION, null );
	}
}
