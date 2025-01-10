const { test, expect } = require( '@playwright/test' );
const { tags } = require( '../../fixtures/fixtures' );
const { exec } = require( 'child_process' );

test.describe( 'WC Home Task List >', () => {
	test.use( { storageState: process.env.ADMINSTATE } );

	test.beforeAll( async ( {} ) => {
		return new Promise( ( resolve, reject ) => {
			const deleteCommand = `wp-env run tests-cli wp option delete woocommerce_task_list_hidden_lists --allow-root`;
			exec( deleteCommand, ( error, stdout, stderr ) => {
				if ( error ) {
					console.error(
						`Error deleting option: ${ error.message }`
					);
					return reject( error );
				}
				if ( stderr && ! stderr.includes( 'Ran `wp option delete' ) ) {
					console.error( `Error output: ${ stderr }` );
					return reject( new Error( stderr ) );
				}
				console.log( 'Option deleted successfully.' );
				resolve( stdout );
			} );
		} );
	} );

	test.afterAll( async ( {} ) => {
		return new Promise( ( resolve, reject ) => {
			const deleteCommand = `wp-env run tests-cli wp option delete woocommerce_task_list_hidden_lists --allow-root`;
			exec( deleteCommand, ( error, stdout, stderr ) => {
				if ( error ) {
					console.error(
						`Error deleting option: ${ error.message }`
					);
					return reject( error );
				}
				if ( stderr && ! stderr.includes( 'Ran `wp option delete' ) ) {
					console.error( `Error output: ${ stderr }` );
					return reject( new Error( stderr ) );
				}
				console.log( 'Option deleted successfully.' );
				resolve( stdout );
			} );
		} );
	} );

	// TODO (E2E Audit): This test should be combined with other WC Homepage setup tests like the tests in activate-and-setup/stats-overview.spec.js into a single spec.
	test(
		'Can hide the task list',
		{ tag: [ tags.SKIP_ON_PRESSABLE, tags.SKIP_ON_WPCOM, tags.NOT_E2E ] },
		async ( { page } ) => {
			await test.step( 'Load the WC Admin page', async () => {
				await page.goto( 'wp-admin/admin.php?page=wc-admin' );
				await expect(
					page.getByRole( 'heading', {
						name: 'Start customizing your store',
					} )
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
