/**
 * Internal dependencies
 */
import { customer } from '../../test-data/data';
import { logIn } from '../../utils/login';
import { setOption } from '../../utils/options';
import { activateTheme } from '../../utils/themes';
const { test, expect, request } = require( '@playwright/test' );
const wcApi = require( '@woocommerce/woocommerce-rest-api' ).default;
const productName = `Out of stock product test ${ Date.now() }`;
const productPrice = '13.99';
test.describe( 'Feature: Signing up', () => {
	let productData, api;
	test.beforeAll( async ( { baseURL } ) => {
		activateTheme( baseURL, 'twentytwentythree' );
		api = new wcApi( {
			url: baseURL,
			consumerKey: process.env.CONSUMER_KEY,
			consumerSecret: process.env.CONSUMER_SECRET,
			version: 'wc/v3',
		} );
	} );
	test.beforeEach( async ( { baseURL } ) => {
		try {
			await setOption(
				request,
				baseURL,
				'woocommerce_coming_soon',
				'no'
			);
			await setOption(
				request,
				baseURL,
				'wc_bis_account_required',
				'no'
			);
			await setOption( request, baseURL, 'wc_bis_opt_in_required', 'no' );
			await setOption(
				request,
				baseURL,
				'wc_bis_double_opt_in_required',
				'no'
			);
		} catch ( error ) {
			console.log( error );
		}
	} );
	test.afterEach( async ( {} ) => {
		await api.post( 'products/batch', {
			delete: [ productData.id ],
		} );
	} );
	test.describe( 'Logged in', () => {
		test.use( { storageState: process.env.CUSTOMERSTATE } );
		test( 'Simple product', async ( { page } ) => {
			await api
				.post( 'products', {
					name: productName,
					type: 'simple',
					regular_price: productPrice,
					stock_status: 'outofstock',
				} )
				.then( ( response ) => {
					console.log( response );
					productData = response.data;
				} );
			page.goto( productData.permalink );
			await expect(
				page.getByText(
					'Want to be notified when this product is back in stock?'
				)
			).toBeVisible();
			await expect(
				page.getByPlaceholder( 'Enter your e-mail' )
			).not.toBeVisible();
			await expect(
				page.getByLabel(
					'Use this e-mail address to send me availability alerts and updates.'
				)
			).not.toBeVisible();
			await page.click( 'text=Notify me' );
			await expect(
				page.getByText( 'You have successfully signed up' )
			).toBeVisible();
			await expect( page.getByText( 'Notify me' ) ).not.toBeVisible();
			await expect(
				page.getByText( 'Manage notifications' )
			).toBeVisible();
			page.goto( productData.permalink );
			await expect(
				page.getByText(
					'You have already joined the waitlist! Click here to manage your notifications.'
				)
			).toBeVisible();
		} );
		test( 'Variation product', async ( { page } ) => {
			await api
				.post( 'products', {
					name: 'A Variable Product',
					type: 'variable',
					attributes: [
						{
							name: 'Colour',
							visible: true,
							variation: true,
							options: [ 'Red', 'Green', 'Blue' ],
						},
					],
				} )
				.then( ( response ) => {
					console.log( response );
					productData = response.data;
				} );
			await api.post( 'products/' + productData.id + '/variations', {
				regular_price: '1.00',
				attributes: [
					{
						name: 'Colour',
						option: 'Red',
					},
				],
			} );
			await api.post( 'products/' + productData.id + '/variations', {
				regular_price: '1.00',
				stock_status: 'outofstock',
				attributes: [
					{
						name: 'Colour',
						option: 'Green',
					},
				],
			} );
			await page.goto( productData.permalink );
			await page.getByRole( 'combobox' ).selectOption( 'Red' );
			await expect(
				page.getByText(
					'Want to be notified when this product is back in stock?'
				)
			).not.toBeVisible();
			await page.getByRole( 'combobox' ).selectOption( 'Green' );
			await expect(
				page.getByText(
					'Want to be notified when this product is back in stock?'
				)
			).toBeVisible();
			await expect(
				page.getByPlaceholder( 'Enter your e-mail' )
			).not.toBeVisible();
			await expect(
				page.getByLabel(
					'Use this e-mail address to send me availability alerts and updates.'
				)
			).not.toBeVisible();
			await page.click( 'text=Notify me' );
			await expect(
				page.getByText( 'You have successfully signed up' )
			).toBeVisible();
			await expect( page.getByText( 'Notify me' ) ).not.toBeVisible();
			await expect(
				page.getByText( 'Manage notifications' )
			).toBeVisible();
			page.goto( productData.permalink );
			await page.getByRole( 'combobox' ).selectOption( 'Green' );
			await expect(
				page.getByText(
					'You have already joined the waitlist! Click here to manage your notifications.'
				)
			).toBeVisible();
		} );
		test( 'Variation with an attribute with value "any"', async ( {
			page,
		} ) => {
			await api
				.post( 'products', {
					name: 'A Variable Product with any',
					type: 'variable',
					attributes: [
						{
							name: 'Colour',
							visible: true,
							variation: true,
							options: [ 'Red', 'Green', 'Blue' ],
						},
					],
				} )
				.then( ( response ) => {
					console.log( response );
					productData = response.data;
				} );
			await api.post( 'products/' + productData.id + '/variations', {
				regular_price: '1.00',
				stock_status: 'outofstock',
			} );
			await page.goto( productData.permalink );
			await page.getByRole( 'combobox' ).selectOption( 'Red' );
			await expect(
				page.getByText(
					'Want to be notified when this product is back in stock?'
				)
			).toBeVisible();
			await expect( page.getByText( 'Notify me' ) ).toBeVisible();
			await expect(
				page.getByPlaceholder( 'Enter your e-mail' )
			).not.toBeVisible();
			await expect(
				page.getByLabel(
					'Use this e-mail address to send me availability alerts and updates.'
				)
			).not.toBeVisible();
			await page.click( 'text=Notify me' );
			await expect(
				page.getByText( 'You have successfully signed up' )
			).toBeVisible();
			await expect( page.getByText( 'Notify me' ) ).toBeVisible();
		} );
	} );
	test.describe( 'Guest', () => {
		test( 'Sign-ups are limited to logged-in users', async ( {
			page,
			baseURL,
		} ) => {
			await api
				.post( 'products', {
					name: productName,
					type: 'simple',
					regular_price: productPrice,
					stock_status: 'outofstock',
				} )
				.then( ( response ) => {
					console.log( response );
					productData = response.data;
				} );
			await setOption(
				request,
				baseURL,
				'wc_bis_account_required',
				'yes'
			);
			await page.goto( productData.permalink );
			await expect(
				page.getByPlaceholder( 'Enter your e-mail' )
			).not.toBeVisible();
			await expect(
				page.getByLabel(
					'Use this e-mail address to send me availability alerts and updates.'
				)
			).not.toBeVisible();
			await page.click( 'text=Notify me' );
			await expect(
				page.getByText(
					'Please log in to complete the sign-up process.'
				)
			).toBeVisible();
			await logIn( page, customer.email, customer.password, false );
			await expect(
				page.getByText( 'You have successfully signed up' )
			).toBeVisible();
			await expect(
				page.getByText( 'Manage notifications' )
			).toBeVisible();
		} );
		test( 'Sign-ups are single opt-in without checkbox', async ( {
			baseURL,
			page,
		} ) => {
			await api
				.post( 'products', {
					name: productName,
					type: 'simple',
					regular_price: productPrice,
					stock_status: 'outofstock',
				} )
				.then( ( response ) => {
					console.log( response );
					productData = response.data;
				} );
			await setOption(
				request,
				baseURL,
				'wc_bis_account_required',
				'no'
			);
			await setOption( request, baseURL, 'wc_bis_opt_in_required', 'no' );
			await page.goto( productData.permalink );
			await expect(
				page.getByLabel(
					'Use this e-mail address to send me availability alerts and updates.'
				)
			).not.toBeVisible();
			await page
				.getByPlaceholder( 'Enter your e-mail' )
				.fill( customer.email );
			await page.click( 'text=Notify me' );
			await expect(
				page.getByText( 'You have successfully signed up' )
			).toBeVisible();
		} );
		test( 'Sign-ups are single opt-in with checkbox', async ( {
			page,
			baseURL,
		} ) => {
			await api
				.post( 'products', {
					name: productName,
					type: 'simple',
					regular_price: productPrice,
					stock_status: 'outofstock',
				} )
				.then( ( response ) => {
					console.log( response );
					productData = response.data;
				} );
			await setOption(
				request,
				baseURL,
				'wc_bis_opt_in_required',
				'yes'
			);
			await page.goto( productData.permalink );
			await expect(
				page.getByText(
					'Want to be notified when this product is back in stock?'
				)
			).toBeVisible();
			await page
				.getByPlaceholder( 'Enter your e-mail' )
				.fill( customer.email );
			await page
				.getByLabel(
					'Use this e-mail address to send me availability alerts and updates.'
				)
				.check();
			await page.click( 'text=Notify me' );
			await expect(
				page.getByText( 'You have successfully signed up' )
			).toBeVisible();
		} );
		test( 'Sign-ups are double opt-in', async ( { baseURL, page } ) => {
			await setOption(
				request,
				baseURL,
				'wc_bis_double_opt_in_required',
				'yes'
			);
			await api
				.post( 'products', {
					name: productName,
					type: 'simple',
					regular_price: productPrice,
					stock_status: 'outofstock',
				} )
				.then( ( response ) => {
					console.log( response );
					productData = response.data;
				} );
			await setOption(
				request,
				baseURL,
				'wc_bis_opt_in_required',
				'yes'
			);
			await page.goto( productData.permalink );
			await expect(
				page.getByText(
					'Want to be notified when this product is back in stock?'
				)
			).toBeVisible();
			await page
				.getByPlaceholder( 'Enter your e-mail' )
				.fill( customer.email );
			await page
				.getByLabel(
					'Use this e-mail address to send me availability alerts and updates.'
				)
				.check();
			await page.getByText( 'Notify me' ).click();
			await expect(
				page.getByText(
					'Thanks for signing up! Please complete the sign-up process by following the verification link sent to your e-mail.'
				)
			).toBeVisible();
		} );
		test( 'Sign-ups are single opt-in and create new account', async ( {
			baseURL,
			page,
		} ) => {
			await setOption(
				request,
				baseURL,
				'wc_bis_opt_in_required',
				'yes'
			);
			await setOption(
				request,
				baseURL,
				'wc_bis_create_new_account_on_registration',
				'yes'
			);
			await api
				.post( 'products', {
					name: productName,
					type: 'simple',
					regular_price: productPrice,
					stock_status: 'outofstock',
				} )
				.then( ( response ) => {
					console.log( response );
					productData = response.data;
				} );
			page.goto( productData.permalink );
			await expect(
				page.getByText(
					'Want to be notified when this product is back in stock?'
				)
			).toBeVisible();
			await page
				.getByPlaceholder( 'Enter your e-mail' )
				.fill( customer.email );
			await page
				.getByLabel(
					'Use this e-mail address to send me availability alerts and updates.'
				)
				.check();
			await page.click( 'text=Notify me' );
			await expect(
				page.getByText( 'You have successfully signed up' )
			).toBeVisible();
		} );
		test( 'Sign-ups are double opt-in and create new account', async ( {
			baseURL,
			page,
		} ) => {
			await setOption(
				request,
				baseURL,
				'wc_bis_double_opt_in_required',
				'yes'
			);
			await setOption(
				request,
				baseURL,
				'wc_bis_create_new_account_on_registration',
				'yes'
			);
			await api
				.post( 'products', {
					name: productName,
					type: 'simple',
					regular_price: productPrice,
					stock_status: 'outofstock',
				} )
				.then( ( response ) => {
					console.log( response );
					productData = response.data;
				} );
			page.goto( productData.permalink );
			await expect(
				page.getByText(
					'Want to be notified when this product is back in stock?'
				)
			).toBeVisible();
			await page
				.getByPlaceholder( 'Enter your e-mail' )
				.fill( customer.email );
			await page.click( 'text=Notify me' );
			await expect(
				page.getByText(
					'Thanks for signing up! Please complete the sign-up process by following the verification link sent to your e-mail.'
				)
			).toBeVisible();
		} );
	} );
} );
