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
		<form id="mainform">
			<div className="woocommerce-settings-content">
				{ section.settings.map( ( data, index ) => {
					const key = `${ data.type }-${ index }`;

					if ( data.type === 'sectionend' ) {
						return null;
					}

					if ( data.type === 'group' ) {
						return (
							<SettingsGroup
								key={ key }
								group={ data as GroupSettingsField }
							/>
						);
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
