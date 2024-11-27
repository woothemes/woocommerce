/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import {
	PaymentProvider,
	OfflinePaymentGateway,
	SuggestedPaymentExtension,
	SuggestedPaymentExtensionCategory,
	EnableGatewayResponse,
} from './types';
import { parseOrdering } from './utils';
import { WC_ADMIN_NAMESPACE } from '../constants';

export function getPaymentProvidersRequest(): {
	type: ACTION_TYPES.GET_PAYMENT_PROVIDERS_REQUEST;
} {
	return {
		type: ACTION_TYPES.GET_PAYMENT_PROVIDERS_REQUEST,
	};
}

export function getPaymentProvidersSuccess(
	providers: PaymentProvider[],
	offlinePaymentGateways: OfflinePaymentGateway[],
	suggestions: SuggestedPaymentExtension[],
	suggestionCategories: SuggestedPaymentExtensionCategory[]
): {
	type: ACTION_TYPES.GET_PAYMENT_PROVIDERS_SUCCESS;
	providers: PaymentProvider[];
	offlinePaymentGateways: OfflinePaymentGateway[];
	suggestions: SuggestedPaymentExtension[];
	suggestionCategories: SuggestedPaymentExtensionCategory[];
} {
	// In the future, this would not be necessary once backend sorting is implemented.
	let sortedOfflinePaymentGateways = offlinePaymentGateways;
	const offlinePaymentGatewaysOrdering = localStorage.getItem(
		'wc_payment_ordering_offline'
	);

	if ( offlinePaymentGatewaysOrdering ) {
		try {
			const ordering = JSON.parse( offlinePaymentGatewaysOrdering );
			const sorted = [ ...sortedOfflinePaymentGateways ].sort(
				( a, b ) => ordering[ a.id ] - ordering[ b.id ]
			);
			sortedOfflinePaymentGateways = sorted;
		} catch ( error ) {}
	}

	return {
		type: ACTION_TYPES.GET_PAYMENT_PROVIDERS_SUCCESS,
		providers,
		offlinePaymentGateways: sortedOfflinePaymentGateways,
		suggestions,
		suggestionCategories,
	};
}

export function getPaymentProvidersError( error: unknown ): {
	type: ACTION_TYPES.GET_PAYMENT_PROVIDERS_ERROR;
	error: unknown;
} {
	return {
		type: ACTION_TYPES.GET_PAYMENT_PROVIDERS_ERROR,
		error,
	};
}

export function* togglePaymentGateway(
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

export function* hideGatewaySuggestion( gatewayId: string ) {
	try {
		// Use apiFetch for the AJAX request
		const result: { success: boolean } = yield apiFetch( {
			path:
				WC_ADMIN_NAMESPACE +
				'/settings/payments/suggestion/' +
				gatewayId +
				'/hide',
			method: 'POST',
		} );

		return result;
	} catch ( error ) {
		throw error;
	}
}

export function updateOfflinePaymentGatewayOrdering(
	offlinePaymentGateways: OfflinePaymentGateway[]
): {
	type: ACTION_TYPES.UPDATE_OFFLINE_PAYMENT_GATEWAY_ORDERING;
	offlinePaymentGateways: OfflinePaymentGateway[];
} {
	// Temporary until backend is ready.
	localStorage.setItem(
		'wc_payment_ordering_offline',
		JSON.stringify( parseOrdering( offlinePaymentGateways ) )
	);

	return {
		type: ACTION_TYPES.UPDATE_OFFLINE_PAYMENT_GATEWAY_ORDERING,
		offlinePaymentGateways,
	};
}

export type Actions =
	| ReturnType< typeof getPaymentProvidersRequest >
	| ReturnType< typeof getPaymentProvidersSuccess >
	| ReturnType< typeof getPaymentProvidersError >
	| ReturnType< typeof togglePaymentGateway >
	| ReturnType< typeof hideGatewaySuggestion >
	| ReturnType< typeof updateOfflinePaymentGatewayOrdering >;
