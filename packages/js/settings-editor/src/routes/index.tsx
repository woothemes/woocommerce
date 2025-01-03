/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { getSettingsSectionPath, settingsData } from '../utils';
import { Sidebar } from '../components';
import { LegacyContent } from '../legacy';

export type RouteProps = {
	name: string;
	path: string;
	areas: {
		sidebar: JSX.Element;
		content: JSX.Element;
		mobile: JSX.Element;
	};
};

/*
 * Generate routes for settings editor.
 * It will create a route for each settings page and each section of the page.
 * eg:
 *  - /wc-settings/general,
 *  - /wc-settings/products/general,
 *  - /wc-settings/products/inventory
 */
const settingsEditorRoutes = Object.values( settingsData )
	.map( ( settingsPage ) => {
		return Object.entries( settingsPage.sections ).map( ( [ section ] ) => {
			return {
				name: settingsPage.slug,
				path: getSettingsSectionPath( settingsPage.slug, section ),
				areas: {
					sidebar: (
						<Sidebar title={ settingsPage.label } backPack="/" />
					),
					content: (
						<LegacyContent
							settingsPage={ settingsPage }
							activeSection={ section }
						/>
					),
					mobile: <div>Mobile</div>,
				},
			};
		} );
	} )
	.flat();

export default settingsEditorRoutes;
