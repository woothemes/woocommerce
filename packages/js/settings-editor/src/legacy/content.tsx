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
				{ section.settings.map( ( group ) => {
					if ( group.type === 'group' ) {
						return (
							<SettingsGroup key={ group.id } group={ group } />
						);
					}
					// Handle settings not in a group here.
					return null;
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
