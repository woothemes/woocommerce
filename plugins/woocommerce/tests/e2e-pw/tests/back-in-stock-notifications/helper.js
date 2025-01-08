/**
 * External dependencies
 */
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { expect, request } from '@playwright/test';

/**
 * Internal dependencies
 */
import { setOption } from '../../utils/options';
import { logIn } from '../../utils/login';
import { customer } from '../../test-data/data';

const productName = `Out of stock product test ${ Date.now() }`;
const productPrice = '13.99';

class AcceptanceHelper {
	constructor( baseURL, page ) {
		this.page = page;
		this.baseURL = baseURL;
		this.api = new WooCommerceRestApi( {
			url: baseURL,
			consumerKey: process.env.CONSUMER_KEY,
			consumerSecret: process.env.CONSUMER_SECRET,
			version: 'wc/v3',
		} );
	}
	given = {
		iAmViewingThePageOfASimpleProductThatIsOutOfStock:
			this.iAmViewingThePageOfASimpleProductThatIsOutOfStock.bind( this ),
		iGoToTheProductPage: this.iGoToTheProductPage.bind( this ),
		iAmViewingThePageOfAVariableProductThatContainsOutOfStockVariations:
			this.iAmViewingThePageOfAVariableProductThatContainsOutOfStockVariations.bind(
				this
			),
		iAmViewingThePageOfAVariableProductThatContainsOutOfStockVariationsWithAnAttributeWithValueAny:
			this.iAmViewingThePageOfAVariableProductThatContainsOutOfStockVariationsWithAnAttributeWithValueAny.bind(
				this
			),
		signUpsAreLimitedToLoggedInUsers:
			this.signUpsAreLimitedToLoggedInUsers.bind( this ),
		signUpsAreSingleOptInWithoutCheckbox:
			this.signUpsAreSingleOptInWithoutCheckbox.bind( this ),
		signUpsAreSingleOptInWithCheckbox:
			this.signUpsAreSingleOptInWithCheckbox.bind( this ),
		signUpsAreDoubleOptIn: this.signUpsAreDoubleOptIn.bind( this ),
		signUpsAreSingleOptInAndANewAccountIsCreatedOnSignUp:
			this.signUpsAreSingleOptInAndANewAccountIsCreatedOnSignUp.bind(
				this
			),
		signUpsAreDoubleOptInAndANewAccountIsCreatedOnSignUp:
			this.signUpsAreDoubleOptInAndANewAccountIsCreatedOnSignUp.bind(
				this
			),
	};
	when = {
		iClickTheNotifyMeButton: this.iClickTheNotifyMeButton.bind( this ),
		iChooseAVariationThatIsInStock:
			this.iChooseAVariationThatIsInStock.bind( this ),
		iChooseAVariationThatIsOutOfStock:
			this.iChooseAVariationThatIsOutOfStock.bind( this ),
		iLogInToMyAccount: this.iLogInToMyAccount.bind( this ),
		iEnterMyEmail: this.iEnterMyEmail.bind( this ),
		iTickTheCheckbox: this.iTickTheCheckbox.bind( this ),
	};
	then = {
		iSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock:
			this.iSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock.bind(
				this
			),
		iDontSeeAFieldToEnterMyEmail:
			this.iDontSeeAFieldToEnterMyEmail.bind( this ),
		iDontSeeAnOptInCheckbox: this.iDontSeeAnOptInCheckbox.bind( this ),
		iSeeThatMySignupRequestWasSuccessful:
			this.iSeeThatMySignupRequestWasSuccessful.bind( this ),
		iDontSeeASignUpButton: this.iDontSeeASignUpButton.bind( this ),
		iSeeAPromptToManageMyNotifications:
			this.iSeeAPromptToManageMyNotifications.bind( this ),
		iSeeThatIAlreadyJoinedTheWaitlist:
			this.iSeeThatIAlreadyJoinedTheWaitlist.bind( this ),
		iDontSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock:
			this.iDontSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock.bind(
				this
			),
		iSeeAFieldToEnterMyEmail: this.iSeeAFieldToEnterMyEmail.bind( this ),
		iSeeAPromptToLogInToMyAccount:
			this.iSeeAPromptToLogInToMyAccount.bind( this ),
		iSeeAnOptInCheckbox: this.iSeeAnOptInCheckbox.bind( this ),
		iAmPromptedToCheckMyEmail: this.iAmPromptedToCheckMyEmail.bind( this ),
	};

