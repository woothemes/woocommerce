/**
 * External dependencies
 */
import { test as setup } from '@playwright/test';
/**
 * Internal dependencies
 */
import { ADMIN_STATE_PATH } from '../playwright.config';

setup.use( { storageState: ADMIN_STATE_PATH } );

setup( 'generate consumer key', async ( { page } ) => {
	await page.goto(
		`./wp-admin/admin.php?page=wc-settings&tab=advanced&section=keys&create-key=1`
	);
	const keyName = `e2e-api-access-${ Date.now() }`;
	await page.locator( '#key_description' ).fill( keyName );
	await page.locator( '#key_permissions' ).selectOption( 'read_write' );
	await page.locator( 'text=Generate API key' ).click();
	process.env.CONSUMER_KEY = await page
		.locator( '#key_consumer_key' )
		.inputValue();
	process.env.CONSUMER_SECRET = await page
		.locator( '#key_consumer_secret' )
		.inputValue();
	process.env.CONSUMER_KEY_NAME = keyName;
	console.log(
		`${ process.env.CONSUMER_KEY_NAME } consumer token successfully created`
	);
} );
