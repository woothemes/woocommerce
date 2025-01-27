<?php

declare( strict_types = 1 );

namespace Automattic\WooCommerce\Tests\Blocks\Utils;

use WC_Product;

/**
 * Custom product class.
 */
class WcProductCustom extends WC_Product {
	/**
	 * Initialize custom product.
	 *
	 * @param WC_Product|int $product Product instance or ID.
	 */
	public function __construct( $product = 0 ) {
		parent::__construct();
	}

	/**
	 * Get internal type.
	 *
	 * @return string
	 */
	public function get_type() {
		return 'custom';
	}
}
