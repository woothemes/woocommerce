/**
 * External dependencies
 */
import { getElement, getContext, store } from '@woocommerce/interactivity';

/**
 * Internal dependencies
 */
import { ProductFiltersContext } from '../../frontend';

export type ChipsContext = {
	showAll: boolean;
	filterParamKeys: string[];
};

store( 'woocommerce/product-filter-chips', {
	state: {
		get isItemSelected() {
			const context = getContext< ChipsContext >();

			if (
				! context.filterParamKeys ||
				context.filterParamKeys.length === 0
			) {
				return false;
			}

			const { props } = getElement();
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			return context.filterParamKeys.some(
				( key ) =>
					key in productFiltersContext.params &&
					productFiltersContext.params[ key ].includes( props.value )
			);
		},
	},
	actions: {
		showAllItems: () => {
			const context = getContext< ChipsContext >();
			context.showAll = true;
		},
	},
} );
