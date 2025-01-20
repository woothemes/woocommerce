/**
 * External dependencies
 */
import { store } from '@woocommerce/interactivity';
// Todo: remove once we import from `@wordpress/interactivity`.
import type { store as StoreType } from '@wordpress/interactivity';

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
	};
}

// Todo: Remove the type cast once we import from `@wordpress/interactivity`.
export const { state, actions } = ( store as typeof StoreType )< Store >(
	'woocommerce',
	{
		actions: {
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
					state.cart = yield res.json();
				} catch ( error ) {
					// Todo: Handle error using the new Store Notices block.
					// const { actions } = store('woocommerce/store-notices');
					// actions.addNotice(...);

					// Reverts the optimistic update.
					item.quantity = previousQuantity;
				}
			},
		},
	}
);
