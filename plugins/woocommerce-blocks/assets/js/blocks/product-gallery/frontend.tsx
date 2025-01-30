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
	visibleImagesIds: string[];
	dialogVisibleImagesIds: string[];
	isDialogOpen: boolean;
	productId: string;
	elementThatTriggeredDialogOpening: HTMLElement | null;
	disableLeft: boolean;
	disableRight: boolean;
}

const getContext = ( ns?: string ) =>
	getContextFn< ProductGalleryContext >( ns );

type Store = typeof productGallery & StorePart< ProductGallery >;
const { state, actions } = store< Store >( 'woocommerce/product-gallery' );

/**
 * Product Gallery supports two contexts:
 * - on-page gallery - may display subset of images.
 * - dialog gallery - displays all of the images.
 * Function returns images per current context.
 */
const getCurrentImages = ( context: ProductGalleryContext ) => {
	const { isDialogOpen } = context;
	return context[
		isDialogOpen ? 'dialogVisibleImagesIds' : 'visibleImagesIds'
	];
};

const getImageIndex = ( context: ProductGalleryContext, imageId: string ) => {
	const imagesIds = getCurrentImages( context );
	return imagesIds.indexOf( imageId );
};

const disableArrows = (
	context: ProductGalleryContext,
	newImageNumber: number
) => {
	const imagesIds = getCurrentImages( context );
	// One-based index so it ranges from 1 to imagesIds.length.
	context.disableLeft = newImageNumber === 1;
	context.disableRight = newImageNumber === imagesIds.length;
};

const selectImage = (
	context: ProductGalleryContext,
	type: 'prev' | 'next' | 'current' | 'first' | 'closeDialog'
) => {
	const {
		selectedImageNumber,
		imageId,
		dialogVisibleImagesIds,
		visibleImagesIds,
	} = context;
	// Default to the first image.
	let newImageNumber = 1;

	// Current means the image that has been clicked.
	if ( type === 'current' ) {
		newImageNumber = getImageIndex( context, imageId ) + 1;
	}

	if ( type === 'prev' ) {
		newImageNumber = Math.max( 1, selectedImageNumber - 1 );
	}

	if ( type === 'next' ) {
		newImageNumber = Math.min(
			dialogVisibleImagesIds.length,
			selectedImageNumber + 1
		);
	}

	// Close dialog is a temporary case that will be removed.
	// Currently, the number of images in the dialog may differ from the number of
	// images in the gallery, so we're falling back to the first image if
	// current one is unavailable in regular gallery.
	if ( type === 'closeDialog' ) {
		newImageNumber =
			selectedImageNumber > visibleImagesIds.length
				? 1
				: selectedImageNumber;
	}

	context.selectedImageNumber = newImageNumber;
	disableArrows( context, newImageNumber );
};

const productGallery = {
	state: {
		get isSelected() {
			const context = getContext();
			const { selectedImageNumber, imageId } = context;
			const imageIndex = getImageIndex( context, imageId );
			return selectedImageNumber === imageIndex + 1;
		},
		get disableLeft() {
			return getContext().disableLeft;
		},
		get disableRight() {
			return getContext().disableRight;
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
				const largeImageElement = getElement()?.ref as HTMLElement;
				const context = getContext();
				context.elementThatTriggeredDialogOpening = largeImageElement;
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
				const viewAllImagesElement = getElement()?.ref as HTMLElement;
				const context = getContext();
				context.elementThatTriggeredDialogOpening =
					viewAllImagesElement;
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
			const triggerElement = getElement()?.ref;
			if ( triggerElement ) {
				context.elementThatTriggeredDialogOpening = triggerElement;
			}
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
		onDragStart: ( event: DragEvent ) => {
			console.log( 'onDragStart' );
		},
		onDragEnd: ( event: DragEvent ) => {
			console.log( 'onDragEnd' );
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
						context.visibleImagesIds.includes(
							currentImageAttribute
						)
					) {
						const nextImageIndex = getImageIndex(
							context,
							currentImageAttribute
						);
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
			const context = getContext();
			const { ref: dialogRef } = getElement() || {};

			if ( context.isDialogOpen && dialogRef instanceof HTMLElement ) {
				dialogRef.focus();
				const selectedImage = dialogRef.querySelector(
					`[data-image-index="${ context.selectedImageNumber }"]`
				);

				if ( selectedImage instanceof HTMLElement ) {
					selectedImage.scrollIntoView( {
						behavior: 'auto',
						block: 'center',
					} );
					selectedImage.focus();
				}
			} else if ( context.elementThatTriggeredDialogOpening ) {
				context.elementThatTriggeredDialogOpening.focus();
				context.elementThatTriggeredDialogOpening = null;
			}
		},
	},
};

store( 'woocommerce/product-gallery', productGallery );

export type ProductGallery = typeof productGallery;
