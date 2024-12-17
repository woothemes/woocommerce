/**
 * External dependencies
 */
import { debounce } from '@woocommerce/base-utils';
import { select, dispatch } from '@wordpress/data';

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
};

/**
 * Initialize the local state cache
 */
const initialize = () => {
	localState.activePaymentMethod =
		select( STORE_KEY ).getActivePaymentMethod();
	localState.isInitialized = true;
};

/**
 * Function to dispatch an update to the server.
 */
const updatePaymentData = (): void => {
	if ( localState.doingPush ) {
		return;
	}

	// Prevent multiple pushes from happening at the same time.
	localState.doingPush = true;

	const newActivePaymentMethod = select( STORE_KEY ).getActivePaymentMethod();
	const isExpressPaymentMethodStarted =
		select( STORE_KEY ).isExpressPaymentStarted();
	// Only update if the active payment method has changed and it's not an express payment method or empty
	if (
		localState.activePaymentMethod !== '' &&
		newActivePaymentMethod !== '' &&
		newActivePaymentMethod !== localState.activePaymentMethod &&
		! isExpressPaymentMethodStarted
	) {
		localState.activePaymentMethod = newActivePaymentMethod;

		dispatch( STORE_KEY )
			.updatePaymentMethodData( newActivePaymentMethod )
			.then( () => {
				localState.doingPush = false;
			} )
			.catch( ( response ) => {
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
