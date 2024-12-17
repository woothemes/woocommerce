/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { CheckboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export const SettingsCheckbox = ( { setting }: { setting: SettingsField } ) => {
	const { id, desc } = setting;
	const [ checked, setChecked ] = useState( 'yes' === setting.value );
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
