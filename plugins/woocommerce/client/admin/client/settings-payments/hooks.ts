/**
 * External dependencies
 */
import { select, resolveSelect } from '@wordpress/data';
import { PLUGINS_STORE_NAME, ONBOARDING_STORE_NAME } from '@woocommerce/data';
import { getAdminLink } from '@woocommerce/settings';
/**
 * Internal dependencies
 */

/**
 * Handles enabling WooCommerce Payments and redirection based on Jetpack connection status.
 */
export const onWCPayEnable = async (): Promise< void > => {
	const isJetpackConnected =
		select( PLUGINS_STORE_NAME ).isJetpackConnected();

	if ( ! isJetpackConnected ) {
		const jetpackAuthUrlResponse = await resolveSelect(
			ONBOARDING_STORE_NAME
		).getJetpackAuthUrl( {
			redirectUrl: getAdminLink(
				'admin.php?page=wc-admin&path=/payments/connect&test_drive=true&auto_start_test_drive_onboarding=true&redirect_to_settings_page=true'
			),
			from: 'woocommerce-payments',
		} );
		if ( jetpackAuthUrlResponse.url ) {
			window.location.href = jetpackAuthUrlResponse.url;
		} else {
			// TODO error handling
		}
	} else {
		window.location.href = getAdminLink(
			'admin.php?page=wc-admin&path=/payments/connect&test_drive=true&auto_start_test_drive_onboarding=true&redirect_to_settings_page=true'
		);
	}
};
