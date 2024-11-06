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

export const SettingsPaymentsMain: React.FC = () => {
	return (
		<>
			<div className="settings-payments-main__container">
				<IncentiveModal />
				<IncentiveBanner />
				<PaymentGateways />
				<OtherPaymentGateways />
			</div>
		</>
	);
};

export default SettingsPaymentsMain;
