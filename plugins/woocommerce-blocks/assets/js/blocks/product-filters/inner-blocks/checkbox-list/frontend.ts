/**
 * External dependencies
 */
import { getContext, getElement, store } from '@woocommerce/interactivity';

/**
 * Internal dependencies
 */
import { ProductFiltersContext } from '../../frontend';

export type CheckboxListContext = {
	showAll: boolean;
	filterParamKeys: string[];
};

store( 'woocommerce/product-filter-checkbox-list', {
	state: {
		get isItemSelected() {
			const context = getContext< CheckboxListContext >();

			if (
				! context.filterParamKeys ||
				context.filterParamKeys.length === 0
			)
				return false;

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
			const context = getContext< CheckboxListContext >();
			context.showAll = true;
		},
	},
} );
