<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * CheckoutOrderSummarySubtotalBlock class.
 */
class CheckoutOrderSummarySubtotalBlock extends AbstractInnerBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'checkout-order-summary-subtotal-block';

	/**
	 * Heading setting.
	 *
	 * @var string
	 */
	const HEADING_SETTING = 'checkout_order_summary_subtotal_heading';

	/**
	 * Render the block.
	 *
	 * @param array $attributes Block attributes.
	 * @return string Rendered block.
	 */
	protected function render( $attributes ) {
		$heading = $this->get_heading();

		return sprintf(
			'<div class="wp-block-checkout-order-summary-subtotal-block" data-heading="%s">%s</div>',
			esc_attr( $heading ),
			esc_html( $heading )
		);
	}

	/**
	 * Get the heading setting.
	 *
	 * @return string
	 */
	protected function get_heading() {
		return get_option( self::HEADING_SETTING, __( 'Subtotal', 'woocommerce' ) );
	}
}
