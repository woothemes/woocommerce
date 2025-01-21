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
	firstMainImageId: string;
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

const closeDialog = ( context: ProductGalleryContext ) => {
	context.isDialogOpen = false;
	document.body.classList.remove( 'wc-block-product-gallery-modal-open' );

	if ( context.elementThatTriggeredDialogOpening ) {
		context.elementThatTriggeredDialogOpening?.focus();
		context.elementThatTriggeredDialogOpening = null;
	}

	selectImage( context, 'closeDialog' );
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
		closeDialog: () => {
			const context = getContext();
			closeDialog( context );
		},
		openDialog: () => {
			const context = getContext();
			context.isDialogOpen = true;
			document.body.classList.add(
				'wc-block-product-gallery-modal-open'
			);
			const dialogPopUp = document.querySelector(
				'dialog[aria-label="Product gallery"]'
			);
			if ( ! dialogPopUp ) {
				return;
			}
			( dialogPopUp as HTMLElement ).focus();

			const dialogPreviousButton = dialogPopUp.querySelectorAll(
				'.wc-block-product-gallery-large-image-next-previous--button'
			)[ 0 ];

			if ( ! dialogPreviousButton ) {
				return;
			}

			disableArrows( context, context.selectedImageNumber );
			setTimeout( () => {
				( dialogPreviousButton as HTMLButtonElement ).focus();
			}, 100 );
		},
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
		keyboardAccess: () => {
			const context = getContext();
			let allowNavigation = true;

			const handleKeyEvents = ( event: KeyboardEvent ) => {
				if ( ! allowNavigation || ! context.isDialogOpen ) {
					return;
				}

				// Disable navigation for a brief period to prevent spamming.
				allowNavigation = false;

				requestAnimationFrame( () => {
					allowNavigation = true;
				} );

				// Check if the esc key is pressed.
				if ( event.code === 'Escape' ) {
					closeDialog( context );
				}

				// Check if left arrow key is pressed.
				if ( event.code === 'ArrowLeft' ) {
					productGallery.actions.selectPreviousImage();
				}

				// Check if right arrow key is pressed.
				if ( event.code === 'ArrowRight' ) {
					productGallery.actions.selectNextImage();
				}
			};

			document.addEventListener( 'keydown', handleKeyEvents );

			return () =>
				document.removeEventListener( 'keydown', handleKeyEvents );
		},
		dialogFocusTrap: () => {
			const dialogPopUp = document.querySelector(
				'dialog[aria-label="Product gallery"]'
			) as HTMLElement | null;

			if ( ! dialogPopUp ) {
				return;
			}

			const handleKeyEvents = ( event: KeyboardEvent ) => {
				if ( event.code === 'Tab' ) {
					const focusableElementsSelectors =
						'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';

					const focusableElements = dialogPopUp.querySelectorAll(
						focusableElementsSelectors
					);

					if ( ! focusableElements.length ) {
						return;
					}

					const firstFocusableElement =
						focusableElements[ 0 ] as HTMLElement;
					const lastFocusableElement = focusableElements[
						focusableElements.length - 1
					] as HTMLElement;

					if (
						! event.shiftKey &&
						event.target === lastFocusableElement
					) {
						event.preventDefault();
						firstFocusableElement.focus();
					}

					if (
						event.shiftKey &&
						event.target === firstFocusableElement
					) {
						event.preventDefault();
						lastFocusableElement.focus();
					}
				}
			};

			dialogPopUp.addEventListener( 'keydown', handleKeyEvents );

			return () =>
				dialogPopUp.removeEventListener( 'keydown', handleKeyEvents );
		},
	},
};

store( 'woocommerce/product-gallery', productGallery );

export type ProductGallery = typeof productGallery;
