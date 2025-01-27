/**
 * External dependencies
 */
import { store } from '@woocommerce/interactivity';
import type { store as StoreType } from '@wordpress/interactivity'; // Todo: remove once we import from `@wordpress/interactivity`.

export interface Store {
	state: {
		restUrl: string;
		nonce: string;
		cart: {
			items: {
				key?: string;
				id: number;
				quantity: number;
			}[];
		};
	};
	actions: {
		addToCart: ( id: number, quantity: number ) => void;
		refreshCart: () => void;
	};
}

type StoreAPIError = { message: string; code: string };
type CartResponse = Store[ 'state' ][ 'cart' ] | StoreAPIError;

function isSuccessfulCartResponse(
	res: Response,
	json: CartResponse
): json is Store[ 'state' ][ 'cart' ] {
	return res.status.toString().startsWith( '2' );
}

function generateError( json: StoreAPIError ) {
	return Object.assign( new Error( json.message || 'Unknown error.' ), {
		code: json.code || 'unknown_error',
	} );
}

let pendingRefresh = false;

// Todo: Remove the type cast once we import from `@wordpress/interactivity`.
export const { state, actions } = ( store as typeof StoreType )< Store >(
	'woocommerce',
	{
		actions: {
			// Question: Should we name this `addCartItem` to match the Store API naming?
			// Question: Should we use regular arguments or wrap them in an object?
			*addToCart( id, quantity ) {
				let item = state.cart.items.find(
					( { id: productId } ) => id === productId
				);
				const endpoint = item ? 'update-item' : 'add-item';
				const previousQuantity = item?.quantity || 0;

				// Optimistically updates the number of items in the cart.
				if ( item ) {
					item.quantity = quantity;
				} else {
					item = { id, quantity };
					state.cart.items.push( item );
				}

				// Updates the database.
				try {
					const res: Response = yield fetch(
						`${ state.restUrl }wc/store/v1/cart/${ endpoint }`,
						{
							method: 'POST',
							headers: {
								Nonce: state.nonce,
								'Content-Type': 'application/json',
							},
							body: JSON.stringify( item ),
						}
					);
					const json: CartResponse = yield res.json();

					// Checks if the response contains an error.
					if ( ! isSuccessfulCartResponse( res, json ) )
						throw generateError( json );

					// Updates the local cart.
					state.cart = json;
				} catch ( error ) {
					// Todo: Handle error using the new Store Notices block.
					// const { actions } = store('woocommerce/store-notices');
					// actions.addNotice(...);

					// Reverts the optimistic update.
					item.quantity = previousQuantity;
				}
			},
			// Question: Is `refreshCart` the best name for this action?
			*refreshCart() {
				// Skips if there's a pending request.
				if ( pendingRefresh ) return;

				pendingRefresh = true;

				try {
					const res: Response = yield fetch(
						`${ state.restUrl }wc/store/v1/cart`,
						{ headers: { 'Content-Type': 'application/json' } }
					);
					const json: CartResponse = yield res.json();

					// Checks if the response contains an error.
					if ( ! isSuccessfulCartResponse( res, json ) )
						throw generateError( json );

					// Updates the local cart.
					state.cart = json;
				} catch ( error ) {
					// Question: what should we do if this fails? Should we retry? Inform the user?
					// eslint-disable-next-line no-console
					console.error( error );
				} finally {
					pendingRefresh = false;
				}
			},
		},
	}
);
