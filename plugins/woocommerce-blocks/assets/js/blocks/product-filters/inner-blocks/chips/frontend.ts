/**
 * External dependencies
 */
import { getContext, store } from '@woocommerce/interactivity';

export type ChipsContext = {
	showAll: boolean;
	filterParamKeys: string[];
};

store( 'woocommerce/product-filter-chips', {
	actions: {
		showAllItems: () => {
			const context = getContext< ChipsContext >();
			context.showAll = true;
		},
	},
} );
