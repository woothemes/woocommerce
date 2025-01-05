/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
/* eslint-disable @woocommerce/dependency-group */
// @ts-ignore No types for this exist yet.
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';
// @ts-ignore No types for this exist yet.
import { store as editSiteStore } from '@wordpress/edit-site/build-module/store';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import { RouteProps } from '../../routes';

export default function useInitialConfiguration( routes: RouteProps[] ) {
	const { registerRoute, updateSettings } = unlock(
		useDispatch( editSiteStore )
	);

	useEffect( () => {
		// Register all routes.
		routes.forEach( registerRoute );

		// Update settings with the dashboard link.
		updateSettings( {
			__experimentalDashboardLink: window.wcSettings.adminUrl,
		} );
	}, [ registerRoute, routes, updateSettings ] );
}
