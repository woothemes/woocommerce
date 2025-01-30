<?php
declare( strict_types = 1);
namespace Automattic\WooCommerce\Blocks\Utils;

use Automattic\WooCommerce\Blocks\Package;
use Automattic\WooCommerce\Blocks\Domain\Services\CheckoutFieldsSchema;
use Automattic\WooCommerce\Admin\Features\Features;
use WP_Error;

/**
 * Utility class for validating options for checkout field registration.
 */
class CheckoutFieldRegistrationUtils {

	/**
	 * Supported field types
	 *
	 * @var array
	 */
	private static $supported_field_types = [ 'text', 'select', 'checkbox' ];

	/**
	 * Validates the "base" options (id, label, location) and shows warnings if they're not supplied.
	 *
	 * @param array $options The options supplied during field registration.
	 * @return bool false if an error was encountered, true otherwise.
	 */
	public static function validate_options( &$options ) {
		if ( empty( $options['id'] ) ) {
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', 'A checkout field cannot be registered without an id.', '8.6.0' );
			return false;
		}

		// Having fewer than 2 after exploding around a / means there is no namespace.
		if ( count( explode( '/', $options['id'] ) ) < 2 ) {
			$message = sprintf( 'Unable to register field with id: "%s". %s', $options['id'], 'A checkout field id must consist of namespace/name.' );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
			return false;
		}

		if ( empty( $options['label'] ) ) {
			$message = sprintf( 'Unable to register field with id: "%s". %s', $options['id'], 'The field label is required.' );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
			return false;
		}

		if ( empty( $options['location'] ) ) {
			$message = sprintf( 'Unable to register field with id: "%s". %s', $options['id'], 'The field location is required.' );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
			return false;
		}

		if ( 'additional' === $options['location'] ) {
			wc_deprecated_argument( 'location', '8.9.0', 'The "additional" location is deprecated. Use "order" instead.' );
			$options['location'] = 'order';
		}

		if ( ! empty( $options['type'] ) ) {
			if ( ! in_array( $options['type'], self::$supported_field_types, true ) ) {
				$message = sprintf(
					'Unable to register field with id: "%s". Registering a field with type "%s" is not supported. The supported types are: %s.',
					$id,
					$options['type'],
					implode( ', ', self::$supported_field_types )
				);
				_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
				return false;
			}
		}

		if ( ! empty( $options['sanitize_callback'] ) && ! is_callable( $options['sanitize_callback'] ) ) {
			$message = sprintf( 'Unable to register field with id: "%s". %s', $id, 'The sanitize_callback must be a valid callback.' );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
			return false;
		}

		if ( ! empty( $options['validate_callback'] ) && ! is_callable( $options['validate_callback'] ) ) {
			$message = sprintf( 'Unable to register field with id: "%s". %s', $id, 'The validate_callback must be a valid callback.' );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
			return false;
		}

		// Hidden fields are not supported right now. They will be registered with hidden => false.
		if ( ! empty( $options['hidden'] ) && true === $options['hidden'] ) {
			$message = sprintf( 'Registering a field with hidden set to true is not supported. The field "%s" will be registered as visible.', $id );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
			// Don't return here unlike the other fields because this is not an issue that will prevent registration.
		}

		return self::validate_options_rules( $options );
	}

	/**
	 * Processes the options for a field type and returns the new field_options array.
	 *
	 * @param array $field_data The field data array to be updated.
	 * @param array $options    The options supplied during field registration.
	 * @return array The updated $field_data array.
	 */
	public static function sanitize_field_type_data( $field_data, $options ) {
		if ( 'checkbox' === $field_data['type'] ) {
			$field_data = self::sanitize_checkbox_field_options( $field_data, $options );
		} elseif ( 'select' === $field_data['type'] ) {
			$field_data = self::sanitize_select_field_options( $field_data, $options );
		}
		return $field_data;
	}

	/**
	 * Validate the rules for a field.
	 *
	 * @param array $options The field options.
	 * @return bool True if the rules are valid, false otherwise.
	 */
	private static function validate_options_rules( $options ) {
		if ( ! Features::is_enabled( 'experimental-blocks' ) || empty( $options['rules'] ) ) {
			return true;
		}

		if ( ! is_array( $options['rules'] ) ) {
			$message = sprintf( 'Unable to register field with id: "%s". %s', $options['id'], 'The rules must be an array.' );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
			return false;
		}

		$checkout_schema = Package::container()->get( CheckoutFieldsSchema::class );

		try {
			$checkout_schema->validate_meta_schema( $options['rules'] );
		} catch ( \Exception $e ) {
			$message = sprintf( 'Unable to register field with id: "%s". %s', $options['id'], $e->getMessage() );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
			return false;
		}

		return true;
	}

