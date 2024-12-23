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
}: Pick< SettingsField, 'id' | 'desc' | 'type' | 'value' > ) => {
	const [ value, setValue ] = useState( initialValue );
	const onChange = ( newValue: string | undefined ) => {
		// @ts-expect-error -- react-18-upgrade - look into this.
		setValue( newValue );
	};
	return (
		<InputControl
			id={ id }
			label={ desc }
			onChange={ onChange }
			type={ type }
			// @ts-expect-error -- react-18-upgrade - look into this.
			value={ value }
		/>
	);
};
