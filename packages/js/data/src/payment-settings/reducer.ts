/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import { PaymentSettingsState } from './types';
import { Actions } from './actions';

function updatePaymentGatewayList(
	state: PaymentSettingsState,
	gatewayId: string,
	isOffline: boolean
): PaymentSettingsState {
	const neededArray = isOffline
		? 'offlinePaymentGateways'
		: 'registeredPaymentGateways';
	const targetIndex = state[ neededArray ].findIndex(
		( gateway ) => gateway.id === gatewayId
	);

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
			[ gatewayId ]: false,
		},
		isGatewayUpdating: {
			...state.isGatewayUpdating,
			[ gatewayId ]: false, // Set the specific gateway's updating status to true
		},
	};
}

const reducer = (
	state: PaymentSettingsState = {
		registeredPaymentGateways: [],
		offlinePaymentGateways: [],
		preferredExtensionSuggestions: [],
		otherExtensionSuggestions: [],
		suggestionCategories: [],
		isFetching: false,
		isGatewayUpdating: {},
		shouldRedirect: {},
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
			case ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_REQUEST:
				return {
					...state,
					isGatewayUpdating: {
						...state.isGatewayUpdating,
						[ payload.gatewayId ]: true,
					},
				};
			case ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_SUCCESS:
				return updatePaymentGatewayList(
					state,
					payload.gatewayId,
					payload.isOffline
				);
			case ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_ERROR:
				return {
					...state,
					isGatewayUpdating: {
						...state.isGatewayUpdating,
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
