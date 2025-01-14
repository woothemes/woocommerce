/**
 * External dependencies
 */
import { store, getContext as getContextFn } from '@woocommerce/interactivity';

interface Context {
	isLoading: boolean;
	addToCartText: string;
	productId: number;
	displayViewCart: boolean;
	quantityToAdd: number;
	temporaryNumberOfItems: number;
	animationStatus: AnimationStatus;
}

enum AnimationStatus {
	IDLE = 'IDLE',
	SLIDE_OUT = 'SLIDE-OUT',
	SLIDE_IN = 'SLIDE-IN',
}

interface Cart {
	items: {
		key?: string;
		id: number;
		quantity: number;
	}[];
}

interface Store {
	state: {
		cart: Cart;
		inTheCartText?: string;
		numberOfItemsInTheCart: number;
		hasCartLoaded: boolean;
		slideInAnimation: boolean;
		slideOutAnimation: boolean;
		addToCartText: string;
		displayViewCart: boolean;
	};
	actions: {
		addToCart: () => void;
		handleAnimationEnd: ( event: AnimationEvent ) => void;
	};
	callbacks: {
		startAnimation: () => void;
		syncTemporaryNumberOfItemsOnLoad: () => void;
	};
}

const getProductById = ( cartState: Cart | undefined, productId: number ) => {
	return cartState?.items.find( ( item ) => item.id === productId );
};

const getButtonText = (
	addToCart: string,
	inTheCart: string,
	numberOfItems: number
): string => {
	if ( numberOfItems === 0 ) return addToCart;
	return inTheCart.replace( '###', numberOfItems.toString() );
};

const getContext = ( ns?: string ) => getContextFn< Context >( ns );

window.wooStore = store( 'woocommerce/product-button' );

const { state } = store< Store >( 'woocommerce/product-button', {
	state: {
		get slideInAnimation() {
			const { animationStatus } = getContext();
			return animationStatus === AnimationStatus.SLIDE_IN;
		},
		get slideOutAnimation() {
			const { animationStatus } = getContext();
			return animationStatus === AnimationStatus.SLIDE_OUT;
		},
		get numberOfItemsInTheCart() {
			const { productId } = getContext();
			const product = getProductById( state.cart, productId );
			return product?.quantity || 0;
		},
		get hasCartLoaded(): boolean {
			return !! state.cart;
		},
		get addToCartText(): string {
			const context = getContext();
			const inTheCartText = state.inTheCartText || '';
			// We use the temporary number of items when there's no animation, or the
			// second part of the animation hasn't started.
			const showTemporaryNumber =
				context.animationStatus === AnimationStatus.IDLE ||
				context.animationStatus === AnimationStatus.SLIDE_OUT;
			const numberOfItems = showTemporaryNumber
				? context.temporaryNumberOfItems
				: state.numberOfItemsInTheCart;

			return getButtonText(
				context.addToCartText,
				inTheCartText,
				numberOfItems
			);
		},
		get displayViewCart(): boolean {
			const { displayViewCart, temporaryNumberOfItems } = getContext();
			if ( ! displayViewCart ) return false;
			if ( ! state.hasCartLoaded ) {
				return temporaryNumberOfItems > 0;
			}
			return state.numberOfItemsInTheCart > 0;
		},
	},
	actions: {
		*addToCart() {
			const { productId, quantityToAdd } = getContext();
			const { restUrl, wcStoreApiNonce } = store< {
				state: { restUrl: string; wcStoreApiNonce: string };
			} >( 'woocommerce' ).state;
			let item = state.cart.items.find( ( { id } ) => id === productId );
			let endpoint = `update-item`;

			// Optimistically update the number of items in the cart and then
			// update the database.
			if ( item ) {
				item.quantity += quantityToAdd;
			} else {
				endpoint = 'add-item';
				item = {
					id: productId,
					quantity: quantityToAdd,
				};
				state.cart.items.push( item );
			}

			// Update the database.
			try {
				const res: Response = yield fetch(
					`${ restUrl }wc/store/v1/cart/${ endpoint }`,
					{
						method: 'POST',
						headers: {
							Nonce: wcStoreApiNonce,
							'Content-Type': 'application/json',
						},
						body: JSON.stringify( item ),
					}
				);
				state.cart = yield res.json();
			} catch ( error ) {
				// Todo: Handle error using the new Store Notices block.
				// const { actions } = store('woo/store-notices');
				// actions.addNotice(...);

				// Revert the optimistic update.
				if ( item ) {
					item.quantity -= quantityToAdd;
				} else {
					// Todo: Avoid race conditions here.
					state.cart.items.pop();
				}
			}
		},
		handleAnimationEnd: ( event: AnimationEvent ) => {
			const context = getContext();
			if ( event.animationName === 'slideOut' ) {
				// When the first part of the animation (slide-out) ends, we move
				// to the second part (slide-in).
				context.animationStatus = AnimationStatus.SLIDE_IN;
			} else if ( event.animationName === 'slideIn' ) {
				// When the second part of the animation ends, we update the
				// temporary number of items to sync it with the cart and reset the
				// animation status so it can be triggered again.
				context.temporaryNumberOfItems = state.numberOfItemsInTheCart;
				context.animationStatus = AnimationStatus.IDLE;
			}
		},
	},
	callbacks: {
		syncTemporaryNumberOfItemsOnLoad: () => {
			const context = getContext();
			// If the cart has loaded when we instantiate this element, we sync
			// the temporary number of items with the number of items in the cart
			// to avoid triggering the animation. We do this only once, but we
			// use useLayoutEffect to avoid the useEffect flickering.
			if ( state.hasCartLoaded ) {
				context.temporaryNumberOfItems = state.numberOfItemsInTheCart;
			}
		},
		startAnimation: () => {
			const context = getContext();
			// We start the animation if the cart has loaded, the temporary number
			// of items is out of sync with the number of items in the cart, the
			// button is not loading (because that means the user started the
			// interaction) and the animation hasn't started yet.
			if (
				state.hasCartLoaded &&
				context.temporaryNumberOfItems !==
					state.numberOfItemsInTheCart &&
				! context.isLoading &&
				context.animationStatus === AnimationStatus.IDLE
			) {
				context.animationStatus = AnimationStatus.SLIDE_OUT;
			}
		},
	},
} );
