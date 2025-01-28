/**
 * External dependencies
 */
import { test as setup } from '@playwright/test';
/**
 * Internal dependencies
 */
import { ADMIN_STATE_PATH } from '../playwright.config';

setup.use( { storageState: ADMIN_STATE_PATH } );

setup( 'remove consumer key', async ( { page } ) => {
	const { CONSUMER_KEY_NAME } = process.env;

	if ( CONSUMER_KEY_NAME ) {
		try {
			await page.goto(
				`./wp-admin/admin.php?page=wc-settings&tab=advanced&section=keys`
			);
			await page
				.getByRole( 'cell', {
					name: CONSUMER_KEY_NAME,
				} )
				.getByRole( 'link', {
					name: 'Revoke',
					includeHidden: true,
				} )
				.dispatchEvent( 'click' );
		} catch ( e ) {
			console.error(
				`Failed to clear consumer key  ${ CONSUMER_KEY_NAME }`,
				e
			);
		}
	}
} );
