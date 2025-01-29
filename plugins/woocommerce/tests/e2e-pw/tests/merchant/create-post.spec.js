/**
 * External dependencies
 */
import {
	getCanvas,
	goToPostEditor,
	publishPage,
} from '@woocommerce/e2e-utils-playwright';

/**
 * Internal dependencies
 */
import { ADMIN_STATE_PATH } from '../../playwright.config';

const { test: baseTest, tags } = require( '../../fixtures/fixtures' );
const { fillPageTitle } = require( '../../utils/editor' );

const test = baseTest.extend( {
	storageState: ADMIN_STATE_PATH,
} );

test.describe(
	'Can create a new post',
	{ tag: [ tags.GUTENBERG, tags.WP_CORE ] },
	() => {
		test( 'can create new post', async ( { page, testPost } ) => {
			await goToPostEditor( { page } );

			await fillPageTitle( page, testPost.title );

			const canvas = await getCanvas( page );

			await canvas
				.getByRole( 'button', { name: 'Add default block' } )
				.click();

			await canvas
				.getByRole( 'document', {
					name: 'Empty block; start writing or type forward slash to choose a block',
				} )
				.fill( 'Test Post' );

			await publishPage( page, testPost.title, true );
		} );
	}
);
