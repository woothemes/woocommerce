/**
 * External dependencies
 */
import { createElement, useEffect } from '@wordpress/element';
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
import { Sidebar } from '../sidebar';
import { LegacyContent } from '../../legacy';
import { getSettingsSectionPath } from './utils';

const settingsData: SettingsData = window.wcSettings?.admin?.settingsData || [];

const routes = Object.values( settingsData ).map( ( settingsPage ) => {
	return {
		name: settingsPage.label,
		path: getSettingsSectionPath( settingsPage ),
		areas: {
			sidebar: <Sidebar title={ settingsPage.label } backPack="/" />,
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

export function useRegisterSiteEditorRoutes() {
	const { registerRoute } = unlock( useDispatch( editSiteStore ) );

	useEffect( () => routes.forEach( registerRoute ), [ registerRoute ] );
}
