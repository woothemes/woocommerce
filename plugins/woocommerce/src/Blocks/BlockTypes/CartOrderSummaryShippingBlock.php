<?php
declare( strict_types=1 );
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * CartOrderSummaryShippingBlock class.
 */
class CartOrderSummaryShippingBlock extends AbstractInnerBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'cart-order-summary-shipping-block';

	/**
	 * Heading setting.
	 *
	 * @var string
	 */
	const HEADING_SETTING = 'order_summary_shipping_heading';

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
		register_setting( 'woocommerce_order_summary', self::HEADING_SETTING, array( 'type' => 'string' ) );
	}

	/**
	 * Get the heading setting.
	 *
	 * @return string
	 */
	protected function get_heading() {
		return get_option( self::HEADING_SETTING, null );
	}

	/**
	 * Render the block.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $content    Block content.
	 * @param object $block      Block object.
	 * @return string Rendered block.
	 */
	protected function render( $attributes, $content, $block ) {
		return sprintf(
			'<div %s></div>',
			get_block_wrapper_attributes( array( 'data-heading' => $this->get_heading() ) ),
		);
	}
}
