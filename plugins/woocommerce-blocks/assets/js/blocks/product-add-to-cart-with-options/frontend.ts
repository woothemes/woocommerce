/**
 * External dependencies
 */
import { store } from '@woocommerce/interactivity';

store( 'woocommerce/product-add-to-cart-with-options', {
	actions: {
		addToCart: () => {
			console.log( 'Add to cart' ); // eslint-disable-line no-console
		},
	},
} );
