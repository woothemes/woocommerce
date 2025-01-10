/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import {
	__experimentalVStack as VStack,
	__experimentalHeading as Heading,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { SettingsInput } from '../settings-input';
import { SettingsCheckbox } from '../settings-checkbox';
import { SettingsSelect } from '../settings-select';
import { CustomView } from '../custom-view';

const getComponent = (
	setting: Exclude< SettingsField, GroupSettingsField >
) => {
	switch ( setting.type ) {
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
			return <SettingsInput { ...setting } />;
		case 'checkbox':
			return <SettingsCheckbox { ...setting } />;
		case 'checkboxgroup':
			return (
				<VStack spacing={ 4 }>
					{ setting.settings.map( ( checkboxSetting, index ) => {
						return (
							<SettingsCheckbox
								key={ `${ checkboxSetting.type }-${ index }` }
								{ ...checkboxSetting }
							/>
						);
					} ) }
				</VStack>
			);
		case 'select':
			return <SettingsSelect { ...setting } />;
		case 'custom':
			return <CustomView html={ setting.content } />;
		case 'slotfill_placeholder':
			return <div id={ setting.id } className={ setting.class }></div>;
		default:
			return <div>{ setting.type }</div>;
	}
};

export const SettingsItem = ( {
	setting,
}: {
	setting: Exclude< SettingsField, GroupSettingsField >;
} ) => {
	return (
		<VStack spacing={ 4 } className="woocommerce-settings-item">
			{ 'title' in setting && setting.title && (
				<Heading level={ 5 }>{ setting.title }</Heading>
			) }
			{ getComponent( setting ) }
		</VStack>
	);
};
