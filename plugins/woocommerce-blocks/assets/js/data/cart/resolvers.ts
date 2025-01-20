/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { CartResponse } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { CART_API_ERROR } from './constants';
import type { CartDispatchFromMap, CartResolveSelectFromMap } from './index';

/**
 * Resolver for retrieving all cart data.
 */
export const getCartData =
	() =>
	async ( { dispatch }: { dispatch: CartDispatchFromMap } ) => {
		const response = await apiFetch< Response >( {
			path: '/wc/store/v1/cart',
			method: 'GET',
			cache: 'no-store',
			parse: false,
		} );

		if (
			// @ts-expect-error setCartHash exists but is not typed
			typeof apiFetch.setCartHash === 'function'
		) {
			// @ts-expect-error setCartHash exists but is not typed
			apiFetch.setCartHash( response?.headers );
		}

		response
			.json()
			.then( function ( cartData: CartResponse ) {
				const { receiveCart, receiveError } = dispatch;

				if ( ! cartData ) {
					receiveError( CART_API_ERROR );
					return;
				}

				receiveCart( cartData );
			} )
			.catch( () => {
				const { receiveError } = dispatch;
				receiveError( CART_API_ERROR );
			} );
	};

/**
 * Resolver for retrieving cart totals.
 */
export const getCartTotals =
	() =>
	async ( {
		resolveSelect,
	}: {
		resolveSelect: CartResolveSelectFromMap;
	} ) => {
		await resolveSelect.getCartData();
	};
