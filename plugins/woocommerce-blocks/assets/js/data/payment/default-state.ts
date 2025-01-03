/**
 * External dependencies
 */
import type { EmptyObjectType, PaymentResult } from '@woocommerce/types';
import { getSetting } from '@woocommerce/settings';
import {
	PlainPaymentMethods,
	PlainExpressPaymentMethods,
} from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { SavedPaymentMethod } from './types';
import { STATUS as PAYMENT_STATUS } from './constants';

function getDefaultPaymentMethod() {
	const defaultPaymentMethod = getSetting< SavedPaymentMethod | string >(
		'defaultPaymentMethod',
		''
	);
	if ( ! defaultPaymentMethod ) {
		return '';
	}

	// defaultPaymentMethod is a string if a regular payment method is set.
	if ( typeof defaultPaymentMethod === 'string' ) {
		return defaultPaymentMethod;
	}

	// defaultPaymentMethod is a SavedPaymentMethod object if a saved payment method is returned.
	if (
		defaultPaymentMethod?.method?.gateway &&
		defaultPaymentMethod?.tokenId
	) {
		return defaultPaymentMethod.method.gateway;
	}

	return '';
}

function getDefaultPaymentMethodData() {
	const defaultPaymentMethod = getSetting< SavedPaymentMethod | string >(
		'defaultPaymentMethod',
		''
	);

	const defaultPaymentMethodToken = getSetting< string >(
		'defaultPaymentMethodToken',
		''
	);

	if ( ! defaultPaymentMethodToken || ! defaultPaymentMethod ) {
		return {};
	}

	if ( defaultPaymentMethodToken ) {
		return { token: defaultPaymentMethodToken };
	}

	// default payment method data is only needed for a saved payment method.
	if (
		typeof defaultPaymentMethod !== 'string' &&
		defaultPaymentMethod?.tokenId
	) {
		return { token: defaultPaymentMethod.tokenId.toString() };
	}

	return {};
}

export interface PaymentState {
	status: string;
	activePaymentMethod: string;
	// Available payment methods are payment methods which have been validated and can make payment.
	availablePaymentMethods: PlainPaymentMethods;
	availableExpressPaymentMethods: PlainExpressPaymentMethods;
	savedPaymentMethods:
		| Record< string, SavedPaymentMethod[] >
		| EmptyObjectType;
	paymentMethodData: Record< string, unknown >;
	paymentResult: PaymentResult | null;
	paymentMethodsInitialized: boolean;
	expressPaymentMethodsInitialized: boolean;
	shouldSavePaymentMethod: boolean;
}

export const defaultPaymentState: PaymentState = {
	status: PAYMENT_STATUS.IDLE,
	activePaymentMethod: getDefaultPaymentMethod(),
	availablePaymentMethods: {},
	availableExpressPaymentMethods: {},
	savedPaymentMethods: getSetting<
		Record< string, SavedPaymentMethod[] > | EmptyObjectType
	>( 'customerPaymentMethods', {} ),
	paymentMethodData: getDefaultPaymentMethodData(),
	paymentResult: null,
	paymentMethodsInitialized: false,
	expressPaymentMethodsInitialized: false,
	shouldSavePaymentMethod: false,
};
