/**
 * External dependencies
 */
import { createElement, useState } from '@wordpress/element';
import { __experimentalInputControl as InputControl } from '@wordpress/components';

export const SettingsInput = ( {
	id,
	desc,
	type,
	value: initialValue,
}: Pick< BaseSettingsField, 'id' | 'desc' | 'type' | 'value' > ) => {
	const [ value, setValue ] = useState< string | undefined >(
		initialValue?.toString()
	);
	const onChange = ( newValue: string | undefined ) => {
		setValue( newValue );
	};
	return (
		<InputControl
			id={ id }
			label={ desc }
			onChange={ onChange }
			type={ type }
			value={ value }
		/>
	);
};
