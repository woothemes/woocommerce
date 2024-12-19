/**
 * External dependencies
 */
import {
	store,
	getContext as getContextFn,
	getElement,
} from '@woocommerce/interactivity';
import { StorePart } from '@woocommerce/utils';
import Swiper from 'swiper';

export interface ProductGalleryContext {
	selectedImage: string;
	firstMainImageId: string;
	imageId: string;
	visibleImagesIds: string[];
	dialogVisibleImagesIds: string[];
	isDialogOpen: boolean;
	productId: string;
	elementThatTriggeredDialogOpening: HTMLElement | null;
}

const getContext = ( ns?: string ) =>
	getContextFn< ProductGalleryContext >( ns );

type Store = typeof productGallery & StorePart< ProductGallery >;
const { state, actions } = store< Store >( 'woocommerce/product-gallery' );

const swiperMainContainer = document.querySelector(
	'.wc-block-product-gallery-large-image'
);

const swiperDialogContainer = document.querySelector(
	'.wc-block-product-gallery--dialog .wc-block-product-gallery-large-image'
);

const getSlideIndexByImageId = ( imageId: string ) => {
	const slides = swiperMainContainer?.querySelectorAll( '.swiper-slide' );
	let slideIndex = 0;

	if ( slides ) {
		slides.forEach( ( slide ) => {
			const images = slide.querySelector(
				'.wc-block-woocommerce-product-gallery-large-image__image'
			);
			const slideImageContext = images?.getAttribute( 'data-wc-context' );
			const slideImageId = slideImageContext
				? JSON.parse( slideImageContext ).imageId
				: null;

			if ( slideImageId === imageId ) {
				const slideIndexAttr = slide.getAttribute(
					'data-swiper-slide-index'
				);

				if ( slideIndexAttr !== null ) {
					slideIndex = parseInt( slideIndexAttr, 10 );
				}
			}
		} );
	}

	return slideIndex;
};

const getImageIdFromIndex = ( index: number ) => {
	const imageIdContext = swiperMainContainer
		?.querySelector(
			`.swiper-slide[data-swiper-slide-index="${ index }"] img`
		)
		?.getAttribute( 'data-wc-context' );

	const imageId = imageIdContext
		? JSON.parse( imageIdContext ).imageId
		: null;

	return imageId;
};

const setPager = ( imageId: string ) => {
	(
		document.querySelector(
			".wc-block-product-gallery-pager__pager-item[data-wc-context='" +
				JSON.stringify( { imageId } ) +
				"']"
		) as HTMLButtonElement
	 )?.click();
};

const swiperMain = new Swiper( swiperMainContainer as HTMLElement, {
	direction: 'horizontal',
	loop: true,
	on: {
		beforeInit: () => {
			if ( swiperMainContainer ) {
				( swiperMainContainer as HTMLElement ).style.width =
					( swiperMainContainer as HTMLElement ).clientWidth + 'px';
			}
		},
		realIndexChange: ( swiperInstance ) => {
			// Since we're not using the Swiper's pagination, we need to manually update the selected image for the pager.
			const imageId = getImageIdFromIndex( swiperInstance.realIndex );

			setPager( imageId );
		},
	},
} );

const swiperDialog = new Swiper( swiperDialogContainer as HTMLElement, {
	direction: 'horizontal',
	loop: true,
} );

const closeDialog = ( context: ProductGalleryContext ) => {
	context.isDialogOpen = false;
	// Reset the main image.
	context.selectedImage = context.firstMainImageId;
	document.body.classList.remove( 'wc-block-product-gallery-modal-open' );

	const slideIndexId = getImageIdFromIndex(
		parseInt( context.selectedImage, 10 )
	);

	swiperMain.slideToLoop( slideIndexId, 0, false );
	setPager( context.selectedImage );

	if ( context.elementThatTriggeredDialogOpening ) {
		context.elementThatTriggeredDialogOpening?.focus();
		context.elementThatTriggeredDialogOpening = null;
	}
};

const productGallery = {
	state: {
		get isSelected() {
			const { selectedImage, imageId } = getContext();
			return selectedImage === imageId;
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

			swiperDialog.slideToLoop(
				getSlideIndexByImageId( context.selectedImage ),
				0,
				false
			);

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

			setTimeout( () => {
				( dialogPreviousButton as HTMLButtonElement ).focus();
			}, 100 );
		},
		selectImage: () => {
			const context = getContext();
			context.selectedImage = context.imageId;
			swiperMain.slideToLoop(
				getSlideIndexByImageId( context.imageId ),
				0,
				false
			);
		},
		selectNextImage: ( event: MouseEvent ) => {
			if ( event ) {
				event.stopPropagation();
			}
			const context = getContext();
			if ( context.isDialogOpen ) {
				swiperDialog.slideNext();
			} else {
				swiperMain.slideNext();
			}
		},
		selectPreviousImage: ( event: MouseEvent ) => {
			if ( event ) {
				event.stopPropagation();
			}
			const context = getContext();
			if ( context.isDialogOpen ) {
				swiperDialog.slidePrev();
			} else {
				swiperMain.slidePrev();
			}
		},
		onThumbnailKeyDown: ( event: KeyboardEvent ) => {
			const context = getContext();
			if (
				event.code === 'Enter' ||
				event.code === 'Space' ||
				event.code === 'NumpadEnter'
			) {
				if ( event.code === 'Space' ) {
					event.preventDefault();
				}
				context.selectedImage = context.imageId;
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
					swiperDialog.slidePrev();
				}

				// Check if right arrow key is pressed.
				if ( event.code === 'ArrowRight' ) {
					swiperDialog.slideNext();
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
