const { test, expect, request } = require( '@playwright/test' );
const { setOption } = require( '../../utils/options' );

const setFeatureFlag = async ( baseURL, value ) =>
	await setOption(
		request,
		baseURL,
		'woocommerce_feature_email_improvements_enabled',
		value
	);

const pickImageFromLibrary = async ( page, imageName ) => {
	await page.getByRole( 'tab', { name: 'Media Library' } ).click();
	await page.getByLabel( imageName ).first().click();
	await page.getByRole( 'button', { name: 'Select', exact: true } ).click();
};

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

	test( 'See email image url field with a feature flag', async ( {
		page,
		baseURL,
	} ) => {
		const emailImageUrlElement =
			'#wc_settings_email_image_url_slotfill .wc-settings-email-image-url-select-image';
		const hasImageUrl = async () => {
			return ( await page.locator( emailImageUrlElement ).count() ) > 0;
		};
		const oldHeaderImageElement =
			'input[type="text"]#woocommerce_email_header_image';
		const hasOldImageElement = async () => {
			return ( await page.locator( oldHeaderImageElement ).count() ) > 0;
		};

		// Disable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'no' );
		await page.goto( 'wp-admin/admin.php?page=wc-settings&tab=email' );
		expect( await hasImageUrl() ).toBeFalsy();
		expect( await hasOldImageElement() ).toBeTruthy();

		// Enable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'yes' );
		await page.reload();
		expect( await hasImageUrl() ).toBeTruthy();
		expect( await hasOldImageElement() ).toBeFalsy();
	} );

	test( 'Choose image in email image url field', async ( {
		page,
		baseURL,
	} ) => {
		const newImageElement = '.wc-settings-email-image-url-new-image';
		const existingImageElement =
			'.wc-settings-email-image-url-existing-image';
		const selectImageElement = '.wc-settings-email-image-url-select-image';

		// Enable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'yes' );
		await page.goto( 'wp-admin/admin.php?page=wc-settings&tab=email' );

		// Pick image
		await page
			.locator( `${ newImageElement } ${ selectImageElement }` )
			.click();
		await pickImageFromLibrary( page, 'image-03' );
		await expect( page.locator( existingImageElement ) ).toBeVisible();
		await expect( page.locator( newImageElement ) ).toBeHidden();

		// Remove an image
		await page
			.locator( existingImageElement )
			.getByRole( 'button', { name: 'Remove', exact: true } )
			.click();
		await expect( page.locator( existingImageElement ) ).toBeHidden();
		await expect( page.locator( newImageElement ) ).toBeVisible();
	} );
} );
