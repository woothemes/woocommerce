/**
 * External dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

/**
 * Internal dependencies
 */
import { ProductFiltersContext } from '../../frontend';

console.log( 'test' );
store( 'woocommerce/product-filter-active', {
	actions: {
		clearFilters: () => {
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			productFiltersContext.params = {};
		},
	},
} );
