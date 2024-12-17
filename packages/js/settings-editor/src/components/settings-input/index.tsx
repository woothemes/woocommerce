/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
// @ts-expect-error missing types.
import { __experimentalInputControl as InputControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export const SettingsInput = ( { setting }: { setting: SettingsField } ) => {
	const { id, desc } = setting;
	const [ value, setValue ] = useState( setting.value );
	const onChange = ( value: string ) => {
		setValue( value );
	};
	return (
		<InputControl
			id={ id }
			label={ desc }
			onChange={ onChange }
			type={ setting.type }
			value={ value }
		/>
	);
};
