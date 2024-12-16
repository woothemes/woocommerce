/**
 * External dependencies
 */
import { store, getContext } from '@woocommerce/interactivity';

const { state } = store( 'woocommerce/add-to-cart-with-options', {
	state: {},
	actions: {
		addToCart() {
			const { productId } = getContext();
			console.log( `Add ${ state.quantityToAdd } of ${ productId }` );
		},
	},
} );
