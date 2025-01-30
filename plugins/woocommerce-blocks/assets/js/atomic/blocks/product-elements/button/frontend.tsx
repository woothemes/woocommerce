/**
 * External dependencies
 */
import {
	store,
	getContext as getContextFn,
	useLayoutEffect,
} from '@wordpress/interactivity';

/**
 * Internal dependencies
 */
import type { Store as WooStore } from '../../../../base/stores/cart-items';

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
		noticeId: string;
	};
	actions: {
		addCartItem: () => void;
		refreshCartItems: () => void;
		handleAnimationEnd: ( event: AnimationEvent ) => void;
	};
	callbacks: {
		startAnimation: () => void;
		syncTempQuantityOnLoad: () => void;
	};
}

const { state: wooState } = store< WooStore >( 'woocommerce' );

const { state } = store< Store >(
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
			get addToCartText(): string {
				const { animationStatus, tempQuantity, addToCartText } =
					getContext();

				// We use the temporary quantity when there's no animation, or
				// when the second part of the animation hasn't started yet.
				const showTemporaryNumber =
					animationStatus === AnimationStatus.IDLE ||
					animationStatus === AnimationStatus.SLIDE_OUT;
				const quantity = showTemporaryNumber
					? tempQuantity || 0
					: state.quantity;

				if ( quantity === 0 ) return addToCartText;

				return state.inTheCartText.replace(
					'###',
					quantity.toString()
				);
			},
			get displayViewCart(): boolean {
				const { displayViewCart } = getContext();
				if ( ! displayViewCart ) return false;
				return state.quantity > 0;
			},
		},
		actions: {
			*addCartItem() {
				const context = getContext();
				const { productId, quantityToAdd } = context;

				// Todo: move the CartItems store part to its own module.
				const { actions } = ( yield import(
					'../../../../base/stores/cart-items'
				) ) as WooStore;

				// Question: should this action throw so we can capture the error here?
				actions.addCartItem( {
					id: productId,
					quantity: state.quantity + quantityToAdd,
				} );

				context.displayViewCart = true;
			},
			*refreshCartItems() {
				// Todo: move the CartItems store part to its own module.
				const { actions } = ( yield import(
					'../../../../base/stores/cart-items'
				) ) as WooStore;
				actions.refreshCartItems();
			},
			handleAnimationEnd( event: AnimationEvent ) {
				const context = getContext();
				if ( event.animationName === 'slideOut' ) {
					// When the first part of the animation (slide-out) ends, we move
					// to the second part (slide-in).
					context.animationStatus = AnimationStatus.SLIDE_IN;
				} else if ( event.animationName === 'slideIn' ) {
					// When the second part of the animation ends, we update the
					// temporary quantity to sync it with the cart and reset the
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
				// When we instantiate this element, we sync the temporary
				// quantity with the quantity in the cart to avoid triggering
				// the animation. We do this only once, and we use
				// useLayoutEffect to avoid the useEffect flickering.
				useLayoutEffect( () => {
					context.tempQuantity = state.quantity;
				}, [] );
			},
			startAnimation() {
				const context = getContext();
				// We start the animation if the temporary quantity is out of
				// sync with the quantity in the cart and the animation hasn't
				// started yet.
				if (
					context.tempQuantity !== state.quantity &&
					context.animationStatus === AnimationStatus.IDLE
				) {
					context.animationStatus = AnimationStatus.SLIDE_OUT;
				}
			},
		},
	},
	{ lock: true }
);
