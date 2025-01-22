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

let pendingRefresh = false;

// Todo: Remove the type cast once we import from `@wordpress/interactivity`.
export const { state, actions } = ( store as typeof StoreType )< Store >(
	'woocommerce',
	{
		actions: {
			// Question: Should we name this `addCartItem` to match the Store API naming?
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

					if ( ! res.status.toString().startsWith( '2' ) )
						// Question: what error string should we use? Is there a standard in Woo?
						throw new Error( 'Failed to add item to cart.' );

					state.cart = yield res.json();
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
					state.cart = yield res.json();

					if ( ! res.status.toString().startsWith( '2' ) )
						// Question: what error string should we use? Is there a standard in Woo?
						throw new Error( 'Failed to refresh the cart.' );
				} catch ( error ) {
					// Question: what should we do if this fails? Should we retry? Inform the user?
				} finally {
					pendingRefresh = false;
				}
			},
		},
	}
);

window.wooActions = actions;
