/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { PAYMENT_SETTINGS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './settings-payments-offline.scss';
import { OfflinePaymentGateways } from './components/offline-payment-gateways';

export const SettingsPaymentsOffline = () => {
	const { offlinePaymentGateways } = useSelect( ( select ) => {
		return {
			offlinePaymentGateways: select(
				PAYMENT_SETTINGS_STORE_NAME
			).getOfflinePaymentGateways(),
		};
	} );

	return (
		<div className="settings-payments-offline__container">
			<OfflinePaymentGateways
				offlinePaymentGateways={ offlinePaymentGateways }
			/>
		</div>
	);
};

export default SettingsPaymentsOffline;
