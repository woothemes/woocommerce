const { test: baseTest, expect, tags } = require( '../../fixtures/fixtures' );
const { ADMIN_STATE_PATH } = require( '../../playwright.config' );
// test case for bug https://github.com/woocommerce/woocommerce/pull/46429
const test = baseTest.extend( {
	storageState: ADMIN_STATE_PATH,
	page: async ( { page, wpApi }, use ) => {
		const response = await wpApi.get( `./wp-json/wp/v2/pages?slug=shop`, {
			data: {
				_fields: [ 'id' ],
			},
		} );

		const pages = await response.json();
		const pageId = pages[ 0 ].id;

		await wpApi.delete( `./wp-json/wp/v2/pages/${ pageId }`, {
			data: {
				force: false,
			},
		} );

		await use( page );

		await wpApi.post( `./wp-json/wp/v2/pages/${ pageId }`, {
			data: {
				status: 'publish',
			},
		} );
	},
} );

test(
	'Check the title of the shop page after the page has been deleted',
	{ tag: [ tags.COULD_BE_LOWER_LEVEL_TEST ] },
	async ( { page } ) => {
		await page.goto( 'shop/' );
		expect( await page.title() ).toBe(
			'Shop – WooCommerce Core E2E Test Suite'
		);
	}
);
