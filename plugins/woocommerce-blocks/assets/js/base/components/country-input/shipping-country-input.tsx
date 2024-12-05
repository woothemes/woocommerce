/**
 * External dependencies
 */
import { SHIPPING_COUNTRIES } from '@woocommerce/block-settings';
import type { ValidatedTextInputHandle } from '@woocommerce/blocks-components';
import { forwardRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import CountryInput from './country-input';
import { CountryInputProps } from './CountryInputProps';

const ShippingCountryInput = (
	props: CountryInputProps,
	forwardedRef: React.Ref< ValidatedTextInputHandle >
): JSX.Element => {
	return (
		<CountryInput
			countries={ SHIPPING_COUNTRIES }
			{ ...props }
			ref={ forwardedRef }
		/>
	);
};

export default forwardRef( ShippingCountryInput );
