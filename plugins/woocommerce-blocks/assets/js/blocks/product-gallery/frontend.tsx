/**
 * External dependencies
 */
import {
	store,
	getContext as getContextFn,
	getElement,
} from '@woocommerce/interactivity';
import { StorePart } from '@woocommerce/utils';

export interface ProductGalleryContext {
	// It's an actual image number, not an index, hence one-based!
	selectedImageNumber: number;
	imageId: string;
	imageIds: string[];
	isDialogOpen: boolean;
	productId: string;
	disableLeft: boolean;
	disableRight: boolean;
}

const getContext = ( ns?: string ) =>
	getContextFn< ProductGalleryContext >( ns );

type Store = typeof productGallery & StorePart< ProductGallery >;
const { state, actions } = store< Store >( 'woocommerce/product-gallery' );

const getImageIndex = (): number => {
	return state.imageIds.indexOf( state.imageId );
};

const disableArrows = (
	context: ProductGalleryContext,
	newImageNumber: number
) => {
	// One-based index so it ranges from 1 to imagesIds.length.
	context.disableLeft = newImageNumber === 1;
	context.disableRight = newImageNumber === state.imageIds.length;
};

const selectImage = (
	context: ProductGalleryContext,
	type: 'prev' | 'next' | 'current' | 'first'
) => {
	const { selectedImageNumber, imageIds } = state;
	// Default to the first image.
	let newImageNumber = 1;

	// Current means the image that has been clicked.
	if ( type === 'current' ) {
		newImageNumber = getImageIndex() + 1;
	}

	if ( type === 'prev' ) {
		newImageNumber = Math.max( 1, selectedImageNumber - 1 );
	}

	if ( type === 'next' ) {
		newImageNumber = Math.min( imageIds.length, selectedImageNumber + 1 );
	}

	context.selectedImageNumber = newImageNumber;
	disableArrows( context, newImageNumber );
};

const productGallery = {
	state: {
		get isSelected() {
			const { selectedImageNumber } = getContext();
			const imageIndex = getImageIndex();
			return selectedImageNumber === imageIndex + 1;
		},
		get isDialogOpen() {
			return getContext().isDialogOpen;
		},
		get disableLeft() {
			return getContext().disableLeft;
		},
		get disableRight() {
			return getContext().disableRight;
		},
		get imageId() {
			return getContext().imageId;
		},
		get imageIds() {
			return getContext().imageIds;
		},
		get selectedImageNumber() {
			return getContext().selectedImageNumber;
		},
		get pagerDotFillOpacity(): number {
			return state.isSelected ? 1 : 0.2;
		},
		get pagerButtonPressed(): boolean {
			return state.isSelected ? true : false;
		},
		get thumbnailTabIndex(): string {
			return state.isSelected ? '0' : '-1';
		},
	},
	actions: {
		selectImage: () => {
			selectImage( getContext(), 'current' );
		},
		selectNextImage: ( event?: MouseEvent ) => {
			if ( event ) {
				event.stopPropagation();
			}
			selectImage( getContext(), 'next' );
		},
		selectPreviousImage: ( event?: MouseEvent ) => {
			if ( event ) {
				event.stopPropagation();
			}
			selectImage( getContext(), 'prev' );
		},
		onSelectedLargeImageKeyDown: ( event: KeyboardEvent ) => {
			if (
				( state.isSelected && event.code === 'Enter' ) ||
				event.code === 'Space' ||
				event.code === 'NumpadEnter'
			) {
				if ( event.code === 'Space' ) {
					event.preventDefault();
				}
				actions.openDialog();
			}
		},
		onViewAllImagesKeyDown: ( event: KeyboardEvent ) => {
			if (
				event.code === 'Enter' ||
				event.code === 'Space' ||
				event.code === 'NumpadEnter'
			) {
				if ( event.code === 'Space' ) {
					event.preventDefault();
				}
				actions.openDialog();
			}
		},
		onThumbnailKeyDown: ( event: KeyboardEvent ) => {
			if (
				event.code === 'Enter' ||
				event.code === 'Space' ||
				event.code === 'NumpadEnter'
			) {
				if ( event.code === 'Space' ) {
					event.preventDefault();
				}
				productGallery.actions.selectImage();
			}
		},
		onDialogKeyDown: ( event: KeyboardEvent ) => {
			if ( event.code === 'Escape' ) {
				actions.closeDialog();
			}
		},
		openDialog: () => {
			const context = getContext();
			context.isDialogOpen = true;
			document.body.classList.add(
				'wc-block-product-gallery-dialog-open'
			);
		},
		closeDialog: () => {
			const context = getContext();
			context.isDialogOpen = false;
			document.body.classList.remove(
				'wc-block-product-gallery-dialog-open'
			);
		},
	},
	callbacks: {
		watchForChangesOnAddToCartForm: () => {
			const context = getContext();
			const variableProductCartForm = document.querySelector(
				`form[data-product_id="${ context.productId }"]`
			);

			if ( ! variableProductCartForm ) {
				return;
			}

			// TODO: Replace with an interactive block that calls `actions.selectImage`.
			const observer = new MutationObserver( function ( mutations ) {
				for ( const mutation of mutations ) {
					const mutationTarget = mutation.target as HTMLElement;
					const currentImageAttribute =
						mutationTarget.getAttribute( 'current-image' );
					if (
						mutation.type === 'attributes' &&
						currentImageAttribute &&
						state.imageIds.includes( currentImageAttribute )
					) {
						const nextImageIndex = getImageIndex();
						context.selectedImageNumber = nextImageIndex + 1;
					}
				}
			} );

			observer.observe( variableProductCartForm, {
				attributes: true,
			} );

			const clearVariationsLink = document.querySelector(
				'.wp-block-add-to-cart-form .reset_variations'
			);

			const selectFirstImage = () => {
				selectImage( context, 'first' );
			};

			if ( clearVariationsLink ) {
				clearVariationsLink.addEventListener(
					'click',
					selectFirstImage
				);
			}

			return () => {
				observer.disconnect();
				document.removeEventListener( 'click', selectFirstImage );
			};
		},
		dialogStateChange: () => {
			const { isDialogOpen, selectedImageNumber } = state;
			const { ref: dialogRef } = getElement() || {};

			if ( isDialogOpen && dialogRef instanceof HTMLElement ) {
				dialogRef.focus();
				const selectedImage = dialogRef.querySelector(
					`[data-image-index="${ selectedImageNumber }"]`
				);

				if ( selectedImage instanceof HTMLElement ) {
					selectedImage.scrollIntoView( {
						behavior: 'auto',
						block: 'center',
					} );
					selectedImage.focus();
				}
			}
		},
	},
};

store( 'woocommerce/product-gallery', productGallery );

export type ProductGallery = typeof productGallery;