	/**
	 * Processes the options for a select field and returns the new field_options array.
	 *
	 * @param array $field_data  The field data array to be updated.
	 * @param array $options     The options supplied during field registration.
	 *
	 * @return array|false The updated $field_data array or false if an error was encountered.
	 */
	private static function sanitize_select_field_options( $field_data, $options ) {
		$id = $options['id'];

		if ( empty( $options['options'] ) || ! is_array( $options['options'] ) ) {
			$message = sprintf( 'Unable to register field with id: "%s". %s', $id, 'Fields of type "select" must have an array of "options".' );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
			return false;
		}
		$cleaned_options = [];
		$added_values    = [];

		// Check all entries in $options['options'] has a key and value member.
		foreach ( $options['options'] as $option ) {
			if ( ! isset( $option['value'] ) || ! isset( $option['label'] ) ) {
				$message = sprintf( 'Unable to register field with id: "%s". %s', $id, 'Fields of type "select" must have an array of "options" and each option must contain a "value" and "label" member.' );
				_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
				return false;
			}

			$sanitized_value = sanitize_text_field( $option['value'] );
			$sanitized_label = sanitize_text_field( $option['label'] );

			if ( in_array( $sanitized_value, $added_values, true ) ) {
				$message = sprintf( 'Duplicate key found when registering field with id: "%s". The value in each option of "select" fields must be unique. Duplicate value "%s" found. The duplicate key will be removed.', $id, $sanitized_value );
				_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
				continue;
			}

			$added_values[] = $sanitized_value;

			$cleaned_options[] = [
				'value' => $sanitized_value,
				'label' => $sanitized_label,
			];
		}

		$field_data['options'] = $cleaned_options;

		if ( isset( $field_data['placeholder'] ) ) {
			$field_data['placeholder'] = sanitize_text_field( $field_data['placeholder'] );
		}

		return $field_data;
	}

	/**
	 * Processes the options for a checkbox field and returns the new field_options array.
	 *
	 * @param array $field_data  The field data array to be updated.
	 * @param array $options     The options supplied during field registration.
	 *
	 * @return array|false The updated $field_data array or false if an error was encountered.
	 */
	private static function sanitize_checkbox_field_options( $field_data, $options ) {
		$id = $options['id'];

		// Checkbox fields are always optional. Log a warning if it's set explicitly as true.
		$field_data['required'] = false;

		if ( isset( $options['required'] ) && true === $options['required'] ) {
			$message = sprintf( 'Registering checkbox fields as required is not supported. "%s" will be registered as optional.', $id );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
		}

		return $field_data;
	}

	/**
	 * Processes the attributes supplied during field registration.
	 *
	 * @param array $id         The field ID.
	 * @param array $attributes The attributes supplied during field registration.
	 *
	 * @return array The processed attributes.
	 */
	public static function sanitize_field_attributes( $id, $attributes ) {
		// We check if attributes are valid. This is done to prevent too much nesting and also to allow field registration
		// even if the attributes property is invalid. We can just skip it and register the field without attributes.
		if ( empty( $attributes ) ) {
			return [];
		}

		if ( ! is_array( $attributes ) || 0 === count( $attributes ) ) {
			$message = sprintf( 'An invalid attributes value was supplied when registering field with id: "%s". %s', $id, 'Attributes must be a non-empty array.' );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
			return [];
		}

		// These are formatted in camelCase because React components expect them that way.
		$allowed_attributes = [
			'maxLength',
			'readOnly',
			'pattern',
			'autocomplete',
			'autocapitalize',
			'title',
		];

		$valid_attributes = array_filter(
			$attributes,
			function ( $_, $key ) use ( $allowed_attributes ) {
				return in_array( $key, $allowed_attributes, true ) || strpos( $key, 'aria-' ) === 0 || strpos( $key, 'data-' ) === 0;
			},
			ARRAY_FILTER_USE_BOTH
		);

		// Any invalid attributes should show a doing_it_wrong warning. It shouldn't stop field registration, though.
		if ( count( $attributes ) !== count( $valid_attributes ) ) {
			$invalid_attributes = array_keys( array_diff_key( $attributes, $valid_attributes ) );
			$message            = sprintf( 'Invalid attribute found when registering field with id: "%s". Attributes: %s are not allowed.', $id, implode( ', ', $invalid_attributes ) );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), '8.6.0' );
		}

		// Escape attributes to remove any malicious code and return them.
		return array_map(
			function ( $value ) {
				return esc_attr( $value );
			},
			$valid_attributes
		);
	}
}
