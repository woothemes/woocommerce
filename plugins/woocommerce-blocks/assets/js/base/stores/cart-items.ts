/**
 * External dependencies
 */
import { store, effect } from '@woocommerce/interactivity';
import type { store as StoreType } from '@wordpress/interactivity'; // Todo: remove once we import from `@wordpress/interactivity`.

/**
 * Internal dependencies
 */
import type { StoreNoticesStore } from '../../blocks/store-notices/frontend';

type Item = {
	key?: string;
	id: number;
	quantity: number;
};

export type Store = {
	state: {
		restUrl: string;
		nonce: string;
		noticeId: string;
		cart: {
			items: Item[];
		};
	};
	actions: {
		addCartItem: ( args: { id: number; quantity: number } ) => void;
		// Todo: Check why if I switch to an async function here the types of the store stop working.
		refreshCartItems: () => void;
	};
};

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
let refreshTimeout = 3000;

// Todo: Remove the type cast once we import from `@wordpress/interactivity`.
// Question: disable "used before defined" lint rule?
export const { state, actions } = ( store as typeof StoreType )< Store >(
	'woocommerce',
	{
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
						`${ state.restUrl }wc/store/v1/cart/items/${
							key || ''
						}`,
						{
							method: key ? 'PUT' : 'POST',
							headers: {
								Nonce: state.nonce,
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(
								state.cart.items[ itemIndex ]
							),
						}
					);
					const json: CartItemResponse = yield res.json();

					// Checks if the response contains an error.
					if ( ! isSuccessfulResponse( res, json ) )
						throw generateError( json );

					// Updates the local cart.
					state.cart.items[ itemIndex ] = json;
				} catch ( error ) {
					const message = ( error as Error ).message;

					// Question: can we import this dynamically so it's not loaded on page load?
					const { actions: noticeActions } =
						store< StoreNoticesStore >(
							'woocommerce/store-notices'
						);

					// If the user deleted the hooked store notice block, the
					// store won't be present and we should not add a notice.
					if ( 'addNotice' in noticeActions ) {
						// The old implementation always overwrites the last
						// notice, so we remove the last notice before adding a
						// new one.
						// Todo: Review this implementation.
						if ( state.noticeId !== '' ) {
							noticeActions.removeNotice( state.noticeId );
						}

						const noticeId = noticeActions.addNotice( {
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
					state.cart.items[ itemIndex ].quantity =
						previousQuantity || 0;
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

					// Resets the timeout.
					refreshTimeout = 3000;
				} catch ( error ) {
					// Tries again after the timeout.
					setTimeout( actions.refreshCartItems, refreshTimeout );

					// Increases the timeout exponentially.
					refreshTimeout *= 2;
				} finally {
					pendingRefresh = false;
				}
			},
		},
	}
);

let ignoreUpdate = false;

window.addEventListener(
	'woocommerce-cart-sync-required',
	async ( event: Event ) => {
		const customEvent = event as CustomEvent< {
			type: string;
			id: number;
		} >;
		if ( customEvent.detail.type === 'from_@wordpress/data' ) {
			console.log(
				`Cart sync received on the iAPI store: data-${ customEvent.detail.id }`
			);
			// Todo: investigate how to avoid infinite loops without causing racing conditions.
			ignoreUpdate = true;
			await actions.refreshCartItems();
			ignoreUpdate = false;
		}
	}
);

let id = 0;

// Question: Should this event be triggered manually so it's not triggered on optimistic updates?
effect( () => {
	// Deeply subscribe to all the `state.cart` properties.
	JSON.stringify( state.cart );

	if ( ! ignoreUpdate ) {
		console.log( `Cart sync started on the iAPI store: iapi-${ ++id }` );

		// Dispatch the event to sync the @wordpress/data store.
		window.dispatchEvent(
			// Question: What are the usual names for WooCommerce events?
			new CustomEvent( 'woocommerce-cart-sync-required', {
				detail: { type: 'from_iAPI', id },
			} )
		);
	}
} );
