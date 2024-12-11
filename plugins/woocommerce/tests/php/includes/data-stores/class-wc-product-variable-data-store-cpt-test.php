<?php

/**
 * Class WC_Product_Variable_Data_Store_CPT_Test
 */
class WC_Product_Variable_Data_Store_CPT_Test extends WC_Unit_Test_Case {

	/**
	 * Helper filter to force prices inclusive of tax.
	 */
	public function __return_incl() {
		return 'incl';
	}

	/**
	 * @testdox Validation of prices data correctly identifies valid and invalid structures
	 */
	public function test_validate_prices_data() {
		$data_store      = new WC_Product_Variable_Data_Store_CPT();
		$current_version = '1234';
		$price_hash1     = 'f9e544f77b7eac7add281ef28ca5559f';
		$price_hash2     = 'a7c539f88b7eac7add281ef28ca5559f';

		// Test valid prices data with single hash structure.
		$valid_prices = array(
			'version'    => $current_version,
			$price_hash1 => array(
				'price'         => array(
					123 => '10.00',
					456 => '20.00',
				),
				'regular_price' => array(
					123 => '15.00',
					456 => '25.00',
				),
				'sale_price'    => array(
					123 => '10.00',
					456 => '20.00',
				),
			),
		);

		$this->assertTrue(
			$this->invokeMethod( $data_store, 'validate_prices_data', array( $valid_prices, $current_version ) ),
			'Valid prices data with single hash should pass validation'
		);

		// Test valid prices data with multiple hash structure.
		$valid_prices_multiple = array(
			'version'    => $current_version,
			$price_hash1 => array(
				'price'         => array(
					123 => '10.00',
					456 => '20.00',
				),
				'regular_price' => array(
					123 => '15.00',
					456 => '25.00',
				),
				'sale_price'    => array(
					123 => '10.00',
					456 => '20.00',
				),
			),
			$price_hash2 => array(
				'price'         => array(
					789 => '30.00',
					101 => '40.00',
				),
				'regular_price' => array(
					789 => '35.00',
					101 => '45.00',
				),
				'sale_price'    => array(
					789 => '30.00',
					101 => '40.00',
				),
			),
		);

		$this->assertTrue(
			$this->invokeMethod( $data_store, 'validate_prices_data', array( $valid_prices_multiple, $current_version ) ),
			'Valid prices data with multiple hashes should pass validation'
		);

		// Test invalid data type.
		$this->assertFalse(
			$this->invokeMethod( $data_store, 'validate_prices_data', array( 'not an array', $current_version ) ),
			'Non-array data should fail validation'
		);

		// Test valid prices data with empty sale prices.
		$valid_prices_empty_sale = array(
			'version'    => $current_version,
			$price_hash1 => array(
				'price'         => array(
					123 => '15.00',
					456 => '25.00',
				),
				'regular_price' => array(
					123 => '15.00',
					456 => '25.00',
				),
				'sale_price'    => array(
					123 => '',
					456 => '',
				),
			),
		);

		$this->assertTrue(
			$this->invokeMethod( $data_store, 'validate_prices_data', array( $valid_prices_empty_sale, $current_version ) ),
			'Valid prices data with empty sale prices should pass validation'
		);

		// Test valid prices data with mixed empty and set prices.
		$valid_prices_mixed = array(
			'version'    => $current_version,
			$price_hash1 => array(
				'price'         => array(
					123 => '10.00',
					456 => '25.00',
				),
				'regular_price' => array(
					123 => '15.00',
					456 => '25.00',
				),
				'sale_price'    => array(
					123 => '10.00',
					456 => '',  // No sale price for this variation.
				),
			),
		);

		$this->assertTrue(
			$this->invokeMethod( $data_store, 'validate_prices_data', array( $valid_prices_mixed, $current_version ) ),
			'Valid prices data with mixed empty and set sale prices should pass validation'
		);

		// Test invalid hash value type.
		$invalid_hash_value = array(
			'version'    => $current_version,
			$price_hash1 => 'not an array',
		);

		$this->assertFalse(
			$this->invokeMethod( $data_store, 'validate_prices_data', array( $invalid_hash_value, $current_version ) ),
			'Non-array hash value should fail validation'
		);

		// Test missing required price types.
		$missing_price_types = array(
			'version'    => $current_version,
			$price_hash1 => array(
				'price' => array( 123 => '10.00' ),
				// missing regular_price and sale_price.
			),
		);

		$this->assertFalse(
			$this->invokeMethod( $data_store, 'validate_prices_data', array( $missing_price_types, $current_version ) ),
			'Data missing required price types should fail validation'
		);

		// Test invalid variation ID type.
		$invalid_variation_id = array(
			'version'    => $current_version,
			$price_hash1 => array(
				'price'         => array( 'not_numeric' => '10.00' ),
				'regular_price' => array( 'not_numeric' => '15.00' ),
				'sale_price'    => array( 'not_numeric' => '10.00' ),
			),
		);

		$this->assertFalse(
			$this->invokeMethod( $data_store, 'validate_prices_data', array( $invalid_variation_id, $current_version ) ),
			'Non-numeric variation IDs should fail validation'
		);

		// Test invalid price value type.
		$invalid_price_value = array(
			'version'    => $current_version,
			$price_hash1 => array(
				'price'         => array( 123 => 'not_numeric' ),
				'regular_price' => array( 123 => 'not_numeric' ),
				'sale_price'    => array( 123 => 'not_numeric' ),
			),
		);

		$this->assertFalse(
			$this->invokeMethod( $data_store, 'validate_prices_data', array( $invalid_price_value, $current_version ) ),
			'Non-numeric price values should fail validation'
		);

		// Test mismatched version.
		$wrong_version = array(
			'version'    => 'wrong_version',
			$price_hash1 => array(
				'price'         => array( 123 => '10.00' ),
				'regular_price' => array( 123 => '15.00' ),
				'sale_price'    => array( 123 => '10.00' ),
			),
		);

		$this->assertFalse(
			$this->invokeMethod( $data_store, 'validate_prices_data', array( $wrong_version, $current_version ) ),
			'Data with wrong version should fail validation'
		);

		// Test one valid hash and one invalid hash.
		$mixed_valid_invalid = array(
			'version'    => $current_version,
			$price_hash1 => array(
				'price'         => array( 123 => '10.00' ),
				'regular_price' => array( 123 => '15.00' ),
				'sale_price'    => array( 123 => '10.00' ),
			),
			$price_hash2 => array(
				'price'         => array( 'invalid' => 'not_numeric' ),
				'regular_price' => array( 'invalid' => 'not_numeric' ),
				'sale_price'    => array( 'invalid' => 'not_numeric' ),
			),
		);

		$this->assertFalse(
			$this->invokeMethod( $data_store, 'validate_prices_data', array( $mixed_valid_invalid, $current_version ) ),
			'Data with mix of valid and invalid hashes should fail validation'
		);
	}