	async signUpsAreDoubleOptInAndANewAccountIsCreatedOnSignUp() {
		await setOption(
			request,
			this.baseURL,
			'wc_bis_double_opt_in_required',
			'yes'
		);
		await setOption(
			request,
			this.baseURL,
			'wc_bis_create_new_account_on_registration',
			'yes'
		);
		await this.api
			.post( 'products', {
				name: productName,
				type: 'simple',
				regular_price: productPrice,
				stock_status: 'outofstock',
			} )
			.then( ( response ) => {
				this.productData = response.data;
			} );
		this.page.goto( this.productData.permalink );
	}

	async signUpsAreSingleOptInAndANewAccountIsCreatedOnSignUp() {
		await setOption(
			request,
			this.baseURL,
			'wc_bis_opt_in_required',
			'yes'
		);
		await setOption(
			request,
			this.baseURL,
			'wc_bis_create_new_account_on_registration',
			'yes'
		);
		await this.api
			.post( 'products', {
				name: productName,
				type: 'simple',
				regular_price: productPrice,
				stock_status: 'outofstock',
			} )
			.then( ( response ) => {
				this.productData = response.data;
			} );
		this.page.goto( this.productData.permalink );
	}

	async iAmPromptedToCheckMyEmail() {
		await expect(
			this.page.getByText(
				'Thanks for signing up! Please complete the sign-up process by following the verification link sent to your e-mail.'
			)
		).toBeVisible();
	}

	async signUpsAreDoubleOptIn() {
		await setOption(
			request,
			this.baseURL,
			'wc_bis_double_opt_in_required',
			'yes'
		);
		await this.api
			.post( 'products', {
				name: productName,
				type: 'simple',
				regular_price: productPrice,
				stock_status: 'outofstock',
			} )
			.then( ( response ) => {
				this.productData = response.data;
			} );
		await setOption(
			request,
			this.baseURL,
			'wc_bis_opt_in_required',
			'yes'
		);
		await this.page.goto( this.productData.permalink );
	}

	async signUpsAreSingleOptInWithCheckbox() {
		await this.api
			.post( 'products', {
				name: productName,
				type: 'simple',
				regular_price: productPrice,
				stock_status: 'outofstock',
			} )
			.then( ( response ) => {
				this.productData = response.data;
			} );
		await setOption(
			request,
			this.baseURL,
			'wc_bis_opt_in_required',
			'yes'
		);
		await this.page.goto( this.productData.permalink );
	}

	async signUpsAreSingleOptInWithoutCheckbox() {
		await this.api
			.post( 'products', {
				name: productName,
				type: 'simple',
				regular_price: productPrice,
				stock_status: 'outofstock',
			} )
			.then( ( response ) => {
				this.productData = response.data;
			} );
		await setOption(
			request,
			this.baseURL,
			'wc_bis_account_required',
			'no'
		);
		await setOption(
			request,
			this.baseURL,
			'wc_bis_opt_in_required',
			'no'
		);
		await this.page.goto( this.productData.permalink );
	}

	async iLogInToMyAccount() {
		await logIn( this.page, customer.email, customer.password, false );
	}

	async iSeeAPromptToLogInToMyAccount() {
		await expect(
			this.page.getByText(
				'Please log in to complete the sign-up process.'
			)
		).toBeVisible();
	}

	async signUpsAreLimitedToLoggedInUsers() {
		await this.api
			.post( 'products', {
				name: productName,
				type: 'simple',
				regular_price: productPrice,
				stock_status: 'outofstock',
			} )
			.then( ( response ) => {
				this.productData = response.data;
			} );
		await setOption(
			request,
			this.baseURL,
			'wc_bis_account_required',
			'yes'
		);
		await this.page.goto( this.productData.permalink );
	}

