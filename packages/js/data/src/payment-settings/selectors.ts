/**
 * Internal dependencies
 */
import {
	PaymentProvider,
	OfflinePaymentGateway,
	PaymentSettingsState,
	SuggestedPaymentExtension,
	SuggestedPaymentExtensionCategory,
} from './types';
import { WPDataSelector, WPDataSelectors } from '../types';

export function getPaymentProviders(
	state: PaymentSettingsState
): Array< PaymentProvider > {
	return state.providers;
}

export function getOfflinePaymentGateways(
	state: PaymentSettingsState
): Array< OfflinePaymentGateway > {
	return state.offlinePaymentGateways;
}

export function getSuggestions(
	state: PaymentSettingsState
): Array< SuggestedPaymentExtension > {
	return state.suggestions;
}

export function getSuggestionCategories(
	state: PaymentSettingsState
): Array< SuggestedPaymentExtensionCategory > {
	return state.suggestionCategories;
}

export function isFetching( state: PaymentSettingsState ): boolean {
	return state.isFetching || false;
}

export type PaymentSettingsSelectors = {
	getPaymentProviders: WPDataSelector< typeof getPaymentProviders >;
	getOfflinePaymentGateways: WPDataSelector<
		typeof getOfflinePaymentGateways
	>;
	getSuggestions: WPDataSelector< typeof getSuggestions >;
	isFetching: WPDataSelector< typeof isFetching >;
} & WPDataSelectors;
