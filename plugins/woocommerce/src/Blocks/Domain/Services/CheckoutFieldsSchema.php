<?php
declare( strict_types = 1);

namespace Automattic\WooCommerce\Blocks\Domain\Services;

use Automattic\WooCommerce\Admin\Features\Features;
use Automattic\WooCommerce\StoreApi\StoreApi;
use Automattic\WooCommerce\StoreApi\SchemaController;
use Automattic\WooCommerce\StoreApi\Schemas\V1\CartSchema;
use Automattic\WooCommerce\StoreApi\Schemas\V1\OrderSchema;
use Automattic\WooCommerce\StoreApi\Schemas\V1\BillingAddressSchema;
use Automattic\WooCommerce\StoreApi\Schemas\V1\ShippingAddressSchema;
use Automattic\WooCommerce\StoreApi\Utilities\LocalPickupUtils;
use Opis\JsonSchema\Helper;
use Opis\JsonSchema\Validator;
use WC_Cart;
use WC_Order;
use WC_Customer;

/**
 * Service class managing checkout field schema.
 */
class CheckoutFieldsSchema {
	/**
	 * Release version.
	 *
	 * @var string
	 */
	private $release_version = '9.8.0';

	/**
	 * Meta schema.
	 *
	 * @var string
	 */
	private $meta_schema_json = '';

	/**
	 * Check if the checkout fields schema is enabled.
	 *
	 * @return bool
	 */
	private function is_enabled() {
		return Features::is_enabled( 'experimental-blocks' );
	}

	/**
	 * Get the schema properties.
	 *
	 * @return array
	 */
	public function get_schema_properties() {
		if ( ! $this->is_enabled() ) {
			return [];
		}

		return [
			'rules' => [
				/**
				 * Visibility rules required and hidden, which determine if the field is visible.
				 *
				 * For example, this would make the field required if the country is 'ES':
				 *
				 * 'required' => array(
				 *     'address' => array(
				 *         'properties' => array(
				 *             'country' => array(
				 *                 'const' => 'ES',
				 *             ),
				 *         ),
				 *     ),
				 * ),
				 */
				'required'   => [],
				'hidden'     => [],
				/**
				 * Validation rules; @see https://ajv.js.org/options.html#validation-and-reporting-options.
				 *
				 * For example, some pattern based rules could be:
				 *
				 * 'validation' => array(
				 *     'type'  => 'string',
				 *     'anyOf' => array(
				 *         array(
				 *             'pattern' => '^[0-9]{8}[A-Z]$',
				 *         ),
				 *         array(
				 *             'pattern' => '^[XYZ][0-9]{7}[A-Z]$',
				 *         ),
				 *     ),
				 * ),
				 */
				'validation' => [],
			],
		];
	}

	/**
	 * Validate the field options.
	 *
	 * @param array $options The field options.
	 * @return bool
	 * @throws \Exception If the field options are not valid.
	 */
	public function validate_schema( $options ) {
		if ( ! $this->is_enabled() ) {
			return true;
		}

		if ( empty( $this->meta_schema_json ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			$this->meta_schema_json = file_get_contents( __DIR__ . '/Schema/json-schema-draft-07.json' );
		}

		try {

			if ( ! empty( $options['rules'] ) && ! is_array( $options['rules'] ) ) {
				throw new \Exception( 'The rules must be an array.' );
			}

			// Validate schemas.
			$validator    = new Validator();
			$test_schemas = [ 'required', 'hidden', 'validation' ];

			foreach ( $test_schemas as $rule ) {
				if ( empty( $options['rules'][ $rule ] ) ) {
					continue;
				}
				if ( ! is_array( $options['rules'][ $rule ] ) ) {
					throw new \Exception( sprintf( 'The %s rules must be an array.', $rule ) );
				}
				$result = $validator->validate(
					Helper::toJSON(
						[
							'$schema'    => 'http://json-schema.org/draft-07/schema#',
							'type'       => 'object',
							'properties' => [
								'test' => $options['rules'][ $rule ],
							],
							'required'   => [ 'test' ],
						]
					),
					$this->meta_schema_json
				);

				if ( $result->hasError() ) {
					throw new \Exception( (string) $result->error() );
				}
			}
		} catch ( \Exception $e ) {
			$message = sprintf( 'Unable to register field with id: "%s". %s', $options['id'], $e->getMessage() );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), esc_html( $this->release_version ) );
			return false;
		}

		return true;
	}

	/**
	 * Returns a document object based on passed context, this function can be called from multiple places, including Checkout, Admin, and My Account.
	 *
	 * @param WC_Cart|null     $cart The cart object.
	 * @param WC_Order|null    $order The order object.
	 * @param WC_Customer|null $customer The customer object.
	 * @param array|null       $current_address The current address.
	 * @return array The document object.
	 */
	public function get_document_object( WC_Cart $cart = null, WC_Order $order = null, WC_Customer $customer = null, $current_address = null ) {

		$data = [];

		if ( ! $cart ) {
			$cart = WC()->cart && ! WC()->cart->is_empty() ? WC()->cart : null;
		}

		if ( $cart ) {
			$cart_data = StoreApi::container()->get( SchemaController::class )->get( CartSchema::IDENTIFIER )->get_item_response( $cart );

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

			$data['cart'] = [
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

		if ( $order ) {
			$order_data = StoreApi::container()->get( SchemaController::class )->get( OrderSchema::IDENTIFIER )->get_item_response( $order );

			$data['checkout'] = [
				'order_id'           => $order_data['order_id'],
				'status'             => $order_data['status'],
				'customer_note'      => $order_data['customer_note'],
				'additional_fields'  => $order_data['additional_fields'],
				'payment_method'     => $order_data['payment_method'],
				'available_gateways' => array_values( wp_list_pluck( WC()->payment_gateways->get_available_payment_gateways(), 'id' ) ),
			];
		}

		if ( ! $customer ) {
			$customer = $cart ? wc()->customer : new WC_Customer( $order->get_customer_id() );
		}

		if ( $customer ) {
			$billing_address  = StoreApi::container()->get( SchemaController::class )->get( BillingAddressSchema::IDENTIFIER )->get_item_response( $customer );
			$shipping_address = StoreApi::container()->get( SchemaController::class )->get( ShippingAddressSchema::IDENTIFIER )->get_item_response( $customer );
			$data['customer'] = [
				'id'               => $customer->get_id(),
				'guest'            => $customer->get_id() === 0,
				'role'             => $customer->get_role(),
				'billing_address'  => $billing_address,
				'shipping_address' => $shipping_address,
				'address'          => 'billing' === $current_address ? $billing_address : $shipping_address,
			];
		}

		return $data;
	}
}
