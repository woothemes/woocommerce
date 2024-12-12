/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { SettingsGroup } from '../components/settings-group';

export const LegacyContent = ( {
	settingsPage,
	activeSection,
}: {
	settingsPage: SettingsPage;
	activeSection: string;
} ) => {
	const section = settingsPage.sections[ activeSection ];
	console.log( section );

	return (
		<div className="woocommerce-settings-content">
			{ section.settings.map( ( group ) => (
				<SettingsGroup key={ group.id } group={ group } />
			) ) }
		</div>
	);
};
