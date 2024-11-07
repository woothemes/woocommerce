/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import './settings-payments-main.scss';
import { PaymentGateways } from '~/settings-payments/components/payment-gateways';
import { OtherPaymentGateways } from '~/settings-payments/components/other-payment-gateways/other-payment-gateways';
import { IncentiveBanner } from '~/settings-payments/components/incentive-banner';
import { IncentiveModal } from '~/settings-payments/components/incentive-modal';
import { getAdminSetting } from '~/utils/admin-settings';
import apiFetch from '@wordpress/api-fetch';
import { useSelect } from '@wordpress/data';

interface activatePromoResponse {
	success: boolean;
}

export const SettingsPaymentsMain = () => {
	const incentive = getAdminSetting( 'wcpayWelcomePageIncentive' );

	const activatePromo = async () => {
		const activatePromoRequest: activatePromoResponse = await apiFetch( {
			path: `/wc-analytics/admin/notes/experimental-activate-promo/${ incentive.id }`,
			method: 'POST',
		} );
		if ( activatePromoRequest?.success ) {
			window.location.href = connectUrl;
		}
	};

	const { connectUrl } = useSelect( () => {
		return {
			connectUrl:
				'admin.php?wcpay-connect=1&promo=' +
				encodeURIComponent( incentive.id ) +
				'&_wpnonce=' +
				getAdminSetting( 'wcpay_welcome_page_connect_nonce' ) +
				'&from=WCADMIN_PAYMENT_INCENTIVE',
		};
	} );

	return (
		<>
			<div className="settings-payments-main__container">
				{ /*<IncentiveModal />*/ }
				<IncentiveBanner />
				<PaymentGateways />
				<OtherPaymentGateways />
			</div>
		</>
	);
};

export default SettingsPaymentsMain;
