/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import {
	// @ts-expect-error missing types.
	__experimentalVStack as VStack,
	// @ts-expect-error missing types.
	__experimentalHeading as Heading,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { SettingsInput } from '../settings-input';
import { SettingsCheckbox } from '../settings-checkbox';
import { SettingsSelect } from '../settings-select';

const getComponent = ( setting: SettingsField ) => {
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
					{ setting.settings.map(
						( checkboxSetting: SettingsField ) => {
							return (
								<SettingsCheckbox
									key={ checkboxSetting.id }
									{ ...checkboxSetting }
								/>
							);
						}
					) }
				</VStack>
			);
		case 'select':
			return <SettingsSelect { ...setting } />;
		default:
			return <div>{ setting.type }</div>;
	}
};

export const SettingsItem = ( { setting }: { setting: SettingsField } ) => {
	return (
		<VStack spacing={ 4 } className="woocommerce-settings-item">
			{ setting.title && (
				<Heading level={ 5 }>{ setting.title }</Heading>
			) }
			{ getComponent( setting ) }
		</VStack>
	);
};
