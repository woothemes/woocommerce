const { test: baseTest, expect, tags } = require( '../../fixtures/fixtures' );
const {
	fillPageTitle,
	transformIntoBlocks,
	publishPage,
} = require( '../../utils/editor' );
const { getInstalledWordPressVersion } = require( '../../utils/wordpress' );

/**
 * External dependencies
 */
import {
	closeChoosePatternModal,
	goToPageEditor,
	insertBlock,
} from '@woocommerce/e2e-utils-playwright';

const test = baseTest.extend( {
	storageState: process.env.ADMINSTATE,
	testPageTitlePrefix: 'Transformed cart',
} );

test.describe(
	'Transform Classic Cart To Cart Block',
	{ tag: [ tags.GUTENBERG, tags.SERVICES, tags.SKIP_ON_PRESSABLE ] },
	() => {
		test( 'can transform classic cart to cart block', async ( {
			page,
			testPage,
		} ) => {
			await goToPageEditor( { page } );

			await closeChoosePatternModal( { page } );

			await fillPageTitle( page, testPage.title );
			const wordPressVersion = await getInstalledWordPressVersion();
			await insertBlock( page, 'Classic Cart', wordPressVersion );
			await transformIntoBlocks( page );
			await publishPage( page, testPage.title );

			// go to frontend to verify transformed cart block
			await page.goto( testPage.slug );
			await expect(
				page.getByRole( 'heading', { name: testPage.title } )
			).toBeVisible();
			await expect(
				page.getByRole( 'heading', {
					name: 'Your cart is currently empty!',
				} )
			).toBeVisible();
			await expect(
				page.getByRole( 'link', { name: 'Browse store' } )
			).toBeVisible();
		} );
	}
);
