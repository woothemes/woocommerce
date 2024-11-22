const { test, expect, request } = require( '@playwright/test' );
const { setOption } = require( '../../utils/options' );

test.describe.skip(
	'Store owner can skip the core profiler',
	{ tag: [ '@skip-on-default-pressable', '@skip-on-default-wpcom' ] },
	() => {
		test.use( { storageState: process.env.ADMINSTATE } );

		test.beforeAll( async ( { baseURL } ) => {
			try {
				await setOption(
					request,
					baseURL,
					'woocommerce_coming_soon',
					'no'
				);
			} catch ( error ) {
				console.log( error );
			}
		} );

		test( 'Can click skip guided setup', async ( { page } ) => {
			await page.goto(
				'wp-admin/admin.php?page=wc-admin&path=%2Fsetup-wizard'
			);

			await page
				.getByRole( 'button', { name: 'Skip guided setup' } )
				.click();

			await expect(
				page.getByRole( 'heading', {
					name: 'Where is your business located?',
				} )
			).toBeVisible();
			await page.getByLabel( 'Select country/region' ).click();
			await page
				.getByRole( 'option', {
					name: 'United States (US) — California',
				} )
				.click();
			await page
				.getByRole( 'button', { name: 'Go to my store' } )
				.click();

			await expect(
				page.getByRole( 'heading', { name: 'Turning on the lights' } )
			).toBeVisible();

			await expect(
				page.getByRole( 'heading', {
					name: 'Welcome to WooCommerce Core E2E Test Suite',
				} )
			).toBeVisible();

			await test.step( 'Confirm that the store is in coming soon mode after skipping the core profiler', async () => {
				await page.goto( 'wp-admin/admin.php?page=wc-admin' );
				await expect(
					page
						.getByRole( 'menuitem' )
						.filter( { hasText: 'coming soon' } )
				).toBeVisible();
			} );
		} );

		test( 'Can connect to WooCommerce.com', async ( { page } ) => {
			await test.step( 'Go to WC Home and make sure the total sales is visible', async () => {
				await page.goto( 'wp-admin/admin.php?page=wc-admin' );
				await page
					.getByRole( 'menuitem', { name: 'Total sales' } )
					.waitFor( { state: 'visible' } );
			} );

			await test.step( 'Go to the extensions tab and connect store', async () => {
				await page.goto(
					'wp-admin/admin.php?page=wc-admin&tab=my-subscriptions&path=%2Fextensions'
				);
				await expect(
					page.getByText(
						'Hundreds of vetted products and services. Unlimited potential.'
					)
				).toBeVisible();
				await expect(
					page.getByRole( 'button', { name: 'My Subscriptions' } )
				).toBeVisible();
				await expect(
					page.getByRole( 'link', { name: 'Connect your store' } )
				).toBeVisible();
				await page
					.getByRole( 'link', { name: 'Connect your store' } )
					.click();
			} );

			await test.step( 'Check that we are sent to wp.com', async () => {
				await expect( page.url() ).toContain( 'wordpress.com/log-in' );
				await expect(
					page.getByRole( 'heading', {
						name: 'Log in to your account',
					} )
				).toBeVisible( { timeout: 30000 } );
			} );
		} );
	}
);

