/**
 * External dependencies
 */
import { Page } from '@playwright/test';
import { Editor, Admin, RequestUtils } from '@woocommerce/e2e-utils';

class AddToCartWithOptionsPage {
	private page: Page;
	private admin: Admin;
	private editor: Editor;
	private requestUtils: RequestUtils;
	BLOCK_SLUG = 'woocommerce/add-to-cart-with-options';
	BLOCK_NAME = 'Add to Cart with Options (Experimental)';

	constructor( {
		page,
		admin,
		editor,
		requestUtils,
	}: {
		page: Page;
		admin: Admin;
		editor: Editor;
		requestUtils: RequestUtils;
	} ) {
		this.page = page;
		this.admin = admin;
		this.editor = editor;
		this.requestUtils = requestUtils;
	}

	async setFeatureFlags() {
		await this.requestUtils.setFeatureFlag( 'experimental-blocks', true );
		await this.requestUtils.setFeatureFlag(
			'blockified-add-to-cart',
			true
		);
	}

	async switchProductType( productType: string ) {
		const addToCartWithOptionsBlock = await this.editor.getBlockByName(
			this.BLOCK_SLUG
		);
		await this.editor.selectBlocks( addToCartWithOptionsBlock );

		const productTypeSwitcher = this.page.getByRole( 'button', {
			name: 'Switch product type',
		} );
		await productTypeSwitcher.click();
		const customProductTypeButton = this.page.getByRole( 'menuitem', {
			name: productType,
		} );
		await customProductTypeButton.click();

		await this.editor.canvas.locator( '.components-spinner' ).waitFor( {
			state: 'hidden',
		} );
	}

	async insertParagraphInTemplatePart( content: string ) {
		const parentBlock = await this.editor.getBlockByName( this.BLOCK_SLUG );
		const parentClientId =
			( await parentBlock.getAttribute( 'data-block' ) ) ?? '';
		await this.editor.insertBlock(
			{
				name: 'core/paragraph',
				attributes: {
					content,
				},
			},
			{ clientId: parentClientId }
		);
	}
}

export default AddToCartWithOptionsPage;
