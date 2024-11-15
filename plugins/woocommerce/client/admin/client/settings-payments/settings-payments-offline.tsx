/**
 * External dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { PAYMENT_GATEWAYS_SUGGESTIONS_STORE_NAME } from '@woocommerce/data';
import { useEffect } from 'react';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './settings-payments-offline.scss';
import { OfflinePaymentGateways } from './components/offline-payment-gateways';

export const SettingsPaymentsOffline = () => {
	const { offlinePaymentGateways } = useSelect( ( select ) => {
		return {
			offlinePaymentGateways: select(
				PAYMENT_GATEWAYS_SUGGESTIONS_STORE_NAME
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
