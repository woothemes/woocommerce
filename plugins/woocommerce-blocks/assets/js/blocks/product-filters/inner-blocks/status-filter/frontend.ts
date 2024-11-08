/**
 * External dependencies
 */
import { getContext, getElement, store } from '@woocommerce/interactivity';

/**
 * Internal dependencies
 */
import type { ProductFiltersContext } from '../../frontend';

const filterStockStatusKey = 'filter_stock_status';

store( 'woocommerce/product-filter-status', {
	state: {
		get hasSelectedFilters() {
			const { params } = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);

			return (
				filterStockStatusKey in params && params[ filterStockStatusKey ]
			);
		},
	},

	actions: {
		toggleFilter: () => {
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			const currentFilters =
				productFiltersContext.params[ filterStockStatusKey ];

			// split out the active filters into an array.
			const filtersArr =
				currentFilters === undefined ? [] : currentFilters.split( ',' );

			const { props } = getElement();
			const { value } = props;

			const newFilterArr = filtersArr.includes( value )
				? [ ...filtersArr.filter( ( filter ) => filter !== value ) ]
				: [ ...filtersArr, value ];

			if ( newFilterArr.length === 0 ) {
				delete productFiltersContext.params[ filterStockStatusKey ];
				return;
			}

			productFiltersContext.params = {
				...productFiltersContext.params,
				[ filterStockStatusKey ]: newFilterArr.join( ',' ),
			};
		},
		clearFilters: () => {
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			const updatedParams = productFiltersContext.params;

			delete updatedParams[ filterStockStatusKey ];

			productFiltersContext.params = {
				...updatedParams,
			};
		},
	},
} );
