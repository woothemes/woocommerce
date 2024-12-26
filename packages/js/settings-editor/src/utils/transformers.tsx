/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import type { Field, FormField } from '@wordpress/dataviews';

/**
 * Internal dependencies
 */
import { CustomView } from '../components/custom-view';
import { SettingsGroup } from '../components/settings-group';
import { CheckboxEdit } from '../components/checkbox-edit';
import { InputEdit } from '../components/InputEdit';

export type DataItem = Record< string, BaseSettingsField[ 'value' ] >;

export const transformToInitialData = (
	setting: SettingsField,
	acc: DataItem
) => {
	switch ( setting.type ) {
		case 'checkboxgroup':
			if ( setting.settings?.length ) {
				setting.settings.forEach( ( subSetting ) => {
					acc[ subSetting.id ] = subSetting.value ?? 'no';
				} );
			}
			break;
		default:
			acc[ setting.id ] = 'value' in setting ? setting.value : '';
	}
	return acc;
};

export const transformToField = (
	setting: SettingsField
): Field< DataItem >[] | Field< DataItem > => {
	switch ( setting.type ) {
		case 'group':
			return {
				id: setting.id,
				label: '',
				Edit: () => <SettingsGroup { ...setting } />,
			};

		case 'checkboxgroup':
			return setting.settings?.map( ( subSetting ) => ( {
				id: subSetting.id,
				type: 'text',
				label: subSetting.desc,
				Edit: CheckboxEdit,
			} ) );

		case 'checkbox':
			return {
				id: setting.id,
				type: 'text',
				label: setting.desc,
				Edit: CheckboxEdit,
			};

		case 'text':
		case 'password':
		case 'datetime':
		case 'datetime-local':
		case 'date':
		case 'month':
		case 'time':
		case 'week':
		case 'number':
		case 'email':
		case 'url':
		case 'tel':
			return {
				id: setting.id,
				type: 'text',
				label: setting.desc,
				Edit: InputEdit,
			};

		case 'select':
		case 'single_select_country':
		case 'single_select_page':
		case 'multi_select_countries':
			return {
				id: setting.id,
				type: 'text',
				label: setting.desc + ' (TO BE IMPLEMENTED)',
				elements: Object.entries( setting.options || {} ).map(
					( [ label, value ] ) => ( {
						label,
						value,
					} )
				),
				Edit: 'select',
			};

		case 'custom':
			return {
				id: setting.id,
				type: 'text',
				Edit: () => <CustomView html={ setting.content } />,
			};

		case 'slotfill_placeholder':
			return {
				id: setting.id,
				type: 'text' as const,
				Edit: () => (
					<div id={ setting.id } className={ setting.class }></div>
				),
			};

		case 'sectionend':
			return {
				id: setting.id,
				type: 'text' as const,
				Edit: () => null,
			};

		default:
			return {
				id: setting.id,
				type: 'text',
				label: setting.desc,
				Edit: () => <div>Unsupported field type: { setting.type }</div>,
			};
	}
};

export const transformToFormField = (
	setting: SettingsField
): FormField | string | false => {
	switch ( setting.type ) {
		case 'checkboxgroup':
			return {
				id: setting.id,
				label: setting.title,
				children: setting.settings?.map(
					( subSetting ) => subSetting.id
				),
			};

		case 'sectionend':
		case 'title':
			return false;

		case 'custom':
		case 'group':
		case 'slotfill_placeholder':
			return setting.id;

		default:
			return {
				id: setting.id,
				label: setting.title,
				children: [ setting.id ],
			};
	}
};

export const generateInitialData = ( settings: SettingsField[] ): DataItem => {
	return settings.reduce< DataItem >(
		( acc, setting ) => transformToInitialData( setting, acc ),
		{}
	);
};

export const generateFields = (
	settings: SettingsField[]
): Field< DataItem >[] => {
	return settings.reduce< Field< DataItem >[] >( ( acc, setting ) => {
		const field = transformToField( setting );
		return Array.isArray( field )
			? [ ...acc, ...field ]
			: [ ...acc, field ];
	}, [] );
};

export const generateForm = ( settings: SettingsField[] ) => ( {
	type: 'regular' as const,
	labelPosition: 'top' as const,
	fields: settings
		.map( transformToFormField )
		.filter( ( field ) => field !== false ),
} );
