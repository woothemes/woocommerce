/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import { PaymentGatewaySuggestionsState } from './types';
import { Actions } from './actions';

const reducer = (
	state: PaymentGatewaySuggestionsState = {
		gateways: [],
		offline_gateways: [],
		preferred_suggestions: [],
		other_suggestions: [],
		suggested_categories: [],
		isFetching: false,
		errors: {},
	},
	payload?: Actions
): PaymentGatewaySuggestionsState => {
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
					gateways: payload.paymentGatewaySuggestions.gateways,
					offline_gateways:
						payload.paymentGatewaySuggestions.offline_gateways,
					preferred_suggestions:
						payload.paymentGatewaySuggestions.preferred_suggestions,
					other_suggestions:
						payload.paymentGatewaySuggestions.other_suggestions,
					suggested_categories:
						payload.paymentGatewaySuggestions.suggested_categories,
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
