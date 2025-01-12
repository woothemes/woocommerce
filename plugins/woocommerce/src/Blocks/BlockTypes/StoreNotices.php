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

		$classes_and_styles = StyleAttributesUtils::get_classes_and_styles_by_attributes( $attributes, array(), array( 'extra_classes' ) );

		return sprintf(
			'<div %1$s>%2$s</div>',
			get_block_wrapper_attributes(
				array(
					'class' => 'wc-block-store-notices woocommerce ' . esc_attr( $classes_and_styles['classes'] ),
				)
			),
			$this->render_notices_iapi(),
		);
	}

	/**
	 * Render the block using the Interactivity API.
	 *
	 * @return string Rendered block output.
	 */
	protected function render_notices_iapi() {
		$namespace    = wp_json_encode( array( 'namespace' => 'woocommerce/store-notices' ) );
		$all_notices  = wc_get_notices();
		$notice_types = apply_filters( 'woocommerce_notice_types', array( 'error', 'success', 'notice' ) );

		foreach ( $notice_types as $notice_type ) {
			if ( wc_notice_count( $notice_type ) > 0 ) {
				$notices_by_type = $all_notices[ $notice_type ];

				foreach ( $notices_by_type as $notice ) {
					$messages[] = isset( $notice['notice'] ) ? $notice['notice'] : $notice;
				}
			}
		}

		$iapi_notices = array();

		foreach ( $notices_by_type as $index => $notice ) {
			$iapi_notices[] = array(
				'notice' => '<span data-wc-key="' . $index . '-' . $notice_type . '" data-wc-each-child>' . $notice['notice'] . '</span>',
				'data'   => $notice['data'],
			);
		}

		ob_start();

		?>
		<div data-wc-interactive="<?php echo esc_attr( $namespace ); ?>" class="wc-block-store-notices woocommerce">
			<div class="woocommerce-notices-wrapper">
				<?php foreach ( $notice_types as $notice_type ) { ?>
					<?php $state_key = "{$notice_type}Notices"; ?>
					<template data-wc-each="state.<?php echo esc_attr( $state_key ); ?>">
						<span data-wc-text="state.item.notice"></span>
					</template>

					<?php
						echo wp_kses_post(
							wc_get_template(
								"notices/{$notice_type}.php",
								array(
									'messages' => array_filter( $messages ), // @deprecated 3.9.0
									'notices'  => $iapi_notices,
								),
							),
						);
					?>
				<?php } ?>
			</div>
		</div>
		<?php

		wc_clear_notices();
		return ob_get_clean();
	}

	/**
	 * Get the frontend script handle for this block type.
	 *
	 * @param string $key Data to get, or default to everything.
	 */
	protected function get_block_type_script( $key = null ) {
		return null;
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
