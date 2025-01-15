/**
 * Internal dependencies
 */
import { setOption } from '../../utils/options';
import { activateTheme } from '../../utils/themes';
import AcceptanceHelper from './helper';
const { test, request } = require( '@playwright/test' );
test.describe( 'Feature: Viewing Subscribers Count', () => {
	let helper;
	test.beforeAll( async ( { baseURL } ) => {
		activateTheme( baseURL, 'twentytwentythree' );
	} );
	test.beforeEach( async ( { baseURL, page } ) => {
		await setOption( request, baseURL, 'woocommerce_coming_soon', 'no' );
		await setOption( request, baseURL, 'wc_bis_account_required', 'no' );
		await setOption( request, baseURL, 'wc_bis_opt_in_required', 'no' );
		await setOption(
			request,
			baseURL,
			'wc_bis_double_opt_in_required',
			'no'
		);
		helper = new AcceptanceHelper( baseURL, page );
	} );
	test.afterEach( async ( {} ) => {
		helper.deleteAllProducts();
	} );
	test( 'View number of customers who have joined the waitlist', async () => {
		const { given, when, then } = helper;
		await given.numberOfCustomerWhoHaveJoinedTheWaitlistIsVisible();
		await given.signUpsAreSingleOptInWithoutCheckbox();
		await given.iGoToTheProductPage();
		await when.iEnterMyEmail();
		await when.iClickTheNotifyMeButton();

		await when.iGoToTheProductPage();
		await then.iSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock();
		await then.iSeeASignUpButton();
		await then.iSeeThatSomeCustomersHaveAlreadySignedUp();
	} );
} );
