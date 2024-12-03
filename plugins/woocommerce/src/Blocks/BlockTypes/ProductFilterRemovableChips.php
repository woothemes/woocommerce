<?php
declare( strict_types = 1 );

namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * Product Filter: Removable Chips Block.
 */
final class ProductFilterRemovableChips extends AbstractBlock {

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-filter-removable-chips';

	/**
	 * Render the block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content    Block content.
	 * @param WP_Block $block      Block instance.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content, $block ) {
		$filters = array();

		if ( ! empty( $block->context['filterData'] ) && ! empty( $block->context['filterData']['items'] ) ) {
			$filters = $block->context['filterData']['items'];
		}

		$style = '';

		$tags = new \WP_HTML_Tag_Processor( $content );
		if ( $tags->next_tag( array( 'class_name' => 'wc-block-product-filter-removable-chips' ) ) ) {
			$classes = $tags->get_attribute( 'class' );
			$style   = $tags->get_attribute( 'style' );
		}

		$wrapper_attributes = array(
			'data-wc-interactive' => wp_json_encode( array( 'namespace' => $this->get_full_block_name() ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ),
			'data-wc-key'         => wp_unique_prefixed_id( $this->get_full_block_name() ),
			'class'               => esc_attr( $classes ),
			'style'               => esc_attr( $style ),
		);

		if ( empty( $filters ) ) {
			$wrapper_attributes['hidden'] = true;
		}

		ob_start();
		?>

		<div <?php echo get_block_wrapper_attributes( $wrapper_attributes ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<?php if ( ! empty( $filters ) ) : ?>
				<ul class="wc-block-product-filter-removable-chips__items">
					<?php foreach ( $filters as $filter ) : ?>
						<?php foreach ( $filter['items'] as $item ) : ?>
							<?php $this->render_chip_item( $filter['type'], $item ); ?>
						<?php endforeach; ?>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
		</div>

		<?php
		return ob_get_clean();
	}

	/**
	 * Render the chip item of an active filter.
	 *
	 * @param string $type Filter type.
	 * @param array  $item Item data.
	 * @return string Item HTML.
	 */
	private function render_chip_item( $type, $item ) {
		list ( 'title' => $title, 'attributes' => $attributes ) = wp_parse_args(
			$item,
			array(
				'title'      => '',
				'attributes' => array(),
			)
		);

		if ( ! $title || empty( $attributes ) ) {
			return;
		}

		$remove_label = sprintf( 'Remove %s filter', wp_strip_all_tags( $title ) );
		?>
		<li class="wc-block-product-filter-removable-chips__item">
			<span class="wc-block-product-filter-removable-chips__label">
				<?php printf( '%s: %s', esc_html( $type ), wp_kses_post( $title ) ); ?>
			</span>
			<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			<button class="wc-block-product-filter-removable-chips__remove" aria-label="<?php echo esc_attr( $remove_label ); ?>" <?php echo $this->get_html_attributes( $attributes ); ?>>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" class="wc-block-product-filter-removable-chips__remove-icon" aria-hidden="true" focusable="false"><path d="M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"></path></svg>
				<span class="screen-reader-text"><?php echo esc_html( $remove_label ); ?></span>
			</button>
		</li>
		<?php
	}

	/**
	 * Build HTML attributes string from assoc array.
	 *
	 * @param array $attributes Attributes data as an assoc array.
	 * @return string Escaped HTML attributes string.
	 */
	private function get_html_attributes( $attributes ) {
		return array_reduce(
			array_keys( $attributes ),
			function ( $acc, $key ) use ( $attributes ) {
				$acc .= sprintf( ' %1$s="%2$s"', esc_attr( $key ), esc_attr( $attributes[ $key ] ) );
				return $acc;
			},
			''
		);
	}

	/**
	 * Get the frontend script handle for this block type.
	 *
	 * @param string $key Data to get, or default to everything.
	 *
	 * @return null
	 */
	protected function get_block_type_script( $key = null ) {
		return null;
	}
}
