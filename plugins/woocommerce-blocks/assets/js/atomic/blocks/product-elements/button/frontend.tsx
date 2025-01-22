/**
 * External dependencies
 */
import { store, getContext as getContextFn } from '@woocommerce/interactivity';
// Todo: remove once we import from `@wordpress/interactivity`.
// Todo: if we ever release this, make sure we are not bundling the `@wordpress/interactivity` package.
import type { store as StoreType } from '@wordpress/interactivity';
import type { Store as WooStore } from '../../../../base/stores/add-to-cart';

interface Context {
	addToCartText: string;
	productId: number;
	displayViewCart: boolean;
	quantityToAdd: number;
	tempQuantity: number;
	animationStatus: AnimationStatus;
}

const getContext = () => getContextFn< Context >();

enum AnimationStatus {
	IDLE = 'IDLE',
	SLIDE_OUT = 'SLIDE-OUT',
	SLIDE_IN = 'SLIDE-IN',
}

interface Store {
	state: {
		inTheCartText: string;
		quantity: number;
		hasCartLoaded: boolean;
		slideInAnimation: boolean;
		slideOutAnimation: boolean;
		addToCartText: string;
		displayViewCart: boolean;
	};
	actions: {
		addToCart: () => void;
		refreshCart: () => void;
		handleAnimationEnd: ( event: AnimationEvent ) => void;
	};
	callbacks: {
		startAnimation: () => void;
		syncTempQuantityOnLoad: () => void;
	};
}

const { state: wooState } = store< WooStore >( 'woocommerce' );

// Todo: Remove the type cast once we import from `@wordpress/interactivity`.
const { state } = ( store as typeof StoreType )< Store >(
	'woocommerce/product-button',
	{
		state: {
			get quantity() {
				const { productId } = getContext();
				const product = wooState.cart.items.find(
					( item ) => item.id === productId
				);
				return product?.quantity || 0;
			},
			get slideInAnimation() {
				const { animationStatus } = getContext();
				return animationStatus === AnimationStatus.SLIDE_IN;
			},
			get slideOutAnimation() {
				const { animationStatus } = getContext();
				return animationStatus === AnimationStatus.SLIDE_OUT;
			},
			get hasCartLoaded(): boolean {
				return !! wooState.cart;
			},
			get addToCartText(): string {
				const { animationStatus, tempQuantity, addToCartText } =
					getContext();

				// We use the temporary quantity when there's no animation, or when
				// the second part of the animation hasn't started yet.
				const showTemporaryNumber =
					animationStatus === AnimationStatus.IDLE ||
					animationStatus === AnimationStatus.SLIDE_OUT;
				const quantity = showTemporaryNumber
					? tempQuantity
					: state.quantity;

				if ( quantity === 0 ) return addToCartText;
				return state.inTheCartText.replace(
					'###',
					quantity.toString()
				);
			},
			get displayViewCart(): boolean {
				const { displayViewCart, tempQuantity } = getContext();
				if ( ! displayViewCart ) return false;
				if ( ! state.hasCartLoaded ) {
					return tempQuantity > 0;
				}
				return state.quantity > 0;
			},
		},
		actions: {
			*addToCart() {
				const context = getContext();
				const { productId, quantityToAdd } = context;

				// Todo: move the addToCart store to its own module.
				const { actions } = ( yield import(
					'../../../../base/stores/add-to-cart'
				) ) as WooStore;

				actions.addToCart(
					productId,
					// Question: is quantityToAdd available in the cart or we need to pass it down?
					state.quantity + quantityToAdd
				);
			},
			*refreshCart() {
				// Question: use `splitTask` here? Does it make sense?
				// Question: does it make sense to use a dynamic import instead of a static one?
				// Todo: move the addToCart store to its own module.
				const { actions } = ( yield import(
					'../../../../base/stores/add-to-cart'
				) ) as WooStore;
				actions.refreshCart();
			},
			handleAnimationEnd( event: AnimationEvent ) {
				const context = getContext();
				if ( event.animationName === 'slideOut' ) {
					// When the first part of the animation (slide-out) ends, we move
					// to the second part (slide-in).
					context.animationStatus = AnimationStatus.SLIDE_IN;
				} else if ( event.animationName === 'slideIn' ) {
					// When the second part of the animation ends, we update the
					// temporary number of items to sync it with the cart and reset the
					// animation status so it can be triggered again.
					context.tempQuantity = state.quantity;
					context.animationStatus = AnimationStatus.IDLE;
				}
			},
		},
		callbacks: {
			// Todo: switch to a data-wp-run directive with a `useLayoutEffect` hook inside.
			syncTempQuantityOnLoad() {
				const context = getContext();
				// If the cart has loaded when we instantiate this element, we sync
				// the temporary number of items with the number of items in the cart
				// to avoid triggering the animation. We do this only once, but we
				// use useLayoutEffect to avoid the useEffect flickering.
				if ( state.hasCartLoaded ) {
					context.tempQuantity = state.quantity;
				}
			},
			startAnimation() {
				const context = getContext();
				// We start the animation if the cart has loaded, the temporary number
				// of items is out of sync with the number of items in the cart, the
				// button is not loading (because that means the user started the
				// interaction) and the animation hasn't started yet.
				if (
					state.hasCartLoaded &&
					context.tempQuantity !== state.quantity &&
					context.animationStatus === AnimationStatus.IDLE
				) {
					context.animationStatus = AnimationStatus.SLIDE_OUT;
				}
			},
		},
	}
	// Todo: Lock this store once we import from `@wordpress/interactivity`.
	// { lock: true }
);
