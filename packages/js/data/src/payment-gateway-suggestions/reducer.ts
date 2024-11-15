/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import { PaymentGatewaySuggestionsState } from './types';
import { Actions } from './actions';

function updatePaymentGatewayList(
	state: PaymentGatewaySuggestionsState,
	gatewayId: string,
	isOffline: boolean,
	success: boolean,
	data: unknown
): PaymentGatewaySuggestionsState {
	if ( ! success ) {
		return {
			...state,
			isUpdating: {
				...state.isUpdating,
				[ gatewayId ]: false, // Set the specific gateway's updating status to true
			},
		};
	}

	const neededArray = isOffline ? 'offline_payment_methods' : 'gateways';
	const targetIndex = state[ neededArray ].findIndex(
		( gateway ) => gateway.id === gatewayId
	);

	const shouldRedirect = success && data === 'needs_setup';

	const paymentGateway = {
		...state[ neededArray ][ targetIndex ],
		state: {
			...state[ neededArray ][ targetIndex ].state,
			enabled: true,
		},
	};

	return {
		...state,
		[ neededArray ]: [
			...state[ neededArray ].slice( 0, targetIndex ),
			paymentGateway,
			...state[ neededArray ].slice( targetIndex + 1 ),
		],
		shouldRedirect: {
			...state.shouldRedirect,
			[ gatewayId ]: shouldRedirect,
		},
		isUpdating: {
			...state.isUpdating,
			[ gatewayId ]: false, // Set the specific gateway's updating status to true
		},
	};
}

const reducer = (
	state: PaymentGatewaySuggestionsState = {
		gateways: [],
		offline_payment_methods: [],
		preferred_suggestions: [],
		other_suggestions: [],
		suggestion_categories: [],
		isFetching: false,
		isUpdating: {},
		shouldRedirect: {},
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
			case ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_REQUEST:
				return {
					...state,
					isUpdating: {
						...state.isUpdating,
						[ payload.gatewayId ]: true,
					},
				};
			case ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_SUCCESS:
				return updatePaymentGatewayList(
					state,
					payload.gatewayId,
					payload.isOffline,
					payload.success,
					payload.data
				);
			case ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_ERROR:
				return {
					...state,
					isUpdating: {
						...state.isUpdating,
						[ payload.gatewayId ]: false, // Set the specific gateway's updating status to true
					},
					shouldRedirect: {
						...state.shouldRedirect,
						[ payload.gatewayId ]: true,
					},
					errors: {
						...state.errors,
						enablePaymentGateway: payload.error,
					},
				};
		}
	}
	return state;
};

export default reducer;
