/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import { PaymentGatewaySuggestionsState } from './types';
import { Actions } from './actions';

const reducer = (
	state: PaymentGatewaySuggestionsState = {
		gateways: [],
		offline_payment_methods: [],
		preferred_suggestions: [],
		other_suggestions: [],
		suggestion_categories: [],
		isFetching: false,
		errors: {},
	},
	payload?: Actions
): PaymentGatewaySuggestionsState => {
	if ( payload && 'type' in payload ) {
		switch ( payload.type ) {
			case ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_REQUEST:
			case ACTION_TYPES.GET_OFFLINE_PAYMENT_GATEWAYS_REQUEST:
				return {
					...state,
					isFetching: true,
				};
			case ACTION_TYPES.GET_OFFLINE_PAYMENT_GATEWAYS_SUCCESS:
				return {
					...state,
					isFetching: false,
					offline_payment_methods: payload.offlineGateways,
				};
			case ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_SUCCESS:
				return {
					...state,
					isFetching: false,
					gateways: payload.paymentGatewaySuggestions.gateways,
					preferred_suggestions:
						payload.paymentGatewaySuggestions.preferred_suggestions,
					other_suggestions:
						payload.paymentGatewaySuggestions.other_suggestions,
					suggestion_categories:
						payload.paymentGatewaySuggestions.suggestion_categories,
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
			case ACTION_TYPES.GET_OFFLINE_PAYMENT_GATEWAYS_ERROR:
				return {
					...state,
					isFetching: false,
					errors: {
						...state.errors,
						offlineGateways: payload.error,
					},
				};
		}
	}
	return state;
};

export default reducer;
