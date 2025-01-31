/**
 * External dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

/**
 * Internal dependencies
 */
import { ProductFiltersStore } from '../../frontend';
import { FilterOptionItem, isFilterOptionItem } from '../../types';

type ProductFilterAttributeContext = {
	attributeSlug: string;
	queryType: 'or' | 'and';
	selectType: 'single' | 'multiple';
	hasFilterOptions: boolean;
	activeLabelTemplate: string;
};

const { state, actions } = store( 'woocommerce/product-filter-attribute', {
	state: {
		get selectedFilters() {
			const context = getContext< ProductFilterAttributeContext >();
			const productFiltersStore = store< ProductFiltersStore >(
				'woocommerce/product-filters'
			);
			return ( productFiltersStore.state.activeFilters || [] )
				.filter(
					( item ) =>
						item.type === 'attribute' &&
						item.attribute?.slug === context.attributeSlug
				)
				.map( ( item ) => item.value )
				.filter( Boolean );
		},
		get hasSelectedFilters(): boolean {
			return state.selectedFilters.length > 0;
		},
		get isItemSelected(): boolean {
			const { props } = getElement();

			if ( ! props.value ) return false;

			return state.selectedFilters.includes( props.value );
		},
	},
	actions: {
		getActiveLabel( label: string ) {
			const { activeLabelTemplate } =
				getContext< ProductFilterAttributeContext >();
			return activeLabelTemplate.replace( '{{label}}', label );
		},
		toggleFilter: () => {
			const { ref } = getElement();
			if ( ! ref ) return;

			let filterItem: string | null | FilterOptionItem =
				ref.getAttribute( 'data-filter-item' );

			try {
				filterItem = filterItem
					? ( JSON.parse( filterItem ) as FilterOptionItem )
					: null;

				// Using a typeguard makes it much easier to work with the filter item in TS.
				if ( ! isFilterOptionItem( filterItem ) ) return;

				const { ariaLabel, value } = filterItem;

				const context = getContext< ProductFilterAttributeContext >();
				const productFiltersStore = store< ProductFiltersStore >(
					'woocommerce/product-filters'
				);

				if ( state.selectedFilters.includes( value ) ) {
					productFiltersStore.actions.removeActiveFiltersBy(
						( item ) =>
							item.value === value &&
							item.type === 'attribute' &&
							item.attribute?.slug === context.attributeSlug
					);
				} else {
					productFiltersStore.actions.setActiveFilter( {
						type: 'attribute',
						value,
						label: actions.getActiveLabel( ariaLabel ),
						attribute: {
							slug: context.attributeSlug,
							queryType: 'or',
						},
					} );
				}

				productFiltersStore.actions.navigate();
			} catch ( error ) {
				// data-filter-item missing is possible, and we don't throw, so also don't throw if JSON cannot be parsed.
				// It could be worth a console error in development for either of these cases for troubleshooting.
			}
		},

		clearFilters: () => {
			const context = getContext< ProductFilterAttributeContext >();
			const productFiltersStore = store< ProductFiltersStore >(
				'woocommerce/product-filters'
			);

			productFiltersStore.actions.removeActiveFiltersBy(
				( item ) =>
					item.type === 'attribute' &&
					item.attribute?.slug === context.attributeSlug
			);

			productFiltersStore.actions.navigate();
		},
	},
} );
