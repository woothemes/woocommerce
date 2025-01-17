<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * ProductFilters class.
 */
class AccordionPanel extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'accordion-panel';

	/**
	 * Registers the block type with WordPress.
	 *
	 * @return string[] Chunks paths.
	 */
	protected function register_block_type() {
		$block_settings = [
			'render_callback' => $this->get_block_type_render_callback(),
			'editor_script'   => $this->get_block_type_editor_script( 'handle' ),
			'editor_style'    => $this->get_block_type_editor_style(),
			'style'           => $this->get_block_type_style(),
		];

		if ( isset( $this->api_version ) ) {
			$block_settings['api_version'] = intval( $this->api_version );
		}

		$metadata_path = $this->asset_api->get_block_metadata_path( $this->block_name, 'inner-blocks/' );

		/**
		 * We always want to load block styles separately, for every theme.
		 * When the core assets are loaded separately, other blocks' styles get
		 * enqueued separately too. Thus we only need to handle the remaining
		 * case.
		 */
		if (
			! is_admin() &&
			! wc_current_theme_is_fse_theme() &&
			$block_settings['style'] &&
			(
				! function_exists( 'wp_should_load_separate_core_block_assets' ) ||
				! wp_should_load_separate_core_block_assets()
			)
		) {
			$style_handles           = $block_settings['style'];
			$block_settings['style'] = null;
			add_filter(
				'render_block',
				function ( $html, $block ) use ( $style_handles ) {
					if ( $block['blockName'] === $this->get_block_type() ) {
						array_map( 'wp_enqueue_style', $style_handles );
					}
					return $html;
				},
				10,
				2
			);
		}

		// Prefer to register with metadata if the path is set in the block's class.
		if ( ! empty( $metadata_path ) ) {
			register_block_type_from_metadata(
				$metadata_path,
				$block_settings
			);
			return;
		}

		/*
		 * Insert attributes and supports if we're not registering the block using metadata.
		 * These are left unset until now and only added here because if they were set when registering with metadata,
		 * the attributes and supports from $block_settings would override the values from metadata.
		 */
		$block_settings['attributes']   = $this->get_block_type_attributes();
		$block_settings['supports']     = $this->get_block_type_supports();
		$block_settings['uses_context'] = $this->get_block_type_uses_context();

		register_block_type(
			$this->get_block_type(),
			$block_settings
		);
	}
}
