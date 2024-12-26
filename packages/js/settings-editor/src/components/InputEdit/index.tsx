/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import type { DataFormControlProps } from '@wordpress/dataviews';
/* eslint-disable @woocommerce/dependency-group */
// @ts-expect-error missing types.
import { __experimentalInputControl as InputControl } from '@wordpress/components';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import type { DataItem } from '../../types/field';

export const InputEdit = ( {
	field,
	onChange,
	data,
}: DataFormControlProps< DataItem > ) => {
	const { id, getValue, label } = field;
	const value = getValue( { item: data } );

	return (
		<InputControl
			id={ id }
			label={ label }
			type={ data.type }
			value={ value }
			onChange={ ( newValue: DataItem[ typeof id ] ) => {
				onChange( {
					[ id ]: newValue,
				} );
			} }
		/>
	);
};
