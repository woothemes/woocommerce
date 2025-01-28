export const closeChoosePatternModal = async ( { page } ) => {
	const closeModal = page
		.getByLabel( 'Scrollable section' )
		.filter()
		.getByRole( 'button', {
			name: 'Close',
			exact: true,
		} );
	await page.addLocatorHandler( closeModal, async () => {
		await closeModal.click();
	} );
};

export const disableWelcomeModal = async ( { page } ) => {
	// Further info: https://github.com/woocommerce/woocommerce/pull/45856/
	await page.waitForLoadState( 'domcontentloaded' );

	const isWelcomeGuideActive = await page.evaluate( () =>
		window.wp.data
			.select( 'core/edit-post' )
			.isFeatureActive( 'welcomeGuide' )
	);

	if ( isWelcomeGuideActive ) {
		await page.evaluate( () =>
			window.wp.data
				.dispatch( 'core/edit-post' )
				.toggleFeature( 'welcomeGuide' )
		);
	}
};

export const openEditorSettings = async ( { page } ) => {
	// Open Settings sidebar if closed
	if ( await page.getByLabel( 'Editor Settings' ).isVisible() ) {
		console.log( 'Editor Settings is open, skipping action.' );
	} else {
		await page.getByLabel( 'Settings', { exact: true } ).click();
	}
};

export const getCanvas = async ( page ) => {
	return page.frame( 'editor-canvas' ) || page;
};

export const goToPageEditor = async ( { page } ) => {
	await page.goto( 'wp-admin/post-new.php?post_type=page' );
	await disableWelcomeModal( { page } );
	await closeChoosePatternModal( { page } );
};

export const goToPostEditor = async ( { page } ) => {
	await page.goto( 'wp-admin/post-new.php' );
	await disableWelcomeModal( { page } );
};

export const insertBlock = async ( page, blockName ) => {
	// Focus on "Empty block" element before inserting a new block.
	// Otherwise, Gutenberg nightly (v19.9-nightly) would display "{Block name} can't be inserted."
	const emptyBlock = ( await getCanvas( page ) ).getByLabel( 'Empty block' );
	if ( await emptyBlock.isVisible() ) {
		await emptyBlock.click();
	}

	// With Gutenberg active we have Block Inserter name
	await page
		.getByRole( 'button', {
			name: /Toggle block inserter|Block Inserter/,
			expanded: false,
		} )
		.click();

	await page.getByPlaceholder( 'Search', { exact: true } ).fill( blockName );
	await page.getByRole( 'option', { name: blockName, exact: true } ).click();

	await page
		.getByRole( 'button', {
			name: 'Close block inserter',
		} )
		.click();
};

export const insertBlockByShortcut = async ( page, blockName ) => {
	const canvas = await getCanvas( page );
	await canvas.getByRole( 'button', { name: 'Add default block' } ).click();
	await canvas
		.getByRole( 'document', {
			name: 'Empty block; start writing or type forward slash to choose a block',
		} )
		.pressSequentially( `/${ blockName }` );
	await page.getByRole( 'option', { name: blockName, exact: true } ).click();
};

export const transformIntoBlocks = async ( page ) => {
	const canvas = await getCanvas( page );

	await canvas
		.getByRole( 'button' )
		.filter( { hasText: 'Transform into blocks' } )
		.click();
};

export const publishPage = async ( page, pageTitle, isPost = false ) => {
	await page
		.getByRole( 'button', { name: 'Publish', exact: true } )
		.dispatchEvent( 'click' );

	const createPageResponse = page.waitForResponse( ( response ) => {
		return (
			response.url().includes( isPost ? '/posts/' : '/pages/' ) &&
			response.ok() &&
			response.request().method() === 'POST' &&
			response
				.json()
				.then(
					( json ) =>
						json.title.rendered === pageTitle &&
						json.status === 'publish'
				)
		);
	} );

	await page
		.getByRole( 'region', { name: 'Editor publish' } )
		.getByRole( 'button', { name: 'Publish', exact: true } )
		.click();

	// Validating that page was published via UI elements is not reliable,
	// installed plugins (e.g. WooCommerce PayPal Payments) can interfere and add flakiness to the flow.
	// In WC context, checking the API response is possibly the most reliable way to ensure the page was published.
	await createPageResponse;
};
