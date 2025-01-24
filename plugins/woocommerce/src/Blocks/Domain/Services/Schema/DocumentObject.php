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
	 * The additional fields object.
	 *
	 * @var array|null
	 */
	protected $additional_fields = null;

	/**
	 * The checkout object.
	 *
	 * @var array|null
	 */
	protected $checkout = null;

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
	 * Set the checkout object.
	 *
	 * @param array|null $checkout The checkout object.
	 */
	public function set_checkout( $checkout = null ) {
		$this->checkout = $checkout;
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
	 * Set the additional fields object.
	 *
	 * @param array|null $additional_fields The additional fields.
	 */
	public function set_additional_fields( $additional_fields = null ) {
		$this->additional_fields = $additional_fields;
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

		return [
			'coupons'                 => array_values( wc_list_pluck( $cart_data['coupons'], 'code' ) ),
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
			'selected_shipping_rates' => array_values( wc_list_pluck( $selected_shipping_rates, 'rate_id' ) ),
			'prefers_collection'      => count( array_intersect( $local_pickup_method_ids, wc_list_pluck( $selected_shipping_rates, 'method_id' ) ) ) > 0,
			'items'                   => array_merge(
				...array_map(
					function ( $item ) {
						return array_fill( 0, $item['quantity'], $item['id'] );
					},
					$cart_data['items']
				)
			),
			'items_type'              => array_values( array_unique( wc_list_pluck( $cart_data['items'], 'type' ) ) ),
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
	protected function get_checkout_data() {
		if ( ! $this->checkout ) {
			return null;
		}
		return [
			'create_account'  => $this->checkout['create_account'] ?? null,
			'customer_note'   => $this->checkout['customer_note'] ?? null,
			'payment_method'  => $this->checkout['payment_method'] ?? null,
			'payment_methods' => array_values( wp_list_pluck( WC()->payment_gateways->get_available_payment_gateways(), 'id' ) ),
		];
	}

	/**
	 * Get the customer data.
	 *
	 * @return array|null The customer data.
	 */
	protected function get_customer_data() {
		return [
			'id' => $this->customer ? $this->customer->get_id() : 0,
		];
	}

	/**
	 * Get the data for the document object.
	 *
	 * @return array The data for the document object.
	 */
	public function get_data() {
		return array(
			'cart'              => $this->get_cart_data(),
			'checkout'          => $this->get_checkout_data(),
			'customer'          => $this->get_customer_data(),
			'billing_address'   => $this->billing_address,
			'shipping_address'  => $this->shipping_address,
			'additional_fields' => $this->additional_fields,
		);
	}
}
