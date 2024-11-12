/**
 * External dependencies
 */
import '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { PAYMENT_GATEWAYS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './settings-payments-offline.scss';
import { OfflinePaymentGateways } from './components/offline-payment-gateways';

export const SettingsPaymentsOffline = () => {
	const registeredPaymentGateways = useSelect( ( select ) => {
		return select( PAYMENT_GATEWAYS_STORE_NAME ).getPaymentGateways();
	}, [] );

	return (
		<div className="settings-payments-offline__container">
			<OfflinePaymentGateways
				registeredPaymentGateways={ registeredPaymentGateways }
			/>
		</div>
	);
};

export default SettingsPaymentsOffline;
