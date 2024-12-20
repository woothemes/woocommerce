/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Sidebar } from '../sidebar';
import { LegacyContent } from '../../legacy';

const settingsData: SettingsData = window.wcSettings?.admin?.settingsData;

export const homeRoute = {
	name: 'home',
	path: '/wc-settings',
	areas: {
		sidebar: (
			<Sidebar title={ __( 'Settings', 'woocommerce' ) } backPack="/" />
		),
		content: (
			<LegacyContent
				settingsPage={ settingsData?.general }
				activeSection="default"
			/>
		),

		mobile: <div>Mobile</div>,
	},
};
