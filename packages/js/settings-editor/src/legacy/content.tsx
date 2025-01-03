/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { privateApis as routerPrivateApis } from '@wordpress/router';

/* eslint-disable @woocommerce/dependency-group */
// @ts-ignore No types for this exist yet.
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import { SettingsGroup } from '../components/settings-group';
import { SettingsItem } from '../components/settings-item';
import { getSettingsPage } from '../utils';

const { useLocation } = unlock( routerPrivateApis );

export const LegacyContent = () => {
	const { query } = useLocation();
	const { tab = 'general', section: querySection = 'default' } = query;

	const page = getSettingsPage( tab );
	const activeSection = page.sections?.[ querySection ];

	if ( ! activeSection ) {
		return null;
	}

	return (
		<form>
			<div className="woocommerce-settings-content">
				{ activeSection.settings.map( ( data, index ) => {
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
