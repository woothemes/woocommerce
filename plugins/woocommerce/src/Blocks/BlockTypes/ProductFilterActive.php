<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * Product Filter: Active Block.
 */
final class ProductFilterActive extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-filter-active';

	/**
	 * Render the block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content    Block content.
	 * @param WP_Block $block      Block instance.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content, $block ) {
		$filter_params = $block->context['filterParams'] ?? array();

		/**
		 * Filters the active filter data provided by filter blocks.
		 *
		 * $data = array(
		 *     <id> => array(
		 *         'type' => string,
		 *         'items' => array(
		 *             array(
		 *                 'title' => string,
		 *                 'attributes' => array(
		 *                     <key> => string
		 *                 )
		 *             )
		 *         )
		 *     ),
		 * );
		 *
		 * @since 11.7.0
		 *
		 * @param array $data   The active filters data
		 * @param array $params The query param parsed from the URL.
		 * @return array Active filters data.
		 */
		$active_filters = apply_filters( 'collection_active_filters_data', array(), $filter_params );

		$context = array(
			'hasSelectedFilters' => ! empty( $active_filters ) ?? false,
		);

		$filter_context = array(
			'items' => $active_filters,
		);

		$wrapper_attributes = array(
			'data-wc-interactive'  => wp_json_encode( array( 'namespace' => $this->get_full_block_name() ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ),
			'data-wc-key'          => wp_unique_prefixed_id( $this->get_full_block_name() ),
			'data-wc-context'      => wp_json_encode( $context, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ),
			'data-wc-bind--hidden' => '!context.hasSelectedFilters',
		);

		if ( empty( $active_filters ) ) {
			$wrapper_attributes['hidden'] = true;
		}

		return sprintf(
			'<div %1$s>%2$s</div>',
			get_block_wrapper_attributes( $wrapper_attributes ),
			array_reduce(
				$block->parsed_block['innerBlocks'],
				function ( $carry, $parsed_block ) use ( $filter_context ) {
					$carry .= ( new \WP_Block( $parsed_block, array( 'filterData' => $filter_context ) ) )->render();
					return $carry;
				},
				''
			)
		);
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
