/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import {
	RegisteredPaymentGateway,
	OfflinePaymentGateway,
	SuggestedPaymentExtension,
	SuggestedPaymentExtensionCategory,
} from './types';
import { STORE_NAME } from '../settings/constants';

export function getPaymentGatewaySuggestionsRequest(): {
	type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_REQUEST;
} {
	return {
		type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_REQUEST,
	};
}

export function getPaymentGatewaySuggestionsSuccess(
	registeredPaymentGateways: RegisteredPaymentGateway[],
	offlinePaymentGateways: OfflinePaymentGateway[],
	preferredExtensionSuggestions: SuggestedPaymentExtension[],
	otherExtensionSuggestions: SuggestedPaymentExtension[],
	suggestionCategories: SuggestedPaymentExtensionCategory[]
): {
	type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_SUCCESS;
	registeredPaymentGateways: RegisteredPaymentGateway[];
	offlinePaymentGateways: OfflinePaymentGateway[];
	preferredExtensionSuggestions: SuggestedPaymentExtension[];
	otherExtensionSuggestions: SuggestedPaymentExtension[];
	suggestionCategories: SuggestedPaymentExtensionCategory[];
} {
	return {
		type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_SUCCESS,
		registeredPaymentGateways,
		offlinePaymentGateways,
		preferredExtensionSuggestions,
		otherExtensionSuggestions,
		suggestionCategories,
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
	} finally {
		yield dispatch( STORE_NAME ).invalidateResolution(
			'getRegisteredPaymentGateways'
		);
	}
}

export type Actions =
	| ReturnType< typeof getPaymentGatewaySuggestionsRequest >
	| ReturnType< typeof getPaymentGatewaySuggestionsSuccess >
	| ReturnType< typeof getPaymentGatewaySuggestionsError >
	| ReturnType< typeof enablePaymentGatewayRequest >
	| ReturnType< typeof enablePaymentGatewaySuccess >
	| ReturnType< typeof enablePaymentGatewayError >
	| ReturnType< typeof enablePaymentGateway >;
