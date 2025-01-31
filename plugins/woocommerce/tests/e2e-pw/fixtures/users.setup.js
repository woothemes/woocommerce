/**
 * Internal dependencies
 */
import { test as setup } from './fixtures';
import { ADMIN_STATE_PATH } from '../playwright.config';
import { admin, customer } from '../test-data/data';

setup.use( { storageState: ADMIN_STATE_PATH } );

setup( 'save user id of test users', async ( { wpApi } ) => {
	const response = await wpApi.get( 'wp-json/wp/v2/users', {
		data: { _fields: [ 'id', 'slug' ] },
		failOnStatusCode: true,
	} );

	/**
	 * @type {{id, slug}[]}
	 */
	const users = await response.json();

	for ( const { id, slug } of users ) {
		if ( slug === admin.username ) {
			process.env.ADMIN_USER_ID = id;
		}

		if ( slug === customer.username ) {
			process.env.CUSTOMER_USER_ID = id;
		}
	}
} );
