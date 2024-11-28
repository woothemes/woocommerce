<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * CheckoutOrderSummaryBlock class.
 */
class CheckoutOrderSummaryBlock extends AbstractInnerBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'checkout-order-summary-block';

	const HEADING_SETTING        = 'woocommerce_order_summary_heading';
	const FOOTER_HEADING_SETTING = 'woocommerce_order_summary_footer_heading';

	/**
	 * Get the contents of the given inner block.
	 *
	 * @param string $block_name Name of the order summary inner block.
	 * @param string $content    The content to search.
	 * @return array|bool
	 */
	private function get_inner_block_content( $block_name, $content ) {
		if ( preg_match( $this->inner_block_regex( $block_name ), $content, $matches ) ) {
			return $matches[0];
		}
		return false;
	}

	/**
	 * Get the regex that will return an inner block.
	 *
	 * @param string $block_name Name of the order summary inner block.
	 * @return string Regex pattern.
	 */
	private function inner_block_regex( $block_name ) {
		return '/<div data-block-name="woocommerce\/checkout-order-summary-' . $block_name . '-block"(.+?)>(.*?)<\/div>/si';
	}

	/**
	 * Render the Checkout Order Summary block.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $content    Block content.
	 * @param object $block      Block object.
	 * @return string Rendered block.
	 */
	protected function render( $attributes, $content, $block ) {
		// The order-summary-totals block was introduced as a new parent block for the totals
		// (subtotal, discount, fees, shipping and taxes) blocks.

		$heading        = $this->get_heading_option();
		$footer_heading = $this->get_footer_heading_option();

		$extra_attributes = array();

		if ( $heading ) {
			$extra_attributes['heading'] = $heading;
		}

		if ( $footer_heading ) {
			$extra_attributes['footerHeading'] = $footer_heading;
		}

		$attributes = get_block_wrapper_attributes( $extra_attributes );

		$regex_for_checkout_order_summary_totals = '/<div data-block-name="woocommerce\/checkout-order-summary-totals-block"(.+?)>/';
		$order_summary_totals_content            = sprintf( '<div %s>', $attributes );

		// We want to move these blocks inside a parent 'totals' block.
		$totals_inner_blocks = array( 'subtotal', 'discount', 'fee', 'shipping', 'taxes' );

		if ( preg_match( $regex_for_checkout_order_summary_totals, $content ) ) {
			return $content;
		}

		foreach ( $totals_inner_blocks as $key => $block_name ) {
			$inner_block_content = $this->get_inner_block_content( $block_name, $content );

			if ( $inner_block_content ) {
				$order_summary_totals_content .= "\n" . $inner_block_content;

				// The last block is replaced with the totals block.
				if ( count( $totals_inner_blocks ) - 1 === $key ) {
					$order_summary_totals_content .= '</div>';
					$content                       = preg_replace( $this->inner_block_regex( $block_name ), $order_summary_totals_content, $content );
				} else {
					// Otherwise, remove the block.
					$content = preg_replace( $this->inner_block_regex( $block_name ), '', $content );
				}
			}
		}

		// Remove empty lines.
		return preg_replace( '/\n\n( *?)/i', '', $content );
	}

	/**
	 * Get the heading option name.
	 *
	 * @return string
	 */
	protected function get_heading_option() {
		return get_option( self::HEADING_SETTING, null );
	}

	/**
	 * Get the footer heading option name.
	 *
	 * @return string
	 */
	protected function get_footer_heading_option() {
		return get_option( self::FOOTER_HEADING_SETTING, null );
	}

	/**
	 * Register the settings for the order summary heading and footer heading.
	 */
	public function register_settings() {
		register_setting(
			'woocommerce_order_summary',
			self::HEADING_SETTING,
			array(
				'type'              => 'string',
				'label'             => __( 'Order summary heading', 'woocommerce' ),
				'description'       => __( 'Heading for the order summary section.', 'woocommerce' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => null,
				'show_in_rest'      => true,
			)
		);

		register_setting(
			'woocommerce_order_summary',
			self::FOOTER_HEADING_SETTING,
			array(
				'type'              => 'string',
				'label'             => __( 'Order summary footer heading', 'woocommerce' ),
				'description'       => __( 'Heading for the order summary footer section.', 'woocommerce' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => null,
				'show_in_rest'      => true,
			)
		);
	}
}
