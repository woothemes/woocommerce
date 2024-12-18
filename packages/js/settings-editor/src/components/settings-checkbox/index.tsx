/**
 * External dependencies
 */
import { createElement, useState } from '@wordpress/element';
import { CheckboxControl } from '@wordpress/components';

export const SettingsCheckbox = ( { setting }: { setting: SettingsField } ) => {
	const { id, desc } = setting;
	const [ checked, setChecked ] = useState( setting.value === 'yes' );
	const onChange = ( value: boolean ) => {
		setChecked( value );
	};
	return (
		<CheckboxControl
			// @ts-expect-error.
			__nextHasNoMarginBottom={ true }
			id={ id }
			label={ desc }
			onChange={ onChange }
			checked={ checked }
		/>
	);
};
