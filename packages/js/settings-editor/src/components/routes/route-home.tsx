/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Sidebar } from '../sidebar';

export type RouteArea = 'sidebar' | 'preview' | 'mobile';

export type RouteProps = {
	name: string;
	path: string;
	areas: Record< RouteArea, JSX.Element >;
};

export const homeRoute = {
	name: 'home',
	path: '/wc-settings',
	areas: {
		sidebar: (
			<Sidebar title={ __( 'Settings', 'woocommerce' ) } backPack="/" />
		),
		preview: <div>Preview</div>,
		content: <div>Content</div>,
		mobile: <div>Mobile</div>,
	},
};
