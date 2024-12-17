/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
// @ts-expect-error missing types.
import { __experimentalHeading as Heading } from '@wordpress/components';
import { SettingsInput } from '../settings-input';
import { SettingsCheckbox } from '../settings-checkbox';

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
			return <SettingsInput setting={ setting } />;
		case 'checkbox':
			return <SettingsCheckbox setting={ setting } />;
		default:
			return <p>{ setting.type }</p>;
	}
};

export const SettingsItem = ( { setting }: { setting: SettingsField } ) => {
	return (
		<div>
			{ setting.title && (
				<Heading level={ 5 }>{ setting.title }</Heading>
			) }
			{ getComponent( setting ) }
		</div>
	);
};
