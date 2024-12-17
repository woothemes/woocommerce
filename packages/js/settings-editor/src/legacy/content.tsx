/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { SettingsGroup } from '../components/settings-group';
<<<<<<< HEAD
import { SettingsItem } from '../components/settings-item';
=======
>>>>>>> trunk

export const LegacyContent = ( {
	settingsPage,
	activeSection,
}: {
	settingsPage: SettingsPage;
	activeSection: string;
} ) => {
	const section = settingsPage.sections[ activeSection ];

	if ( ! section ) {
		return null;
	}

	return (
		<form>
			<div className="woocommerce-settings-content">
				{ section.settings.map( ( data ) => {
					if ( data.type === 'sectionend' ) {
						return null;
					}

					if ( data.type === 'group' ) {
						return <SettingsGroup key={ data.id } group={ data } />;
					}
					// Handle settings not in a group here.
					return (
						<SettingsItem
							key={ data.id || data.title + data.type }
							setting={ data }
						/>
					);
				} ) }
			</div>
			<div className="woocommerce-settings-content-footer">
				<Button variant="primary">
					{ __( 'Save', 'woocommerce' ) }
				</Button>
			</div>
		</form>
	);
};
