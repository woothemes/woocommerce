<?php
declare( strict_types = 1);

namespace Automattic\WooCommerce\Blocks\Domain\Services\Schema;

use WC_Cart;
use WC_Customer;
use Automattic\WooCommerce\StoreApi\StoreApi;
use Automattic\WooCommerce\StoreApi\SchemaController;
use Automattic\WooCommerce\StoreApi\Schemas\V1\CartSchema;
use Automattic\WooCommerce\StoreApi\Schemas\V1\BillingAddressSchema;
use Automattic\WooCommerce\StoreApi\Schemas\V1\ShippingAddressSchema;
use Automattic\WooCommerce\StoreApi\Utilities\LocalPickupUtils;
use Automattic\WooCommerce\StoreApi\Utilities\CartController;

/**
 * DocumentObject class.
 *
 * This will combine and format given cart/customer/checkout data into a standard object format that can be queried through
 * JSON. This is used for conditional fields and validation during checkout.
 */
class DocumentObject {
	/**
	 * The document schema.
	 *
	 * @var array
	 */
	protected $default_document_schema = [
		'cart'     => [
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
		],
		'customer' => [
			'id'               => 0,
			'shipping_address' => [
				'first_name' => '',
				'last_name'  => '',
				'company'    => '',
				'address_1'  => '',
				'address_2'  => '',
				'city'       => '',
				'state'      => '',
				'postcode'   => '',
				'country'    => '',
			],
			'billing_address'  => [
				'first_name' => '',
				'last_name'  => '',
				'company'    => '',
				'address_1'  => '',
				'address_2'  => '',
				'city'       => '',
				'state'      => '',
				'postcode'   => '',
				'country'    => '',
			],
		],
		'checkout' => [
			'create_account'    => false,
			'customer_note'     => '',
			'payment_method'    => '',
			'additional_fields' => [],
		],
	];

	/**
	 * The cart object.
	 *
	 * @var WC_Cart|null
	 */
	protected $cart = null;

	/**
	 * The customer object.
	 *
	 * @var WC_Customer|null
	 */
	protected $customer = null;

	/**
	 * Cart controller class instance.
	 *
	 * @var CartController
	 */
	protected $cart_controller;

	/**
	 * Schema controller class instance.
	 *
	 * @var SchemaController
	 */
	protected $schema_controller;

	/**
	 * The request data.
	 *
	 * @var array
	 */
	protected $request_data = [];

	/**
	 * The constructor.
	 *
	 * @param array $request_data Data that overrides the default values.
	 */
	public function __construct( array $request_data = [] ) {
		$this->cart_controller   = new CartController();
		$this->schema_controller = StoreApi::container()->get( SchemaController::class );
		$this->cart              = $this->cart_controller->get_cart_for_response();
		$this->customer          = ! empty( wc()->customer ) ? wc()->customer : new WC_Customer();
		$this->request_data      = (array) $request_data;
	}

	/**
	 * Gets a subset of cart data.
	 *
	 * @return array The cart data.
	 */
	protected function get_cart_data() {
		$cart_data               = StoreApi::container()->get( SchemaController::class )->get( CartSchema::IDENTIFIER )->get_item_response( $this->cart );
		$selected_shipping_rates = array_filter(
			array_map(
				function ( $package ) {
					$selected_rate = array_search( true, array_column( $package['shipping_rates'], 'selected' ), true );
					return false !== $selected_rate && isset( $package['shipping_rates'][ $selected_rate ] ) ? $package['shipping_rates'][ $selected_rate ] : null;
				},
				$cart_data['shipping_rates']
			)
		);
		$local_pickup_method_ids = LocalPickupUtils::get_local_pickup_method_ids();

		return wp_parse_args(
			$this->request_data['cart'] ?? [],
			[
				'coupons'            => array_values( wc_list_pluck( $cart_data['coupons'], 'code' ) ),
				'shipping_rates'     => array_values( wc_list_pluck( $selected_shipping_rates, 'rate_id' ) ),
				'items'              => array_merge(
					...array_map(
						function ( $item ) {
							return array_fill( 0, $item['quantity'], $item['id'] );
						},
						$cart_data['items']
					)
				),
				'items_count'        => $cart_data['items_count'],
				'items_weight'       => $cart_data['items_weight'],
				'needs_shipping'     => $cart_data['needs_shipping'],
				'prefers_collection' => count( array_intersect( $local_pickup_method_ids, wc_list_pluck( $selected_shipping_rates, 'method_id' ) ) ) > 0,
				'totals'             => [
					'total_price' => $cart_data['totals']->total_price,
					'total_tax'   => $cart_data['totals']->total_tax,
				],
				'extensions'         => (array) $cart_data['extensions'],
			]
		);
	}

	/**
	 * Get checkout data.
	 *
	 * @return array The order data.
	 */
	protected function get_checkout_data() {
		return $this->request_data['checkout'] ?? [];
	}

	/**
	 * Get the customer data.
	 *
	 * @return array The customer data.
	 */
	protected function get_customer_data() {
		return wp_parse_args(
			$this->request_data['customer'] ?? [],
			[
				'id'               => $this->customer->get_id(),
				'shipping_address' => $this->schema_controller->get( ShippingAddressSchema::IDENTIFIER )->get_item_response( $this->customer ),
				'billing_address'  => $this->schema_controller->get( BillingAddressSchema::IDENTIFIER )->get_item_response( $this->customer ),
			]
		);
	}

	/**
	 * Get the data for the document object.
	 *
	 * This isn't a 1:1 match with Store API because some data is simplified to make it wasier to parse as JSON.
	 *
	 * @return array The data for the document object.
	 */
	public function get_data() {
		return wp_parse_args(
			[
				'cart'     => $this->get_cart_data(),
				'customer' => $this->get_customer_data(),
				'checkout' => $this->get_checkout_data(),
			],
			$this->default_document_schema
		);
	}
}
