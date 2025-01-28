/**
 * External dependencies
 */
import { createReduxStore, register } from '@wordpress/data';
import { controls as dataControls } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import reducer from './reducers';
import { STORE_KEY } from './constants';
import * as actions from './actions';
import { controls as sharedControls } from '../shared-controls';
import * as selectors from './selectors';

export const config = {
	reducer,
	selectors,
	actions,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	controls: { ...dataControls, ...sharedControls } as any,
	__experimentalUseThunks: true,
};

export const store = createReduxStore( STORE_KEY, config );
register( store );

export const PAYMENT_STORE_KEY = STORE_KEY;
