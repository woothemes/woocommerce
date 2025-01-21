/**
 * External dependencies
 */
import { debounce } from '@woocommerce/base-utils';
import { select, dispatch } from '@wordpress/data';
import type { AdditionalValues } from '@woocommerce/settings';
import { ApiErrorResponse } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { STORE_KEY } from './constants';
import { processErrorResponse } from '../utils';

// This is used to track and cache the local state of push changes.
const localState = {
	// True when the checkout data has been initialized.
	checkoutDataIsInitialized: false,
	// True when a push is currently happening to avoid simultaneous pushes.
	doingPush: false,
	// Local cache of the last pushed checkoutData used for comparisons.
	checkoutData: {
		orderNotes: '',
		additionalFields: {} as AdditionalValues,
	},
};

/**
 * Initializes the checkout data cache on the first run.
 */
const initialize = () => {
	const store = select( STORE_KEY );
	localState.checkoutData = {
		orderNotes: store.getOrderNotes(),
		additionalFields: store.getAdditionalFields(),
	};
	localState.checkoutDataIsInitialized = true;
};

/**
 * Function to dispatch an update to the server.
 */
const updateCheckoutData = (): void => {
	if ( localState.doingPush ) {
		return;
	}

	// Prevent multiple pushes from happening at the same time.
	localState.doingPush = true;

	// Get current checkout data from the store
	const store = select( STORE_KEY );
	const newCheckoutData = {
		orderNotes: store.getOrderNotes(),
		additionalFields: store.getAdditionalFields(),
	};

	// Figure out which additional fields have changed and only send those to the server
	const changedFields = Object.keys( newCheckoutData.additionalFields )
		.filter( ( key ) => {
			return (
				localState.checkoutData.additionalFields[ key ] !==
				newCheckoutData.additionalFields[ key ]
			);
		} )
		.reduce( ( acc: AdditionalValues, key ) => {
			acc[ key ] = newCheckoutData.additionalFields[ key ];
			return acc;
		}, {} );

	// If no additional fields have changed, and the order notes are the same, we can skip the update
	if (
		Object.keys( changedFields ).length === 0 &&
		localState.checkoutData.orderNotes === newCheckoutData.orderNotes
	) {
		localState.doingPush = false;
		return;
	}

	// Update local cache
	localState.checkoutData = newCheckoutData;

	dispatch( STORE_KEY )
		.updateDraftOrder( {
			orderNotes: newCheckoutData.orderNotes,
			additionalFields: changedFields,
		} )
		.then( () => {
			localState.doingPush = false;
		} )
		.catch( ( response: ApiErrorResponse ) => {
			localState.doingPush = false;
			processErrorResponse( response );
		} );
};

/**
 * Function to dispatch an update to the server. This is debounced.
 */
const debouncedUpdateCheckoutData = debounce( () => {
	if ( localState.doingPush ) {
		return;
	}
	updateCheckoutData();
}, 1500 );

/**
 * After checkout has fully initialized, pushes changes to the server when data in the store is changed. Updates to the
 * server are debounced to prevent excessive requests.
 */
export const pushChanges = ( debounced = true ): void => {
	if ( ! localState.checkoutDataIsInitialized ) {
		initialize();
		return;
	}

	if ( debounced ) {
		debouncedUpdateCheckoutData();
	} else {
		updateCheckoutData();
	}
};

// Cancel the debounced updateCheckoutData function and trigger it immediately.
export const flushChanges = (): void => {
	debouncedUpdateCheckoutData.flush();
};

// Cancel the debounced updateCheckoutData function without trigger it.
export const clearChanges = (): void => {
	debouncedUpdateCheckoutData.clear();
};
