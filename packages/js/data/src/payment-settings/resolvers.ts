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
import { PaymentSuggestionsResponse } from './types';
import { WC_ADMIN_NAMESPACE } from '../constants';

export function* getRegisteredPaymentGateways() {
	yield getPaymentGatewaySuggestionsRequest();

	try {
		const paymentSuggestionsResponse: PaymentSuggestionsResponse =
			yield apiFetch( {
				path: WC_ADMIN_NAMESPACE + '/settings/payments/providers',
			} );
		yield getPaymentGatewaySuggestionsSuccess(
			paymentSuggestionsResponse.gateways,
			paymentSuggestionsResponse.offline_payment_methods,
			paymentSuggestionsResponse.preferred_suggestions,
			paymentSuggestionsResponse.other_suggestions,
			paymentSuggestionsResponse.suggestion_categories
		);
	} catch ( e ) {
		yield getPaymentGatewaySuggestionsError( e );
	}
}

export function* getOfflinePaymentGateways() {
	yield getRegisteredPaymentGateways();
}
