/**
 * External dependencies
 */
import {
	register,
	subscribe,
	createReduxStore,
	dispatch as wpDispatch,
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
