<?php

namespace Automattic\WooCommerce\Tests\Internal;

/**
 * Tests for the RestApiTest class.
 * @package Automattic\WooCommerce\Tests\Internal
 */
class RestApiTest extends \WC_Unit_Test_Case {

	/**
	 * Test that the rest api returns false when it is not an rest api request.
	 */
	public function test_rest_api_returns_false() {
		$this->assertEquals( WC()->is_rest_api_request(), false );
	}
}
