/**
 * External dependencies
 */
import { store } from '@woocommerce/interactivity';
import type { store as StoreType } from '@wordpress/interactivity';
// Todo: remove the above once we import from `@wordpress/interactivity`.

/**
 * Internal dependencies
 */
import type { StoreNoticesStore } from '../../blocks/store-notices/frontend';
interface Store {
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
		noticeId: string;
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
					const message = ( error as Error ).message;
					const noticesStore = store< StoreNoticesStore >(
						'woocommerce/store-notices'
					);

					// If the user deleted the hooked store notice block, the store won't be present
					// and we should not add a notice.
					if ( 'addNotice' in noticesStore.actions ) {
						// The old implementation always overwrites the last notice, so
						// we remove the last notice before adding a new one.
						if ( state.noticeId !== '' ) {
							noticesStore.actions.removeNotice( state.noticeId );
						}

						const noticeId = noticesStore.actions.addNotice( {
							notice: message,
							type: 'error',
							dismissible: true,
						} );

						state.noticeId = noticeId;
					}

					// We don't care about errors blocking execution, but will
					// console.error for troubleshooting.
					// eslint-disable-next-line no-console
					console.error( error );

					// Reverts the optimistic update.
					item.quantity = previousQuantity;
				}
			},
		},
	}
);
