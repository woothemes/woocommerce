/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { isPostcode } from '@woocommerce/blocks-checkout';
import { isEmail } from '@wordpress/url';
import { KeyedFormField } from '@woocommerce/settings';
import { useCallback } from '@wordpress/element';
/**
 * Internal dependencies
 */
import { schema, useValidationContext } from './schema';

/**
 * Custom validation handler for fields with field specific handling.
 */
const customValidationHandler = (
	inputObject: HTMLInputElement,
	field: KeyedFormField,
	country: string,
	addressType: string,
	data: Record< string, unknown >
): boolean => {
	// Pass validation if the field is not required and is empty.
	if ( ! inputObject.required && ! inputObject.value ) {
		return true;
	}

	if (
		field.key === 'postcode' &&
		country &&
		! isPostcode( {
			postcode: inputObject.value,
			country,
		} )
	) {
		inputObject.setCustomValidity(
			__( 'Please enter a valid postcode', 'woocommerce' )
		);
		return false;
	}

	if ( field.key === 'email' && ! isEmail( inputObject.value ) ) {
		inputObject.setCustomValidity(
			__( 'Please enter a valid email address', 'woocommerce' )
		);
		return false;
	}

	if ( field.rules?.validation && data ) {
		let rules = {};
		if ( addressType === 'billing' || addressType === 'shipping' ) {
			rules = {
				type: 'object',
				properties: {
					cart: {
						type: 'object',
						properties: {
							[ `${ addressType }_address` ]: {
								type: 'object',
								properties: {
									[ field.key ]: field.rules.validation,
								},
								additionalProperties: true,
							},
						},
						additionalProperties: true,
					},
				},
				additionalProperties: true,
			};
		} else {
			rules = {
				type: 'object',
				properties: {
					checkout: {
						type: 'object',
						properties: {
							additional_fields: {
								type: 'object',
								properties: {
									[ field.key ]: field.rules.validation,
								},
								additionalProperties: true,
							},
						},
						additionalProperties: true,
					},
				},
				additionalProperties: true,
			};
		}

		const validate = schema.compile( rules );
		const valid = validate( data );
		if ( ! valid ) {
			inputObject.setCustomValidity(
				__( 'field is invalid', 'woocommerce' )
			);
			return false;
		}
	}
	return true;
};

const useCustomValidationHandler = () => {
	const data = useValidationContext();
	return useCallback(
		(
			inputObject: HTMLInputElement,
			field: KeyedFormField,
			country: string,
			addressType: string
		) =>
			customValidationHandler(
				inputObject,
				field,
				country,
				addressType,
				data
			),
		[ data ]
	);
};

export default useCustomValidationHandler;
