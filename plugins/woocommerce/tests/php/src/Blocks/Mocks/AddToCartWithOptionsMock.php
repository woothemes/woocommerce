<?php
declare( strict_types = 1 );

namespace Automattic\WooCommerce\Tests\Blocks\Mocks;

use WP_Block;
use Automattic\WooCommerce\Blocks\BlockTypes\AddToCartWithOptions;
use Automattic\WooCommerce\Blocks\Package;
use Automattic\WooCommerce\Blocks\Assets\Api;
use Automattic\WooCommerce\Blocks\Assets\AssetDataRegistry;
use Automattic\WooCommerce\Blocks\Integrations\IntegrationRegistry;

/**
 * AddToCartWithOptionsMock used to test AddToCartWithOptions block functions.
 */
class AddToCartWithOptionsMock extends AddToCartWithOptions {
	/**
	 * Initialize our mock class.
	 */
	public function __construct() {
		parent::__construct(
			Package::container()->get( API::class ),
			Package::container()->get( AssetDataRegistry::class ),
			new IntegrationRegistry(),
		);
	}

	/**
	 * Render the block with a specific product ID.
	 *
	 * @param int $product_id The ID of the product to render the block for.
	 * @return string|void Rendered block output.
	 */
	public function render_with_product_id( $product_id ) {
		return $this->render(
			[],
			'',
			(object) array(
				'context' => array(
					'postId' => $product_id,
				),
			)
		);
	}
}
