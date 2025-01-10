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

const now = Date.now();
const productName = `Out of stock product test ${ now }`;
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
		numberOfCustomerWhoHaveJoinedTheWaitlistIsVisible:
			this.numberOfCustomerWhoHaveJoinedTheWaitlistIsVisible.bind( this ),
		aSimpleProductThatIsOutOfStock:
			this.aSimpleProductThatIsOutOfStock.bind( this ),
		aVariableProductThatIsOutOfStock:
			this.aVariableProductThatIsOutOfStock.bind( this ),
		theProductHasNotifications:
			this.theProductHasNotifications.bind( this ),
		theVariationHasNotifications:
			this.theVariationHasNotifications.bind( this ),
		aVariableProductThatContainsOutOfStockVariationsWithAnAttributeWithValueAny:
			this.aVariableProductThatContainsOutOfStockVariationsWithAnAttributeWithValueAny.bind(
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
		iAmViewingThePageOfASimpleProductThatIsOutOfStock:
			this.iAmViewingThePageOfASimpleProductThatIsOutOfStock.bind( this ),
		iGoToTheProductPage: this.iGoToTheProductPage.bind( this ),
		iViewTheConfirmationIReceivedViaEmail:
			this.iViewTheConfirmationIReceivedViaEmail.bind( this ),
		iFollowTheLink: this.iFollowTheLink.bind( this ),
		iViewTheDoubleOptInVerificationIReceivedViaEmail:
			this.iViewTheDoubleOptInVerificationIReceivedViaEmail.bind( this ),
		iFollowTheConfirmLink: this.iFollowTheConfirmLink.bind( this ),
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
		iSeeASignUpButton: this.iSeeASignUpButton.bind( this ),
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
		iSeeThatSomeCustomersHaveAlreadySignedUp:
			this.iSeeThatSomeCustomersHaveAlreadySignedUp.bind( this ),
		iSeeSomeDetailsAboutTheProductISubscribedTo:
			this.iSeeSomeDetailsAboutTheProductISubscribedTo.bind( this ),
		iSeeSomeDetailsAboutTheVariationProductISubscribedTo:
			this.iSeeSomeDetailsAboutTheVariationProductISubscribedTo.bind(
				this
			),
		iSeeALinkToCancelMyRequest:
			this.iSeeALinkToCancelMyRequest.bind( this ),
		iSeeThatMyRequestWasCancelled:
			this.iSeeThatMyRequestWasCancelled.bind( this ),
		iAmPromptedToVerifyMyRequest:
			this.iAmPromptedToVerifyMyRequest.bind( this ),
		iSeeALinkToVerifyMyRequest:
			this.iSeeALinkToVerifyMyRequest.bind( this ),
		iSeeTheTitleOfTheVerificationEmail:
			this.iSeeTheTitleOfTheVerificationEmail.bind( this ),
		iSeeAMessageThatMyConfirmRequestWasSuccessful:
			this.iSeeAMessageThatMyConfirmRequestWasSuccessful.bind( this ),
		iCanSeeAConfirmationEmailWithDetailsAboutTheVariationProductISubscribedTo:
			this.iCanSeeAConfirmationEmailWithDetailsAboutTheVariationProductISubscribedTo.bind(
				this
			),
		iCanSeeAConfirmationEmailWithDetailsAboutTheProductISubscribedTo:
			this.iCanSeeAConfirmationEmailWithDetailsAboutTheProductISubscribedTo.bind(
				this
			),
	};

	async iCanSeeAConfirmationEmailWithDetailsAboutTheVariationProductISubscribedTo() {
		await this.iViewTheConfirmationIReceivedViaEmail();
		await this.iSeeSomeDetailsAboutTheVariationProductISubscribedTo();
	}

	async iCanSeeAConfirmationEmailWithDetailsAboutTheProductISubscribedTo() {
		await this.iViewTheConfirmationIReceivedViaEmail();
		await this.iSeeSomeDetailsAboutTheProductISubscribedTo();
	}

	async iSeeAMessageThatMyConfirmRequestWasSuccessful() {
		await expect(
			this.page.getByText(
				'Successfully verified stock notifications for'
			)
		).toBeVisible();
	}

	async iFollowTheConfirmLink() {
		await this.page
			.getByRole( 'link', { name: 'Confirm', exact: true } )
			.click();
	}

	async iSeeTheTitleOfTheVerificationEmail() {
		await expect(
			this.page.getByText(
				new RegExp( `Join the [“"]${ productName }[”"] waitlist.` )
			)
		).toBeVisible();
	}

	async iAmPromptedToVerifyMyRequest() {
		await expect(
			this.page.getByText(
				'Please follow the link below to complete the sign-up process'
			)
		).toBeVisible();
	}

	async iSeeALinkToVerifyMyRequest() {
		await expect(
			this.page.getByRole( 'link', { name: 'Confirm', exact: true } )
		).toBeVisible();
	}

	async iViewTheDoubleOptInVerificationIReceivedViaEmail() {
		await this.page.goto(
			'/verification-email/?notification_id=' + this.notificationId
		);
	}

	async iFollowTheLink() {
		await this.page.click( 'text=Click here' );
	}

	async iSeeThatMyRequestWasCancelled() {
		await expect(
			this.page.getByText( 'Successfully unsubscribe' )
		).toBeVisible();
	}

	async iSeeALinkToCancelMyRequest() {
		await expect(
			this.page.getByText(
				'You have received this message because your e-mail address was used to sign up for stock notifications on our store. Changed your mind? Click here to unsubscribe.'
			)
		).toBeVisible();
	}

	async iViewTheConfirmationIReceivedViaEmail() {
		await this.page.goto(
			'/confirmation-email/?notification_id=' + this.notificationId
		);
	}

	async iSeeSomeDetailsAboutTheProductISubscribedTo( name ) {
		await expect(
			this.page.getByText(
				new RegExp(
					`You have joined the [“"]${
						name || productName
					}[”"] waitlist.`
				)
			)
		).toBeVisible();
	}

	async iSeeThatSomeCustomersHaveAlreadySignedUp() {
		await expect(
			this.page.getByText( 'joined the waitlist' )
		).toBeVisible();
	}

	async numberOfCustomerWhoHaveJoinedTheWaitlistIsVisible() {
		await setOption(
			request,
			this.baseURL,
			'wc_bis_show_product_registrations_count',
			'yes'
		);
	}

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
	}

	async aSimpleProductThatIsOutOfStock() {
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
	}

	async theProductHasNotifications() {
		return this.api
			.post( 'create-bis-notifications', {
				product_id: this.productData.id,
			} )
			.then( ( response ) => {
				this.notificationId = response.data.data;
			} );
	}

	async theVariationHasNotifications() {
		return this.api
			.post( 'create-bis-notifications', {
				product_id: this.variationId,
			} )
			.then( ( response ) => {
				this.notificationId = response.data.data;
			} );
	}

	async iAmViewingThePageOfASimpleProductThatIsOutOfStock() {
		await this.aSimpleProductThatIsOutOfStock();
		this.page.goto( this.productData.permalink );
	}

	async aVariableProductThatContainsOutOfStockVariationsWithAnAttributeWithValueAny() {
		await this.api
			.post( 'products', {
				name: `A Variable Product with any ${ now }`,
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
		const variation = await this.api.post(
			'products/' + this.productData.id + '/variations',
			{
				regular_price: '1.00',
				stock_status: 'outofstock',
			}
		);
		this.outOfStockVariationType = 'free';
		this.variationId = variation.data.id;
	}

	async iAmViewingThePageOfAVariableProductThatContainsOutOfStockVariationsWithAnAttributeWithValueAny() {
		await this.aVariableProductThatContainsOutOfStockVariationsWithAnAttributeWithValueAny();
		await this.page.goto( this.productData.permalink );
	}

	iChooseAVariationThatIsInStock() {
		return this.page.getByRole( 'combobox' ).selectOption( 'Red' );
	}

	iChooseAVariationThatIsOutOfStock() {
		return this.page.getByRole( 'combobox' ).selectOption( 'Green' );
	}

	async iSeeSomeDetailsAboutTheVariationProductISubscribedTo() {
		// this is part of a regex and contains two types of dash characters.
		await this.iSeeSomeDetailsAboutTheProductISubscribedTo(
			this.outOfStockVariationType === 'defined'
				? `A Variable Product ${ now } [-–] Green`
				: `A Variable Product with any ${ now }`
		);
	}

	async aVariableProductThatIsOutOfStock() {
		await this.api
			.post( 'products', {
				name: `A Variable Product ${ now }`,
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
		const variation = await this.api.post(
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
		this.outOfStockVariationType = 'defined';
		this.variationId = variation.data.id;
	}

	async iAmViewingThePageOfAVariableProductThatContainsOutOfStockVariations() {
		await this.aVariableProductThatIsOutOfStock();
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

	iSeeASignUpButton() {
		return expect( this.page.getByText( 'Notify me' ) ).toBeVisible();
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
