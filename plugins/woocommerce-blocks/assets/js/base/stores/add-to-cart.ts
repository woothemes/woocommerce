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

type CartResponse =
	| Store[ 'state' ][ 'cart' ]
	| { data: { status: number }; message: string; code: string };

function isSuccessfulCartResponse(
	json: CartResponse
): json is Store[ 'state' ][ 'cart' ] {
	return (
		! ( 'data' in json ) || json.data.status?.toString().startsWith( '2' )
	);
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
					const json: CartResponse = yield fetch(
						`${ state.restUrl }wc/store/v1/cart/${ endpoint }`,
						{
							method: 'POST',
							headers: {
								Nonce: state.nonce,
								'Content-Type': 'application/json',
							},
							body: JSON.stringify( item ),
						}
					).then( ( res ) => res.json() );

					// Checks if the response contains an error.
					if ( ! isSuccessfulCartResponse( json ) ) {
						throw Object.assign( new Error( json.message ), {
							code: json.code,
						} );
					}

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
					const json: CartResponse = yield fetch(
						`${ state.restUrl }wc/store/v1/cart`,
						{ headers: { 'Content-Type': 'application/json' } }
					).then( ( res ) => res.json() );

					// Checks if the response contains an error.
					if ( ! isSuccessfulCartResponse( json ) ) {
						throw Object.assign( new Error( json.message ), {
							code: json.code,
						} );
					}

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
