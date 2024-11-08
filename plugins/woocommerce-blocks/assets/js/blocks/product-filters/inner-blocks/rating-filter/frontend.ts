/**
 * External dependencies
 */
import { getContext, store, getElement } from '@woocommerce/interactivity';

/**
 * Internal dependencies
 */
import type { ProductFiltersContext } from '../../frontend';

const filterRatingKey = 'rating_filter';

/**
 * Get the rating list (an array of strings)
 * from the product filters context.
 *
 * @param {ProductFiltersContext} context The context
 * @return {Array} The rating filters
 */
function getRatingFilters( context: ProductFiltersContext ): Array< string > {
	if ( ! context.params[ filterRatingKey ] ) {
		return [];
	}

	return context.params[ filterRatingKey ].split( ',' );
}

store( 'woocommerce/product-filter-rating', {
	state: {
		get hasSelectedFilters() {
			const { params } = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			return filterRatingKey in params && params[ filterRatingKey ];
		},
	},
	actions: {
		toggleFilter: () => {
			const context = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);

			// Pick out the active filters from the context
			const filtersList = getRatingFilters( context );

			const { props } = getElement();
			const { value } = props;

			const updatedFiltersList = filtersList.includes( value )
				? [ ...filtersList.filter( ( filter ) => filter !== value ) ]
				: [ ...filtersList, value ];

			if ( updatedFiltersList.length === 0 ) {
				delete context.params[ filterRatingKey ];
				return;
			}

			// Populate the context with the new rating filters
			context.params = {
				...context.params,
				[ filterRatingKey ]: updatedFiltersList.join( ',' ),
			};
		},

		clearFilters: () => {
			const context = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			const updatedParams = context.params;

			delete updatedParams[ filterRatingKey ];

			context.params = {
				...updatedParams,
			};
		},
	},
} );
