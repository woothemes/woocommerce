<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * ProductFilters class.
 */
class ProductFilters extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-filters';

	/**
	 * Register the context.
	 *
	 * @return string[]
	 */
	protected function get_block_type_uses_context() {
		return array( 'postId', 'query', 'queryId' );
	}

	/**
	 * Extra data passed through from server to client for block.
	 *
	 * @param array $attributes  Any attributes that currently are available from the block.
	 *                           Note, this will be empty in the editor context when the block is
	 *                           not in the post content on editor load.
	 */
	protected function enqueue_data( array $attributes = array() ) {
		global $pagenow;
		parent::enqueue_data( $attributes );

		$this->asset_data_registry->add( 'isBlockTheme', wc_current_theme_is_fse_theme() );
		$this->asset_data_registry->add( 'isProductArchive', is_shop() || is_product_taxonomy() );
		$this->asset_data_registry->add( 'isSiteEditor', 'site-editor.php' === $pagenow );
		$this->asset_data_registry->add( 'isWidgetEditor', 'widgets.php' === $pagenow || 'customize.php' === $pagenow );
	}

	/**
	 * Include and render the block.
	 *
	 * @param array    $attributes Block attributes. Default empty array.
	 * @param string   $content    Block content. Default empty string.
	 * @param WP_Block $block      Block instance.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content, $block ) {
		$query_id              = $block->context['queryId'] ?? 0;
		$filter_params         = $this->get_filter_params( $query_id );
		$block_context         = array_merge(
			$block->context,
			array(
				'filterParams' => $filter_params,
			),
		);
		$inner_blocks          = array_reduce(
			$block->parsed_block['innerBlocks'],
			function ( $carry, $parsed_block ) use ( $block_context ) {
				$carry .= ( new \WP_Block( $parsed_block, $block_context ) )->render();
				return $carry;
			},
			''
		);
		$interactivity_context = array(
			'params'         => $filter_params,
			'originalParams' => $filter_params,
		);

		$classes = '';
		$styles  = '';
		$tags    = new \WP_HTML_Tag_Processor( $content );

		if ( $tags->next_tag( array( 'class_name' => 'wc-block-product-filters' ) ) ) {
			$classes = $tags->get_attribute( 'class' );
			$styles  = $tags->get_attribute( 'style' );
		}

		$wrapper_attributes = array(
			'class'                            => $classes,
			'data-wc-interactive'              => wp_json_encode( array( 'namespace' => $this->get_full_block_name() ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ),
			'data-wc-watch--navigation'        => 'callbacks.maybeNavigate',
			'data-wc-watch--scrolling'         => 'callbacks.scrollLimit',
			'data-wc-on--keyup'                => 'actions.closeOverlayOnEscape',
			'data-wc-navigation-id'            => $this->generate_navigation_id( $block ),
			'data-wc-context'                  => wp_json_encode( $interactivity_context, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ),
			'data-wc-class--is-overlay-opened' => 'context.isOverlayOpened',
			'style'                            => $styles,
		);

		ob_start();
		?>
		<div <?php echo get_block_wrapper_attributes( $wrapper_attributes ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<button
				class="wc-block-product-filters__open-overlay"
				data-wc-on--click="actions.openOverlay"
			>
				<?php if ( 'label-only' !== $attributes['overlayButtonType'] ) : ?>
					<?php echo $this->get_svg_icon( $attributes['overlayIcon'] ?? 'filter-icon-2' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				<?php endif; ?>
				<?php if ( 'icon-only' !== $attributes['overlayButtonType'] ) : ?>
					<span><?php echo esc_html__( 'Filter products', 'woocommerce' ); ?></span>
				<?php endif; ?>
			</button>
			<div class="wc-block-product-filters__overlay">
				<div class="wc-block-product-filters__overlay-wrapper">
					<div
						class="wc-block-product-filters__overlay-dialog"
						role="dialog"
					>
						<header class="wc-block-product-filters__overlay-header">
							<button
								class="wc-block-product-filters__close-overlay"
								data-wc-on--click="actions.closeOverlay"
							>
								<span><?php echo esc_html__( 'Close', 'woocommerce' ); ?></span>
								<?php echo $this->get_svg_icon( 'close' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
							</button>
						</header>
						<div class="wc-block-product-filters__overlay-content">
							<?php echo $inner_blocks; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
						</div>
						<footer
							class="wc-block-product-filters__overlay-footer"
						>
							<button
								class="wc-block-product-filters__apply wp-element-button"
								data-wc-interactive="<?php echo esc_attr( wp_json_encode( array( 'namespace' => $this->get_full_block_name() ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ) ); ?>"
								data-wc-on--click="actions.closeOverlay"
							>
								<span><?php echo esc_html__( 'Apply', 'woocommerce' ); ?></span>
							</button>
						</footer>
					</div>
				</div>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Get SVG icon markup for a given icon name.
	 *
	 * @param string $name The name of the icon to retrieve.
	 * @return string SVG markup for the icon, or empty string if icon not found.
	 */
	private function get_svg_icon( string $name ) {
		$icons = array(
			'close'         => '<path d="M12 13.0607L15.7123 16.773L16.773 15.7123L13.0607 12L16.773 8.28772L15.7123 7.22706L12 10.9394L8.28771 7.22705L7.22705 8.28771L10.9394 12L7.22706 15.7123L8.28772 16.773L12 13.0607Z" fill="currentColor"/>',
			'filter-icon-1' => '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.541 4.20007H5.20245C4.27908 4.20007 3.84904 5.34461 4.54394 5.95265L10.541 11.2001V16.2001L10.541 17.9428C10.541 18.1042 10.619 18.2558 10.7504 18.3496L13.2504 20.1353C13.5813 20.3717 14.041 20.1352 14.041 19.7285V11.2001L19.3339 5.90718C19.9639 5.27722 19.5177 4.20007 18.6268 4.20007H13.041H10.541Z" fill="currentColor"/>',
			'filter-icon-2' => '<path d="M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z" fill="currentColor"/>',
			'filter-icon-3' => '<path d="M5 5H19V6.5H5V5Z" fill="currentColor"/><path d="M5 11.25H19V12.75H5V11.25Z" fill="currentColor"/><path d="M19 17.5H5V19H19V17.5Z" fill="currentColor"/>',
			'filter-icon-4' => '<path d="M19 7.5H11.372C11.0631 6.62611 10.2297 6 9.25 6C8.27034 6 7.43691 6.62611 7.12803 7.5H5V9H7.12803C7.43691 9.87389 8.27034 10.5 9.25 10.5C10.2297 10.5 11.0631 9.87389 11.372 9H19V7.5Z" fill="currentColor"/><path d="M19 15H16.872C16.5631 14.1261 15.7297 13.5 14.75 13.5C13.7703 13.5 12.9369 14.1261 12.628 15H5V16.5H12.628C12.9369 17.3739 13.7703 18 14.75 18C15.7297 18 16.5631 17.3739 16.872 16.5H19V15Z" fill="currentColor"/>',
		);

		if ( ! isset( $icons[ $name ] ) ) {
			return '';
		}

		return sprintf(
			'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">%s</svg>',
			$icons[ $name ]
		);
	}

	/**
	 * Generate a unique navigation ID for the block.
	 *
	 * @param mixed $block - Block instance.
	 * @return string - Unique navigation ID.
	 */
	private function generate_navigation_id( $block ) {
		return sprintf(
			'wc-product-filters-%s',
			md5( wp_json_encode( $block->parsed_block['innerBlocks'] ) )
		);
	}

	/**
	 * Parse the filter parameters from the URL.
	 * For now we only get the global query params from the URL. In the future,
	 * we should get the query params based on $query_id.
	 *
	 * @param int $query_id Query ID.
	 * @return array Parsed filter params.
	 */
	private function get_filter_params( $query_id ) {
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$request_uri = isset( $_SERVER['REQUEST_URI'] ) ? wp_unslash( $_SERVER['REQUEST_URI'] ) : '';

		$parsed_url = wp_parse_url( esc_url_raw( $request_uri ) );

		if ( empty( $parsed_url['query'] ) ) {
			return array();
		}

		parse_str( $parsed_url['query'], $url_query_params );

		/**
		 * Filters the active filter data provided by filter blocks.
		 *
		 * @since 11.7.0
		 *
		 * @param array $filter_param_keys The active filters data
		 * @param array $url_param_keys    The query param parsed from the URL.
		 *
		 * @return array Active filters params.
		 */
		$filter_param_keys = array_unique( apply_filters( 'collection_filter_query_param_keys', array(), array_keys( $url_query_params ) ) );

		return array_filter(
			$url_query_params,
			function ( $key ) use ( $filter_param_keys ) {
				return in_array( $key, $filter_param_keys, true );
			},
			ARRAY_FILTER_USE_KEY
		);
	}
}
