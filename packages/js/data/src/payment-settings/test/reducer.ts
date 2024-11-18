/**
 * @jest-environment node
 */

/**
 * Internal dependencies
 */
import reducer from '../reducer';
import { PaymentSettingsState } from '../types';
import { ACTION_TYPES } from '../action-types';
import {
	registeredPaymentGatewaysStub,
	offlinePaymentGatewaysStub,
	preferredExtensionSuggestionsStub,
	otherExtensionSuggestionsStub,
	suggestionCategoriesStub,
} from '../test-helpers/stub';

const defaultState: PaymentSettingsState = {
	registeredPaymentGateways: [],
	offlinePaymentGateways: [],
	preferredExtensionSuggestions: [],
	otherExtensionSuggestions: [],
	suggestionCategories: [],
	isFetching: false,
	isGatewayUpdating: {},
	shouldRedirect: {},
	errors: {},
};

const restApiError = {
	code: 'error code',
	message: 'error message',
};

describe( 'payment settings reducer', () => {
	it( 'should return a default state', () => {
		const state = reducer( undefined );
		expect( state ).toEqual( defaultState );
		expect( state ).not.toBe( defaultState );
	} );

	it( 'should handle GET_PAYMENT_GATEWAY_SUGGESTIONS_REQUEST', () => {
		const state = reducer( defaultState, {
			type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_REQUEST,
		} );

		expect( state.isFetching ).toBe( true );
	} );

	it( 'should handle GET_PAYMENT_GATEWAY_SUGGESTIONS_ERROR', () => {
		const state = reducer( defaultState, {
			type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_ERROR,
			error: restApiError,
		} );

		expect( state.errors.getPaymentGatewaySuggestions ).toBe(
			restApiError
		);
	} );

	it( 'should handle GET_PAYMENT_GATEWAY_SUGGESTIONS_SUCCESS', () => {
		const state = reducer( defaultState, {
			type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUGGESTIONS_SUCCESS,
			registeredPaymentGateways: registeredPaymentGatewaysStub,
			offlinePaymentGateways: offlinePaymentGatewaysStub,
			preferredExtensionSuggestions: preferredExtensionSuggestionsStub,
			otherExtensionSuggestions: otherExtensionSuggestionsStub,
			suggestionCategories: suggestionCategoriesStub,
		} );

		expect( state.registeredPaymentGateways ).toHaveLength( 1 );
		expect( state.registeredPaymentGateways ).toBe(
			registeredPaymentGatewaysStub
		);

		expect( state.offlinePaymentGateways ).toHaveLength( 3 );
		expect( state.offlinePaymentGateways ).toBe(
			offlinePaymentGatewaysStub
		);

		expect( state.preferredExtensionSuggestions ).toHaveLength( 1 );
		expect( state.preferredExtensionSuggestions ).toBe(
			preferredExtensionSuggestionsStub
		);

		expect( state.otherExtensionSuggestions ).toHaveLength( 2 );
		expect( state.otherExtensionSuggestions ).toBe(
			otherExtensionSuggestionsStub
		);

		expect( state.suggestionCategories ).toHaveLength( 3 );
		expect( state.suggestionCategories ).toBe( suggestionCategoriesStub );
	} );

	it( 'should handle ENABLE_PAYMENT_GATEWAY_REQUEST', () => {
		const state = reducer( defaultState, {
			type: ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_REQUEST,
			gatewayId: 'woocommerce_payments',
		} );

		expect( state.isGatewayUpdating ).toBe( true );
	} );

	it( 'should handle ENABLE_PAYMENT_GATEWAY_ERROR', () => {
		const state = reducer( defaultState, {
			type: ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_ERROR,
			gatewayId: 'woocommerce_payments',
			error: restApiError,
		} );

		expect( state.errors.enablePaymentGateway ).toBe( restApiError );
	} );

	it( 'should handle ENABLE_PAYMENT_GATEWAY_SUCCESS', () => {
		const state = reducer( defaultState, {
			type: ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_SUCCESS,
			gatewayId: 'woocommerce_payments',
			isOffline: false,
		} );

		expect( state.errors.enablePaymentGateway ).toBe( restApiError );
	} );

	it( 'should replace an existing payment gateway on ENABLE_PAYMENT_GATEWAY_SUCCESS', () => {
		const state = reducer(
			{
				...defaultState,
				registeredPaymentGateways: registeredPaymentGatewaysStub,
			},
			{
				type: ACTION_TYPES.ENABLE_PAYMENT_GATEWAY_SUCCESS,
				gatewayId: 'woocommerce_payments',
				isOffline: false,
			}
		);

		expect( state.registeredPaymentGateways[ 0 ].state.enabled ).toBe(
			false
		);
	} );
} );
