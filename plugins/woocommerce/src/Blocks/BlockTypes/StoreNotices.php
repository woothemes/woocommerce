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
					'class'               => 'wc-block-store-notices woocommerce ' . esc_attr( $classes_and_styles['classes'] ),
					'data-wc-interactive' => wp_json_encode( array( 'namespace' => 'woocommerce/store-notices' ) ),
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
		$all_notices  = wc_get_notices();
		$notice_types = apply_filters( 'woocommerce_notice_types', array( 'error', 'success', 'notice' ) );

		$store_notices_context = array( 'notices' => array() );

		foreach ( $notice_types as $notice_type ) {
			if ( wc_notice_count( $notice_type ) > 0 ) {
				$notices_by_type = $all_notices[ $notice_type ];

				foreach ( $notices_by_type as $index => $notice ) {
					$store_notices_context['notices'][] = array(
						'notice' => $notice['notice'],
						'data'   => $notice['data'],
						'index'  => $notice_type . '-' . $index,
						'type'   => $notice_type,
					);
				}
			}
		}

		ob_start();

		?>
		<div data-wc-context="<?php echo esc_attr( wp_json_encode( $store_notices_context ) ); ?>" class="woocommerce-notices-wrapper">
			<?php foreach ( $notice_types as $notice_type ) { ?>
				<?php
				$notices = array_filter(
					$store_notices_context['notices'],
					function ( $notice ) use ( $notice_type ) {
						return $notice['type'] === $notice_type;
					}
				);
				?>
				<?php echo $this->render_iapi_notice_type( $notices, $notice_type ); ?>
			<?php } ?>
		</div>
		<?php

		wc_clear_notices();
		return ob_get_clean();
	}

	/**
	 * Render the notice type using the Interactivity API.
	 *
	 * @param string $notice_type The notice type.
	 *
	 * @return string Rendered notice type output.
	 */
	protected function render_iapi_notice_type( $notices, $notice_type ) {
		$iapi_notices = array_map(
			function ( $notice ) {
				$notice_id_context = esc_attr( wp_json_encode( array( 'noticeId' => $notice['index'] ) ) );
				return array(
					'notice' => "<span data-wc-context='{$notice_id_context}' data-wc-init='callbacks.renderNoticeById' ></span>",
					'data'   => $notice['data'],
				);
			},
			$notices
		);

		$has_notices_context = wp_json_encode( array( 'hasNoticesOfType' => count( $iapi_notices ) > 0 ) );

		if ( empty( $iapi_notices ) ) {
			// This will force the rendering of the notice template for each notice type so that client side notices can be added later for that type.
			$iapi_notices = array(
				array(
					'notice' => '',
				),
			);
		}

		ob_start();

		?>
		<div data-wc-context="<?php echo esc_attr( $has_notices_context ); ?>" data-wc-bind--hidden="!context.hasNoticesOfType" hidden>
			<?php
				echo wc_get_template(
					"notices/{$notice_type}.php",
					array(
						'messages' => array(),
						'notices'  => $iapi_notices,
					),
				);
			?>
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
