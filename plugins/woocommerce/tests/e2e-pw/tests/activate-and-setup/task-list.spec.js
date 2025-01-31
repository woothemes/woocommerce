const { tags, test, expect } = require( '../../fixtures/fixtures' );
const { ADMIN_STATE_PATH } = require( '../../playwright.config' );

const get_task_list_state = async ( wcAdminApi ) => {
	const {
		statusText,
		data: { woocommerce_task_list_hidden },
	} = await wcAdminApi.get( 'options?options=woocommerce_task_list_hidden' );

	expect( statusText ).toEqual( 'OK' );

	return woocommerce_task_list_hidden;
};

const update_task_list_state = async ( wcAdminApi, new_state ) => {
	// Send request to update task list.
	const data = { woocommerce_task_list_hidden: new_state };
	const { statusText } = await wcAdminApi.put( 'options', data );
	expect( statusText ).toEqual( 'OK' );

	// Verify task list was updated correctly.
	const actual_state = await get_task_list_state( wcAdminApi );
	expect( actual_state ).toEqual( new_state );
};

let init_task_list_state;

// TODO (E2E Audit): This test should be combined with other WC Homepage setup tests like the tests in activate-and-setup/stats-overview.spec.js into a single spec.
test.describe( 'WC Home Task List >', () => {
	test.use( { storageState: ADMIN_STATE_PATH } );

	test.beforeAll( async ( { wcAdminApi } ) => {
		await test.step( 'Remember initial state of task list.', async () => {
			init_task_list_state = await get_task_list_state( wcAdminApi );
		} );

		await test.step( 'Show the home task list', async () => {
			// Skip this step if task list is already visible.
			if ( init_task_list_state === 'no' ) {
				return;
			}

			await update_task_list_state( wcAdminApi, 'no' );
		} );
	} );

	test.afterAll( async ( { wcAdminApi } ) => {
		await test.step( 'Revert task list state', async () => {
			await update_task_list_state( wcAdminApi, init_task_list_state );
		} );
	} );

	test(
		'Can hide the task list',
		{ tag: [ tags.NOT_E2E ] },
		async ( { page } ) => {
			await test.step( 'Load the WC Admin page.', async () => {
				await page.goto( 'wp-admin/admin.php?page=wc-admin' );
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
} );
