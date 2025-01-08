const { test, expect } = require( '@playwright/test' );
const { tags } = require( '../../fixtures/fixtures' );

// TODO (E2E Audit): Not E2E. This test could be combined with the tests from admin-analytics/analytics-overview.spec.js to be more efficient.
test.describe(
	'Analytics pages',
	{ tag: [ tags.PAYMENTS, tags.SERVICES, tags.NOT_E2E ] },
	() => {
		test.use( { storageState: process.env.ADMINSTATE } );

		for ( const aPages of [
			'Overview',
			'Products',
			'Revenue',
			'Orders',
			'Variations',
			'Categories',
			'Coupons',
			'Taxes',
			'Downloads',
			'Stock',
			'Settings',
		] ) {
			test( `A user can view the ${ aPages } page without it crashing`, async ( {
				page,
			} ) => {
				const urlTitle = aPages.toLowerCase();
				await page.goto(
					`wp-admin/admin.php?page=wc-admin&path=%2Fanalytics%2F${ urlTitle }`
				);
				const pageTitle = page.locator(
					'.woocommerce-layout__header-wrapper > h1'
				);
				await expect( pageTitle ).toContainText( aPages );
				await expect(
					page.locator( '#woocommerce-layout__primary' )
				).toBeVisible();
			} );
		}
	}
);