	async iAmViewingThePageOfASimpleProductThatIsOutOfStock() {
		await this.api
			.post( 'products', {
				name: productName,
				type: 'simple',
				regular_price: productPrice,
				stock_status: 'outofstock',
			} )
			.then( ( response ) => {
				this.productData = response.data;
			} );
		this.page.goto( this.productData.permalink );
	}

	async iAmViewingThePageOfAVariableProductThatContainsOutOfStockVariationsWithAnAttributeWithValueAny() {
		await this.api
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
				this.productData = response.data;
			} );
		await this.api.post(
			'products/' + this.productData.id + '/variations',
			{
				regular_price: '1.00',
				stock_status: 'outofstock',
			}
		);
		await this.page.goto( this.productData.permalink );
	}

	iChooseAVariationThatIsInStock() {
		return this.page.getByRole( 'combobox' ).selectOption( 'Red' );
	}

	iChooseAVariationThatIsOutOfStock() {
		return this.page.getByRole( 'combobox' ).selectOption( 'Green' );
	}

	async iAmViewingThePageOfAVariableProductThatContainsOutOfStockVariations() {
		await this.api
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
				this.productData = response.data;
			} );
		await this.api.post(
			'products/' + this.productData.id + '/variations',
			{
				regular_price: '1.00',
				attributes: [
					{
						name: 'Colour',
						option: 'Red',
					},
				],
			}
		);
		await this.api.post(
			'products/' + this.productData.id + '/variations',
			{
				regular_price: '1.00',
				stock_status: 'outofstock',
				attributes: [
					{
						name: 'Colour',
						option: 'Green',
					},
				],
			}
		);
		await this.page.goto( this.productData.permalink );
	}

	async iSeeThatIAlreadyJoinedTheWaitlist() {
		return expect(
			this.page.getByText(
				'You have already joined the waitlist! Click here to manage your notifications.'
			)
		).toBeVisible();
	}

	iGoToTheProductPage() {
		this.page.goto( this.productData.permalink );
	}

	iSeeAPromptToManageMyNotifications() {
		return expect(
			this.page.getByText( 'Manage notifications' )
		).toBeVisible();
	}

	iDontSeeASignUpButton() {
		return expect( this.page.getByText( 'Notify me' ) ).not.toBeVisible();
	}

	iClickTheNotifyMeButton() {
		return this.page.click( 'text=Notify me' );
	}

	iSeeThatMySignupRequestWasSuccessful() {
		return expect(
			this.page.getByText( 'You have successfully signed up' )
		).toBeVisible();
	}

	iDontSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock() {
		return expect(
			this.page.getByText(
				'Want to be notified when this product is back in stock?'
			)
		).not.toBeVisible();
	}

	async iTickTheCheckbox() {
		await this.page
			.getByLabel(
				'Use this e-mail address to send me availability alerts and updates.'
			)
			.check();
	}

	iSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock() {
		return expect(
			this.page.getByText(
				'Want to be notified when this product is back in stock?'
			)
		).toBeVisible();
	}

	iSeeAFieldToEnterMyEmail() {
		return expect(
			this.page.getByPlaceholder( 'Enter your e-mail' )
		).toBeVisible();
	}

	iDontSeeAFieldToEnterMyEmail() {
		return expect(
			this.page.getByPlaceholder( 'Enter your e-mail' )
		).not.toBeVisible();
	}

	iSeeAnOptInCheckbox() {
		return expect(
			this.page.getByLabel(
				'Use this e-mail address to send me availability alerts and updates.'
			)
		).toBeVisible();
	}

	iDontSeeAnOptInCheckbox() {
		return expect(
			this.page.getByLabel(
				'Use this e-mail address to send me availability alerts and updates.'
			)
		).not.toBeVisible();
	}

	iEnterMyEmail() {
		return this.page
			.getByPlaceholder( 'Enter your e-mail' )
			.fill( customer.email );
	}

	deleteAllProducts() {
		this.api.post( 'products/batch', {
			delete: [ this.productData.id ],
		} );
	}
}

export default AcceptanceHelper;
