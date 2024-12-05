/**
 * External dependencies
 */
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import fastDeepEqual from 'fast-deep-equal/es6';
import { useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { snakeCaseKeys } from '@woocommerce/base-utils';

const schema = new Ajv( {
	allErrors: true,
	$data: true,
} );

addFormats( schema );
addErrors( schema );

const useValidationContext = () => {
	const currentResults = useRef();

	const cart = useSelect( ( select ) => {
		const cartData = select( 'wc/store/cart' ).getCartData();
		const {
			coupons,
			shippingRates,
			shippingAddress,
			billingAddress,
			items,
			itemsCount,
			needsPayment,
			needsShipping,
			totals,
		} = cartData;
		return {
			coupons,
			shippingRates,
			shippingAddress,
			billingAddress,
			items,
			itemsCount,
			needsPayment,
			needsShipping,
			totals,
		};
	} );

	const checkout = useSelect( ( select ) => {
		const store = select( 'wc/store/checkout' );
		const {
			getCustomerId,
			getOrderId,
			getOrderNotes,
			getUseShippingAsBilling,
			getEditingBillingAddress,
			getEditingShippingAddress,
			getExtensionData,
			getShouldCreateAccount,
			getAdditionalFields,
			prefersCollection,
		} = store;
		return {
			customerId: getCustomerId(),
			orderId: getOrderId(),
			orderNotes: getOrderNotes(),
			useShippingAsBilling: getUseShippingAsBilling(),
			editingBillingAddress: getEditingBillingAddress(),
			editingShippingAddress: getEditingShippingAddress(),
			extensionData: getExtensionData(),
			shouldCreateAccount: getShouldCreateAccount(),
			additionalFields: getAdditionalFields(),
			prefersCollection: prefersCollection(),
		};
	} );

	const payment = useSelect( ( select ) => {
		const store = select( 'wc/store/payment' );
		const {
			getActivePaymentMethod,
			getAvailablePaymentMethods,
			getAvailableExpressPaymentMethods,
			getShouldSavePaymentMethod,
		} = store;
		return {
			activePaymentMethod: getActivePaymentMethod(),
			availablePaymentMethods: getAvailablePaymentMethods(),
			availableExpressPaymentMethods: getAvailableExpressPaymentMethods(),
			shouldSavePaymentMethod: getShouldSavePaymentMethod(),
		};
	} );

	const data = {
		cart: snakeCaseKeys( cart ),
		checkout: snakeCaseKeys( checkout ),
		payment: snakeCaseKeys( payment ),
	};

	if (
		! currentResults.current ||
		! fastDeepEqual( currentResults.current, data )
	) {
		currentResults.current = data;
	}

	return currentResults.current;
};

export { useValidationContext, schema };
