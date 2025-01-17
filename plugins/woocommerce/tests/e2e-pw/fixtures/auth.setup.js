/**
 * External dependencies
 */
import { test as setup } from '@playwright/test';
import fs from 'fs';

/**
 * Internal dependencies
 */
import { logIn } from '../utils/login';
const { admin, customer } = require( '../test-data/data' );
import {
	ADMIN_STATE_PATH,
	CUSTOMER_STATE_PATH,
	STORAGE_DIR_PATH,
} from '../playwright.config';

async function authenticate( page, user, storagePath ) {
	await page.goto( './wp-admin' );
	await logIn( page, user.username, user.password, false );
	await page.context().storageState( { path: storagePath } );
}

setup.beforeAll( 'clear existing state', async () => {
	fs.rm( STORAGE_DIR_PATH, { recursive: true }, ( err ) => {
		if ( err && err.code !== 'ENOENT' ) {
			console.error( `Error while deleting state folder: ${ err }` );
		}
	} );
} );

setup( 'authenticate admin', async ( { page } ) => {
	await authenticate( page, admin, ADMIN_STATE_PATH );
} );

setup( 'authenticate customer', async ( { page } ) => {
	await authenticate( page, customer, CUSTOMER_STATE_PATH );
} );
