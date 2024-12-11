/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import {
	type OfflinePaymentGateway,
	PAYMENT_SETTINGS_STORE_NAME,
} from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './settings-payments-offline.scss';
import './settings-payments-body.scss';
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
	const { updateProviderOrdering } = useDispatch(
		PAYMENT_SETTINGS_STORE_NAME
	);
	// State to hold the sorted gateways in case of changing the order, otherwise it will be null
	const [ sortedOfflinePaymentGateways, setSortedOfflinePaymentGateways ] =
		useState< OfflinePaymentGateway[] | null >( null );

	function handleOrderingUpdate( sorted: OfflinePaymentGateway[] ) {
		// Extract the existing _order values in the sorted order
		const updatedOrderValues = sorted
			.map( ( gateway ) => gateway._order )
			.sort( ( a, b ) => a - b );

		// Build the orderMap by assigning the sorted _order values
		const orderMap: Record< string, number > = {};
		sorted.forEach( ( gateway, index ) => {
			orderMap[ gateway.id ] = updatedOrderValues[ index ];
		} );

		updateProviderOrdering( orderMap );

		// Set the sorted providers to the state to give a real-time update
		setSortedOfflinePaymentGateways( sorted );
	}

	return (
		<div className="settings-payments-offline__container">
			<OfflinePaymentGateways
				isFetching={ isFetching }
				updateOrdering={ handleOrderingUpdate }
				offlinePaymentGateways={
					sortedOfflinePaymentGateways || offlinePaymentGateways
				}
			/>
		</div>
	);
};

export default SettingsPaymentsOffline;
