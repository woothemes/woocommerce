/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import { PaymentSettingsState } from './types';
import { Actions } from './actions';

const reducer = (
	state: PaymentSettingsState = {
		registeredPaymentGateways: [],
		offlinePaymentGateways: [],
		preferredExtensionSuggestions: [],
		otherExtensionSuggestions: [],
		suggestionCategories: [],
		isFetching: false,
		errors: {},
	},
	payload?: Actions
): PaymentSettingsState => {
	if ( payload && 'type' in payload ) {
		switch ( payload.type ) {
			case ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_REQUEST:
				return {
					...state,
					isFetching: true,
				};
			case ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_SUCCESS:
				return {
					...state,
					isFetching: false,
					registeredPaymentGateways:
						payload.registeredPaymentGateways,
					offlinePaymentGateways: payload.offlinePaymentGateways,
					preferredExtensionSuggestions:
						payload.preferredExtensionSuggestions,
					otherExtensionSuggestions:
						payload.otherExtensionSuggestions,
					suggestionCategories: payload.suggestionCategories,
				};
			case ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_ERROR:
				return {
					...state,
					isFetching: false,
					errors: {
						...state.errors,
						getPaymentGatewaySuggestions: payload.error,
					},
				};
		}
	}
	return state;
};

export default reducer;
