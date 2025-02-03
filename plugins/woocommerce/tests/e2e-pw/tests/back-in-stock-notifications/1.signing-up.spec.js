/**
 * Internal dependencies
 */
import { setOption } from '../../utils/options';
import { activateTheme } from '../../utils/themes';
import AcceptanceHelper from './helper';
const { test, request } = require( '@playwright/test' );
test.describe( 'Feature: Signing up', () => {
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
		helper.deleteCurrentProduct();
	} );
	test.describe( 'Logged in', () => {
		test.use( { storageState: process.env.CUSTOMERSTATE } );
		test( 'Simple product', async () => {
			const { given, when, then } = helper;
			await given.iAmViewingThePageOfASimpleProductThatIsOutOfStock();
			await then.iSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock();
			await then.iDontSeeAFieldToEnterMyEmail();
			await then.iDontSeeAnOptInCheckbox();

			await when.iClickTheNotifyMeButton();
			await then.iSeeThatMySignupRequestWasSuccessful();
			await then.iDontSeeASignUpButton();
			await then.iSeeAPromptToManageMyNotifications();

			await given.iGoToTheProductPage();
			await then.iSeeThatIAlreadyJoinedTheWaitlist();
		} );
		test( 'Variation product', async () => {
			const { given, when, then } = helper;
			await given.iAmViewingThePageOfAVariableProductThatContainsOutOfStockVariations();

			await when.iChooseAVariationThatIsInStock();
			await then.iDontSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock();
			await when.iChooseAVariationThatIsOutOfStock();
			await then.iSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock();
			await then.iDontSeeAFieldToEnterMyEmail();
			await then.iDontSeeAnOptInCheckbox();
			await when.iClickTheNotifyMeButton();
			await then.iSeeThatMySignupRequestWasSuccessful();
			await then.iDontSeeASignUpButton();
			await then.iSeeAPromptToManageMyNotifications();

			await given.iGoToTheProductPage();
			await when.iChooseAVariationThatIsOutOfStock();
			await then.iSeeThatIAlreadyJoinedTheWaitlist();
		} );
		test( 'Variation with an attribute with value "any"', async () => {
			const { given, when, then } = helper;
			await given.iAmViewingThePageOfAVariableProductThatContainsOutOfStockVariationsWithAnAttributeWithValueAny();
			await when.iChooseAVariationThatIsOutOfStock();
			await then.iSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock();
			await then.iDontSeeAFieldToEnterMyEmail();
			await then.iDontSeeAnOptInCheckbox();

			await when.iClickTheNotifyMeButton();
			await then.iSeeThatMySignupRequestWasSuccessful();
			await then.iDontSeeASignUpButton();
			await then.iSeeAPromptToManageMyNotifications();
		} );
	} );
	test.describe( 'Guest', () => {
		test( 'Sign-ups are limited to logged-in users', async () => {
			const { given, when, then } = helper;
			await given.signUpsAreLimitedToLoggedInUsers();
			await given.iGoToTheProductPage();
			await then.iDontSeeAFieldToEnterMyEmail();
			await then.iDontSeeAnOptInCheckbox();
			await when.iClickTheNotifyMeButton();
			await then.iSeeAPromptToLogInToMyAccount();
			await when.iLogInToMyAccount();
			await then.iSeeThatMySignupRequestWasSuccessful();
			await then.iSeeAPromptToManageMyNotifications();
		} );
		test( 'Sign-ups are single opt-in without checkbox', async () => {
			const { given, when, then } = helper;
			await given.signUpsAreSingleOptInWithoutCheckbox();
			await given.iGoToTheProductPage();
			await then.iDontSeeAnOptInCheckbox();
			await when.iEnterMyEmail();
			await when.iClickTheNotifyMeButton();
			await then.iSeeThatMySignupRequestWasSuccessful();
		} );
		test( 'Sign-ups are single opt-in with checkbox', async () => {
			const { given, when, then } = helper;
			await given.signUpsAreSingleOptInWithCheckbox();
			await given.iGoToTheProductPage();

			await then.iSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock();

			await when.iEnterMyEmail();
			await when.iTickTheCheckbox();

			await when.iClickTheNotifyMeButton();

			await then.iSeeThatMySignupRequestWasSuccessful();
		} );
		test( 'Sign-ups are double opt-in', async () => {
			const { given, when, then } = helper;
			await given.signUpsAreDoubleOptIn();
			await given.iGoToTheProductPage();
			await then.iSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock();
			await when.iEnterMyEmail();
			await when.iTickTheCheckbox();

			await when.iClickTheNotifyMeButton();
			await then.iAmPromptedToCheckMyEmail();
		} );
		test( 'Sign-ups are single opt-in and create new account', async () => {
			const { given, when, then } = helper;
			await given.signUpsAreSingleOptInAndANewAccountIsCreatedOnSignUp();
			await given.iGoToTheProductPage();
			await then.iSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock();
			await when.iEnterMyEmail();
			await when.iTickTheCheckbox();

			await when.iClickTheNotifyMeButton();
			await then.iSeeThatMySignupRequestWasSuccessful();
		} );
		test( 'Sign-ups are double opt-in and create new account', async () => {
			const { given, when, then } = helper;
			await given.signUpsAreDoubleOptInAndANewAccountIsCreatedOnSignUp();
			await given.aSimpleProductThatIsOutOfStock();
			await given.iGoToTheProductPage();
			await then.iSeeAPromptToSignUpAndBeNotifiedWhenTheProductIsBackInStock();
			await when.iEnterMyEmail();
			await when.iClickTheNotifyMeButton();
			await then.iAmPromptedToCheckMyEmail();
		} );
	} );
} );
