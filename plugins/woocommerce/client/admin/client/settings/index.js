/**
 * External dependencies
 */
import { createRoot, useEffect } from '@wordpress/element';
import {
	SettingsEditor,
	useActiveRoute,
	RouterProvider,
} from '@woocommerce/settings-editor';

/**
 * Internal dependencies
 */
import { possiblyRenderSettingsSlots } from './settings-slots';
import { registerTaxSettingsConflictErrorFill } from './conflict-error-slotfill';
import { registerPaymentsSettingsBannerFill } from '../payments/payments-settings-banner-slotfill';
import { registerSiteVisibilitySlotFill } from '../launch-your-store';
import './settings.scss';

const node = document.getElementById( 'wc-settings-page' );

const Settings = () => {
	const { activePage, activeSection } = useActiveRoute();

	useEffect( () => {
		possiblyRenderSettingsSlots();
	}, [ activePage, activeSection ] );

	useEffect( () => {
		registerTaxSettingsConflictErrorFill();
		registerPaymentsSettingsBannerFill();
		registerSiteVisibilitySlotFill();
	}, [] );

	return <SettingsEditor />;
};

if ( node ) {
	createRoot( node ).render(
		<RouterProvider>
			<Settings />
		</RouterProvider>
	);
}
