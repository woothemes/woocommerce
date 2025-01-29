<?php
declare( strict_types = 1 );

namespace Automattic\WooCommerce\Tests\Blocks\Domain\Services\Schema;

use Automattic\WooCommerce\Blocks\Domain\Services\Schema\DocumentObject;
use Yoast\PHPUnitPolyfills\TestCases\TestCase;

/**
 * DocumentObjectTests class.
 */
class DocumentObjectTests extends TestCase {
	/**
	 * Setup test product data. Called before every test.
	 */
	protected function setUp(): void {
		parent::setUp();
		wp_set_current_user( 0 );
		wc_empty_cart();
	}

	/**
	 * test_validate_selected_shipping_methods.
	 */
	public function test_default_document_schema() {
		$document_object = new DocumentObject();
		$data            = $document_object->get_data();

		$this->assertEquals(
			$data['cart'],
			[
				'coupons'            => [],
				'shipping_rates'     => [],
				'items'              => [],
				'items_count'        => 0,
				'items_weight'       => 0,
				'needs_shipping'     => false,
				'prefers_collection' => false,
				'totals'             => [
					'total_price' => 0,
					'total_tax'   => 0,
				],
				'extensions'         => [],
			]
		);
		$this->assertEquals(
			$data['customer'],
			[
				'id'               => 0,
				'shipping_address' => [
					'first_name' => '',
					'last_name'  => '',
					'company'    => '',
					'address_1'  => '',
					'address_2'  => '',
					'city'       => '',
					'state'      => 'CA',
					'postcode'   => '',
					'country'    => 'US',
					'phone'      => '',
				],
				'billing_address'  => [
					'first_name' => '',
					'last_name'  => '',
					'company'    => '',
					'address_1'  => '',
					'address_2'  => '',
					'city'       => '',
					'state'      => 'CA',
					'postcode'   => '',
					'country'    => 'US',
					'email'      => '',
					'phone'      => '',
				],
			]
		);
		$this->assertEquals(
			$data['checkout'],
			[
				'create_account'    => false,
				'customer_note'     => '',
				'payment_method'    => '',
				'additional_fields' => [],

			]
		);
	}

	/**
	 * test_override_document_schema.
	 */
	public function test_override_document_schema() {
		$document_object = new DocumentObject(
			[
				'customer' => [
					'id'               => 1,
					'shipping_address' => [
						'first_name' => 'John',
						'last_name'  => 'Doe',
					],
					'billing_address'  => [
						'first_name' => 'Jane',
						'last_name'  => 'Doe',
					],
				],
			]
		);
		$data            = $document_object->get_data();
		$this->assertEquals(
			$data['customer'],
			[
				'id'               => 1,
				'shipping_address' => [
					'first_name' => 'John',
					'last_name'  => 'Doe',
					'company'    => '',
					'address_1'  => '',
					'address_2'  => '',
					'city'       => '',
					'state'      => 'CA',
					'postcode'   => '',
					'country'    => 'US',
					'phone'      => '',
				],
				'billing_address'  => [
					'first_name' => 'Jane',
					'last_name'  => 'Doe',
					'company'    => '',
					'address_1'  => '',
					'address_2'  => '',
					'city'       => '',
					'state'      => 'CA',
					'postcode'   => '',
					'country'    => 'US',
					'email'      => '',
					'phone'      => '',
				],
			]
		);
	}
}
