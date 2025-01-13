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
import { getInputEdit } from '../components/InputEdit';
import { SelectEdit } from '../components/SelectEdit';

export type DataItem = Record< string, BaseSettingsField[ 'value' ] >;

/**
 * Transforms a single setting into initial form data.
 * For checkbox groups, it initializes each sub-setting with its value or 'no'.
 * For other fields, it uses the setting's value or an empty string.
 *
 * @param setting The setting to transform
 * @param acc     Accumulator object containing the form data
 * @return         Updated accumulator with the setting's initial data
 */
const transformToInitialData = ( setting: SettingsField, acc: DataItem ) => {
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

/**
 * Transforms a WooCommerce setting into a DataViews Field configuration.
 * Handles various field types including groups, checkboxes, text inputs, and selects.
 *
 * @param setting The setting to transform
 * @return         A Field configuration or array of Field configurations
 */
const transformToField = (
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
				Edit: getInputEdit( setting.type ),
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
				Edit: SelectEdit,
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
				Edit: () => <div>To be implemented: { setting.type }</div>,
			};
	}
};

/**
 * Transforms a setting into a form layout field configuration.
 * Determines how the field should be structured in the form layout.
 *
 * @param setting The setting to transform
 * @return         FormField configuration, setting ID, or false if the field should be excluded
 */
const transformToFormField = (
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

/**
 * Generates initial data for an array of settings.
 * Creates an object containing all settings' initial values.
 *
 * @param settings Array of settings to process
 * @return         Object containing initial form data
 */
export const generateInitialData = ( settings: SettingsField[] ): DataItem => {
	return settings.reduce< DataItem >(
		( acc, setting ) => transformToInitialData( setting, acc ),
		{}
	);
};

/**
 * Generates DataViews Field configurations for an array of settings.
 * Transforms all settings into their corresponding field configurations.
 *
 * @param settings Array of settings to transform
 * @return         Array of Field configurations
 */
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

/**
 * Generates the form layout configuration for an array of settings.
 * Creates a structure that defines how fields should be arranged in the form.
 *
 * @param settings Array of settings to process
 * @return         Form layout configuration
 */
export const generateForm = ( settings: SettingsField[] ) => ( {
	type: 'regular' as const,
	labelPosition: 'top' as const,
	fields: settings
		.map( transformToFormField )
		.filter( ( field ) => field !== false ),
} );
