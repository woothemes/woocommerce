/**
 * External dependencies
 */
import { test, expect, Editor } from '@woocommerce/e2e-utils';

const insertSingleProductBlock = async (
	blockName: string,
	editor: Editor
) => {
	await editor.insertBlockUsingGlobalInserter( 'Single Product' );
	await editor.canvas.getByText( 'Album' ).click();
	await editor.canvas.getByText( 'Done' ).click();
	const singleProductBlock = await editor.getBlockByName(
		'woocommerce/single-product'
	);
	const singleProductClientId =
		( await singleProductBlock.getAttribute( 'data-block' ) ) ?? '';
	return singleProductClientId;
};

const insertInSingleProductTemplate = async (
	blockName: string,
	editor: Editor,
	admin: Admin
) => {
	await admin.visitSiteEditor( {
		postId: `woocommerce/woocommerce//single-product`,
		postType: 'wp_template',
		canvas: 'edit',
	} );
	await editor.setContent( '' );
	await editor.insertBlock( { name: blockName } );
};

test.describe( 'registerBlockSingleProductTemplate registers', () => {
	test( 'block available on posts, e.g. Product Price', async ( {
		admin,
		editor,
	} ) => {
		const blockName = 'woocommerce/product-price';

		await test.step( 'Unavailable in post globally', async () => {
			await admin.createNewPost();
			await editor.insertBlock( { name: blockName } );
			await expect(
				await editor.getBlockByName( blockName )
			).toHaveCount( 0 );
		} );

		await test.step( 'Available in post within Single Product block', async () => {
			const singleProductClientId = await insertSingleProductBlock(
				blockName,
				editor
			);
			// One from the global inserter, one from the single product block
			await editor.insertBlock(
				{ name: blockName },
				{ clientId: singleProductClientId }
			);
			await expect(
				await editor.getBlockByName( blockName )
			).toHaveCount( 2 );
		} );

		await test.step( 'Available in Single Product template globally', async () => {
			await insertInSingleProductTemplate( blockName, editor, admin );
			await expect(
				await editor.getBlockByName( blockName )
			).toHaveCount( 1 );
		} );
	} );

	test( 'block unavailable on posts, e.g. Product Details', async ( {
		admin,
		editor,
	} ) => {
		const blockName = 'woocommerce/product-details';

		await test.step( 'Unavailable in post, also within Single Product block', async () => {
			await admin.createNewPost();
			const singleProductClientId = await insertSingleProductBlock(
				blockName,
				editor
			);
			await expect(
				editor.insertBlock(
					{ name: blockName },
					{ clientId: singleProductClientId }
				)
			).rejects.toThrow(
				new RegExp( `Block type '${ blockName }' is not registered.` )
			);
		} );

		await test.step( 'Available in Single Product template globally', async () => {
			await insertInSingleProductTemplate( blockName, editor, admin );
			await expect(
				await editor.getBlockByName( blockName )
			).toHaveCount( 1 );
		} );
	} );
} );
