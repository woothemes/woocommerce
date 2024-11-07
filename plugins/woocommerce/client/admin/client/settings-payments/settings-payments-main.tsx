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
	// TODO: Implement. See `payments-welcome/index.tsx` for an example.
	// const incentive = getAdminSetting( 'wcpayWelcomePageIncentive' );

	// TODO: This will come from the incentive data.
	const incentiveType = 'action';

	return (
		<>
			<div className="settings-payments-main__container">
				{ incentiveType === 'action' && (
					<IncentiveModal
						isOpen={ true }
						onClose={ () => {} }
						onSubmit={ () => {} }
					/>
				) }
				{ incentiveType === 'switch' && <IncentiveBanner /> }
				<PaymentGateways />
				<OtherPaymentGateways />
			</div>
		</>
	);
};

export default SettingsPaymentsMain;