// these tests run in sequence and depend on the previous tests. They can't retry unfortunately.
// hopefully we can find a way to manage state between tests in the future
test.describe.skip.serial(
	'Store owner can skip the core profiler and proceed to setup',
	() => {
		test.use( { storageState: process.env.ADMINSTATE } );

		test( 'Can click skip for the guided setup', async ( { page } ) => {
			await page.goto(
				'wp-admin/admin.php?page=wc-admin&path=%2Fsetup-wizard'
			);

			await page
				.getByRole( 'button', { name: 'Skip guided setup' } )
				.click();

			await expect(
				page.getByRole( 'heading', {
					name: 'Where is your business located?',
				} )
			).toBeVisible();
			await page.getByLabel( 'Select country/region' ).click();
			await page
				.getByRole( 'option', {
					name: 'United States (US) — California',
				} )
				.click();
			await page
				.getByRole( 'button', { name: 'Go to my store' } )
				.click();

			await expect(
				page.getByRole( 'heading', { name: 'Turning on the lights' } )
			).toBeVisible();

			await expect(
				page.getByRole( 'heading', {
					name: 'Home',
				} )
			).toBeVisible();
		} );

		test( 'Not taking action does not complete task on task list', async ( {
			page,
		} ) => {
			await page.goto( 'wp-admin/admin.php?page=wc-admin' );
			// assert that the task list is shown
			await expect(
				page.getByRole( 'heading', {
					name: 'Start customizing your store',
				} )
			).toBeVisible();

			// click through to the first task, but don't change anything
			await test.step( 'Do not complete the first task', async () => {
				await page
					.getByRole( 'button', { name: 'Customize your store' } )
					.click();
				await page
					.locator( 'div' )
					.filter( { hasText: /^Customize your store$/ } )
					.getByRole( 'button' )
					.click();
			} );

			// assert that the task is not marked as complete
			await expect(
				page.getByRole( 'button', { name: 'Customize your store' } )
			).not.toHaveClass( 'complete' );

			await expect(
				page.getByRole( 'heading', {
					name: 'Start customizing your store',
				} )
			).toBeVisible();
		} );

		test( 'Taking action completes a task on the task list', async ( {
			page,
		} ) => {
			await page.goto( 'wp-admin/admin.php?page=wc-admin' );

			// assert that the task list is shown
			await expect(
				page.getByRole( 'heading', {
					name: 'Start customizing your store',
				} )
			).toBeVisible();

			await test.step( 'Perform some actions to complete the first task', async () => {
				await page
					.getByRole( 'button', { name: 'Customize your store' } )
					.click();
				await page
					.getByRole( 'button', { name: 'Go to the Editor' } )
					.click();

				// Click the Style button and wait for the style panel
				await page.getByRole( 'button', { name: 'Style' } ).click();

				await page.keyboard.press( 'Tab' );
				await page.keyboard.press( 'Tab' );
				await page.keyboard.press( 'Tab' );
				await page.keyboard.press( 'Tab' );
				await page.keyboard.press( 'Enter' );

				await page.getByLabel( 'Save' ).click();
			} );

			await test.step( 'Go back to the dashboard and confirm that the task is marked as complete', async () => {
				await expect( page.getByLabel( 'Saved' ) ).toBeVisible();

				await page.getByLabel( 'Back' ).click();

				await page
					.locator( 'div' )
					.filter( { hasText: /^Design$/ } )
					.getByLabel( 'Go to the Dashboard' )
					.click();
				await page
					.getByRole( 'link', { name: 'WooCommerce', exact: true } )
					.click();
				await expect(
					page.getByRole( 'button', { name: 'Customize your store' } )
				).toHaveClass(
					'woocommerce-experimental-list__item has-action transitions-disabled woocommerce-task-list__item index-1 complete'
				);
			} );
		} );

		test( 'Can hide the task list', async ( { page } ) => {
			await page.goto( 'wp-admin/admin.php?page=wc-admin' );

			// assert that the task list is shown
			await expect(
				page.getByRole( 'heading', { name: 'Import your products' } )
			).toBeVisible();

			// hide the task list
			await page
				.getByRole( 'button', { name: 'Task List Options' } )
				.first()
				.click();
			await page
				.getByRole( 'button', { name: 'Hide setup list' } )
				.click();

			// assert that the task list is hidden
			await expect(
				page.getByRole( 'heading', {
					name: 'Start customizing your store',
				} )
			).toBeHidden();
		} );

		test( 'Store management displayed after task list complete/hidden', async ( {
			page,
		} ) => {
			await page.goto( 'wp-admin/admin.php?page=wc-admin' );

			await expect(
				page
					.locator( 'div' )
					.filter( { hasText: /^Store management$/ } )
			).toBeVisible();
			await expect(
				page.getByText(
					'Marketing & MerchandisingMarketingAdd productsPersonalize my storeView my store'
				)
			).toBeVisible();
			await expect(
				page.getByText( 'SettingsStore detailsPaymentsTaxShipping' )
			).toBeVisible();
		} );

		test( 'Can access analytics reports from stats overview', async ( {
			page,
		} ) => {
			await page.goto( 'wp-admin/admin.php?page=wc-admin' );

			await expect(
				page.locator( 'div' ).filter( { hasText: /^Stats overview$/ } )
			).toBeVisible();

			await page
				.getByRole( 'link', { name: 'View detailed stats' } )
				.click();

			await expect( page.url() ).toContain(
				'wp-admin/admin.php?page=wc-admin&path=%2Fanalytics%2Foverview'
			);
		} );

		test( 'Extended task list visible', async ( { page } ) => {
			await page.goto( 'wp-admin/admin.php?page=wc-admin' );

			await expect( page.getByText( 'Things to do next' ) ).toBeVisible();

			await page
				.getByRole( 'button', { name: 'Task List Options' } )
				.click();
			await page.getByRole( 'button', { name: 'Hide this' } ).click();

			await expect( page.getByText( 'Things to do next' ) ).toBeHidden();
		} );
	}
);
