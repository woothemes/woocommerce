/**
 * External dependencies
 */
import {
	closeChoosePatternModal,
	getCanvas,
	goToPageEditor,
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
	'Can create a new page',
	{ tag: [ tags.GUTENBERG, tags.WP_CORE ] },
	() => {
		// eslint-disable-next-line playwright/expect-expect
		test( 'can create new page', async ( { page, testPage } ) => {
			await goToPageEditor( { page } );
			await closeChoosePatternModal( { page } );
			await fillPageTitle( page, testPage.title );

			const canvas = await getCanvas( page );

			// TODO (Gutenberg 19.9): Remove this click() step.
			// Current stable version of Gutenberg (19.7) doesn't show the "Empty block" element right away, you need to click on the "Add default block" element first before it appears.
			// Upcoming Gutenberg nightly (version 19.9) no longer shows the "Add default block" element, but rather displays the "Empty block" right away.
			// There's no need for this click() step anymore when GB 19.9 comes out.
			await canvas
				.getByLabel( /(Add default block|Empty block)/ )
				.click();

			await canvas
				.getByRole( 'document', {
					name: 'Empty block; start writing or type forward slash to choose a block',
				} )
				.fill( 'Test Page' );

			await publishPage( page, testPage.title );
		} );
	}
);
