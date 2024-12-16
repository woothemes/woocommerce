/**
 * External dependencies
 */
import {
	addAProductToCart,
	getOrderIdFromUrl,
} from '@woocommerce/e2e-utils-playwright';
const { test: baseTest, expect, tags } = require( '../../fixtures/fixtures' );
const { getFakeCustomer, getFakeProduct } = require( '../../utils/data' );

const test = baseTest.extend( {
	page: async ( { page, api }, use ) => {
		// get the current value of woocommerce_enable_checkout_login_reminder
		const response = await api.get(
			'settings/account/woocommerce_enable_checkout_login_reminder'
		);

		// enable the setting if it is not already enabled
		const initialValue = response.data.value;
		if ( initialValue !== 'yes' ) {
			await api.put(
				'settings/account/woocommerce_enable_checkout_login_reminder',
				{
					value: 'yes',
				}
			);
		}

		// Check id COD payment is enabled and enable it if it is not
		const codResponse = await api.get( 'payment_gateways/cod' );
		const codEnabled = codResponse.enabled;

		if ( ! codEnabled ) {
			await api.put( 'payment_gateways/cod', {
				enabled: true,
			} );
		}

		await use( page );

		// revert the setting to its original value
		if ( initialValue !== 'yes' ) {
			await api.put(
				'settings/account/woocommerce_enable_checkout_login_reminder',
				{
					value: initialValue,
				}
			);
		}

		if ( ! codEnabled ) {
			await api.put( 'payment_gateways/cod', {
				enabled: codEnabled,
			} );
		}
	},
	product: async ( { api }, use ) => {
		let product;

		await api.post( 'products', getFakeProduct() ).then( ( response ) => {
			product = response.data;
		} );

		await use( product );

		await api.delete( `products/${ product.id }`, { force: true } );
	},
	customer: async ( { api }, use ) => {
		const customerData = getFakeCustomer();
		let customer;

		await api.post( 'customers', customerData ).then( ( response ) => {
			customer = response.data;
			customer.password = customerData.password;
		} );

		// add a shipping zone and method for the customer
		let shippingZoneId;
		await api
			.post( 'shipping/zones', {
				name: `Free Shipping ${ customerData.shipping.city }`,
			} )
			.then( ( response ) => {
				shippingZoneId = response.data.id;
			} );
		await api.put( `shipping/zones/${ shippingZoneId }/locations`, [
			{
				code: `${ customerData.shipping.country }:${ customerData.shipping.state }`,
				type: 'state',
			},
		] );
		await api.post( `shipping/zones/${ shippingZoneId }/methods`, {
			method_id: 'free_shipping',
		} );

		await use( customer );

		await api.delete( `customers/${ customer.id }`, { force: true } );
		await api.delete( `shipping/zones/${ shippingZoneId }`, {
			force: true,
		} );
	},
	order: async ( { api }, use ) => {
		const order = {};
		await use( order );
		await api.delete( `orders/${ order.id }`, { force: true } );
	},
} );

test.describe(
	'Shopper Checkout Login Account',
	{ tag: [ tags.PAYMENTS, tags.SERVICES, tags.HPOS ] },
	() => {
		//todo audit follow-up: this is a variation of a checkout/placing an order flow,
		// should be part of another spec maybe. See checkout.spec.js
		test( 'can login to an existing account during checkout', async ( {
			page,
			product,
			customer,
			order,
		} ) => {
			await addAProductToCart( page, product.id );
			await page.goto( 'checkout/' );
			await page.locator( 'text=Click here to login' ).click();

			// fill in the customer account info
			await page.locator( '#username' ).fill( customer.username );
			await page.locator( '#password' ).fill( customer.password );
			await page.locator( 'button[name="login"]' ).click();

			// billing form should pre-populate
			await expect( page.locator( '#billing_first_name' ) ).toHaveValue(
				customer.billing.first_name
			);
			await expect( page.locator( '#billing_last_name' ) ).toHaveValue(
				customer.billing.last_name
			);
			await expect( page.locator( '#billing_address_1' ) ).toHaveValue(
				customer.billing.address_1
			);
			await expect( page.locator( '#billing_address_2' ) ).toHaveValue(
				customer.billing.address_2
			);
			await expect( page.locator( '#billing_city' ) ).toHaveValue(
				customer.billing.city
			);
			await expect( page.locator( '#billing_state' ) ).toHaveValue(
				customer.billing.state
			);
			await expect( page.locator( '#billing_postcode' ) ).toHaveValue(
				customer.billing.postcode
			);
			await expect( page.locator( '#billing_phone' ) ).toHaveValue(
				customer.billing.phone
			);

			// place an order
			await page.locator( 'text=Place order' ).click();
			await expect(
				page.getByText( 'Your order has been received' )
			).toBeVisible();

			order.id = getOrderIdFromUrl( page );

			await expect( page.getByText( customer.email ) ).toBeVisible();

			// check my account page
			await page.goto( 'my-account/' );
			await expect( page.url() ).toContain( 'my-account/' );
			await expect(
				page.getByRole( 'heading', { name: 'My account' } )
			).toBeVisible();
		} );
	}
);
