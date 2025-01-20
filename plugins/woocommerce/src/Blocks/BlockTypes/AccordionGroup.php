<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * AccordionGroup class.
 */
class AccordionGroup extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'accordion-group';

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
	
		$suffix = wp_scripts_get_suffix();
		if ( defined( 'IS_GUTENBERG_PLUGIN' ) && IS_GUTENBERG_PLUGIN ) {
			$module_url = gutenberg_url( '/build-module/block-library/accordion-group/view.min.js' );
		}
	
		$script_data = $this->asset_api->get_script_data( $this->asset_api->get_block_asset_build_path( $this->block_name . '-frontend' ), array(  ) );
		wp_register_script(
			'wc-accordion-group-frontend',
			$script_data['src'],
			$script_data['dependencies'],
			$script_data['version']
		);
	
		wp_enqueue_script( 'wc-accordion-group-frontend' );
	
		$p         = new \WP_HTML_Tag_Processor( $content );
		$autoclose = $attributes['autoclose'] ? 'true' : 'false';
	
		if ( $p->next_tag( array( 'class_name' => 'wp-block-woocommerce-accordion-group' ) ) ) {
            $interactivity_context = array(
                'autoclose' => $autoclose,
                'isOpen' => array()
            );
			$p->set_attribute( 'data-wc-interactive', wp_json_encode( array( 'namespace' => 'woocommerce/accordion' ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ) );
            $p->set_attribute( 'data-wc-context', wp_json_encode( $interactivity_context, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ) );
	
			// Only modify content if directives have been set.
			$content = $p->get_updated_html();
		}
	
		return $content;
	}
	
}
