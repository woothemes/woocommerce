<?php
declare( strict_types = 1);

namespace Automattic\WooCommerce\Blocks\Domain\Services;

use Automattic\WooCommerce\Admin\Features\Features;
use Automattic\WooCommerce\Blocks\Domain\Services\Schema\DocumentObject;
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
	 * Validate the field rules.
	 *
	 * @param DocumentObject $document_object The document object to validate.
	 * @param array          $rules The rules to validate against.
	 * @return bool
	 */
	public function validate_document_object_rules( DocumentObject $document_object, $rules ) {
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

		return ! $result->hasError();
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
	 * Check if the fields have a valid schema.
	 *
	 * @param array $fields The fields.
	 * @return bool
	 */
	public function has_valid_schema( $fields ) {
		$has_valid_schema = false;

		foreach ( $fields as $field ) {
			if (
				isset( $field['rules'] ) &&
				(
					! empty( $field['rules']['required'] ) ||
					! empty( $field['rules']['hidden'] ) ||
					! empty( $field['rules']['validation'] )
				)
			) {
				$has_valid_schema = true;
				break;
			}
		}

		return $has_valid_schema;
	}
}
