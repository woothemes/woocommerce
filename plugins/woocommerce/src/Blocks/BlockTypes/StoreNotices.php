<?php

namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\Utils\StyleAttributesUtils;

/**
 * StoreNotices class.
 */
class StoreNotices extends AbstractBlock {

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'store-notices';

	/**
	 * Render the block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 *
	 * @return string | void Rendered block output.
	 */
	protected function render( $attributes, $content, $block ) {
		/**
		 * This block should be rendered only on the frontend. Woo loads notice
		 * functions on the front end requests only. So it's safe and handy to
		 * check for the print notice function existence to short circuit the
		 * render process on the admin side.
		 * See WooCommerce::is_request() for the frontend request definition.
		 */
		if ( ! function_exists( 'wc_print_notices' ) ) {
			return $content;
		}

		ob_start();
		woocommerce_output_all_notices();
		$notices = ob_get_clean();

		if ( ! $notices ) {
			return;
		}

		$classes_and_styles = StyleAttributesUtils::get_classes_and_styles_by_attributes( $attributes, array(), array( 'extra_classes' ) );

		return sprintf(
			'<div %1$s>%2$s%3$s</div>',
			get_block_wrapper_attributes(
				array(
					'class' => 'wc-block-store-notices woocommerce ' . esc_attr( $classes_and_styles['classes'] ),
				)
			),
			wc_kses_notice( $notices ),
			$this->render_interactivity_notices_region()
		);
	}

	/**
	 * In addition to the server notices we render interactivity API powered notices that
	 * can be added client-side.
	 */
	protected function render_interactivity_notices_region() {
		$namespace = array( 'namespace' => 'woocommerce/store-notices' );

		wc_initial_state(
			'woocommerce/store-notices',
			array(
				'notices' => array(),
			)
		);

		ob_start();
		// Adding the is-layout-constrained class to the wrapper is a hack, to ensure the notice looks the same as it used to when prepended to post content.
		?>
		<div data-wc-interactive="<?php echo esc_attr( wp_json_encode( $namespace ) ); ?>" class="is-layout-constrained woocommerce-notices-wrapper">
			<template
				data-wc-each--notice="state.notices"
				data-wc-each-key="context.notice.id"
			>
				<div data-wc-init="callbacks.scrollIntoView" data-wc-bind--class="callbacks.getNoticeClass" data-wc-bind--role="callbacks.getNoticeRole" >
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
						<path data-wc-bind--d="callbacks.getNoticeIconPath"></path>
					</svg>
					<div class="wc-block-components-notice-banner__content">
						<span data-wc-init="callbacks.renderNoticeContent"></span>
					</div>
					<button
						data-wc-bind--hidden="!callbacks.isNoticeDismissible"
						class="wc-block-components-button wp-element-button wc-block-components-notice-banner__dismiss contained"
						aria-label="<?php esc_attr_e( 'Dismiss this notice', 'woocommerce' ); ?>"
						data-wc-on--click="callbacks.dismissNotice"
						hidden
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z" />
						</svg>	
					</button>
				</div>
			</template>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Get the frontend style handle for this block type.
	 *
	 * @return null
	 */
	protected function get_block_type_style() {
		return null;
	}
}
