<?php

declare( strict_types = 1 );

class WC_Product_Custom extends \WC_Product {
	public function __construct( $product = 0 ) {
		parent::__construct();
	}

	public function get_type() {
		return 'custom';
	}
}
