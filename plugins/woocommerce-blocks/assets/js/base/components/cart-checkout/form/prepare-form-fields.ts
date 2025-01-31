/**
 * External dependencies
 */
import {
	FormField,
	FormFields,
	CountryAddressFields,
	KeyedFormField,
	LocaleSpecificFormField,
} from '@woocommerce/settings';
import { __, sprintf } from '@wordpress/i18n';
import { isNumber, isString } from '@woocommerce/types';
import { COUNTRY_LOCALE } from '@woocommerce/block-settings';

/**
 * Gets props from the core locale, then maps them to the shape we require in the client.
 *
 * Ignores "class", "type", "placeholder", and "autocomplete" props from core.
 *
 * @param {Object} localeField Locale fields from WooCommerce.
 * @return {Object} Supported locale fields.
 */
const getSupportedCoreLocaleProps = (
	localeField: LocaleSpecificFormField
): Partial< FormField > => {
	const fields: Partial< FormField > = {};

	if ( localeField.label !== undefined ) {
		fields.label = localeField.label;
	}

	if ( localeField.required !== undefined ) {
		fields.required = localeField.required;
	}

	if ( localeField.hidden !== undefined ) {
		fields.hidden = localeField.hidden;
	}

	if ( localeField.label !== undefined && ! localeField.optionalLabel ) {
		fields.optionalLabel = sprintf(
			/* translators: %s Field label. */
			__( '%s (optional)', 'woocommerce' ),
			localeField.label
		);
	}

	if ( localeField.priority ) {
		if ( isNumber( localeField.priority ) ) {
			fields.index = localeField.priority;
		}
		if ( isString( localeField.priority ) ) {
			fields.index = parseInt( localeField.priority, 10 );
		}
	}

	if ( localeField.hidden ) {
		fields.required = false;
	}

	return fields;
};

/**
 * COUNTRY_LOCALE is locale data from WooCommerce countries class. This doesn't match the shape of the new field data blocks uses,
 * but we can import part of it to set which fields are required.
 *
 * This supports new properties such as optionalLabel which are not used by core (yet).
 */
const countryAddressFields: CountryAddressFields = Object.entries(
	COUNTRY_LOCALE
)
	.map( ( [ country, countryLocale ] ) => [
		country,
		Object.entries( countryLocale )
			.map( ( [ localeFieldKey, localeField ] ) => [
				localeFieldKey,
				getSupportedCoreLocaleProps( localeField ),
			] )
			.reduce( ( obj, [ key, val ] ) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore - Ignoring because it should be fine as long as the data from the server is correct. TS won't catch it anyway if it's not.
				obj[ key ] = val;
				return obj;
			}, {} ),
	] )
	.reduce( ( obj, [ key, val ] ) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore - Ignoring because it should be fine as long as the data from the server is correct. TS won't catch it anyway if it's not.
		obj[ key ] = val;
		return obj;
	}, {} );

/**
 * Combines address fields, including fields from the locale, and sorts them by index.
 */
const prepareFormFields = (
	// ist of field keys--only address fields matching these will be returned
	fieldKeys: ( keyof FormFields )[],
	// Default fields from settings.
	defaultFields: FormFields,
	// Address country code. If unknown, locale fields will not be merged.
	addressCountry = ''
): KeyedFormField[] => {
	const localeConfigs: FormFields =
		addressCountry && countryAddressFields[ addressCountry ] !== undefined
			? countryAddressFields[ addressCountry ]
			: ( {} as FormFields );

	return fieldKeys
		.map( ( field ) => {
			const defaultConfig = defaultFields[ field ] || {};
			const localeConfig = localeConfigs[ field ] || {};

			return {
				key: field,
				...defaultConfig,
				...localeConfig,
			};
		} )
		.sort( ( a, b ) => a.index - b.index );
};

export default prepareFormFields;
