/**
 * External dependencies
 */
import { getContext, store } from '@woocommerce/interactivity';

/**
 * Internal dependencies
 */

export type ChipsContext = {
	showAll: boolean;
};

store( 'woocommerce/product-filter-chips', {
	actions: {
		showAllItems: () => {
			const context = getContext< ChipsContext >();
			context.showAll = true;
		},
	},
} );
