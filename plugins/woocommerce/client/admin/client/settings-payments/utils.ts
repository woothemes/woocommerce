/**
 * External dependencies
 */
import { getAdminLink } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import { getAdminSetting } from '~/utils/admin-settings';

/**
 * Handles enabling WooCommerce Payments and redirection based on Jetpack connection status.
 */
export const parseScriptTag = ( elementId: string ) => {
	const scriptTag = document.getElementById( elementId );
	return scriptTag ? JSON.parse( scriptTag.textContent || '' ) : [];
};

export const isWooPayments = ( id: string ) => {
	return [
		'pre_install_woocommerce_payments_promotion',
		'woocommerce_payments',
	].includes( id );
};

export const getWooPaymentsTestDriveAccountLink = () => {
	return getAdminLink(
		'admin.php?wcpay-connect=1&_wpnonce=' +
			getAdminSetting( 'wcpay_welcome_page_connect_nonce' ) +
			'&test_drive=true&auto_start_test_drive_onboarding=true&redirect_to_settings_page=true'
	);
};

export const getWooPaymentsResetAccountLink = () => {
	return getAdminLink(
		'admin.php?wcpay-connect=1&_wpnonce=' +
			getAdminSetting( 'wcpay_welcome_page_connect_nonce' ) +
			'&wcpay-reset-account=true&redirect_to_settings_page=true'
	);
};
