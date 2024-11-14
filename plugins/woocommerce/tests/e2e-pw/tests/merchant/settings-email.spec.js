const { test, expect, request } = require( '@playwright/test' );
const { setOption } = require( '../../utils/options' );

const setFeatureFlag = async ( baseURL, value ) =>
	await setOption(
		request,
		baseURL,
		'woocommerce_feature_email_improvements_enabled',
		value
	);

test.describe( 'WooCommerce Email Settings', () => {
	test.use( { storageState: process.env.ADMINSTATE } );

	test( 'See email preview with a feature flag', async ( {
		page,
		baseURL,
	} ) => {
		const emailPreviewElement =
			'#wc_settings_email_preview_slotfill iframe';
		const hasIframe = async () => {
			return ( await page.locator( emailPreviewElement ).count() ) > 0;
		};

		// Disable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'no' );
		await page.goto( 'wp-admin/admin.php?page=wc-settings&tab=email' );
		expect( await hasIframe() ).toBeFalsy();

		// Enable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'yes' );
		await page.reload();
		expect( await hasIframe() ).toBeTruthy();
	} );
} );