	/**
	 * @testdox Validation of children data correctly identifies valid and invalid structures
	 */
	public function test_validate_children_data() {
		$data_store      = new WC_Product_Variable_Data_Store_CPT();
		$current_version = '1234';

		// Test valid children data.
		$valid_children = array(
			'version' => $current_version,
			'all'     => array( 123, 456, 789 ),
			'visible' => array( 123, 456 ),
		);

		$this->assertTrue(
			$this->invokeMethod( $data_store, 'validate_children_data', array( $valid_children, $current_version ) ),
			'Valid children data should pass validation'
		);

		// Test invalid data type.
		$this->assertFalse(
			$this->invokeMethod( $data_store, 'validate_children_data', array( 'not an array', $current_version ) ),
			'Non-array data should fail validation'
		);

		// Test missing required keys.
		$missing_keys = array(
			'version' => $current_version,
			'all'     => array( 123, 456 ),
			// missing 'visible' key.
		);

		$this->assertFalse(
			$this->invokeMethod( $data_store, 'validate_children_data', array( $missing_keys, $current_version ) ),
			'Data missing required keys should fail validation'
		);

		// Test invalid child ID type.
		$invalid_child_id = array(
			'version' => $current_version,
			'all'     => array( 'not_numeric', 456 ),
			'visible' => array( 'not_numeric' ),
		);

		$this->assertFalse(
			$this->invokeMethod( $data_store, 'validate_children_data', array( $invalid_child_id, $current_version ) ),
			'Non-numeric child IDs should fail validation'
		);

		// Test invalid arrays for all/visible.
		$invalid_arrays = array(
			'version' => $current_version,
			'all'     => 'not an array',
			'visible' => 'not an array',
		);

		$this->assertFalse(
			$this->invokeMethod( $data_store, 'validate_children_data', array( $invalid_arrays, $current_version ) ),
			'Non-array values for all/visible should fail validation'
		);

		// Test mismatched version.
		$wrong_version = array(
			'version' => 'wrong_version',
			'all'     => array( 123, 456 ),
			'visible' => array( 123 ),
		);

		$this->assertFalse(
			$this->invokeMethod( $data_store, 'validate_children_data', array( $wrong_version, $current_version ) ),
			'Data with wrong version should fail validation'
		);
	}

