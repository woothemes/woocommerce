<?php
declare( strict_types = 1);

namespace Automattic\WooCommerce\Blocks\Domain\Services\Schema;

use WC_Cart;
use WC_Order;
use WC_Customer;
use Automattic\WooCommerce\StoreApi\StoreApi;
use Automattic\WooCommerce\StoreApi\SchemaController;
use Automattic\WooCommerce\StoreApi\Schemas\V1\CartSchema;
use Automattic\WooCommerce\StoreApi\Schemas\V1\OrderSchema;
use Automattic\WooCommerce\StoreApi\Schemas\V1\BillingAddressSchema;
use Automattic\WooCommerce\StoreApi\Schemas\V1\ShippingAddressSchema;
use Automattic\WooCommerce\StoreApi\Utilities\LocalPickupUtils;

/**
 * DocumentObject class.
 */
class DocumentObject {
	/**
	 * The cart object.
	 *
	 * @var WC_Cart|null
	 */
	protected $cart = null;

	/**
	 * The order object.
	 *
	 * @var WC_Order|null
	 */
	protected $order = null;

	/**
	 * The customer object.
	 *
	 * @var WC_Customer|null
	 */
	protected $customer = null;

	/**
	 * The billing address object.
	 *
	 * @var array|null
	 */
	protected $billing_address = null;

	/**
	 * The shipping address object.
	 *
	 * @var array|null
	 */
	protected $shipping_address = null;

	/**
	 * Set the cart object.
	 *
	 * @param WC_Cart|null $cart The cart object.
	 */
	public function set_cart( WC_Cart $cart = null ) {
		$this->cart = $cart;
	}

	/**
	 * Set the order object.
	 *
	 * @param WC_Order|null $order The order object.
	 */
	public function set_order( WC_Order $order = null ) {
		$this->order = $order;
	}

	/**
	 * Set the customer object.
	 *
	 * @param WC_Customer|null $customer The customer object.
	 */
	public function set_customer( WC_Customer $customer = null ) {
		$this->customer = $customer;
	}

	/**
	 * Set the billing address object.
	 *
	 * @param array|null $billing_address The billing address.
	 */
	public function set_billing_address( $billing_address = null ) {
		$this->billing_address = $billing_address;
	}

	/**
	 * Set the shipping address object.
	 *
	 * @param array|null $shipping_address The shipping address.
	 */
	public function set_shipping_address( $shipping_address = null ) {
		$this->shipping_address = $shipping_address;
	}

	/**
	 * Get the cart data.
	 *
	 * @return array|null The cart data.
	 */
	protected function get_cart_data() {
		if ( ! $this->cart ) {
			return null;
		}
		$cart_data = StoreApi::container()->get( SchemaController::class )->get( CartSchema::IDENTIFIER )->get_item_response( $this->cart );

		$selected_shipping_rates_ids = array_filter(
			array_map(
				function ( $package ) {
					$selected_rate = array_search( true, array_column( $package['shipping_rates'], 'selected' ), true );
					return $selected_rate && isset( $package['shipping_rates'][ $selected_rate ] ) ? $package['shipping_rates'][ $selected_rate ]['rate_id'] : null;
				},
				$cart_data['shipping_rates']
			)
		);

		$selected_shipping_rates_methods = array_map(
			function ( $package ) {
				$selected_rate = array_search( true, array_column( $package['shipping_rates'], 'selected' ), true );
				return $selected_rate && isset( $package['shipping_rates'][ $selected_rate ] ) ? $package['shipping_rates'][ $selected_rate ]['method_id'] : null;
			},
			$cart_data['shipping_rates']
		);

		$local_pickup_method_ids = LocalPickupUtils::get_local_pickup_method_ids();

		return [
			'coupons'                 => array_map(
				function ( $coupon ) {
					return $coupon['code'];
				},
				$cart_data['coupons']
			),
			'shipping_rates'          => array_unique(
				array_merge(
					...array_map(
						function ( $package ) {
							return array_map(
								function ( $rate ) {
									return $rate['rate_id'];
								},
								$package['shipping_rates']
							);
						},
						$cart_data['shipping_rates']
					)
				)
			),
			'selected_shipping_rates' => $selected_shipping_rates_ids,
			'prefers_collection'      => count( array_intersect( $local_pickup_method_ids, $selected_shipping_rates_methods ) ) > 0,
			'items'                   => array_merge(
				...array_map(
					function ( $item ) {
						return array_fill( 0, $item['quantity'], $item['id'] );
					},
					$cart_data['items']
				)
			),
			'items_type'              => array_values(
				array_unique(
					array_map(
						function ( $item ) {
							return $item['type'];
						},
						$cart_data['items']
					)
				)
			),
			'needs_shipping'          => $cart_data['needs_shipping'],
			'totals'                  => $cart_data['totals']->total_price,
			'extensions'              => $cart_data['extensions'],
		];
	}

	/**
	 * Get the order data.
	 *
	 * @return array|null The order data.
	 */
	protected function get_order_data() {
		if ( ! $this->order ) {
			return null;
		}
		$order_data = StoreApi::container()->get( SchemaController::class )->get( OrderSchema::IDENTIFIER )->get_item_response( $this->order );

		return [
			'order_id'           => $order_data['order_id'],
			'customer_note'      => $order_data['customer_note'],
			'additional_fields'  => $order_data['additional_fields'],
			'payment_method'     => $order_data['payment_method'],
			'needs_payment'      => $this->order->needs_payment(),
			'available_gateways' => array_values( wp_list_pluck( WC()->payment_gateways->get_available_payment_gateways(), 'id' ) ),
		];
	}

	/**
	 * Get the customer data.
	 *
	 * @return array|null The customer data.
	 */
	protected function get_customer_data() {
		if ( ! $this->customer ) {
			return null;
		}
		return [
			'id'               => $this->customer->get_id(),
			'billing_address'  => $this->billing_address ? $this->billing_address : StoreApi::container()->get( SchemaController::class )->get( BillingAddressSchema::IDENTIFIER )->get_item_response( $this->customer ),
			'shipping_address' => $this->shipping_address ? $this->shipping_address : StoreApi::container()->get( SchemaController::class )->get( ShippingAddressSchema::IDENTIFIER )->get_item_response( $this->customer ),
		];
	}

	/**
	 * Get the data for the document object.
	 *
	 * @return array The data for the document object.
	 */
	public function get_data() {
		return array(
			'cart'     => $this->get_cart_data(),
			'order'    => $this->get_order_data(),
			'customer' => $this->get_customer_data(),
		);
	}
}
