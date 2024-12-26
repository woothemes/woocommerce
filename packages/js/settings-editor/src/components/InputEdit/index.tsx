/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import type { DataFormControlProps } from '@wordpress/dataviews';
import { __experimentalInputControl as InputControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import type { DataItem } from '../../types/field';

export const getInputEdit =
	( type: BaseSettingsField[ 'type' ] ) =>
	( { field, onChange, data }: DataFormControlProps< DataItem > ) => {
		const { id, getValue, label } = field;
		const value = getValue( { item: data } );

		return (
			<InputControl
				id={ id }
				label={ label }
				type={ type }
				value={ value }
				onChange={ ( newValue ) => {
					onChange( {
						[ id ]: newValue,
					} );
				} }
			/>
		);
	};
