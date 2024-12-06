const { chromium, expect } = require( '@playwright/test' );
const { admin } = require( './test-data/data' );
const { logIn } = require( './utils/login' );

module.exports = async ( config ) => {
	const { baseURL, userAgent } = config.projects[ 0 ].use;

	// Specify user agent when running against an external test site to avoid getting HTTP 406 NOT ACCEPTABLE errors.
	const contextOptions = { baseURL, userAgent };

	const browser = await chromium.launch();
	const context = await browser.newContext( contextOptions );
	const adminPage = await context.newPage();

	let consumerTokenCleared = false;

	// Clean up the consumer keys
	const keysRetries = 5;
	if ( process.env.API_KEY_NAME ) {
		for ( let i = 0; i < keysRetries; i++ ) {
			try {
				console.log(
					`Trying to clear consumer token ${ process.env.API_KEY_NAME }... Try:` +
						i
				);
				await adminPage.goto( `./wp-admin` );
				await logIn( adminPage, admin.username, admin.password );
				await adminPage.goto(
					`./wp-admin/admin.php?page=wc-settings&tab=advanced&section=keys`
				);
				await adminPage
					.getByRole( 'cell', {
						name: process.env.API_KEY_NAME,
					} )
					.getByRole( 'link', {
						name: 'Revoke',
						includeHidden: true,
					} )
					.dispatchEvent( 'click' );
				consumerTokenCleared = true;
				console.log(
					`Cleared up consumer token  ${ process.env.API_KEY_NAME } successfully.`
				);
				break;
			} catch ( e ) {
				console.log(
					`Failed to clear consumer token  ${ process.env.API_KEY_NAME }. Retrying...`
				);
				console.log( e );
			}
		}
		await expect( consumerTokenCleared ).toBe( true );
	} else {
		console.log( 'No consumer token to clear.' );
	}
};
