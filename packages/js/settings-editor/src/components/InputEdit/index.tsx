/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import type { DataFormControlProps } from '@wordpress/dataviews';
import { __experimentalInputControl as InputControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import type { DataFormItem } from '../../types/form';

export const getInputEdit =
	( type: BaseSettingsField[ 'type' ] ) =>
	( { field, onChange, data }: DataFormControlProps< DataFormItem > ) => {
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
