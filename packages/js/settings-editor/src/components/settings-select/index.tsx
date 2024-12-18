/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export const SettingsSelect = ( { setting }: { setting: SettingsField } ) => {
	const { id, desc } = setting;
	const [ value, setValue ] = useState( String( setting.value ) );
	const onChange = ( value: string ) => {
		setValue( value );
	};
	const options = setting.options
		? Object.keys( setting.options ).map( ( key ) => {
				return { label: key, value: setting.options![ key ] };
		  } )
		: [];
	return (
		<SelectControl
			id={ id }
			label={ desc }
			value={ value }
			options={ options }
			onChange={ onChange }
			// @ts-expect-error.
			__nextHasNoMarginBottom
		/>
	);
};
