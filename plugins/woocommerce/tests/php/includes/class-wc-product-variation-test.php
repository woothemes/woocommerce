<?php
declare( strict_types=1 );

use Automattic\WooCommerce\Internal\CostOfGoodsSold\CogsAwareUnitTestSuiteTrait;

/**
 * Tests for the WC_Product_Variation class.
 */
class WC_Product_Variation_Test extends WC_Unit_Test_Case {
	use CogsAwareUnitTestSuiteTrait;

	/**
	 * Runs after each test.
	 */
	public function tearDown(): void {
		parent::tearDown();
		$this->disable_cogs_feature();
	}

	/**
	 * @testdox Effective Cost of Goods Sold value for a variation is its defined value + the parent's defined value if the "additive" flag is set.
	 *
	 * @testWith [true]
	 *           [false]
	 *
	 * @param bool $set_additive Value of the override flag to test with.
	 */
	public function test_effective_cogs_value_depends_on_additive_flag( bool $set_additive ) {
		$this->enable_cogs_feature();

		$parent_product = WC_Helper_Product::create_variation_product();
		$parent_product->set_cogs_value( 12.34 );
		$parent_product->save();

		$variation = wc_get_product( $parent_product->get_children()[0] );
		$variation->set_cogs_value( 56.78 );
		$variation->set_cogs_value_is_additive( $set_additive );
		$variation->save();

		$expected_effective_value = $set_additive ? 12.34 + 56.78 : 56.78;
		$this->assertEquals( $expected_effective_value, $variation->get_cogs_effective_value() );
		$this->assertEquals( $expected_effective_value, $variation->get_cogs_total_value() );
	}
}
