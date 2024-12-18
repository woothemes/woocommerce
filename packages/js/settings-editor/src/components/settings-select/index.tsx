/**
 * External dependencies
 */
import { createElement, useState } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';

export const SettingsSelect = ( { setting }: { setting: SettingsField } ) => {
	const { id, desc } = setting;
	const [ value, setValue ] = useState( String( setting.value ) );
	const onChange = ( newValue: string ) => {
		setValue( newValue );
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
