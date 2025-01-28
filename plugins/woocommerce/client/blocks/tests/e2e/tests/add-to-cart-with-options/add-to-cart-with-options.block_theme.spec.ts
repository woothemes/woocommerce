/**
 * External dependencies
 */
import { test, expect } from '@woocommerce/e2e-utils';

const blockData = {
	name: 'Add to Cart with Options (Experimental)',
	slug: 'woocommerce/add-to-cart-with-options',
};

test.describe( `${ blockData.name } Block`, () => {
	test( 'allows switching to 3rd-party product types', async ( {
		editor,
		admin,
		requestUtils,
		page,
	} ) => {
		await requestUtils.activatePlugin(
			'woocommerce-blocks-test-custom-product-type'
		);

		await requestUtils.setFeatureFlag( 'experimental-blocks', true );
		await requestUtils.setFeatureFlag( 'blockified-add-to-cart', true );

		await admin.visitSiteEditor( {
			postId: 'woocommerce/woocommerce//single-product',
			postType: 'wp_template',
			canvas: 'edit',
		} );

		await editor.insertBlock( { name: blockData.slug } );
		const addToCartWithOptionsBlock = await editor.getBlockByName(
			blockData.slug
		);
		await editor.selectBlocks( addToCartWithOptionsBlock );

		const productTypeSwitcher = page.getByRole( 'button', {
			name: 'Switch product type',
		} );
		await productTypeSwitcher.click();
		const customProductTypeButton = page.getByRole( 'menuitem', {
			name: 'Custom Product Type',
		} );
		await customProductTypeButton.click();

		const block = editor.canvas.getByLabel( `Block: ${ blockData.name }` );
		const skeleton = block.locator( '.wc-block-components-skeleton' );
		await expect( skeleton ).toBeVisible();
	} );
} );
