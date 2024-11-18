/**
 * External dependencies
 */
import { expect, test as base, FrontendUtils } from '@woocommerce/e2e-utils';

/**
 * Internal dependencies
 */
import { CheckoutPage } from '../checkout/checkout.page';
import { REGULAR_PRICED_PRODUCT_NAME } from '../checkout/constants';

const test = base.extend< { checkoutPageObject: CheckoutPage } >( {
	checkoutPageObject: async ( { page }, use ) => {
		const pageObject = new CheckoutPage( {
			page,
		} );
		await use( pageObject );
	},
} );

test.describe( 'Merchant → Shipping', () => {
	test( 'Merchant can enable shipping calculator and hide shipping costs before address is entered', async ( {
		page,
		shippingUtils,
		localPickupUtils,
	} ) => {
		await localPickupUtils.disableLocalPickup();

		await shippingUtils.enableShippingCalculator();
		await shippingUtils.enableShippingCostsRequireAddress();

		await expect(
			page.getByLabel( 'Enable the shipping calculator on the cart page' )
		).toBeChecked();

		await expect(
			page.getByLabel( 'Hide shipping costs until an address is entered' )
		).toBeChecked();
	} );
} );

test.describe( 'Shopper → Shipping', () => {
	test.beforeEach( async ( { shippingUtils } ) => {
		await shippingUtils.enableShippingCostsRequireAddress();
	} );

	test( 'Guest user can see shipping calculator on cart page', async ( {
		requestUtils,
		browser,
	} ) => {
		const guestContext = await browser.newContext( {
			storageState: { cookies: [], origins: [] },
		} );
		const userPage = await guestContext.newPage();

		const userFrontendUtils = new FrontendUtils( userPage, requestUtils );

		await userFrontendUtils.goToShop();
		await userFrontendUtils.addToCart( REGULAR_PRICED_PRODUCT_NAME );
		await userFrontendUtils.goToCart();

		// Note, the country should not be displayed here as we set the storageState to empty.
		// However this behaviour of displaying the country despite storageState being empty
		// is not new and only surfaced as we started displaying country in the shipping calculator panel.
		// At some point in future we should determine why this happens.
		await expect(
			userPage.getByText( 'No delivery options available for' )
		).toBeVisible();
	} );

	test( 'Guest user does not see shipping rates until full address is entered', async ( {
		requestUtils,
		browser,
	} ) => {
		const guestContext = await browser.newContext();
		const userPage = await guestContext.newPage();

		const userFrontendUtils = new FrontendUtils( userPage, requestUtils );
		const userCheckoutPageObject = new CheckoutPage( { page: userPage } );

		await userFrontendUtils.goToShop();
		await userFrontendUtils.addToCart( REGULAR_PRICED_PRODUCT_NAME );
		await userFrontendUtils.goToCheckout();

		await expect(
			userPage.getByText(
				'Enter a shipping address to view shipping options.'
			)
		).toBeVisible();

		await userCheckoutPageObject.fillInCheckoutWithTestData();

		await expect(
			userPage.getByText(
				'Enter a shipping address to view shipping options.'
			)
		).toBeHidden();
	} );
} );
