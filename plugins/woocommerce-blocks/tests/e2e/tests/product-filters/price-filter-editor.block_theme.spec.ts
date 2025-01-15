/**
 * External dependencies
 */
import { test as base, expect } from '@woocommerce/e2e-utils';

/**
 * Internal dependencies
 */
import { ProductFiltersPage } from './product-filters.page';

const blockData = {
	name: 'woocommerce/product-filter-price',
	selectors: {
		frontend: {},
		editor: {
			settings: {},
		},
	},
	slug: 'archive-product',
};

const test = base.extend< { pageObject: ProductFiltersPage } >( {
	pageObject: async ( { page, editor, frontendUtils }, use ) => {
		const pageObject = new ProductFiltersPage( {
			page,
			editor,
			frontendUtils,
		} );
		await use( pageObject );
	},
} );

test.describe( `${ blockData.name }`, () => {
	test.beforeEach( async ( { admin, requestUtils } ) => {
		await requestUtils.setFeatureFlag( 'experimental-blocks', true );
		await admin.visitSiteEditor( {
			postId: `woocommerce/woocommerce//${ blockData.slug }`,
			postType: 'wp_template',
			canvas: 'edit',
		} );
	} );

	test( 'should be able to enable or disable the "Clear" button for the filter', async ( {
		editor,
		pageObject,
	} ) => {
		await pageObject.addProductFiltersBlock( { cleanContent: true } );

		const block = editor.canvas.getByLabel( 'Block: Price (Experimental)' );
		await expect( block ).toBeVisible();
		await block.click();

		const clearButton = block.getByText( 'Clear' );
		await expect( clearButton ).toBeVisible();

		await editor.openDocumentSettingsSidebar();

		const enableClearButtonSettings =
			editor.page.getByLabel( 'Clear button' );

		await expect( enableClearButtonSettings ).toBeVisible();

		await enableClearButtonSettings.click();
		await expect( clearButton ).toBeHidden();
	} );
} );
