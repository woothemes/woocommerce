const { test, expect } = require( '@playwright/test' );
const { exec } = require( 'child_process' );

test.describe(
	'Completing tasks on list >',
	{ tag: [ '@skip-on-default-pressable', '@skip-on-default-wpcom' ] },
	() => {
		test.use( { storageState: process.env.ADMINSTATE } );

		// This simulates completing all of the tasks in the task list.
		test.beforeAll( async ( {} ) => {
			return new Promise( ( resolve, reject ) => {
				const updateCommand = `wp-env run tests-cli wp option update woocommerce_task_list_tracked_completed_tasks "a:6:{"customize-store";"products";"tax";"shipping";"launch-your-store";"woopayments";}" --allow-root`;
				exec( updateCommand, ( error, stdout, stderr ) => {
					if ( error ) {
						console.error(
							`Error updating option: ${ error.message }`
						);
						return reject( error );
					}
					if (
						stderr &&
						! stderr.includes( 'Ran `wp option update' )
					) {
						console.error( `Error output: ${ stderr }` );
						return reject( new Error( stderr ) );
					}
					console.log( 'Option updated successfully.' );
					resolve( stdout );
				} );
			} );
		} );

		// Resets the task list to the default state after all tests have run.
		test.afterAll( async ( {} ) => {
			return new Promise( ( resolve, reject ) => {
				const deleteCommand = `wp-env run tests-cli wp option delete woocommerce_task_list_tracked_completed_tasks --allow-root`;
				exec( deleteCommand, ( error, stdout, stderr ) => {
					if ( error ) {
						console.error(
							`Error deleting option: ${ error.message }`
						);
						return reject( error );
					}
					if (
						stderr &&
						! stderr.includes( 'Ran `wp option delete' )
					) {
						console.error( `Error output: ${ stderr }` );
						return reject( new Error( stderr ) );
					}
					console.log( 'Option deleted successfully.' );
					resolve( stdout );
				} );
			} );
		} );

		test( 'Task list is not displayed when all tasks complete', async ( {
			page,
		} ) => {
			await page.goto( '/wp-admin/admin.php?page=wc-admin' );

			await expect(
				page.getByRole( 'heading', {
					name: 'Start customizing your store',
				} )
			).toBeHidden();
		} );
	}
);
