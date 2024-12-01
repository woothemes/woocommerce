/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
/* eslint-disable @woocommerce/dependency-group */
// @ts-ignore No types for this exist yet.
import { privateApis as routerPrivateApis } from '@wordpress/router';
// @ts-ignore No types for this exist yet.
import { AdminLayout, unlock } from '@woocommerce/admin-layout';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import { isGutenbergVersionAtLeast } from './utils';
import { useActiveRoute } from './route';

const { RouterProvider } = unlock( routerPrivateApis );

const SettingsLayout = () => {
	const { route, settingsPage, tabs, activeSection } = useActiveRoute();

	return (
		<AdminLayout
			route={ route }
			pageTitle={ settingsPage?.label }
			tabs={ tabs }
			activeSection={ activeSection }
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
		<RouterProvider>
			<SettingsLayout />
		</RouterProvider>
	);
};

export * from './components';
export * from './legacy';
