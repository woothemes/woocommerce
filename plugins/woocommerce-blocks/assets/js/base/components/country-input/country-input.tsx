/**
 * External dependencies
 */
import { useMemo, forwardRef } from '@wordpress/element';
import { decodeEntities } from '@wordpress/html-entities';
import clsx from 'clsx';
import type { ValidatedTextInputHandle } from '@woocommerce/blocks-components';

/**
 * Internal dependencies
 */
import './style.scss';
import type { CountryInputWithCountriesProps } from './CountryInputProps';
import { Select, SelectOption } from '../select';

export const CountryInput = (
	{
		className,
		countries,
		id,
		label,
		onChange,
		value = '',
		autoComplete = 'off',
		required = false,
	}: CountryInputWithCountriesProps,
	ref: React.Ref< ValidatedTextInputHandle >
): JSX.Element => {
	const options = useMemo< SelectOption[] >( () => {
		return Object.entries( countries ).map(
			( [ countryCode, countryName ] ) => ( {
				value: countryCode,
				label: decodeEntities( countryName ),
			} )
		);
	}, [ countries ] );

	return (
		<Select
			className={ clsx( className, 'wc-block-components-country-input' ) }
			id={ id }
			label={ label || '' }
			onChange={ onChange }
			options={ options }
			value={ value }
			required={ required }
			autoComplete={ autoComplete }
			ref={ ref }
		/>
	);
};

export default forwardRef( CountryInput );
