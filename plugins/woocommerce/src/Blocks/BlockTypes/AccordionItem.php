<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * ProductFilters class.
 */
class AccordionItem extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'accordion-item';

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

	/**
	 * Include and render the block.
	 *
	 * @param array    $attributes Block attributes. Default empty array.
	 * @param string   $content    Block content. Default empty string.
	 * @param WP_Block $block      Block instance.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content, $block ) {
			if ( ! $content ) {
				return $content;
			}
		
			$p         = new \WP_HTML_Tag_Processor( $content );
			$unique_id = wp_unique_id( 'accordion-item-' );
		
			// Initialize the state of the item on the server using a closure,
			// since we need to get derived state based on the current context.
			wp_interactivity_state(
				'core/accordion',
				array(
					'isOpen' => function () {
						$context = wp_interactivity_get_context();
						return $context['openByDefault'];
					},
				)
			);
		
			if ( $p->next_tag( array( 'class_name' => 'wp-block-woocommerce-accordion-item' ) ) ) {
				$open_by_default = $attributes['openByDefault'] ? 'true' : 'false';
				$p->set_attribute( 'data-wp-context', '{ "id": "' . $unique_id . '", "openByDefault": ' . $open_by_default . ' }' );
				$p->set_attribute( 'data-wp-class--is-open', 'state.isOpen' );
				$p->set_attribute( 'data-wp-init', 'callbacks.initIsOpen' );
		
				if ( $p->next_tag( array( 'class_name' => 'accordion-item__toggle' ) ) ) {
					$p->set_attribute( 'data-wp-on--click', 'actions.toggle' );
					$p->set_attribute( 'id', $unique_id );
					$p->set_attribute( 'aria-controls', $unique_id . '-panel' );
					$p->set_attribute( 'data-wp-bind--aria-expanded', 'state.isOpen' );
		
					if ( $p->next_tag( array( 'class_name' => 'wp-block-woocommerce-accordion-panel' ) ) ) {
						$p->set_attribute( 'id', $unique_id . '-panel' );
						$p->set_attribute( 'aria-labelledby', $unique_id );
						$p->set_attribute( 'data-wp-bind--inert', '!state.isOpen' );
		
						// Only modify content if all directives have been set.
						$content = $p->get_updated_html();
					}
				}
			}
		
			return $content;
	}
	
}
