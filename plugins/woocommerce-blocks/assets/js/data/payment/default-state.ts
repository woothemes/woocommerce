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
import { checkoutData } from '../checkout/constants';

/**
 * Set the default payment method data. This can be in two places,
 * Either as part of the `defaultPaymentMethod` object or
 * as a token stored in `wcSettings`.
 */
function getDefaultPaymentMethodData() {
	const defaultPaymentMethod = getSetting< SavedPaymentMethod | string >(
		'defaultPaymentMethod',
		''
	);

	// Saved payment method token stored in wcSettings.
	const defaultPaymentMethodToken = getSetting< string >(
		'defaultPaymentMethodToken',
		''
	);

	if ( ! defaultPaymentMethodToken || ! defaultPaymentMethod ) {
		return {};
	}

	// If a token has been hydrated to wcSettings, use it.
	if ( defaultPaymentMethod && defaultPaymentMethodToken ) {
		const savedTokenKey = `wc-${ defaultPaymentMethod }-payment-token`;
		return {
			token: defaultPaymentMethodToken,
			payment_method: defaultPaymentMethod,
			[ savedTokenKey ]: defaultPaymentMethodToken,
			isSavedToken: true,
		};
	}

	// If the default payment method is a SavedPaymentMethod object,
	// find the token and set the payment method data.
	if (
		typeof defaultPaymentMethod !== 'string' &&
		defaultPaymentMethod?.tokenId
	) {
		const token = defaultPaymentMethod.tokenId.toString();
		const slug = defaultPaymentMethod.method.gateway;
		const savedTokenKey = `wc-${ slug }-payment-token`;
		return { token, payment_method: slug, [ savedTokenKey ]: token };
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
	activePaymentMethod: checkoutData?.payment_method ?? '',
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
