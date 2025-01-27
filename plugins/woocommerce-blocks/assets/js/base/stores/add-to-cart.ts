/**
 * External dependencies
 */
import { store } from '@wordpress/interactivity';

/**
 * Internal dependencies
 */
import type { StoreNoticesStore } from '../../blocks/store-notices/frontend';
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
		noticeId: string;
	};
	actions: {
		addErrorNotice: ( message: string ) => void;
		addToCart: ( id: number, quantity: number ) => void;
		refreshCart: () => void;
	};
}

let pendingRefresh = false;

export const { state, actions } = store< Store >( 'woocommerce', {
	actions: {
		addErrorNotice: ( message: string ) => {
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
			console.error( message );
		},
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

				if ( ! res.status.toString().startsWith( '2' ) ) {
					const error = yield res.json() as Promise< {
						code: string;
						data: { status: number };
						message: string;
					} >;
					throw new Error( error.message );
				} else {
					state.cart = yield res.json();
				}
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
} );
