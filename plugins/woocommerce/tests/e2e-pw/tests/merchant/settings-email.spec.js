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

	const storeName = 'WooCommerce Core E2E Test Suite';

	test.afterAll( async ( { baseURL } ) => {
		await setFeatureFlag( baseURL, 'no' );
	} );

	test( 'See email preview with a feature flag', async ( {
		page,
		baseURL,
	} ) => {
		const emailPreviewElement =
			'#wc_settings_email_preview_slotfill iframe';
		const emailSubjectElement = '.wc-settings-email-preview-header-subject';
		const hasIframe = async () => {
			return ( await page.locator( emailPreviewElement ).count() ) > 0;
		};
		const iframeContains = async ( text ) => {
			const iframe = page.frameLocator( emailPreviewElement );
			return iframe.getByText( text );
		};
		const getSubject = async () => {
			return await page.locator( emailSubjectElement ).textContent();
		};

		// Disable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'no' );
		await page.goto( 'wp-admin/admin.php?page=wc-settings&tab=email' );
		expect( await hasIframe() ).toBeFalsy();

		// Enable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'yes' );
		await page.reload();
		expect( await hasIframe() ).toBeTruthy();

		// Email content
		await expect(
			await iframeContains( 'Thank you for your order' )
		).toBeVisible();
		// Email subject
		await expect( await getSubject() ).toContain(
			`Your ${ storeName } order has been received!`
		);

		// Select different email type and check that iframe is updated
		await page
			.getByLabel( 'Email preview type' )
			.selectOption( 'Reset password' );
		// Email content
		await expect(
			await iframeContains( 'Password Reset Request' )
		).toBeVisible();
		// Email subject
		await expect( await getSubject() ).toContain(
			`Password Reset Request for ${ storeName }`
		);
	} );

	test( 'Email sender options live change in email preview', async ( {
		page,
		baseURL,
	} ) => {
		await setFeatureFlag( baseURL, 'yes' );
		await page.goto( 'wp-admin/admin.php?page=wc-settings&tab=email' );

		const fromNameElement = '#woocommerce_email_from_name';
		const fromAddressElement = '#woocommerce_email_from_address';
		const senderElement = '.wc-settings-email-preview-header-sender';

		const getSender = async () => {
			return await page.locator( senderElement ).textContent();
		};

		// Verify initial sender contains fromName and fromAddress
		const initialFromName = await page
			.locator( fromNameElement )
			.inputValue();
		const initialFromAddress = await page
			.locator( fromAddressElement )
			.inputValue();
		let sender = await getSender();
		expect( sender ).toContain( initialFromName );
		expect( sender ).toContain( initialFromAddress );

		// Change the fromName and verify the sender updates
		const newFromName = 'New Name';
		await page.fill( fromNameElement, newFromName );
		await page.locator( fromNameElement ).blur();
		sender = await getSender();
		expect( sender ).toContain( newFromName );
		expect( sender ).toContain( initialFromAddress );

		// Change the fromAddress and verify the sender updates
		const newFromAddress = 'new@example.com';
		await page.fill( fromAddressElement, newFromAddress );
		await page.locator( fromAddressElement ).blur();
		sender = await getSender();
		expect( sender ).toContain( newFromName );
		expect( sender ).toContain( newFromAddress );
	} );

	test( 'Send email preview', async ( { page, baseURL } ) => {
		await setFeatureFlag( baseURL, 'yes' );
		await page.goto( 'wp-admin/admin.php?page=wc-settings&tab=email' );

		// Click the "Send a test email" button
		await page.getByRole( 'button', { name: 'Send a test email' } ).click();

		// Verify that the modal window is open
		const modal = page.getByRole( 'dialog' );
		await expect( modal ).toBeVisible();

		// Verify that the "Send test email" button is disabled
		const sendButton = modal.getByRole( 'button', {
			name: 'Send test email',
		} );
		await expect( sendButton ).toBeDisabled();

		// Fill in the email address field
		const email = 'test@example.com';
		const emailInput = modal.getByLabel( 'Send to' );
		await emailInput.fill( email );

		// Verify the "Send test email" button is now enabled
		await expect( sendButton ).toBeEnabled();
		await sendButton.click();

		// Wait for the message, because sending will fail in test environment
		const message = modal.locator(
			'text=Error sending test email. Please try again.'
		);
		await expect( message ).toBeVisible();
	} );

	test( 'See specific email preview with a feature flag', async ( {
		page,
		baseURL,
	} ) => {
		const emailPreviewElement =
			'#wc_settings_email_preview_slotfill iframe';
		const emailSubjectElement = '.wc-settings-email-preview-header-subject';
		const hasIframe = async () => {
			return ( await page.locator( emailPreviewElement ).count() ) > 0;
		};
		const iframeContains = async ( text ) => {
			const iframe = page.frameLocator( emailPreviewElement );
			return iframe.getByText( text );
		};
		const getSubject = async () => {
			return await page.locator( emailSubjectElement ).textContent();
		};

		// Disable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'no' );
		await page.goto(
			'wp-admin/admin.php?page=wc-settings&tab=email&section=wc_email_customer_processing_order'
		);
		expect( await hasIframe() ).toBeFalsy();

		// Enable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'yes' );
		await page.reload();
		expect( await hasIframe() ).toBeTruthy();

		// Email content
		await expect(
			await iframeContains( 'Thank you for your order' )
		).toBeVisible();
		// Email subject
		await expect( await getSubject() ).toContain(
			`Your ${ storeName } order has been received!`
		);

		// Email type selector should not be visible
		await expect( page.getByLabel( 'Email preview type' ) ).toHaveCount(
			0
		);
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

	test( 'See new color settings with a feature flag', async ( {
		page,
		baseURL,
	} ) => {
		// Disable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'no' );
		await page.goto( 'wp-admin/admin.php?page=wc-settings&tab=email' );

		await expect(
			page.getByText( 'Color palette', { exact: true } )
		).toHaveCount( 0 );
		await expect( page.getByText( 'Accent', { exact: true } ) ).toHaveCount(
			0
		);
		await expect(
			page.getByText( 'Email background', { exact: true } )
		).toHaveCount( 0 );
		await expect(
			page.getByText( 'Content background', { exact: true } )
		).toHaveCount( 0 );
		await expect(
			page.getByText( 'Heading & text', { exact: true } )
		).toHaveCount( 0 );
		await expect(
			page.getByText( 'Secondary text', { exact: true } )
		).toHaveCount( 0 );

		await expect(
			page.getByText( 'Base color', { exact: true } )
		).toBeVisible();
		await expect(
			page.getByText( 'Background color', { exact: true } )
		).toBeVisible();
		await expect(
			page.getByText( 'Body background color', { exact: true } )
		).toBeVisible();
		await expect(
			page.getByText( 'Body text color', { exact: true } )
		).toBeVisible();
		await expect(
			page.getByText( 'Footer text color', { exact: true } )
		).toBeVisible();

		// Enable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'yes' );
		await page.reload();

		await expect(
			page.getByText( 'Color palette', { exact: true } )
		).toBeVisible();
		await expect(
			page.getByText( 'Accent', { exact: true } )
		).toBeVisible();
		await expect(
			page.getByText( 'Email background', { exact: true } )
		).toBeVisible();
		await expect(
			page.getByText( 'Content background', { exact: true } )
		).toBeVisible();
		await expect(
			page.getByText( 'Heading & text', { exact: true } )
		).toBeVisible();
		await expect(
			page.getByText( 'Secondary text', { exact: true } )
		).toBeVisible();

		await expect(
			page.getByText( 'Base color', { exact: true } )
		).toHaveCount( 0 );
		await expect(
			page.getByText( 'Background color', { exact: true } )
		).toHaveCount( 0 );
		await expect(
			page.getByText( 'Body background color', { exact: true } )
		).toHaveCount( 0 );
		await expect(
			page.getByText( 'Body text color', { exact: true } )
		).toHaveCount( 0 );
		await expect(
			page.getByText( 'Footer text color', { exact: true } )
		).toHaveCount( 0 );
	} );

	test( 'See font family setting with a feature flag', async ( {
		page,
		baseURL,
	} ) => {
		// Disable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'no' );
		await page.goto( 'wp-admin/admin.php?page=wc-settings&tab=email' );

		await expect( page.getByLabel( 'Font family' ) ).toHaveCount( 0 );

		// Enable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'yes' );
		await page.reload();

		const fontFamilyElement = page.getByLabel( 'Font family' );
		await expect( fontFamilyElement ).toBeVisible();

		// Test standard font selection
		await fontFamilyElement.selectOption( 'Times New Roman' );

		// Test theme font selection
		await fontFamilyElement.selectOption( 'Inter' );
	} );

	test( 'See updated footer text field with a feature flag', async ( {
		page,
		baseURL,
	} ) => {
		let footerTextLabel;

		// Disable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'no' );
		await page.goto( 'wp-admin/admin.php?page=wc-settings&tab=email' );

		footerTextLabel = page.locator(
			'css=label[for="woocommerce_email_footer_text"]'
		);
		await expect( footerTextLabel ).toBeVisible();

		// Old tooltip text
		const tooltip = footerTextLabel.locator( 'span.woocommerce-help-tip' );
		await expect( tooltip ).not.toHaveAttribute(
			'aria-label',
			'{store_address}'
		);

		// Enable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'yes' );
		await page.reload();

		footerTextLabel = page.locator(
			'css=label[for="woocommerce_email_footer_text"]'
		);
		await expect( footerTextLabel ).toBeVisible();

		// New tooltip text
		const updatedTooltip = footerTextLabel.locator(
			'span.woocommerce-help-tip'
		);
		await expect( updatedTooltip ).toHaveAttribute(
			'aria-label',
			expect.stringContaining( '{store_address}' )
		);
		await expect( updatedTooltip ).toHaveAttribute(
			'aria-label',
			expect.stringContaining( '{store_email}' )
		);
	} );

	test( 'Reset color palette with a feature flag', async ( {
		page,
		baseURL,
	} ) => {
		const resetButtonElement = '.wc-settings-email-color-palette-buttons';

		// Disable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'no' );
		await page.goto( 'wp-admin/admin.php?page=wc-settings&tab=email' );

		await expect( page.locator( resetButtonElement ) ).toHaveCount( 0 );

		// Enable the email_improvements feature flag
		await setFeatureFlag( baseURL, 'yes' );
		await page.reload();

		await expect( page.locator( resetButtonElement ) ).toBeVisible();

		// Change colors to make sure Reset button is active
		const dummyColor = '#abcdef';
		await page.fill( '#woocommerce_email_base_color', dummyColor );
		await page.fill( '#woocommerce_email_background_color', dummyColor );
		await page.fill(
			'#woocommerce_email_body_background_color',
			dummyColor
		);
		await page.fill( '#woocommerce_email_text_color', dummyColor );
		await page.fill( '#woocommerce_email_footer_text_color', dummyColor );

		// Reset colors to defaults
		await page
			.locator( resetButtonElement )
			.getByText( 'Sync with theme', { exact: true } )
			.click();

		// Verify colors are reset
		await expect(
			page.locator( '#woocommerce_email_base_color' )
		).not.toHaveValue( dummyColor );
		await expect(
			page.locator( '#woocommerce_email_background_color' )
		).not.toHaveValue( dummyColor );
		await expect(
			page.locator( '#woocommerce_email_body_background_color' )
		).not.toHaveValue( dummyColor );
		await expect(
			page.locator( '#woocommerce_email_text_color' )
		).not.toHaveValue( dummyColor );
		await expect(
			page.locator( '#woocommerce_email_footer_text_color' )
		).not.toHaveValue( dummyColor );

		// Change colors to make sure Undo button is active
		await page.fill( '#woocommerce_email_base_color', dummyColor );
		await page.fill( '#woocommerce_email_background_color', dummyColor );
		await page.fill(
			'#woocommerce_email_body_background_color',
			dummyColor
		);
		await page.fill( '#woocommerce_email_text_color', dummyColor );
		await page.fill( '#woocommerce_email_footer_text_color', dummyColor );

		// Undo changes
		await page
			.locator( resetButtonElement )
			.getByText( 'Undo changes', { exact: true } )
			.click();

		// Verify changes are undone
		await expect(
			page.locator( '#woocommerce_email_base_color' )
		).not.toHaveValue( dummyColor );
		await expect(
			page.locator( '#woocommerce_email_background_color' )
		).not.toHaveValue( dummyColor );
		await expect(
			page.locator( '#woocommerce_email_body_background_color' )
		).not.toHaveValue( dummyColor );
		await expect(
			page.locator( '#woocommerce_email_text_color' )
		).not.toHaveValue( dummyColor );
		await expect(
			page.locator( '#woocommerce_email_footer_text_color' )
		).not.toHaveValue( dummyColor );
	} );
} );
