<?php
declare( strict_types = 1);

namespace Automattic\WooCommerce\Blocks\Domain\Services;

use Automattic\WooCommerce\Admin\Features\Features;

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
	 */
	public function validate_schema( $options ) {
		if ( ! $this->is_enabled() ) {
			return true;
		}

		if ( ! empty( $options['rules'] ) && ! is_array( $options['rules'] ) ) {
			$message = sprintf( 'Unable to register field with id: "%s". %s', $id, 'The rules must be an array.' );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), esc_html( $this->release_version ) );
			return false;
		}

		$valid_rules = [ 'required', 'hidden', 'validation' ];

		foreach ( $valid_rules as $rule ) {
			if ( ! empty( $options['rules'][ $rule ] ) && ! is_array( $options['rules'][ $rule ] ) ) {
				$property_error = sprintf( 'The %s rules must be an array.', $rule );
				$message        = sprintf( 'Unable to register field with id: "%s". %s', $id, $property_error );
				_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), esc_html( $this->release_version ) );
				return false;
			}
		}

		return true;
	}
}
