/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { CheckboxControl } from '@wordpress/components';
import type { DataFormControlProps } from '@wordpress/dataviews';

/**
 * Internal dependencies
 */
import type { DataItem } from '../../types/field';

export const CheckboxEdit = ( {
	field,
	onChange,
	data,
}: DataFormControlProps< DataItem > ) => {
	const { id, getValue, label } = field;
	const value = getValue( { item: data } );

	return (
		<CheckboxControl
			__nextHasNoMarginBottom={ true }
			id={ id }
			label={ label }
			checked={ value === 'yes' }
			onChange={ ( checked ) => {
				onChange( {
					[ id ]: checked ? 'yes' : 'no',
				} );
			} }
		/>
	);
};
