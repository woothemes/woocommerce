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

registerTaxSettingsConflictErrorFill();
registerPaymentsSettingsBannerFill();
registerSiteVisibilitySlotFill();

const Settings = () => {
	const { activePage, activeSection } = useActiveRoute();

	// Render the settings slots every time the page or section changes.
	useEffect( () => {
		possiblyRenderSettingsSlots();
	}, [ activePage, activeSection ] );

	return <SettingsEditor />;
};

if ( node ) {
	createRoot( node ).render(
		<RouterProvider>
			<Settings />
		</RouterProvider>
	);
}
