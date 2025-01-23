/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import type { DataFormControlProps } from '@wordpress/dataviews';
import { TextareaControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import type { DataFormItem } from '../../types';

export const getTextareaEdit = ( {
	field,
	onChange,
	data,
}: DataFormControlProps< DataFormItem > ) => {
	const { id, getValue, label } = field;
	const value = getValue( { item: data } );

	return (
		<TextareaControl
			__nextHasNoMarginBottom
			help={ label }
			onChange={ ( newValue ) => {
				onChange( {
					[ id ]: newValue,
				} );
			} }
			value={ value }
		/>
	);
};
