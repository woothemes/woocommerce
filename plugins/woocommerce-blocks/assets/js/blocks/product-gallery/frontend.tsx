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
	selectedImage: string;
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

const getImageId = ( context: ProductGalleryContext, imageIndex: number ) => {
	const imagesIds = getCurrentImages( context );

	if ( imageIndex < 0 ) {
		return imagesIds.at( 0 ) || '';
	}

	if ( imageIndex > imagesIds.length - 1 ) {
		return imagesIds.at( -1 ) || '';
	}

	return imagesIds[ imageIndex ];
};

const disableArrows = (
	context: ProductGalleryContext,
	nextImageIndex: number
) => {
	const imagesIds = getCurrentImages( context );
	context.disableLeft = nextImageIndex === 0;
	context.disableRight = nextImageIndex === imagesIds.length - 1;
};

const selectImage = (
	context: ProductGalleryContext,
	type: 'prev' | 'next' | 'current'
) => {
	const selectedImageIdIndex = getImageIndex(
		context,
		context.selectedImage
	);

	// explicit "current"
	let nextPotentialIndex = selectedImageIdIndex;

	if ( type === 'prev' ) {
		nextPotentialIndex = selectedImageIdIndex - 1;
	}
	if ( type === 'next' ) {
		nextPotentialIndex = selectedImageIdIndex + 1;
	}

	const newImageId = getImageId( context, nextPotentialIndex );
	const newImageIndex = getImageIndex( context, newImageId );
	context.selectedImage = newImageId;
	disableArrows( context, newImageIndex );
};

const closeDialog = ( context: ProductGalleryContext ) => {
	context.isDialogOpen = false;
	document.body.classList.remove( 'wc-block-product-gallery-modal-open' );

	if ( context.elementThatTriggeredDialogOpening ) {
		context.elementThatTriggeredDialogOpening?.focus();
		context.elementThatTriggeredDialogOpening = null;
	}

	// Recalculate images and arrows. Image in dialog may be last
	// or not be available in on-page gallery.
	selectImage( context, 'current' );
};

const productGallery = {
	state: {
		get isSelected() {
			const { selectedImage, imageId } = getContext();
			return selectedImage === imageId;
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

			// Recalculate images and arrows. Last image now may not be last in the dialog.
			selectImage( context, 'current' );
			setTimeout( () => {
				( dialogPreviousButton as HTMLButtonElement ).focus();
			}, 100 );
		},
		selectImage: () => {
			const context = getContext();
			const nextImageIndex = getImageIndex( context, context.imageId );
			context.selectedImage = context.imageId;
			disableArrows( context, nextImageIndex );
		},
		selectNextImage: ( event?: MouseEvent ) => {
			if ( event ) {
				event.stopPropagation();
			}
			const context = getContext();
			selectImage( context, 'next' );
		},
		selectPreviousImage: ( event?: MouseEvent ) => {
			if ( event ) {
				event.stopPropagation();
			}
			const context = getContext();
			selectImage( context, 'prev' );
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
						context.selectedImage = currentImageAttribute;
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
				context.selectedImage = context.firstMainImageId;
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
