/**
 * External dependencies
 */
import { useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { snakeCaseKeys } from '@woocommerce/base-utils';
import type { CoreAddress, AdditionalValues } from '@woocommerce/settings';
import fastDeepEqual from 'fast-deep-equal/es6';
import {
	cartStore,
	checkoutStore,
	paymentStore,
} from '@woocommerce/block-data';

const useDocumentObject = ( formType: string ) => {
	const currentResults = useRef( {
		cart: {},
		checkout: {},
		customer: {},
	} );

	const data = useSelect(
		( select ) => {
			const cartDataStore = select( cartStore );
			const checkoutDataStore = select( checkoutStore );
			const paymentDataStore = select( paymentStore );
			const cartData = cartDataStore.getCartData();

			const {
				coupons,
				shippingRates,
				shippingAddress,
				billingAddress,
				items,
				needsPayment,
				needsShipping,
				totals,
			} = cartData;
			const documentObject = {
				cart: {
					coupons: coupons.map( ( coupon ) => coupon.code ),
					shippingRates: [
						...new Set(
							shippingRates
								.map( ( shippingPackage ) =>
									shippingPackage.shipping_rates.map(
										( rate ) => rate.rate_id
									)
								)
								.flat()
								.filter( Boolean )
						),
					],
					selectedShippingRates: [
						...new Set(
							shippingRates
								.map(
									( shippingPackage ) =>
										shippingPackage.shipping_rates.find(
											( rate ) => rate.selected
										)?.rate_id
								)
								.filter( Boolean )
						),
					],
					prefersCollection:
						typeof checkoutDataStore.prefersCollection() ===
						'boolean'
							? checkoutDataStore.prefersCollection()
							: false,
					items: items
						.map( ( item ) =>
							Array( item.quantity ).fill( item.id )
						)
						.flat(),
					itemsType: [
						...new Set( items.map( ( item ) => item.type ) ),
					],
					needsShipping,
					totals: totals.total_price,
					extensions: cartData.extensions,
				},
				checkout: {
					orderId: checkoutDataStore.getOrderId(),
					customerNote: checkoutDataStore.getOrderNotes(),
					additionalFields: checkoutDataStore.getAdditionalFields(),
					paymentMethod: paymentDataStore.getActivePaymentMethod(),
					availableGateways: Object.keys(
						paymentDataStore.getAvailablePaymentMethods()
					),
					needsPayment,
				},
				customer: {
					id: checkoutDataStore.getCustomerId(),
					guest: checkoutDataStore.getCustomerId() === 0,
					billingAddress,
					shippingAddress,
					...( formType === 'billing' || formType === 'shipping'
						? {
								address:
									formType === 'billing'
										? billingAddress
										: shippingAddress,
						  }
						: {} ),
				},
			};

			return {
				cart: snakeCaseKeys( documentObject.cart ),
				checkout: snakeCaseKeys( documentObject.checkout ),
				customer: snakeCaseKeys( documentObject.customer ),
			};
		},
		[ formType ]
	);

	if (
		! currentResults.current ||
		! fastDeepEqual( currentResults.current, data )
	) {
		currentResults.current = data;
	}

	return currentResults.current;
};

export const useSchemaParser = ( formType: string ) => {
	const data = useDocumentObject( formType );
	if ( window.schemaParser ) {
		return {
			parser: window.schemaParser,
			data,
		};
	}
	return {
		parser: null,
		data: null,
	};
};

export interface DocumentObject {
	cart: {
		coupons: string[];
		shippingRates: string[];
		selectedShippingRates: string[];
		prefersCollection: boolean;
		items: string[];
		itemsType: string[];
		needsShipping: boolean;
		totals: number;
		extensions: Record< string, object | object[] >;
	};
	checkout: {
		orderId: number;
		customerNote: string;
		additionalFields: AdditionalValues;
		paymentMethod: string;
		availableGateways: string[];
		needsPayment: boolean;
	};
	customer: {
		id: number;
		guest: boolean;
		billingAddress: CoreAddress;
		shippingAddress: CoreAddress;
		address: CoreAddress;
	};
}
