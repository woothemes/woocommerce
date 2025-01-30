/**
 * External dependencies
 */
import {
	register,
	subscribe,
	createReduxStore,
	dispatch as wpDispatch,
	select,
} from '@wordpress/data';
import { controls as dataControls } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { STORE_KEY } from './constants';
import * as selectors from './selectors';
import * as actions from './actions';
import * as resolvers from './resolvers';
import reducer from './reducers';
import { pushChanges, flushChanges } from './push-changes';
import {
	updatePaymentMethods,
	debouncedUpdatePaymentMethods,
} from './update-payment-methods';
import {
	hasCartSession,
	persistenceLayer,
	isAddingToCart,
} from './persistence-layer';
import { defaultCartState } from './default-state';
import { getIgnoreSync } from './utils';

export const config = {
	reducer,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	actions: actions as any,
	controls: dataControls,
	selectors,
	resolvers,
	initialState: {
		...defaultCartState,
		cartData: {
			...defaultCartState.cartData,
			...( persistenceLayer.get() || {} ),
		},
	},
};
export const store = createReduxStore( STORE_KEY, config );

register( store );

// The resolver for getCartData fires off an API request. But if we know the cart is empty, we can skip the request.
// Likewise, if we have a valid persistent cart, we can skip the request.
// The only reliable way to check if the cart is empty is to check the cookies.
window.addEventListener( 'load', () => {
	if (
		( ! hasCartSession() || persistenceLayer.get() ) &&
		! isAddingToCart
	) {
		wpDispatch( store ).finishResolution( 'getCartData' );
	}
} );

// Pushes changes whenever the store is updated.
subscribe( pushChanges, store );

// Todo: remove
function diffObjects( obj1, obj2, path = [] ) {
	if ( ! obj1 || ! obj2 ) return;
	const allKeys = new Set( [
		...Object.keys( obj1 ),
		...Object.keys( obj2 ),
	] );

	for ( const key of allKeys ) {
		const val1 = obj1[ key ];
		const val2 = obj2[ key ];
		const currentPath = [ ...path, key ];

		if ( val1 === val2 ) continue; // Values are identical, nothing to log

		if ( ! obj1.hasOwnProperty( key ) ) {
			console.log(
				`Added: ${ currentPath.join( '.' ) } - ${ JSON.stringify(
					val2
				) }`
			);
		} else if ( ! obj2.hasOwnProperty( key ) ) {
			console.log(
				`Deleted: ${ currentPath.join( '.' ) } - ${ JSON.stringify(
					val1
				) }`
			);
		} else if ( typeof val1 === 'object' && typeof val2 === 'object' ) {
			diffObjects( val1, val2, currentPath ); // Recurse for nested objects
		} else {
			console.log(
				`Modified: ${ currentPath.join(
					'.'
				) } - From ${ JSON.stringify( val1 ) } to ${ JSON.stringify(
					val2
				) }`
			);
		}
	}
}

let previousCart: object | null = null;
let id = 0;

// Emmits event to sync iAPI store.
subscribe( () => {
	// const { cartData } = store.instantiate().store.getState();
	const cartData = select( STORE_KEY ).getCartData();
	if (
		! getIgnoreSync() &&
		previousCart !== null &&
		previousCart !== cartData
	) {
		console.groupCollapsed(
			`Cart sync started on the @wordpress/data store: data-${ ++id }`
		);
		// Todo: check why there are multiple updates of the cart on page load.
		diffObjects( previousCart, cartData );
		console.groupEnd();

		window.dispatchEvent(
			// Question: What are the usual names for WooCommerce events?
			new CustomEvent( 'woocommerce-cart-sync-required', {
				detail: { type: 'from_@wordpress/data', id },
			} )
		);
	}
	previousCart = cartData;
}, store );

// Listens to cart sync events from the iAPI store.
window.addEventListener( 'woocommerce-cart-sync-required', ( event: Event ) => {
	const customEvent = event as CustomEvent< {
		type: string;
		id: number;
	} >;
	if ( customEvent.detail.type === 'from_iAPI' ) {
		console.log(
			`Cart sync received on the @wordpress/data store: iapi-${ customEvent.detail.id }`
		);

		// Todo: investigate how to avoid infinite loops without causing racing conditions.
		wpDispatch( store ).syncCartWithIAPIStore();
	}
} );

// This will skip the debounce and immediately push changes to the server when a field is blurred.
document.body.addEventListener( 'focusout', ( event: FocusEvent ) => {
	if (
		event.target &&
		event.target instanceof Element &&
		event.target.tagName.toLowerCase() === 'input'
	) {
		flushChanges();
	}
} );

// First we will run the updatePaymentMethods function without any debounce to ensure payment methods are ready as soon
// as the cart is loaded. After that, we will unsubscribe this function and instead run the
// debouncedUpdatePaymentMethods function on subsequent cart updates.
const unsubscribeUpdatePaymentMethods = subscribe( async () => {
	const didActionDispatch = await updatePaymentMethods();
	if ( didActionDispatch ) {
		// The function we're currently in will unsubscribe itself. When we reach this line, this will be the last time
		// this function is called.
		unsubscribeUpdatePaymentMethods();
		// Resubscribe, but with the debounced version of updatePaymentMethods.
		subscribe( debouncedUpdatePaymentMethods, store );
	}
}, store );

export const CART_STORE_KEY = STORE_KEY;
