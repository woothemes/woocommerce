/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import {
	getPaymentProvidersSuccess,
	getPaymentProvidersError,
	getPaymentProvidersRequest,
} from './actions';
import { PaymentProvidersResponse } from './types';
import { WC_ADMIN_NAMESPACE } from '../constants';

export function* getPaymentProviders( country?: string ) {
	yield getPaymentProvidersRequest();

	try {
		const paymentProvidersResponse: PaymentProvidersResponse =
			yield apiFetch( {
				path:
					WC_ADMIN_NAMESPACE +
					'/settings/payments/providers?' +
					( country ? `location=${ country }` : '' ),
			} );
		yield getPaymentProvidersSuccess(
			paymentProvidersResponse.providers,
			paymentProvidersResponse.offline_payment_methods,
			paymentProvidersResponse.suggestions,
			paymentProvidersResponse.suggestion_categories
		);
	} catch ( e ) {
		yield getPaymentProvidersError( e );
	}
}

export function* getOfflinePaymentGateways( country?: string ) {
	yield getPaymentProviders( country );
}
