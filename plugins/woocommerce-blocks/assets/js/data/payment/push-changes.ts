/**
 * External dependencies
 */
import { debounce } from '@woocommerce/base-utils';
import { select, dispatch } from '@wordpress/data';
import { getSetting } from '@woocommerce/settings';
import { ApiErrorResponse } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { STORE_KEY } from './constants';
import { processErrorResponse } from '../utils';

// This is used to track and cache the local state of push changes.
const localState = {
	// True when the payment method data has been initialized
	isInitialized: false,
	// True when a push is currently happening to avoid simultaneous pushes.
	doingPush: false,
	// Cache of the last active payment method
	activePaymentMethod: '',
	// Cache of the last active saved token
	activeSavedToken: '',
};

/**
 * Initialize the local state cache
 */
const initialize = () => {
	localState.activePaymentMethod =
		select( STORE_KEY ).getActivePaymentMethod();
	localState.activeSavedToken = select( STORE_KEY ).getActiveSavedToken();
	localState.isInitialized = true;
};

const isCheckoutBlock = getSetting< boolean >( 'isCheckoutBlock', false );

/**
 * Function to dispatch an update to the server.
 */
const updatePaymentData = (): void => {
	if ( localState.doingPush ) {
		return;
	}

	// Prevent multiple pushes from happening at the same time.
	localState.doingPush = true;

	// Don't push changes if the page contains a cart block, but no checkout block.
	if ( ! isCheckoutBlock ) {
		return;
	}

	// Don't push changes if an express payment method is clicked
	if ( select( STORE_KEY ).isExpressPaymentStarted() ) {
		return;
	}

	const newActivePaymentMethod = select( STORE_KEY ).getActivePaymentMethod();
	// Don't push changes if the active payment method is set to empty
	if ( newActivePaymentMethod === '' ) {
		return;
	}

	const newActiveSavedToken = select( STORE_KEY ).getActiveSavedToken();
	// Only update if the active payment method or the saved token has changed
	if (
		newActivePaymentMethod !== localState.activePaymentMethod ||
		newActiveSavedToken !== localState.activeSavedToken
	) {
		localState.activePaymentMethod = newActivePaymentMethod;

		dispatch( STORE_KEY )
			.updatePaymentMethodData( {
				id: newActivePaymentMethod,
				token: newActiveSavedToken,
			} )
			.then( () => {
				localState.doingPush = false;
			} )
			.catch( ( response: ApiErrorResponse ) => {
				localState.doingPush = false;
				processErrorResponse( response );
			} );
	} else {
		localState.doingPush = false;
	}
};

/**
 * Function to dispatch an update to the server. This is debounced.
 */
const debouncedUpdatePaymentData = debounce( () => {
	if ( localState.doingPush ) {
		return;
	}
	updatePaymentData();
}, 1500 );

/**
 * After payment has fully initialized, pushes changes to the server when data in the store is changed.
 * Updates to the server are debounced to prevent excessive requests.
 */
export const pushChanges = ( debounced = true ): void => {
	if ( ! localState.isInitialized ) {
		initialize();
		return;
	}

	if ( debounced ) {
		debouncedUpdatePaymentData();
	} else {
		updatePaymentData();
	}
};

// Cancel the debounced updatePaymentData function and trigger it immediately.
export const flushChanges = (): void => {
	debouncedUpdatePaymentData.flush();
};

// Cancel the debounced updatePaymentData function without trigger it.
export const clearChanges = (): void => {
	debouncedUpdatePaymentData.clear();
};
