/**
 * External dependencies
 */
import { createElement, useState } from '@wordpress/element';
/* eslint-disable @woocommerce/dependency-group */
// @ts-expect-error missing types.
import { __experimentalInputControl as InputControl } from '@wordpress/components';
/* eslint-enable @woocommerce/dependency-group */

export const SettingsInput = ( { setting }: { setting: SettingsField } ) => {
	const { id, desc } = setting;
	const [ value, setValue ] = useState( setting.value );
	const onChange = ( newValue: string ) => {
		setValue( newValue );
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
