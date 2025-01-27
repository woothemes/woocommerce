/**
 * External dependencies
 */
import { store } from '@woocommerce/interactivity';
import type { store as StoreType } from '@wordpress/interactivity'; // Todo: remove once we import from `@wordpress/interactivity`.

type Item = {
	key?: string;
	id: number;
	quantity: number;
};

type ServerState = {
	state: {
		restUrl: string;
		nonce: string;
		cart: {
			items: Item[];
		};
	};
};

export type Store = ServerState & typeof woo;

type StoreAPIError = { message: string; code: string };
type CartItemResponse = Item | StoreAPIError;
type CartItemsResponse = Item[] | StoreAPIError;

function isSuccessfulResponse(
	res: Response,
	json: CartItemsResponse | CartItemResponse
): json is Item | Item[] {
	return res.status.toString().startsWith( '2' );
}

function generateError( json: StoreAPIError ) {
	return Object.assign( new Error( json.message || 'Unknown error.' ), {
		code: json.code || 'unknown_error',
	} );
}

let pendingRefresh = false;

// Todo: Remove the type cast once we import from `@wordpress/interactivity`.
// Question: disable "used before defined" lint rule?
export const { state, actions } = ( store as typeof StoreType )< Store >(
	'woocommerce',
	{} // Todo: Fix this type problem, we should not require an empty object here.
);

const woo = {
	actions: {
		*addCartItem( { id, quantity }: { id: number; quantity: number } ) {
			let itemIndex = state.cart.items.findIndex(
				( { id: productId } ) => id === productId
			);
			const previousQuantity =
				state.cart.items[ itemIndex ]?.quantity ?? 0;
			let key: string | null = null;

			// Optimistically updates the number of items in the cart.
			if ( itemIndex !== -1 ) {
				state.cart.items[ itemIndex ].quantity = quantity;
				key = state.cart.items[ itemIndex ].key || null;
			} else {
				state.cart.items.push( { id, quantity } );
				itemIndex = state.cart.items.length - 1;
			}

			// Updates the database.
			try {
				const res: Response = yield fetch(
					`${ state.restUrl }wc/store/v1/cart/items/${ key || '' }`,
					{
						method: key ? 'PUT' : 'POST',
						headers: {
							Nonce: state.nonce,
							'Content-Type': 'application/json',
						},
						body: JSON.stringify( state.cart.items[ itemIndex ] ),
					}
				);
				const json: CartItemResponse = yield res.json();

				// Checks if the response contains an error.
				if ( ! isSuccessfulResponse( res, json ) )
					throw generateError( json );

				// Updates the local cart.
				state.cart.items[ itemIndex ] = json;
			} catch ( error ) {
				// Todo: Handle error using the new Store Notices block.
				// const { actions } = store('woocommerce/store-notices');
				// actions.addNotice(...);

				// Reverts the optimistic update.
				state.cart.items[ itemIndex ].quantity = previousQuantity || 0;
			}
		},
		*refreshCartItems() {
			// Skips if there's a pending request.
			if ( pendingRefresh ) return;

			pendingRefresh = true;

			try {
				const res: Response = yield fetch(
					`${ state.restUrl }wc/store/v1/cart/items`,
					{ headers: { 'Content-Type': 'application/json' } }
				);
				const json: CartItemsResponse = yield res.json();

				// Checks if the response contains an error.
				if ( ! isSuccessfulResponse( res, json ) )
					throw generateError( json );

				// Updates the local cart.
				state.cart.items = json;
			} catch ( error ) {
				// Question: what should we do if this fails? Should we retry? Inform the user?
				// eslint-disable-next-line no-console
				console.error( error );
			} finally {
				pendingRefresh = false;
			}
		},
	},
};

store( 'woocommerce', woo );
