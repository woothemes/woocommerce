<?php
declare( strict_types = 1);

namespace Automattic\WooCommerce\Blocks\Domain\Services\CheckoutFieldsSchema;

use Automattic\WooCommerce\Blocks\Domain\Services\CheckoutFieldsSchema\DocumentObject;
use Opis\JsonSchema\{
	Helper,
	Validator
};
use Opis\JsonSchema\Errors\ErrorFormatter;
use WP_Error;

/**
 * Service class validating checkout field schema.
 */
class Validation {
	/**
	 * Meta schema.
	 *
	 * @var string
	 */
	private static $meta_schema_json = '';

	/**
	 * Get the field schema with context.
	 *
	 * @param string $field_id The field ID.
	 * @param array  $field_schema The field schema.
	 * @param string $context The context.
	 * @return array
	 */
	public static function get_field_schema_with_context( $field_id, $field_schema, $context ) {
		$primary_key   = 'checkout';
		$secondary_key = 'additional_fields';
		if ( in_array( $context, [ 'billing_address', 'shipping_address' ], true ) ) {
			$primary_key   = 'customer';
			$secondary_key = $context;
		}
		return [
			$primary_key => [
				'properties' => [
					$secondary_key => [
						'properties' => [
							$field_id => $field_schema,
						],
					],
				],
			],
		];
	}

	/**
	 * Validate the field rules.
	 *
	 * @param DocumentObject $document_object The document object to validate.
	 * @param array          $rules The rules to validate against.
	 * @return bool|WP_Error
	 */
	public static function validate_document_object( DocumentObject $document_object, $rules ) {
		$validator = new Validator();
		$result    = $validator->validate(
			Helper::toJSON( $document_object->get_data() ),
			Helper::toJSON(
				[
					'$schema'    => 'http://json-schema.org/draft-07/schema#',
					'type'       => 'object',
					'properties' => $rules,
				]
			)
		);

		if ( ! $result->hasError() ) {
			return true;
		}

		// Generate useful error message.
		$formatter = new ErrorFormatter();
		$formatted = $formatter->formatFlat( $result->error() );
		$errors    = implode( ', ', count( $formatted ) > 2 ? array_slice( $formatted, 2 ) : $formatted );

		return new WP_Error( 'woocommerce_rest_checkout_invalid_field', $errors );
	}

	/**
	 * Check if the fields have defined schema.
	 *
	 * @param array $fields The fields.
	 * @return bool
	 */
	public static function has_field_with_schema( $fields ) {
		$return = false;

		foreach ( $fields as $field ) {
			if (
				! empty( $field['rules'] ) && is_array( $field['rules'] ) &&
				(
					! empty( $field['rules']['required'] ) ||
					! empty( $field['rules']['hidden'] ) ||
					! empty( $field['rules']['validation'] )
				)
			) {
				$return = true;
				break;
			}
		}

		return $return;
	}

	/**
	 * Validate meta schema for field rules.
	 *
	 * @param array $rules The field rules.
	 * @return bool|WP_Error True if the field options are valid, a WP_Error otherwise.
	 */
	public static function is_valid_schema( $rules ) {
		if ( empty( self::$meta_schema_json ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			self::$meta_schema_json = file_get_contents( __DIR__ . '/json-schema-draft-07.json' );
		}
		$validator    = new Validator();
		$test_schemas = [ 'required', 'hidden', 'validation' ];

		foreach ( $test_schemas as $rule ) {
			if ( empty( $rules[ $rule ] ) ) {
				continue;
			}
			if ( ! is_array( $rules[ $rule ] ) ) {
				return new WP_Error( 'woocommerce_rest_checkout_invalid_field_schema', sprintf( 'The %s rules must be an array.', esc_html( $rule ) ) );
			}
			$result = $validator->validate(
				Helper::toJSON(
					[
						'$schema'    => 'http://json-schema.org/draft-07/schema#',
						'type'       => 'object',
						'properties' => [
							'test' => $rules[ $rule ],
						],
						'required'   => [ 'test' ],
					]
				),
				self::$meta_schema_json
			);
			if ( $result->hasError() ) {
				return new WP_Error( 'woocommerce_rest_checkout_invalid_field_schema', esc_html( (string) $result->error() ) );
			}
		}
		return true;
	}
}
