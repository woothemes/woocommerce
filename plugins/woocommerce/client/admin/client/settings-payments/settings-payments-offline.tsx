/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import {
	type OfflinePaymentGateway,
	PAYMENT_SETTINGS_STORE_NAME,
} from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './settings-payments-offline.scss';
import { OfflinePaymentGateways } from './components/offline-payment-gateways';

export const SettingsPaymentsOffline = () => {
	const { offlinePaymentGateways, isFetching } = useSelect( ( select ) => {
		return {
			isFetching: select( PAYMENT_SETTINGS_STORE_NAME ).isFetching(),
			offlinePaymentGateways: select(
				PAYMENT_SETTINGS_STORE_NAME
			).getOfflinePaymentGateways(),
		};
	} );
	const { updateOfflinePaymentGatewayOrdering } = useDispatch(
		PAYMENT_SETTINGS_STORE_NAME
	);
	const handleOrderingUpdate = ( gateways: OfflinePaymentGateway[] ) => {
		updateOfflinePaymentGatewayOrdering( gateways );
	};

	return (
		<div className="settings-payments-offline__container">
			<OfflinePaymentGateways
				isFetching={ isFetching }
				updateOrdering={ handleOrderingUpdate }
				offlinePaymentGateways={ offlinePaymentGateways }
			/>
		</div>
	);
};

export default SettingsPaymentsOffline;
