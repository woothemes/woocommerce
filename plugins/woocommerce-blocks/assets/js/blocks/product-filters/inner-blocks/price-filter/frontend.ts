/**
 * External dependencies
 */
import { store, getContext, getElement } from '@woocommerce/interactivity';

/**
 * Internal dependencies
 */
import { ProductFiltersContext } from '../../frontend';
import { HTMLElementEvent } from '@woocommerce/types';

export type PriceFilterContext = {
	minRange: number;
	maxRange: number;
};

function inRange( value: number, min: number, max: number ) {
	return value >= min && value <= max;
}

const { state, actions } = store( 'woocommerce/product-filter-price', {
	state: {
		get minPrice() {
			const context = getContext< PriceFilterContext >();
			const { params } = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			const price = params?.min_price
				? parseInt( params.min_price, 10 )
				: context.minRange;
			console.log( price );
			return price;
		},
		get maxPrice() {
			const context = getContext< PriceFilterContext >();
			const { params } = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			return params?.max_price
				? parseInt( params.max_price, 10 )
				: context.maxRange;
		},
	},
	actions: {
		setMinPrice: ( e: HTMLElementEvent< HTMLInputElement > ) => {
			const context = getContext< PriceFilterContext >();
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			const params = { ...productFiltersContext.params };
			const minPrice = parseInt( e.target.value, 10 );

			if (
				minPrice &&
				inRange( minPrice, context.minRange, context.maxRange ) &&
				minPrice < state.maxPrice
			) {
				if (
					Number( minPrice ) > context.minRange &&
					Number( minPrice ) < context.maxRange
				) {
					params.min_price = minPrice.toString();
				} else {
					delete params.min_price;
				}
			}

			productFiltersContext.params = params;
		},
		setMaxPrice: ( e: HTMLElementEvent< HTMLInputElement > ) => {
			const context = getContext< PriceFilterContext >();
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			const params = { ...productFiltersContext.params };
			const maxPrice = parseInt( e.target.value, 10 );

			if (
				maxPrice &&
				inRange( maxPrice, context.minRange, context.maxRange ) &&
				maxPrice > state.minPrice
			) {
				if (
					Number( maxPrice ) > context.minRange &&
					Number( maxPrice ) < context.maxRange
				) {
					params.max_price = maxPrice.toString();
				} else {
					delete params.max_price;
				}
			}

			productFiltersContext.params = params;
		},
		clearFilters: () => {
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			const updatedParams = productFiltersContext.params;

			delete updatedParams.min_price;
			delete updatedParams.max_price;

			productFiltersContext.params = updatedParams;
		},
	},
} );

export type ProductFilterPriceStore = {
	state: typeof state;
	actions: typeof actions;
};
