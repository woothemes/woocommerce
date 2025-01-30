/**
 * External dependencies
 */
import { FormFields, KeyedFormField } from '@woocommerce/settings';
import { useCheckoutAddress } from '@woocommerce/base-context';
import { useSchemaParser } from '@woocommerce/base-hooks';

/**
 * Internal dependencies
 */
import prepareFormFields from './prepare-form-fields';

/**
 * Combines address fields, including fields from the locale, and sorts them by index.
 */
export const useFormFields = (
	// List of field keys to include in the form.
	fieldKeys: ( keyof FormFields )[],
	// Form type, can be billing, shipping, contact, additional-information, or calculator.
	formType: string
): KeyedFormField[] => {
	const { defaultFields, billingAddress, shippingAddress } =
		useCheckoutAddress();
	const { parser, data } = useSchemaParser( formType );
	let addressCountry = '';
	if ( formType === 'billing' || formType === 'shipping' ) {
		addressCountry =
			formType === 'billing'
				? billingAddress.country
				: shippingAddress.country;
	}

	const formFields = prepareFormFields( fieldKeys, addressCountry );

	return formFields.map( ( field ) => {
		const defaultConfig = defaultFields[ field.key ] || {};
		if ( defaultConfig.rules && parser ) {
			if ( defaultConfig.rules.required ) {
				const schema = {
					type: 'object',
					additionalProperties: true,
					properties: defaultConfig.rules.required,
				};
				const validation = parser.validate( schema, data );

				field.required = validation;
			}
			if ( defaultConfig.rules.hidden ) {
				const schema = {
					type: 'object',
					additionalProperties: true,
					properties: defaultConfig.rules.hidden,
				};
				const result = parser.validate( schema, data );
				field.hidden = result;
			}
		}
		return field;
	} );
};
