const { test, expect } = require( '@playwright/test' );
const { tags } = require( '../../fixtures/fixtures' );
const { exec } = require( 'child_process' );
const { ADMIN_STATE_PATH } = require( '../../playwright.config' );

test.describe( 'WC Home Task List >', () => {
	test.use( { storageState: ADMIN_STATE_PATH } );

	// TODO (E2E Audit): This test should be combined with other WC Homepage setup tests like the tests in activate-and-setup/stats-overview.spec.js into a single spec.
	test(
		'Can hide the task list',
		{ tag: [ tags.NOT_E2E ] },
		async ( { page } ) => {
			await test.step( 'Load the WC Admin page with the task list enabled', async () => {
				await page.goto(
					'wp-admin/admin.php?page=wc-admin&reset_task_list=1'
				);
				await expect(
					page.getByText( 'Customize your store' )
				).toBeVisible();
				await expect(
					page.getByText( 'Store management' )
				).toBeHidden();
			} );

			await test.step( 'Hide the task list', async () => {
				await page
					.getByRole( 'button', { name: 'Task List Options' } )
					.first()
					.click();
				await page
					.getByRole( 'button', { name: 'Hide setup list' } )
					.click();
				await expect(
					page.getByRole( 'heading', {
						name: 'Start customizing your store',
					} )
				).toBeHidden();
				await expect(
					page.getByText( 'Store management' )
				).toBeVisible();
			} );
		}
	);

	test.afterAll( async ( { browser } ) => {
		await test.step( 'Re-enable task list', async () => {
			const context = await browser.newContext();
			const page = await context.newPage();

			await page.goto(
				'wp-admin/admin.php?page=wc-admin&reset_task_list=1'
			);
			await expect(
				page.getByText( 'Customize your store' )
			).toBeVisible();

			await page.close();
			await context.close();
		} );
	} );
} );
