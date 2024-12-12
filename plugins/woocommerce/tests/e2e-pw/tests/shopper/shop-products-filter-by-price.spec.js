const { test: baseTest, expect, tags } = require( '../../fixtures/fixtures' );
const { fillPageTitle } = require( '../../utils/editor' );
const { getInstalledWordPressVersion } = require( '../../utils/wordpress' );

/**
 * External dependencies
 */
import {
	getCanvas,
	insertBlock,
	insertBlockByShortcut,
	goToPageEditor,
	publishPage,
} from '@woocommerce/e2e-utils-playwright';

const singleProductPrice1 = '10';
const singleProductPrice2 = '50';
const singleProductPrice3 = '200';

const simpleProductName = 'AAA Filter Products';

let product1Id, product2Id, product3Id;

// Extend the baseTest object
const test = baseTest.extend( {
	storageState: process.env.ADMINSTATE,
	testPageTitlePrefix: 'Products filter',
} );

//todo audit follow-up: see plugins/woocommerce-blocks/tests/e2e/tests/product-filters/price-filter-frontend.block_theme.spec.ts
test.describe(
	'Filter items in the shop by product price',
	{
		tag: [
			tags.PAYMENTS,
			tags.SERVICES,
			tags.SKIP_ON_WPCOM,
			tags.SKIP_ON_PRESSABLE,
			tags.COULD_BE_LOWER_LEVEL_TEST,
		],
	},
	() => {
		test.beforeAll( async ( { api } ) => {
			// add products
			await api
				.post( 'products', {
					name: simpleProductName + ' 1',
					type: 'simple',
					regular_price: singleProductPrice1,
				} )
				.then( ( response ) => {
					product1Id = response.data.id;
				} );
			await api
				.post( 'products', {
					name: simpleProductName + ' 2',
					type: 'simple',
					regular_price: singleProductPrice2,
				} )
				.then( ( response ) => {
					product2Id = response.data.id;
				} );
			await api
				.post( 'products', {
					name: simpleProductName + ' 3',
					type: 'simple',
					regular_price: singleProductPrice3,
				} )
				.then( ( response ) => {
					product3Id = response.data.id;
				} );
		} );

		test.afterAll( async ( { api } ) => {
			await api.post( 'products/batch', {
				delete: [ product1Id, product2Id, product3Id ],
			} );
		} );

		test( 'filter products by prices on the created page', async ( {
			page,
			testPage,
		} ) => {
			const productTitleSelector = 'h3.wp-block-post-title';
			const product1 = page
				.locator( productTitleSelector )
				.filter( { hasText: `${ simpleProductName } 1` } );
			const product2 = page
				.locator( productTitleSelector )
				.filter( { hasText: `${ simpleProductName } 2` } );
			const product3 = page
				.locator( productTitleSelector )
				.filter( { hasText: `${ simpleProductName } 3` } );

			await goToPageEditor( { page } );
			await fillPageTitle( page, testPage.title );
			await insertBlockByShortcut( page, 'Filter by Price' );
			const wordPressVersion = await getInstalledWordPressVersion();
			await insertBlock( page, 'Product Collection', wordPressVersion );
			const canvas = await getCanvas( page );
			await canvas
				.getByRole( 'button', {
					name: 'create your own',
					exact: true,
				} )
				.click();
			await publishPage( page, testPage.title );

			// go to the page to test filtering products by price
			await page.goto( testPage.slug );
			await expect(
				page.getByRole( 'heading', { name: testPage.title } )
			).toBeVisible();

			// The price filter input is initially enabled, but it becomes disabled
			// for the time it takes to fetch the data. To avoid setting the filter
			// value before the input is properly initialized, we wait for the input
			// to be disabled first. This is a safeguard to avoid flakiness which
			// should be addressed in the code
			await page
				.getByRole( 'textbox', {
					name: 'Filter products by maximum price',
					disabled: true,
				} )
				.waitFor( { timeout: 3000 } )
				.catch( () => {
					// Do not throw in case Playwright doesn't make it in time for the
					// initial (pre-request) render.
				} );

			// filter by maximum $50 and verify the results
			await page
				.getByRole( 'textbox', { name: 'Filter products by maximum' } )
				.fill( '$50' );
			await page
				.getByRole( 'textbox', {
					name: 'Filter products by maximum price',
					disabled: true,
				} )
				.waitFor( { timeout: 3000 } )
				.catch( () => {
					// Do not throw in case Playwright doesn't make it in time for the
					// initial (pre-request) render.
				} );

			await expect( product1 ).toBeVisible();
			await expect( product2 ).toBeVisible();
			await expect( product3 ).toBeHidden();

			// filter by between $100 and $200 and verify the results
			await page
				.getByRole( 'textbox', { name: 'Filter products by maximum' } )
				.fill( '$200' );
			await page
				.getByRole( 'textbox', {
					name: 'Filter products by maximum price',
					disabled: true,
				} )
				.waitFor( { timeout: 3000 } )
				.catch( () => {
					// Do not throw in case Playwright doesn't make it in time for the
					// initial (pre-request) render.
				} );
			await page
				.getByRole( 'textbox', { name: 'Filter products by minimum' } )
				.fill( '$100' );
			await page
				.getByRole( 'textbox', {
					name: 'Filter products by maximum price',
					disabled: true,
				} )
				.waitFor( { timeout: 3000 } )
				.catch( () => {
					// Do not throw in case Playwright doesn't make it in time for the
					// initial (pre-request) render.
				} );

			await expect( product1 ).toBeHidden();
			await expect( product2 ).toBeHidden();
			await expect( product3 ).toBeVisible();
		} );
	}
);
