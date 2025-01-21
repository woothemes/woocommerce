/**
 * Internal dependencies
 */
export { config, store, PAYMENT_STORE_KEY } from './store-config';

// This file is different to the other data stores as several other of our data stores subscribe to it, and we need
// to be able to import the store config without introducing a circular dependency. That is why the store config is
// in its own file, and we export it here.
