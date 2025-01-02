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

export default function useRegisterSettingsRoutes( routes: RouteProps[] ) {
	const { registerRoute } = unlock( useDispatch( editSiteStore ) );

	useEffect(
		() => routes.forEach( registerRoute ),
		[ registerRoute, routes ]
	);
}
