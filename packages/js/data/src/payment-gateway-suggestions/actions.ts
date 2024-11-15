/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import { PaymentGatewaySuggestionsState, OfflinePaymentGateway } from './types';

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

export function getOfflinePaymentGatewaysRequest(): {
	type: ACTION_TYPES.GET_OFFLINE_PAYMENT_GATEWAYS_REQUEST;
} {
	return {
		type: ACTION_TYPES.GET_OFFLINE_PAYMENT_GATEWAYS_REQUEST,
	};
}

export function getOfflinePaymentGatewaysSuccess(
	offlineGateways: OfflinePaymentGateway[]
): {
	type: ACTION_TYPES.GET_OFFLINE_PAYMENT_GATEWAYS_SUCCESS;
	offlineGateways: OfflinePaymentGateway[];
} {
	return {
		type: ACTION_TYPES.GET_OFFLINE_PAYMENT_GATEWAYS_SUCCESS,
		offlineGateways,
	};
}

export function getOfflinePaymentGatewaysError( error: unknown ): {
	type: ACTION_TYPES.GET_OFFLINE_PAYMENT_GATEWAYS_ERROR;
	error: unknown;
} {
	return {
		type: ACTION_TYPES.GET_OFFLINE_PAYMENT_GATEWAYS_ERROR,
		error,
	};
}

export type Actions =
	| ReturnType< typeof getPaymentGatewaySuggestionsRequest >
	| ReturnType< typeof getPaymentGatewaySuggestionsSuccess >
	| ReturnType< typeof getPaymentGatewaySuggestionsError >
	| ReturnType< typeof getOfflinePaymentGatewaysRequest >
	| ReturnType< typeof getOfflinePaymentGatewaysSuccess >
	| ReturnType< typeof getOfflinePaymentGatewaysError >;
