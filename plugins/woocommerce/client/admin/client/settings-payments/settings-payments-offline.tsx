/**
 * External dependencies
 */
import '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { PAYMENT_GATEWAYS_STORE_NAME } from '@woocommerce/data';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import './settings-payments-offline.scss';
import { OfflinePaymentGateways } from './components/offline-payment-gateways';
import usePaymentOrdering from './hooks/use-payment-ordering';

export const SettingsPaymentsOffline = () => {
	const registeredPaymentGateways = useSelect( ( select ) => {
		return select( PAYMENT_GATEWAYS_STORE_NAME ).getPaymentGateways();
	}, [] );

	const { ordering, updateOrdering } = usePaymentOrdering( 'offline' );

	return (
		<div className="settings-payments-offline__container">
			<OfflinePaymentGateways
				registeredPaymentGateways={ registeredPaymentGateways }
				ordering={ ordering }
				updateOrdering={ updateOrdering }
			/>
		</div>
	);
};

export default SettingsPaymentsOffline;
