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
	const { id, getValue, label, placeholder, description } = field;
	const value = getValue( { item: data } );
	const helpText =
		description === 'true' || description === 'false' ? '' : description;

	return (
		<TextareaControl
			__nextHasNoMarginBottom
			help={ helpText }
			label={ label }
			placeholder={ placeholder }
			onChange={ ( newValue ) => {
				onChange( {
					[ id ]: newValue,
				} );
			} }
			value={ value }
			id={ id }
		/>
	);
};
