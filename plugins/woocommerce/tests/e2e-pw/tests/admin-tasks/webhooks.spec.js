const { test, expect } = require( '@playwright/test' );
const { tags } = require( '../../fixtures/fixtures' );
const wcApi = require( '@woocommerce/woocommerce-rest-api' ).default;

test.describe( 'Manage webhooks', () => {
	test.use( { storageState: process.env.ADMINSTATE } );

	test.afterAll( async ( { baseURL } ) => {
		const api = new wcApi( {
			url: baseURL,
			consumerKey: process.env.CONSUMER_KEY,
			consumerSecret: process.env.CONSUMER_SECRET,
			version: 'wc/v3',
		} );
		await api.get( 'webhooks' ).then( ( response ) => {
			const ids = response.data.map( ( webhook ) => webhook.id );

			api.post( 'webhooks/batch', {
				delete: ids,
			} );
		} );
	} );

	const WEBHOOKS_SCREEN_URI =
		'wp-admin/admin.php?page=wc-settings&tab=advanced&section=webhooks';

	test(
		'Webhook cannot be bulk deleted without nonce',
		{ tag: [ tags.COULD_BE_LOWER_LEVEL_TEST ] },
		async ( { page } ) => {
			await page.goto( WEBHOOKS_SCREEN_URI );

			await page.getByRole( 'link', { name: 'Add webhook' } ).click();
			await page
				.getByRole( 'textbox', { name: 'Name' } )
				.fill( 'Webhook 1' );
			await page.getByRole( 'button', { name: 'Save webhook' } ).click();

			await expect(
				page.getByText( 'Webhook updated successfully.' )
			).toBeVisible();

			await page.goto( WEBHOOKS_SCREEN_URI );

			await expect(
				page.getByRole( 'row', { name: 'Webhook 1' } )
			).toBeVisible();

			let editURL = await page
				.getByRole( 'link', { name: 'Webhook 1', exact: true } )
				.getAttribute( 'href' );
			editURL = new URL( editURL );
			const webhookID = editURL.searchParams.get( 'edit-webhook' );

			await page.goto(
				`${ WEBHOOKS_SCREEN_URI }&action=delete&webhook[]=${ webhookID }`
			);

			await expect(
				page.getByText( 'The link you followed has expired.' )
			).toBeVisible();

			await expect(
				page.getByText( 'webhook permanently deleted' )
			).toBeHidden( { timeout: 1 } );
		}
	);
} );
