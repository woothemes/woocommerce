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

export function getRegisteredPaymentGateways(
	state: PaymentSettingsState
): Array< RegisteredPaymentGateway > {
	return state.registeredPaymentGateways;
}

export function getOfflinePaymentGateways(
	state: PaymentSettingsState
): Array< OfflinePaymentGateway > {
	return state.offlinePaymentGateways;
}

export function getPreferredExtensionSuggestions(
	state: PaymentSettingsState
): Array< SuggestedPaymentExtension > {
	return state.preferredExtensionSuggestions;
}

export function getOtherExtensionSuggestions(
	state: PaymentSettingsState
): Array< SuggestedPaymentExtension > {
	return state.otherExtensionSuggestions;
}

export function isFetching( state: PaymentSettingsState ): boolean {
	return state.isFetching || false;
}

export function isGatewayUpdating(
	state: PaymentSettingsState,
	gatewayId: string
): boolean {
	return state.isGatewayUpdating[ gatewayId ] || false;
}

export function shouldRedirect(
	state: PaymentSettingsState,
	gatewayId: string
): boolean {
	return state.shouldRedirect[ gatewayId ] || false;
}

export type PaymentSettingsSelectors = {
	getRegisteredPaymentGateways: WPDataSelector<
		typeof getRegisteredPaymentGateways
	>;
	getOfflinePaymentGateways: WPDataSelector<
		typeof getOfflinePaymentGateways
	>;
	getPreferredExtensionSuggestions: WPDataSelector<
		typeof getPreferredExtensionSuggestions
	>;
	getOtherExtensionSuggestions: WPDataSelector<
		typeof getOtherExtensionSuggestions
	>;
	isFetching: WPDataSelector< typeof isFetching >;
	isGatewayUpdating: WPDataSelector< typeof isGatewayUpdating >;
	shouldRedirect: WPDataSelector< typeof shouldRedirect >;
} & WPDataSelectors;
