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
	test.describe( 'Receiving Confirmations', () => {
		test.use( { storageState: process.env.CUSTOMERSTATE } );
		test( 'Receive a simple product sign-up confirmation', async () => {
			const { given, when, then } = helper;
			await given.aSimpleProductThatIsOutOfStock();
			await given.theProductHasNotifications();

			await when.iViewTheConfirmationIReceivedViaEmail();

			await then.iSeeSomeDetailsAboutTheProductISubscribedTo();
		} );
		test( 'Receive a variation sign-up confirmation', async () => {
			const { given, when, then } = helper;
			await given.aVariableProductThatIsOutOfStock();
			await given.theVariationHasNotifications();

			await when.iViewTheConfirmationIReceivedViaEmail();

			await then.iSeeSomeDetailsAboutTheVariationProductISubscribedTo();
		} );
		test( 'Receive a sign-up confirmation for a variation with free attributes', async () => {
			const { given, when, then } = helper;
			await given.aVariableProductThatContainsOutOfStockVariationsWithAnAttributeWithValueAny();
			await given.theVariationHasNotifications();

			await when.iViewTheConfirmationIReceivedViaEmail();

			await then.iSeeSomeDetailsAboutTheVariationProductISubscribedTo();
		} );
		test( 'Follow link to cancel notification', async () => {
			const { given, when, then } = helper;
			await given.aSimpleProductThatIsOutOfStock();
			await given.theProductHasNotifications();

			await when.iViewTheConfirmationIReceivedViaEmail();

			await then.iSeeALinkToCancelMyRequest();

			await when.iFollowTheLink();

			await then.iSeeThatMyRequestWasCancelled();
			await then.iSeeAPromptToManageMyNotifications();
		} );
		test( 'Verify sign-up request when double opt-in is enabled', async () => {
			const { given, when, then } = helper;

			await given.signUpsAreDoubleOptInAndANewAccountIsCreatedOnSignUp();
			await given.aSimpleProductThatIsOutOfStock();
			await given.theProductHasNotifications();

			await when.iViewTheDoubleOptInVerificationIReceivedViaEmail();

			await then.iSeeTheTitleOfTheVerificationEmail();
			await then.iAmPromptedToVerifyMyRequest();
			await then.iSeeALinkToVerifyMyRequest();

			await when.iFollowTheConfirmLink();

			await then.iSeeAMessageThatMyConfirmRequestWasSuccessful();
			await then.iCanSeeAConfirmationEmailWithDetailsAboutTheProductISubscribedTo();
		} );
	} );
	test.describe( 'Receiving Confirmations, guest', () => {
		test( 'Follow link to cancel notification, guest', async () => {
			const { given, when, then } = helper;
			await given.aSimpleProductThatIsOutOfStock();
			await given.theProductHasNotifications();

			await when.iViewTheConfirmationIReceivedViaEmail();

			await then.iSeeALinkToCancelMyRequest();

			await when.iFollowTheLink();

			await then.iSeeThatMyRequestWasCancelled();
		} );
	} );
} );
