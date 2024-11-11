/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
/* eslint-disable @woocommerce/dependency-group */
// @ts-ignore No types for this exist yet.
import SidebarNavigationScreen from '@wordpress/edit-site/build-module/components/sidebar-navigation-screen';
import { privateApis as routerPrivateApis } from '@wordpress/router';
// @ts-ignore No types for this exist yet.
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';
import {
	// @ts-expect-error No types for this exist yet.
	privateApis as editorPrivateApis,
} from '@wordpress/editor';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import { isGutenbergVersionAtLeast } from './utils';
import { Sidebar } from './sidebar';
import { Layout } from './layout';
import { Page } from './types';

const { RouterProvider } = unlock( routerPrivateApis );
const { GlobalStylesProvider } = unlock( editorPrivateApis );

const pages: Record< string, Page > =
	( window.wcSettings?.admin?.settingsPages as Record< string, Page > ) || {};

const ContentPlaceholder = () => {
	return <div>Content Placeholder</div>;
};

const SettingsLayout = () => {
	return (
		<Layout
			route={ {
				key: 'settings',
				areas: {
					content: <ContentPlaceholder />,
					sidebar: (
						<SidebarNavigationScreen
							title={ 'Settings Title TBD' }
							isRoot
							content={ <Sidebar pages={ pages } /> }
						/>
					),
				},
				widths: {},
			} }
		/>
	);
};

export const SettingsEditor = () => {
	const isRequiredGutenbergVersion = isGutenbergVersionAtLeast( 19.0 );

	if ( ! isRequiredGutenbergVersion ) {
		return (
			//  Temporary during development.
			<div style={ { margin: 'auto' } }>
				{ __(
					'Please enable Gutenberg version 19.0 or higher for this feature',
					'woocommerce'
				) }
			</div>
		);
	}

	return (
		<GlobalStylesProvider>
			<RouterProvider>
				<SettingsLayout />
			</RouterProvider>
		</GlobalStylesProvider>
	);
};
