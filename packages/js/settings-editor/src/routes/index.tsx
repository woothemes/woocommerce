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

const settingsEditorRoutes = Object.values( settingsData )
	.map( ( settingsPage ) => {
		return Object.entries( settingsPage.sections ).map( ( [ key ] ) => {
			return {
				name: settingsPage.slug,
				path: getSettingsSectionPath( settingsPage.slug, key ),
				areas: {
					sidebar: (
						<Sidebar title={ settingsPage.label } backPack="/" />
					),
					content: (
						<LegacyContent
							settingsPage={ settingsPage }
							activeSection="default"
						/>
					),
					mobile: <div>Mobile</div>,
				},
			};
		} );
	} )
	.flat();

export default settingsEditorRoutes;
