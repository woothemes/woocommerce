/**
 * External dependencies
 */
import { store, getContext } from '@woocommerce/interactivity';

/**
 * Internal dependencies
 */
import { ProductFiltersContext } from '../../frontend';

store( 'woocommerce/product-filter-active', {
	state: {
		get hasSelectedFilters() {
			const { params } = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);

			return Object.entries( params ).length > 0;
		},
	},
	actions: {
		clearFilters: () => {
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			productFiltersContext.params = {};
		},
	},
} );
