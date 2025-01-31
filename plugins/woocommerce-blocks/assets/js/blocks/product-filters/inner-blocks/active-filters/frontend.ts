/**
 * External dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

/**
 * Internal dependencies
 */
import { ProductFiltersContext, ProductFiltersStore } from '../../frontend';

type ProductFilterActiveContext = {
	removeLabelTemplate: string;
};

type FilterItem = {
	type: string;
	value: string;
};

function isFilterItem(
	value: string | null | FilterItem
): value is FilterItem {
	return (
		typeof value === 'object' &&
		value !== null &&
		typeof value.type === 'string' &&
		typeof value.value === 'string'
	);
}

const productFilterActiveStore = store( 'woocommerce/product-filter-active', {
	state: {
		get items() {
			const context = getContext< ProductFilterActiveContext >();
			const productFiltersStore = store< ProductFiltersStore >(
				'woocommerce/product-filters'
			);

			return productFiltersStore.state.activeFilters.map( ( item ) => ( {
				...item,
				removeLabel: context.removeLabelTemplate.replace(
					'{{label}}',
					item.label
				),
			} ) );
		},
		get hasSelectedFilters() {
			const productFiltersStore = store< ProductFiltersStore >(
				'woocommerce/product-filters'
			);
			return productFiltersStore.state.activeFilters.length > 0;
		},
	},
	actions: {
		removeFilter: () => {
			const { ref } = getElement();
			if ( ! ref ) return;

			try {
				let filterItem: string | null | FilterItem =
					ref.getAttribute( 'data-filter-item' );

				filterItem = filterItem
					? ( JSON.parse( filterItem ) as FilterItem )
					: null;

				// Using a typeguard, makes it much easier to work with the filter item in TS.
				if ( ! isFilterItem( filterItem ) ) return;

				const { type, value } = filterItem;

				const productFiltersStore = store< ProductFiltersStore >(
					'woocommerce/product-filters'
				);

				productFiltersStore.actions.removeActiveFilter( type, value );
				productFiltersStore.actions.navigate();
			} catch ( error ) {
				// type and value missing is possible, and we don't throw, so also don't throw if JSON cannot be parsed.
				// It could be worth a console error in development for either of these cases for troubleshooting.
			}
		},
		clearFilters: () => {
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			productFiltersContext.activeFilters = [];

			const productFiltersStore = store< ProductFiltersStore >(
				'woocommerce/product-filters'
			);
			productFiltersStore.actions.navigate();
		},
	},
} );

export type ProductFilterActiveStore = typeof productFilterActiveStore;
