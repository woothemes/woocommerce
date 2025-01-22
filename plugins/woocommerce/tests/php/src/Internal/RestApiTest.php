<?php

namespace Automattic\WooCommerce\Tests\Internal;

use Automattic\WooCommerce\Internal\RestApiParameterUtil;

/**
 * Tests for the RestApiParameterUtil class.
 * @package Automattic\WooCommerce\Tests\Internal
 */
class RestApiTest extends \WC_Unit_Test_Case {

	/**
	 * @testdox 'adjust_create_refund_request_parameters' adjust the 'reason' parameter to null if it's somehow empty.
	 *
	 * @testWith ["", null]
	 *           ["none", null]
	 *           ["foo", "foo"]
	 *
	 * @param string $input_reason The value of 'reason' to test.
	 * @param string $expected_output_reason The expected converted value of 'reason'.
	 */
	public function test_rest_api_returns_false( $input_reason, $expected_output_reason ) {

		$this->assertEquals( WC()->is_rest_api_request(), false );
	}
}
