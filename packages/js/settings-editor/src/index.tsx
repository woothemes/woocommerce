/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
// @ts-ignore No types for this exist yet.
import SidebarNavigationScreen from '@wordpress/edit-site/build-module/components/sidebar-navigation-screen';
import { privateApis as routerPrivateApis } from '@wordpress/router';
// @ts-ignore No types for this exist yet.
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';
import {
	// @ts-expect-error No types for this exist yet.
	privateApis as editorPrivateApis,
} from '@wordpress/editor';
/**
 * Internal dependencies
 */
import { isGutenbergVersionAtLeast } from './utils';
import { Sidebar } from './sidebar';
import { Layout } from './layout';

const { RouterProvider } = unlock( routerPrivateApis );
const { GlobalStylesProvider } = unlock( editorPrivateApis );

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
				<Layout
					route={ {
						key: 'settings',
						areas: {
							sidebar: (
								<SidebarNavigationScreen
									title={ 'Settings Title' }
									isRoot
									content={ <Sidebar /> }
								/>
							),
						},
						widths: {},
					} }
				/>
			</RouterProvider>
		</GlobalStylesProvider>
	);
};
