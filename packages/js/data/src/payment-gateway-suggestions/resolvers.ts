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
