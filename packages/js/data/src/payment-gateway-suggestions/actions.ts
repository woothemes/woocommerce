/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import { PaymentGatewaySuggestionsState } from './types';

export function getPaymentGatewaySuggestionsRequest(): {
	type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_REQUEST;
} {
	return {
		type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_REQUEST,
	};
}

export function getPaymentGatewaySuggestionsSuccess(
	paymentGatewaySuggestions: PaymentGatewaySuggestionsState
): {
	type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_SUCCESS;
	paymentGatewaySuggestions: PaymentGatewaySuggestionsState;
} {
	return {
		type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_SUCCESS,
		paymentGatewaySuggestions,
	};
}

export function getPaymentGatewaySuggestionsError( error: unknown ): {
	type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_ERROR;
	error: unknown;
} {
	return {
		type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_ERROR,
		error,
	};
}

export type Actions =
	| ReturnType< typeof getPaymentGatewaySuggestionsRequest >
	| ReturnType< typeof getPaymentGatewaySuggestionsSuccess >
	| ReturnType< typeof getPaymentGatewaySuggestionsError >;
