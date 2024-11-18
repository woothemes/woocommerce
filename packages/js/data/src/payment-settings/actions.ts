/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import { PaymentSettingsState, OfflinePaymentGateway } from './types';

export function getPaymentGatewaySuggestionsRequest(): {
	type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_REQUEST;
} {
	return {
		type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_REQUEST,
	};
}

export function getPaymentGatewaySuggestionsSuccess(
	paymentGatewaySuggestions: PaymentSettingsState
): {
	type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_SUCCESS;
	paymentGatewaySuggestions: PaymentSettingsState;
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

export function enablePaymentGatewayRequest( gatewayId: string ): {
	type: ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_REQUEST;
	gatewayId: string;
} {
	return {
		type: ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_REQUEST,
		gatewayId,
	};
}

export function enablePaymentGatewaySuccess(
	gatewayId: string,
	isOffline: boolean
): {
	type: ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_SUCCESS;
	gatewayId: string;
	isOffline: boolean;
} {
	return {
		type: ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_SUCCESS,
		gatewayId,
		isOffline,
	};
}

export function enablePaymentGatewayError(
	gatewayId: string,
	error: unknown
): {
	type: ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_ERROR;
	gatewayId: string;
	error: unknown;
} {
	return {
		type: ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_ERROR,
		gatewayId,
		error,
	};
}

export function* enablePaymentGateway(
	gatewayId: string,
	isOffline: boolean,
	ajaxUrl: string,
	gatewayToggleNonce: string
) {
	// Dispatch the request action
	yield enablePaymentGatewayRequest( gatewayId );

	try {
		// Use apiFetch for the AJAX request
		yield apiFetch( {
			url: ajaxUrl,
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams( {
				action: 'woocommerce_toggle_gateway_enabled',
				security: gatewayToggleNonce,
				gateway_id: gatewayId,
			} ),
		} );

		// Dispatch the success action
		yield enablePaymentGatewaySuccess( gatewayId, isOffline );
	} catch ( error ) {
		// Dispatch the error action
		yield enablePaymentGatewayError( gatewayId, error );
	}
}

export type Actions =
	| ReturnType< typeof getPaymentGatewaySuggestionsRequest >
	| ReturnType< typeof getPaymentGatewaySuggestionsSuccess >
	| ReturnType< typeof getPaymentGatewaySuggestionsError >
	| ReturnType< typeof getOfflinePaymentGatewaysRequest >
	| ReturnType< typeof getOfflinePaymentGatewaysSuccess >
	| ReturnType< typeof getOfflinePaymentGatewaysError >
	| ReturnType< typeof enablePaymentGatewayRequest >
	| ReturnType< typeof enablePaymentGatewaySuccess >
	| ReturnType< typeof enablePaymentGatewayError >
	| ReturnType< typeof enablePaymentGateway >;
