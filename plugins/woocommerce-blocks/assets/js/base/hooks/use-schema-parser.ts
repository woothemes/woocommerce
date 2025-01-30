/**
 * External dependencies
 */
import { useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { snakeCaseKeys } from '@woocommerce/base-utils';
import fastDeepEqual from 'fast-deep-equal/es6';
import {
	cartStore,
	checkoutStore,
	paymentStore,
} from '@woocommerce/block-data';

const useDocumentObject = ( address: 'billing' | 'shipping' = 'shipping' ) => {
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
					address:
						address === 'billing'
							? billingAddress
							: shippingAddress,
				},
			};

			return {
				cart: snakeCaseKeys( documentObject.cart ),
				checkout: snakeCaseKeys( documentObject.checkout ),
				customer: snakeCaseKeys( documentObject.customer ),
			};
		},
		[ address ]
	);

	if (
		! currentResults.current ||
		! fastDeepEqual( currentResults.current, data )
	) {
		currentResults.current = data;
	}

	return currentResults.current;
};

export const useSchemaParser = (
	address: 'billing' | 'shipping' = 'shipping'
) => {
	const data = useDocumentObject( address );
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
