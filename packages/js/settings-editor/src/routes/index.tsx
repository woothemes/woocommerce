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
 */
const settingsEditorRoutes = Object.values( settingsData ).map(
	( settingsPage ) => {
		return {
			name: settingsPage.slug,
			path: getSettingsSectionPath( settingsPage.slug ),
			areas: {
				sidebar: <Sidebar title={ settingsPage.label } backPack="/" />,
				content: (
					<LegacyContent
						settingsPage={ settingsPage }
						activeSection="default"
					/>
				),
				mobile: <div>Mobile</div>,
			},
		};
	}
);

export default settingsEditorRoutes;
