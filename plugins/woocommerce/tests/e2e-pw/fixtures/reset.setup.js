/**
 * Internal dependencies
 */
import { test as setup } from './fixtures';
import { ADMIN_STATE_PATH } from '../playwright.config';

setup.use( { storageState: ADMIN_STATE_PATH } );

setup( 'reset site', async ( { baseURL, wpApi } ) => {
	setup.skip(
		process.env.DISABLE_SITE_RESET !== undefined,
		'Reset disabled by DISABLE_SITE_RESET environment variable'
	);

	try {
		const response = await wpApi.get(
			`${ baseURL }/wp-json/wc-cleanup/v1/reset`
		);

		if ( response.ok() ) {
			console.log( 'Site reset successful:', response.status() );
		} else {
			console.error( 'ERROR! Site reset failed:', response.status() );
		}
	} catch ( error ) {
		console.error(
			'Site reset failed:',
			error.response ? error.response.status() : error.message
		);
	}
} );
