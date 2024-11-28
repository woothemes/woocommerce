<?php declare(strict_types=1);
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * CartOrderSummarySubtotalBlock class.
 */
class CartOrderSummarySubtotalBlock extends AbstractInnerBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'cart-order-summary-subtotal-block';


	/**
	 * Subtotal heading option name.
	 *
	 * @var string
	 */
	const SUBTOTAL_HEADING_OPTION = 'woocommerce_order_summary_subtotal_heading';

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
			'<div %s>%s</div>',
			get_block_wrapper_attributes( array( 'data-heading' => $this->get_subtotal_heading() ) ),
			$content
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
			self::SUBTOTAL_HEADING_OPTION,
			array(
				'type'              => 'string',
				'label'             => __( 'Order summary subtotal heading', 'woocommerce' ),
				'description'       => __( 'Heading for the order summary subtotal.', 'woocommerce' ),
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
	protected function get_subtotal_heading() {
		return get_option( self::SUBTOTAL_HEADING_OPTION, null );
	}
}
