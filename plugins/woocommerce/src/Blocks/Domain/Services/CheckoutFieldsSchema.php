<?php
declare( strict_types = 1);

namespace Automattic\WooCommerce\Blocks\Domain\Services;

use Automattic\WooCommerce\Admin\Features\Features;
use Opis\JsonSchema\Helper;
use Opis\JsonSchema\Validator;

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
	private $meta_schema_json = '{
		"$schema": "http://json-schema.org/draft-07/schema#",
		"$id": "http://json-schema.org/draft-07/schema#",
		"title": "Core schema meta-schema",
		"definitions": {
			"schemaArray": {
				"type": "array",
				"minItems": 1,
				"items": { "$ref": "#" }
			},
			"nonNegativeInteger": {
				"type": "integer",
				"minimum": 0
			},
			"nonNegativeIntegerDefault0": {
				"allOf": [
					{ "$ref": "#/definitions/nonNegativeInteger" },
					{ "default": 0 }
				]
			},
			"simpleTypes": {
				"enum": [
					"array",
					"boolean",
					"integer",
					"null",
					"number",
					"object",
					"string"
				]
			},
			"stringArray": {
				"type": "array",
				"items": { "type": "string" },
				"uniqueItems": true,
				"default": []
			}
		},
		"type": ["object", "boolean"],
		"properties": {
			"$id": {
				"type": "string",
				"format": "uri-reference"
			},
			"$schema": {
				"type": "string",
				"format": "uri"
			},
			"$ref": {
				"type": "string",
				"format": "uri-reference"
			},
			"$comment": {
				"type": "string"
			},
			"title": {
				"type": "string"
			},
			"description": {
				"type": "string"
			},
			"default": true,
			"readOnly": {
				"type": "boolean",
				"default": false
			},
			"writeOnly": {
				"type": "boolean",
				"default": false
			},
			"examples": {
				"type": "array",
				"items": true
			},
			"multipleOf": {
				"type": "number",
				"exclusiveMinimum": 0
			},
			"maximum": {
				"type": "number"
			},
			"exclusiveMaximum": {
				"type": "number"
			},
			"minimum": {
				"type": "number"
			},
			"exclusiveMinimum": {
				"type": "number"
			},
			"maxLength": { "$ref": "#/definitions/nonNegativeInteger" },
			"minLength": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
			"pattern": {
				"type": "string",
				"format": "regex"
			},
			"additionalItems": { "$ref": "#" },
			"items": {
				"anyOf": [
					{ "$ref": "#" },
					{ "$ref": "#/definitions/schemaArray" }
				],
				"default": true
			},
			"maxItems": { "$ref": "#/definitions/nonNegativeInteger" },
			"minItems": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
			"uniqueItems": {
				"type": "boolean",
				"default": false
			},
			"contains": { "$ref": "#" },
			"maxProperties": { "$ref": "#/definitions/nonNegativeInteger" },
			"minProperties": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
			"required": { "$ref": "#/definitions/stringArray" },
			"additionalProperties": { "$ref": "#" },
			"definitions": {
				"type": "object",
				"additionalProperties": { "$ref": "#" },
				"default": {}
			},
			"properties": {
				"type": "object",
				"additionalProperties": { "$ref": "#" },
				"default": {}
			},
			"patternProperties": {
				"type": "object",
				"additionalProperties": { "$ref": "#" },
				"propertyNames": { "format": "regex" },
				"default": {}
			},
			"dependencies": {
				"type": "object",
				"additionalProperties": {
					"anyOf": [
						{ "$ref": "#" },
						{ "$ref": "#/definitions/stringArray" }
					]
				}
			},
			"propertyNames": { "$ref": "#" },
			"const": true,
			"enum": {
				"type": "array",
				"items": true,
				"minItems": 1,
				"uniqueItems": true
			},
			"type": {
				"anyOf": [
					{ "$ref": "#/definitions/simpleTypes" },
					{
						"type": "array",
						"items": { "$ref": "#/definitions/simpleTypes" },
						"minItems": 1,
						"uniqueItems": true
					}
				]
			},
			"format": { "type": "string" },
			"contentMediaType": { "type": "string" },
			"contentEncoding": { "type": "string" },
			"if": { "$ref": "#" },
			"then": { "$ref": "#" },
			"else": { "$ref": "#" },
			"allOf": { "$ref": "#/definitions/schemaArray" },
			"anyOf": { "$ref": "#/definitions/schemaArray" },
			"oneOf": { "$ref": "#/definitions/schemaArray" },
			"not": { "$ref": "#" }
		},
		"default": true
	}';

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
			$message = sprintf( 'Unable to register field with id: "%s". %s', $options['id'], 'The rules must be an array.' );
			_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), esc_html( $this->release_version ) );
			return false;
		}

		$validator = new Validator();

		if ( ! empty( $options['rules']['validation'] ) ) {
			$result = $validator->validate(
				Helper::toJSON(
					[
						'$schema'    => 'http://json-schema.org/draft-07/schema#',
						'type'       => 'object',
						'properties' => [
							'test' => $options['rules']['validation'],
						],
						'required'   => [ 'test' ],
					]
				),
				$this->meta_schema_json
			);

			if ( $result->hasError() ) {
				$message = sprintf( 'Unable to register field with id: "%s". %s', $options['id'], $result->error() );
				_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), esc_html( $this->release_version ) );
				return false;
			}
		}

		$other_schema = [
			'required',
			'hidden',
		];

		foreach ( $other_schema as $rule ) {
			if ( empty( $options['rules'][ $rule ] ) ) {
				continue;
			}
			if ( ! is_array( $options['rules'][ $rule ] ) ) {
				$property_error = sprintf( 'The %s rules must be an array.', $rule );
				$message        = sprintf( 'Unable to register field with id: "%s". %s', $id, $property_error );
				_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), esc_html( $this->release_version ) );
				return false;
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
				$message = sprintf( 'Unable to register field with id: "%s". %s', $options['id'], $result->error() );
				_doing_it_wrong( 'woocommerce_register_additional_checkout_field', esc_html( $message ), esc_html( $this->release_version ) );
				return false;
			}
		}

		return true;
	}
}
