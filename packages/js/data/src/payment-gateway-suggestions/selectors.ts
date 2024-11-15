/**
 * Internal dependencies
 */
import {
	RegisteredPaymentGateway,
	OfflinePaymentGateway,
	PaymentGatewaySuggestionsState,
	SuggestedPaymentExtension,
} from './types';
import { WPDataSelector, WPDataSelectors } from '../types';

export function getPaymentGateways(
	state: PaymentGatewaySuggestionsState
): Array< RegisteredPaymentGateway > {
	return state.gateways;
}

export function getOfflinePaymentGateways(
	state: PaymentGatewaySuggestionsState
): Array< OfflinePaymentGateway > {
	return state.offline_payment_methods;
}

export function getPreferredPluginSuggestions(
	state: PaymentGatewaySuggestionsState
): Array< SuggestedPaymentExtension > {
	return state.preferred_suggestions;
}

export function getOtherPluginSuggestions(
	state: PaymentGatewaySuggestionsState
): Array< SuggestedPaymentExtension > {
	return state.other_suggestions;
}

export function isFetching( state: PaymentGatewaySuggestionsState ): boolean {
	return state.isFetching || false;
}

export function isUpdating(
	state: PaymentGatewaySuggestionsState,
	gatewayId: string
): boolean {
	return state.isUpdating[ gatewayId ] || false;
}

export function shouldRedirect(
	state: PaymentGatewaySuggestionsState,
	gatewayId: string
): boolean {
	return state.shouldRedirect[ gatewayId ] || false;
}

export type PaymentGatewaySuggestionsSelectors = {
	getPaymentGateways: WPDataSelector< typeof getPaymentGateways >;
	getOfflinePaymentGateways: WPDataSelector<
		typeof getOfflinePaymentGateways
	>;
	getPreferredPluginSuggestions: WPDataSelector<
		typeof getPreferredPluginSuggestions
	>;
	getOtherPluginSuggestions: WPDataSelector<
		typeof getOtherPluginSuggestions
	>;
	isFetching: WPDataSelector< typeof isFetching >;
	isUpdating: WPDataSelector< typeof isUpdating >;
	shouldRedirect: WPDataSelector< typeof shouldRedirect >;
} & WPDataSelectors;
