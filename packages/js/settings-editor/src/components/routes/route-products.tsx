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

export const productsRoute = {
	name: 'home',
	path: '/wc-settings/products',
	areas: {
		sidebar: (
			<Sidebar title={ __( 'Products', 'woocommerce' ) } backPack="/" />
		),
		content: (
			<LegacyContent
				settingsPage={ settingsData?.products }
				activeSection="default"
			/>
		),
		mobile: <div>Mobile</div>,
	},
};
