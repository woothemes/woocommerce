/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { SettingsGroup } from '../components/settings-group';
import { SettingsItem } from '../components/settings-item';

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
					const key =
						data.id +
						'-' +
						( data.title ?? '' ).replace( /\s+/g, '-' ) +
						'-' +
						data.type;

					if ( data.type === 'sectionend' ) {
						return null;
					}

					if ( data.type === 'group' ) {
						return <SettingsGroup key={ key } group={ data } />;
					}

					// Handle settings not in a group here.
					return (
						<fieldset key={ key }>
							<SettingsItem setting={ data } />
						</fieldset>
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
