/**
 * Internal dependencies
 */
import {
	RegisteredPaymentGateway,
	OfflinePaymentGateway,
	PaymentSettingsState,
	SuggestedPaymentExtension,
} from './types';
import { WPDataSelector, WPDataSelectors } from '../types';

export function getPaymentGateways(
	state: PaymentSettingsState
): Array< RegisteredPaymentGateway > {
	return state.gateways;
}

export function getOfflinePaymentGateways(
	state: PaymentSettingsState
): Array< OfflinePaymentGateway > {
	return state.offline_payment_methods;
}

export function getPreferredPluginSuggestions(
	state: PaymentSettingsState
): Array< SuggestedPaymentExtension > {
	return state.preferred_suggestions;
}

export function getOtherPluginSuggestions(
	state: PaymentSettingsState
): Array< SuggestedPaymentExtension > {
	return state.other_suggestions;
}

export function isFetching( state: PaymentSettingsState ): boolean {
	return state.isFetching || false;
}

export function isUpdating(
	state: PaymentSettingsState,
	gatewayId: string
): boolean {
	return state.isUpdating[ gatewayId ] || false;
}

export function shouldRedirect(
	state: PaymentSettingsState,
	gatewayId: string
): boolean {
	return state.shouldRedirect[ gatewayId ] || false;
}

export type PaymentSettingsSelectors = {
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
