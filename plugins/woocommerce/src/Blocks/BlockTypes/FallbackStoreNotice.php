<?php

declare( strict_types=1 );

namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\BlockTypes\AbstractBlock;

class FallbackStoreNotice extends AbstractBlock {

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'fallback-store-notice';

	/**
	 * Render the block.
	 *
	 * @param array  $attributes The block attributes.
	 * @param string $content The block content.
	 * @param array  $block The block.
	 * @return string The block content.
	 */
	protected function render( $attributes, $content, $block ) {
		ob_start();

		$namespace = $this->get_full_block_name();
		$context   = wp_json_encode(
			array(
				'isHidden'     => true,
				'errorMessage' => 'Cannot change quantity of foo.',
			),
			JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP,
		);

		?>
		<div data-wc-context="<?php echo esc_attr( $context ); ?>" data-wc-interactive="<?php echo esc_attr( $namespace ); ?>" class="wc-block-components-notice-banner is-error is-dismissible">
			<div data-wc-text="context.errorMessage" class="wc-block-components-notice-banner__content"></div>
			
			<button
				class="wc-block-components-notice-banner__dismiss"
				aria-label="Dismiss this notice"
			>
				Close
			</button>
		</div>
		<?php
		return ob_get_clean();
	}
}
