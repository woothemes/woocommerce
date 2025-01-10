const { getCanvas } = require( '@woocommerce/e2e-utils-playwright/src' );

const fillPageTitle = async ( page, title ) => {
	// Gutenberg 19.9-nightly: Block Inserter expanded by default and showing patterns tab.
	// TODO (Gutenberg 19.9.1+): Remove conditional and make this explicit.
	if (
		await page
			.getByRole( 'button', {
				name: /Toggle block inserter|Block Inserter/,
				expanded: true,
			} )
			.isVisible()
	) {
		await page.getByLabel( 'Close Block Inserter' ).click();
	}

	// TODO (Gutenberg 19.9): Keep only the "Block: Title" label locator.
	// Current stable version of Gutenberg (19.7) uses the "Add title" label locator.
	// Upcoming Gutenberg 19.9 uses the "Block: Title" one. We should use it instead when GB 19.9 comes out.
	const canvas = await getCanvas( page );
	const block_title = canvas
		.getByLabel( 'Add title' )
		.or( canvas.getByLabel( 'Block: Title' ) );
	await block_title.click();
	await block_title.fill( title );
};

module.exports = {
	fillPageTitle,
};
