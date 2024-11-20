/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import {
	RegisteredPaymentGateway,
	OfflinePaymentGateway,
	SuggestedPaymentExtension,
	SuggestedPaymentExtensionCategory,
	EnableGatewayResponse,
} from './types';

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

export function* enablePaymentGateway(
	gatewayId: string,
	ajaxUrl: string,
	gatewayToggleNonce: string
) {
	try {
		// Use apiFetch for the AJAX request
		const result: EnableGatewayResponse = yield apiFetch( {
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

		return result;
	} catch ( error ) {
		throw error;
	}
}

export type Actions =
	| ReturnType< typeof getPaymentGatewaySuggestionsRequest >
	| ReturnType< typeof getPaymentGatewaySuggestionsSuccess >
	| ReturnType< typeof getPaymentGatewaySuggestionsError >
	| ReturnType< typeof enablePaymentGateway >;
