/**
 * External dependencies
 */
import {
	closeChoosePatternModal,
	openEditorSettings,
	getCanvas,
	insertBlock,
	goToPageEditor,
	transformIntoBlocks,
	publishPage,
} from '@woocommerce/e2e-utils-playwright';

/**
 * Internal dependencies
 */
import { ADMIN_STATE_PATH } from '../../playwright.config';

const { test: baseTest, expect, tags } = require( '../../fixtures/fixtures' );
const { fillPageTitle } = require( '../../utils/editor' );

const simpleProductName = 'Very Simple Product';
const singleProductPrice = '999.00';

let productId, shippingZoneId;

const test = baseTest.extend( {
	storageState: ADMIN_STATE_PATH,
	testPageTitlePrefix: 'Transformed checkout',
} );

test.describe(
	'Transform Classic Checkout To Checkout Block',
	{ tag: [ tags.GUTENBERG, tags.SERVICES ] },
	() => {
		test.beforeAll( async ( { api } ) => {
			// enable COD
			await api.put( 'payment_gateways/cod', {
				enabled: true,
			} );
			// add product
			await api
				.post( 'products', {
					name: simpleProductName,
					type: 'simple',
					regular_price: singleProductPrice,
				} )
				.then( ( response ) => {
					productId = response.data.id;
				} );
			// add shipping zone and method
			await api
				.post( 'shipping/zones', {
					name: 'Shipping Zone',
				} )
				.then( ( response ) => {
					shippingZoneId = response.data.id;
				} );
			await api.post( `shipping/zones/${ shippingZoneId }/methods`, {
				method_id: 'free_shipping',
			} );
		} );

		test.afterAll( async ( { api } ) => {
			await api.delete( `products/${ productId }`, {
				force: true,
			} );
			await api.put( 'payment_gateways/bacs', {
				enabled: false,
			} );
			await api.put( 'payment_gateways/cod', {
				enabled: false,
			} );
			await api.delete( `shipping/zones/${ shippingZoneId }`, {
				force: true,
			} );
		} );

		test(
			'can transform classic checkout to checkout block',
			{ tag: tags.SKIP_ON_PRESSABLE },
			async ( { page, api, testPage } ) => {
				await goToPageEditor( { page } );

				await closeChoosePatternModal( { page } );

				await fillPageTitle( page, testPage.title );
				await insertBlock(
					page,
					'Classic Checkout',
					Date.now().toString()
				);
				await transformIntoBlocks( page );

				// When Gutenberg is active, the canvas is in an iframe
				let canvas = await getCanvas( page );

				// Open Settings sidebar if closed
				await openEditorSettings( { page } );

				// Activate the terms and conditions checkbox
				await canvas
					.getByLabel( 'Block: Terms and Conditions' )
					.click();
				await page.getByLabel( 'Require checkbox' ).check();

				await publishPage( page, testPage.title );

				// add additional payment option after page creation
				const r = await api.put( 'payment_gateways/bacs', {
					enabled: true,
				} );
				expect( r.data.enabled ).toBe( true );
				await page.reload();

				// Mandatory to wait for the editor content, to ensure the iframe is loaded (if Gutenberg is active)
				await expect(
					page.getByLabel( 'Editor content' )
				).toBeVisible();

				// Get the canvas again after the page reload
				canvas = await getCanvas( page );

				await expect(
					canvas.getByText( 'Direct bank transfer' )
				).toBeVisible();
				await expect(
					canvas.getByText( 'Cash on delivery' )
				).toBeVisible();

				// add additional shipping methods after page creation
				await api.post( `shipping/zones/${ shippingZoneId }/methods`, {
					method_id: 'flat_rate',
					settings: {
						cost: '5.00',
					},
				} );
				await api.post( `shipping/zones/${ shippingZoneId }/methods`, {
					method_id: 'local_pickup',
				} );
				await page.reload();

				// verify that added shipping methods are present
				// there is issue in blocks: #45747 unable to verify the shipping methods
				// please uncomment below when the issue is resolved
				// await expect( page.getByLabel( 'Free shipping' ) ).toBeVisible();
				// await expect( page.getByLabel( 'Local pickup' ) ).toBeVisible();
				// await expect( page.getByLabel( 'Flat rate' ) ).toBeVisible();

				// go to frontend to verify transformed checkout block
				// before that add product to cart to be able to visit checkout page
				await page.goto( `cart/?add-to-cart=${ productId }` );
				await page.goto( testPage.slug );
				await expect(
					page.getByRole( 'heading', { name: testPage.title } )
				).toBeVisible();
				await expect(
					page.getByRole( 'heading', { name: 'Contact information' } )
				).toBeVisible();
				await expect(
					page
						.locator(
							'.wp-block-woocommerce-checkout-order-summary-block'
						)
						.first()
				).toBeVisible();
				await expect(
					page.locator( '.wc-block-components-address-form' ).first()
				).toBeVisible();

				// verify existence of the terms & conditions and privacy policy checkbox
				await expect(
					page.getByText(
						'You must accept our Terms and Conditions and Privacy Policy to continue with your purchase.'
					)
				).toBeVisible();
				await expect(
					page.locator( '#terms-and-conditions' )
				).toBeVisible();
				await page.locator( '#terms-and-conditions' ).check();
				await expect(
					page.locator( '#terms-and-conditions' )
				).toBeChecked();
			}
		);
	}
);
