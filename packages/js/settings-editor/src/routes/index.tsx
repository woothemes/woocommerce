/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Header, Sidebar } from '../components';
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
const settingsEditorRoutes = [
	{
		name: 'wc-settings',
		path: '/wc-settings',
		areas: {
			header: <Header />,
			sidebar: <Sidebar />,
			content: <LegacyContent />,
			mobile: <div>Mobile</div>,
		},
	},
];

export default settingsEditorRoutes;
