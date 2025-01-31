/**
 * External dependencies
 */
import { test as base, expect } from '@woocommerce/e2e-utils';

/**
 * Internal dependencies
 */

import { ProductGalleryPage } from '../../product-gallery.page';
const blockData = {
	name: 'woocommerce/product-gallery-large-image',
	selectors: {
		frontend: {},
		editor: {},
	},
	slug: 'single-product',
	productPage: '/product/hoodie/',
};

const test = base.extend< { pageObject: ProductGalleryPage } >( {
	pageObject: async ( { page, editor, frontendUtils }, use ) => {
		const pageObject = new ProductGalleryPage( {
			page,
			editor,
			frontendUtils,
		} );
		await use( pageObject );
	},
} );

test.describe( `${ blockData.name }`, () => {
	test.beforeEach( async ( { admin, editor } ) => {
		await admin.visitSiteEditor( {
			postId: `woocommerce/woocommerce//${ blockData.slug }`,
			postType: 'wp_template',
			canvas: 'edit',
		} );
		await editor.openDocumentSettingsSidebar();
	} );

	test( 'Renders Product Gallery Large Image block on the editor and frontend side', async ( {
		page,
		editor,
		pageObject,
	} ) => {
		await pageObject.addProductGalleryBlock( { cleanContent: true } );

		const block = await pageObject.getMainImageBlock( {
			page: 'editor',
		} );

		await expect( block ).toBeVisible();

		await editor.saveSiteEditorEntities( {
			isOnlyCurrentEntityDirty: true,
		} );

		await page.goto( blockData.productPage );

		const blockFrontend = await pageObject.getMainImageBlock( {
			page: 'frontend',
		} );

		await expect( blockFrontend ).toBeVisible();
	} );

	test.describe( 'Zoom while hovering setting', () => {
		test( 'should be enabled by default', async ( { pageObject } ) => {
			await pageObject.addProductGalleryBlock( { cleanContent: true } );
			const zoomWhileHoveringSetting =
				pageObject.getZoomWhileHoveringSetting();

			await expect( zoomWhileHoveringSetting ).toBeChecked();
		} );
		test( 'should work on frontend when is enabled', async ( {
			pageObject,
			editor,
			page,
		} ) => {
			await pageObject.addProductGalleryBlock( { cleanContent: true } );
			await pageObject.toggleZoomWhileHoveringSetting( true );
			await editor.saveSiteEditorEntities( {
				isOnlyCurrentEntityDirty: true,
			} );

			await page.goto( blockData.productPage );

			const blockFrontend = await pageObject.getMainImageBlock( {
				page: 'frontend',
			} );

			// img[style] is the selector because the style attribute is Interactivity API.
			const imgElement = blockFrontend.locator( 'img' ).first();
			const style = await imgElement.evaluate( ( el ) => el.style );

			expect( style.transform ).toBe( 'scale(1)' );

			await imgElement.hover();

			const styleOnHover = await imgElement.evaluate(
				( el ) => el.style
			);

			expect( styleOnHover.transform ).toBe( 'scale(1.3)' );
		} );

		test( 'should not work on frontend when is disabled', async ( {
			pageObject,
			editor,
			page,
		} ) => {
			await pageObject.addProductGalleryBlock( { cleanContent: true } );
			await pageObject.toggleZoomWhileHoveringSetting( false );
			const buttonElement = pageObject.getZoomWhileHoveringSetting();

			await expect( buttonElement ).not.toBeChecked();

			await editor.saveSiteEditorEntities( {
				isOnlyCurrentEntityDirty: true,
			} );

			await page.goto( blockData.productPage );

			const blockFrontend = await pageObject.getMainImageBlock( {
				page: 'frontend',
			} );

			const imgElement = blockFrontend.locator( 'img' ).first();
			const style = await imgElement.evaluate( ( el ) => el.style );

			expect( style.transform ).toBe( '' );

			await imgElement.hover();

			const styleOnHover = await imgElement.evaluate(
				( el ) => el.style
			);

			expect( styleOnHover.transform ).toBe( '' );
		} );
	} );

	test( 'Renders correct image when selecting a product variation in the Add to Cart with Options block', async ( {
		page,
		editor,
		pageObject,
	} ) => {
		await pageObject.addProductGalleryBlock( { cleanContent: false } );
		await pageObject.addAddToCartWithOptionsBlock();

		const block = await pageObject.getMainImageBlock( {
			page: 'editor',
		} );

		await expect( block ).toBeVisible();

		await editor.saveSiteEditorEntities( {
			isOnlyCurrentEntityDirty: true,
		} );

		await page.goto( blockData.productPage );

		const largeImageBlockOnFrontend = await pageObject.getMainImageBlock( {
			page: 'frontend',
		} );

		const largeImageElement = largeImageBlockOnFrontend.locator(
			'.wc-block-woocommerce-product-gallery-large-image__image--active-image-slide'
		);

		const imageSourceForLargeImageElement =
			await largeImageElement.getAttribute( 'src' );

		const addToCartWithOptionsBlock =
			await pageObject.getAddToCartWithOptionsBlock( {
				page: 'frontend',
			} );
		const addToCartWithOptionsColorSelector =
			addToCartWithOptionsBlock.getByLabel( 'Color' );
		const addToCartWithOptionsSizeSelector =
			addToCartWithOptionsBlock.getByLabel( 'Logo' );

		await addToCartWithOptionsColorSelector.selectOption( 'Green' );
		await addToCartWithOptionsSizeSelector.selectOption( 'No' );

		const largeImageElementAfterSelectingVariation =
			largeImageBlockOnFrontend.locator(
				'.wc-block-woocommerce-product-gallery-large-image__image--active-image-slide'
			);

		const imageSourceForLargeImageElementAfterSelectingVariation =
			await largeImageElementAfterSelectingVariation.getAttribute(
				'src'
			);

		expect( imageSourceForLargeImageElement ).not.toEqual(
			imageSourceForLargeImageElementAfterSelectingVariation
		);
		expect(
			imageSourceForLargeImageElementAfterSelectingVariation
		).toContain( 'hoodie-green-1' );
	} );

	test.describe( 'Swipe to navigate', () => {
		test.use( { hasTouch: true } ); // Enable touch support

		test( 'should work on frontend when is enabled', async ( {
			pageObject,
			editor,
			page,
		} ) => {
			await pageObject.addProductGalleryBlock( { cleanContent: true } );
			await editor.saveSiteEditorEntities( {
				isOnlyCurrentEntityDirty: true,
			} );

			await page.goto( blockData.productPage );

			const blockFrontend = await pageObject.getMainImageBlock( {
				page: 'frontend',
			} );

			await expect( blockFrontend ).toBeVisible();

			const largeImageElement = blockFrontend.locator(
				'.wc-block-woocommerce-product-gallery-large-image__image--active-image-slide'
			);

			// Get the element's bounding box
			const box = await largeImageElement.boundingBox();
			if ( ! box ) return;

			// Calculate start and end points for the swipe
			const startX = box.x + box.width / 2; // middle of element
			const startY = box.y + box.height / 2;
			const endX = startX - 200; // swipe left by 200px
			const endY = startY;

			const initialImageSrc = await largeImageElement.getAttribute(
				'src'
			);

			// Perform the touch gesture
			await page.touchscreen.tap( startX, startY );
			await page.mouse.move( startX, startY );
			await page.mouse.down();
			await page.mouse.move( endX, endY );
			await page.mouse.up();

			// Timeout is needed to allow the image animation to finish.
			// eslint-disable-next-line playwright/no-wait-for-timeout, no-restricted-syntax
			await page.waitForTimeout( 1000 );

			// Verify the next image is shown
			const nextImage = blockFrontend.locator(
				'.wc-block-woocommerce-product-gallery-large-image__image--active-image-slide'
			);
			const nextImageSrc = await nextImage.getAttribute( 'src' );

			// The next image should be visible and have a different src
			await expect( nextImage ).toBeVisible();
			expect( nextImageSrc ).not.toEqual( initialImageSrc );
		} );
	} );
} );
