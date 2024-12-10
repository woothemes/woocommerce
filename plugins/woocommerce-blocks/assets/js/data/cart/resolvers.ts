/**
 * External dependencies
 */
import { CartResponse } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { apiFetchWithHeaders } from '../shared-controls';
import { CART_API_ERROR } from './constants';
import type { CartDispatchFromMap, CartResolveSelectFromMap } from './index';

/**
 * Resolver for retrieving all cart data.
 */
export const getCartData =
	() =>
	async ( { dispatch }: { dispatch: CartDispatchFromMap } ) => {
		const { response: cartData, headers } = await apiFetchWithHeaders< {
			response: CartResponse;
			headers: Record< string, string >;
		} >( {
			path: '/wc/store/v1/cart',
			method: 'GET',
			cache: 'no-store',
		} );

		const { receiveCart, receiveError } = dispatch;
		if ( ! cartData ) {
			receiveError( CART_API_ERROR );
			return;
		}
		receiveCart( cartData );
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
