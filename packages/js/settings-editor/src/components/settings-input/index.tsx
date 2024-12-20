/**
 * External dependencies
 */
import { createElement, useState } from '@wordpress/element';
/* eslint-disable @woocommerce/dependency-group */
// @ts-expect-error missing types.
import { __experimentalInputControl as InputControl } from '@wordpress/components';
/* eslint-enable @woocommerce/dependency-group */

export const SettingsInput = ( {
	id,
	desc,
	type,
	value: initialValue,
}: Pick< SettingsField, 'id' | 'desc' | 'type' | 'value' > ) => {
	const [ value, setValue ] = useState( initialValue );
	const onChange = ( newValue: string ) => {
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
