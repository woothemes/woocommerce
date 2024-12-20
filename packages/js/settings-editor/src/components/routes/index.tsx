/**
 * External dependencies
 */
import { useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
/* eslint-disable @woocommerce/dependency-group */
// @ts-ignore No types for this exist yet.
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';
// @ts-ignore No types for this exist yet.
import { store as siteEditorStore } from '@wordpress/edit-site/build-module/store';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import { homeRoute } from './route-home';

const routes = [ homeRoute ];

export function useRegisterSiteEditorRoutes() {
	const { registerRoute } = unlock( useDispatch( siteEditorStore ) );

	useEffect( () => {
		routes.forEach( registerRoute );
	}, [ registerRoute ] );
}
