/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import {
	getPaymentGatewaySuggestionsSuccess,
	getPaymentGatewaySuggestionsError,
	getPaymentGatewaySuggestionsRequest,
	getOfflinePaymentGatewaysRequest,
	getOfflinePaymentGatewaysSuccess,
	getOfflinePaymentGatewaysError,
} from './actions';
import { PaymentGatewaySuggestionsState } from './types';
import { WC_ADMIN_NAMESPACE } from '../constants';

export function* getPaymentGateways() {
	yield getPaymentGatewaySuggestionsRequest();

	try {
		const paymentGatewaySuggestions: PaymentGatewaySuggestionsState =
			yield apiFetch( {
				path: WC_ADMIN_NAMESPACE + '/settings/payments/providers',
			} );
		yield getPaymentGatewaySuggestionsSuccess( paymentGatewaySuggestions );
	} catch ( e ) {
		yield getPaymentGatewaySuggestionsError( e );
	}
}

export function* getOfflinePaymentGateways() {
	yield getOfflinePaymentGatewaysRequest();

	try {
		const paymentGatewaySuggestions: PaymentGatewaySuggestionsState =
			yield apiFetch( {
				path: WC_ADMIN_NAMESPACE + '/settings/payments/providers',
			} );
		yield getOfflinePaymentGatewaysSuccess(
			paymentGatewaySuggestions.offline_payment_methods
		);
	} catch ( e ) {
		yield getOfflinePaymentGatewaysError( e );
	}
}
