/**
 * External dependencies
 */
import { createElement, useState } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';

export const SettingsSelect = ( {
	id,
	desc,
	value: originalValue,
	options,
}: Pick< BaseSettingsField, 'id' | 'desc' | 'value' | 'options' > ) => {
	const [ value, setValue ] = useState( String( originalValue ) );
	const onChange = ( newValue: string ) => {
		setValue( newValue );
	};
	const formattedOptions = options
		? Object.keys( options ).map( ( key ) => {
				return { label: key, value: options[ key ] };
		  } )
		: [];
	return (
		<SelectControl
			id={ id }
			label={ desc }
			value={ value }
			options={ formattedOptions }
			onChange={ onChange }
			__nextHasNoMarginBottom
		/>
	);
};
