const { test: baseTest, expect } = require( '../../fixtures/fixtures' );
const { exec } = require( 'child_process' );

function loadDatabaseBackup() {
	return new Promise( ( resolve, reject ) => {
		const importCommand = `wp-env run cli wp db import /var/www/html/wp-content/dump.sql`;
		exec( importCommand, ( error, stdout, stderr ) => {
			if ( error ) {
				console.error( `Error importing database: ${ error.message }` );
				return reject( error );
			}
			if ( stderr && ! stderr.includes( 'Ran `wp db import' ) ) {
				console.error( `Error output: ${ stderr }` );
				return reject( new Error( stderr ) );
			}
			console.log( 'Database imported successfully.' );
			resolve( stdout );
		} );
	} );
}

const test = baseTest.extend( {
	storageState: process.env.ADMINSTATE,
	page: async ( { api, page, wpApi, wcAdminApi }, use ) => {
		await wcAdminApi.post( 'onboarding/profile', {
			skipped: true,
		} );

		// Ensure store's base country location is a WooPayments non-supported country (AF).
		// Otherwise, the WooPayments task page logic or WooPayments redirects will kick in.
		await api.post( 'settings/general/batch', {
			update: [
				{
					id: 'woocommerce_default_country',
					value: 'AF',
				},
			],
		} );

		const bacsInitialState = await api.get( 'payment_gateways/bacs' );
		const codInitialState = await api.get( 'payment_gateways/cod' );

		// Disable the help popover.
		await wpApi.post( '/wp-json/wp/v2/users/1?_locale=user', {
			data: {
				woocommerce_meta: {
					help_panel_highlight_shown: '"yes"',
				},
			},
		} );

		await use( page );

		// Reset the payment gateways to their initial state.
		await api.put( 'payment_gateways/bacs', {
			enabled: bacsInitialState.data.enabled,
		} );
		await api.put( 'payment_gateways/cod', {
			enabled: codInitialState.data.enabled,
		} );
	},
} );

test.describe( 'Payment setup task', () => {
	test.beforeAll( async ( {} ) => {
		// Load the database backup
		try {
			await loadDatabaseBackup();
		} catch ( error ) {
			console.error( 'Failed to load the database backup:', error );
		}
	} );
	test.afterAll( async ( {} ) => {
		// Load the database backup
		try {
			await loadDatabaseBackup();
		} catch ( error ) {
			console.error( 'Failed to load the database backup:', error );
		}
	} );

	test( 'Saving valid bank account transfer details enables the payment method', async ( {
		page,
		api,
	} ) => {
		await api.put( 'payment_gateways/bacs', {
			enabled: false,
		} );

		// Load the bank transfer page.
		await page.goto(
			'wp-admin/admin.php?page=wc-settings&tab=checkout&section=bacs'
		);
		await page.getByText( 'Enable bank transfer' ).click();
		// Fill in bank transfer form.
		await page
			.locator( 'input[name="bacs_account_name\\[0\\]"]' )
			.fill( 'Savings' );
		await page
			.locator( 'input[name="bacs_account_number\\[0\\]"]' )
			.fill( '1234' );
		await page
			.locator( 'input[name="bacs_bank_name\\[0\\]"]' )
			.fill( 'Test Bank' );
		await page
			.locator( 'input[name="bacs_sort_code\\[0\\]"]' )
			.fill( '12' );
		await page
			.locator( 'input[name="bacs_iban\\[0\\]"]' )
			.fill( '12 3456 7890' );
		await page.locator( 'input[name="bacs_bic\\[0\\]"]' ).fill( 'ABBA' );
		await page.getByRole( 'button', { name: 'Save' } ).click();

		// Check that bank transfers were set up.
		await expect(
			page
				.locator( 'div' )
				.filter( { hasText: /^Your settings have been saved\.$/ } )
		).toBeVisible();

		await test.step( 'Check that bank transfers were set up', async () => {
			await expect(
				page.getByText( 'Your settings have been saved.' )
			).toBeVisible();

			await page.goto(
				'wp-admin/admin.php?page=wc-settings&tab=checkout'
			);
		} );
	} );

	test( 'Can visit the payment setup task from the homescreen if the setup wizard has been skipped', async ( {
		page,
	} ) => {
		await page.goto( 'wp-admin/admin.php?page=wc-admin' );
		await page.getByRole( 'button', { name: 'Get paid' } ).click();
		await expect(
			page.getByRole( 'heading', { name: 'Offline payment methods' } )
		).toBeVisible();
	} );

	test( 'Enabling cash on delivery enables the payment method', async ( {
		page,
		api,
	} ) => {
		await api.put( 'payment_gateways/cod', {
			enabled: false,
		} );

		await page.goto( 'wp-admin/admin.php?page=wc-settings&tab=checkout' );

		// Enable COD payment option.
		await page
			.getByRole( 'link', {
				name: 'The "Cash on delivery" payment method is currently disabled',
			} )
			.click();

		// Check that COD was set up.

		// reload the page to ensure the status is updated
		await page.reload();

		// Check that the COD payment method was enabled.
		await expect(
			page.locator( '//tr[@data-gateway_id="cod"]/td[@class="status"]/a' )
		).toHaveClass( 'wc-payment-gateway-method-toggle-enabled' );
	} );
} );