	/**
	 * Helper method to call protected/private methods.
	 *
	 * @param object $obj         Object instance.
	 * @param string $method_name Method name to call.
	 * @param array  $parameters  Array of parameters to pass to method.
	 *
	 * @return mixed Method return value.
	 */
	protected function invokeMethod( $obj, $method_name, $parameters = array() ) {
		$reflection = new \ReflectionClass( get_class( $obj ) );
		$method     = $reflection->getMethod( $method_name );
		$method->setAccessible( true );

		return $method->invokeArgs( $obj, $parameters );
	}

	/**
	 * @testdox Variation price cache accounts for Customer VAT exemption.
	 */
	public function test_variation_price_cache_vat_exempt() {
		// Set store to include tax in price display.
		add_filter( 'wc_tax_enabled', '__return_true' );
		add_filter( 'woocommerce_prices_include_tax', '__return_true' );
		add_filter( 'pre_option_woocommerce_tax_display_shop', array( $this, '__return_incl' ) );
		add_filter( 'pre_option_woocommerce_tax_display_cart', array( $this, '__return_incl' ) );

		// Create tax rate.
		$tax_id = WC_Tax::_insert_tax_rate(
			array(
				'tax_rate_country'  => '',
				'tax_rate_state'    => '',
				'tax_rate'          => '10.0000',
				'tax_rate_name'     => 'VAT',
				'tax_rate_priority' => '1',
				'tax_rate_compound' => '0',
				'tax_rate_shipping' => '1',
				'tax_rate_order'    => '1',
				'tax_rate_class'    => '',
			)
		);

		// Create our variable product.
		$product = WC_Helper_Product::create_variation_product();

		// Verify that a VAT exempt customer gets prices with tax removed.
		WC()->customer->set_is_vat_exempt( true );

		$prices_no_tax    = array( '9.09', '13.64', '14.55', '15.45', '16.36', '17.27' );
		$variation_prices = $product->get_variation_prices( true );

		$this->assertEquals( $prices_no_tax, array_values( $variation_prices['price'] ) );

		// Verify that a normal customer gets prices with tax included.
		// This indirectly proves that the customer's VAT exemption influences the cache key.
		WC()->customer->set_is_vat_exempt( false );

		$prices_with_tax  = array( '10.00', '15.00', '16.00', '17.00', '18.00', '19.00' );
		$variation_prices = $product->get_variation_prices( true );

		$this->assertEquals( $prices_with_tax, array_values( $variation_prices['price'] ) );

		// Clean up.
		WC_Tax::_delete_tax_rate( $tax_id );

		remove_filter( 'wc_tax_enabled', '__return_true' );
		remove_filter( 'woocommerce_prices_include_tax', '__return_true' );
		remove_filter( 'pre_option_woocommerce_tax_display_shop', array( $this, '__return_incl' ) );
		remove_filter( 'pre_option_woocommerce_tax_display_cart', array( $this, '__return_incl' ) );
	}
}
