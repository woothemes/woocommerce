/**
 * External dependencies
 */
import { createElement, useState } from '@wordpress/element';
import { CheckboxControl } from '@wordpress/components';

export const SettingsCheckbox = ( {
	id,
	desc,
	value,
}: Pick< BaseSettingsField, 'id' | 'desc' | 'value' > ) => {
	const [ checked, setChecked ] = useState( value === 'yes' );
	const onChange = ( newValue: boolean ) => {
		setChecked( newValue );
	};
	return (
		<CheckboxControl
			__nextHasNoMarginBottom={ true }
			id={ id }
			label={ desc }
			onChange={ onChange }
			checked={ checked }
		/>
	);
};
