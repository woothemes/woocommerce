/**
 * External dependencies
 */
import { test, expect } from '@woocommerce/e2e-utils';

/**
 * Internal dependencies
 */

test.describe( 'Patterns in block theme', () => {
	test( 'Synced Pattern can be created with basic blocks', async ( {
		admin,
		editor,
	} ) => {
		await admin.createNewPattern( 'Woo Blocks Synced Pattern' );

		// Add testing blocks
		await editor.insertBlockUsingGlobalInserter( 'On Sale Products' );
		await editor.insertBlockUsingGlobalInserter( 'Single Product' );
		await editor.canvas.getByText( 'Album' ).click();
		await editor.canvas.getByText( 'Done' ).click();

		// Product Collection optimizes rendering products so 2nd+ products
		// are not accessible through block selectors like getByLabel( 'Block: Product Title' )
		// hence CSS selectors and condition to be visible.
		const productTitles = editor.canvas
			.locator( '.wp-block-post-title' )
			.locator( 'visible=true' );
		const productPrices = editor.canvas
			.getByLabel( 'Block: Product Price' )
			.locator( 'visible=true' );

		await expect( productTitles ).toHaveText( [
			// Product Collection
			'Beanie',
			'Beanie with Logo',
			'Belt',
			'Cap',
			'Hoodie',
			// Single Product
			'Album',
		] );
		await expect( productPrices ).toHaveText( [
			// Product Collection
			'Previous price:$20.00Discounted price:$18.00',
			'Previous price:$20.00Discounted price:$18.00',
			'Previous price:$65.00Discounted price:$55.00',
			'Previous price:$18.00Discounted price:$16.00',
			'Previous price:$45.00Discounted price:$42.00',
			// Single Product
			'$15.00',
		] );
	} );

	test( 'Unsynced Pattern can be created with basic blocks', async ( {
		admin,
		editor,
	} ) => {
		await admin.createNewPattern( 'Woo Blocks Unsynced Pattern', false );

		// Add testing blocks
		await editor.insertBlockUsingGlobalInserter( 'On Sale Products' );
		await editor.insertBlockUsingGlobalInserter( 'Single Product' );
		await editor.canvas.getByText( 'Album' ).click();
		await editor.canvas.getByText( 'Done' ).click();

		// Product Collection optimizes rendering products so 2nd+ products
		// are not accessible through block selectors like getByLabel( 'Block: Product Title' )
		// hence CSS selectors and condition to be visible.
		const productTitles = editor.canvas
			.locator( '.wp-block-post-title' )
			.locator( 'visible=true' );
		const productPrices = editor.canvas
			.getByLabel( 'Block: Product Price' )
			.locator( 'visible=true' );

		await expect( productTitles ).toHaveText( [
			// Product Collection
			'Beanie',
			'Beanie with Logo',
			'Belt',
			'Cap',
			'Hoodie',
			// Single Product
			'Album',
		] );
		await expect( productPrices ).toHaveText( [
			// Product Collection
			'Previous price:$20.00Discounted price:$18.00',
			'Previous price:$20.00Discounted price:$18.00',
			'Previous price:$65.00Discounted price:$55.00',
			'Previous price:$18.00Discounted price:$16.00',
			'Previous price:$45.00Discounted price:$42.00',
			// Single Product
			'$15.00',
		] );
	} );
} );
