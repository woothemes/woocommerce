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
} );
