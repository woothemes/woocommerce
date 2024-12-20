/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';

export type RouteArea = 'sidebar' | 'preview' | 'mobile';

export type RouteProps = {
	name: string;
	path: string;
	areas: Record< RouteArea, JSX.Element >;
};

export const homeRoute = {
	name: 'woocommerce/home',
	path: '/woocommerce/settings',
	areas: {
		sidebar: <div>Sidebar</div>,
		preview: <div>Preview</div>,
		mobile: <div>Mobile</div>,
	},
};
