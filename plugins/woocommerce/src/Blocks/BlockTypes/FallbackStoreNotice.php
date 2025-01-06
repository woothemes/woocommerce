<?php declare( strict_types=1 );
namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\BlockTypes\AbstractBlock;

// The way this will work, is we will auto-insert block to post-content via
// block hooks.

// It will be hidden too.
// It will expose a store for holding a single message
// It will have state to determine if it's shown or not.

// Then product button will check if the store notice block is present, if it
// isn't it will communicate with this auto inserted block to show the message.

/**
 * Fallback store notice block.
 */
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
	 * @param array    $attributes Block attributes.
	 * @param string   $content    Block content.
	 * @param WP_Block $block      Block instance.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content, $block ) {
		return sprintf(
			'<div %1$s>%2$s</div>',
			get_block_wrapper_attributes(),
			$this->render_block_content()
		);
	}

	/**
	 * Render the block content.
	 *
	 * @return string Rendered block content.
	 */
	protected function render_block_content() {
		$context = array(
			'errorMessage' => '',
			'isVisible'    => false,
		);

		$namespace = wp_json_encode( array( 'namespace' => 'woocommerce/interactivity-dropdown' ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP );

		ob_start();
		?>
		<div data-wc-interactive="<?php echo esc_attr( $namespace ); ?>" data-wc-context="<?php echo wp_json_encode( $context, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ); ?>">
			<div data-wc-bind--hidden="!context.isVisible" class="wc-block-components-notice-banner is-error is-dismissible" >
				<div className="wc-block-components-notice-banner__content" data-wc-text="context.errorMessage">
				</div>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}
