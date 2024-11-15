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
	return state.offline_gateways;
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

export function isFetchingPaymentGatewaySuggestions(
	state: PaymentGatewaySuggestionsState
): boolean {
	return state.isFetching || false;
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
	isFetchingPaymentGatewaySuggestions: WPDataSelector<
		typeof isFetchingPaymentGatewaySuggestions
	>;
} & WPDataSelectors;
