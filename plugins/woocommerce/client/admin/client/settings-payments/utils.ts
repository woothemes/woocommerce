/**
 * External dependencies
 */
import { PaymentProvider, RecommendedPaymentMethod } from '@woocommerce/data';
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
	return [ '_wc_pes_woopayments', 'woocommerce_payments' ].includes( id );
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

export const getWooPaymentsSetupLiveAccountLink = () => {
	return getAdminLink(
		'admin.php?wcpay-connect=1&_wpnonce=' +
			getAdminSetting( 'wcpay_welcome_page_connect_nonce' ) +
			'&wcpay-disable-onboarding-test-mode=true&redirect_to_settings_page=true&source=wcpay-setup-live-payments'
	);
};

export const getPaymentMethodById =
	( id: string ) => ( providers: RecommendedPaymentMethod[] ) => {
		return providers.find( ( provider ) => provider.id === id ) || null;
	};

/**
 * Checks whether providers contain WooPayments gateway in test mode that is set up.
 *
 * @param providers payment providers
 */
export const providersContainWooPaymentsInTestMode = (
	providers: PaymentProvider[]
): boolean => {
	const wooPayments = providers.find( ( obj ) => isWooPayments( obj.id ) );
	return (
		!! wooPayments?.state?.test_mode && ! wooPayments?.state?.needs_setup
	);
};
