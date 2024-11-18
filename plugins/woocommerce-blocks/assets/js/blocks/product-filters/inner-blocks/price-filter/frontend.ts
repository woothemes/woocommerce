/**
 * External dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

/**
 * Internal dependencies
 */
import { ProductFiltersContext } from '../../frontend';

export type PriceFilterContext = {
	minPrice: number;
	maxPrice: number;
	minRange: number;
	maxRange: number;
};

function inRange( value: number, min: number, max: number ) {
	return value >= min && value <= max;
}

console.log( 'price' );
store( 'woocommerce/product-filter-price', {
	actions: {
		setPrices: () => {
			console.log( 'setPrices' );
			const context = getContext< PriceFilterContext >();
			const prices: Record< string, string > = {};
			const { ref } = getElement();
			const targetMinPriceAttribute =
				ref?.getAttribute( 'data-target-min-price' ) ??
				'data-min-price';
			const targetMaxPriceAttribute =
				ref?.getAttribute( 'data-target-max-price' ) ??
				'data-max-price';

			const minPrice = ref?.getAttribute( targetMinPriceAttribute );
			if (
				minPrice &&
				inRange(
					parseFloat( minPrice ),
					context.minRange,
					context.maxRange
				) &&
				parseFloat( minPrice ) < context.maxPrice
			) {
				prices.minPrice = minPrice;
			}

			const maxPrice = ref?.getAttribute( targetMaxPriceAttribute );
			if (
				maxPrice &&
				inRange(
					parseFloat( maxPrice ),
					context.minRange,
					context.maxRange
				) &&
				parseFloat( maxPrice ) > context.minPrice
			) {
				prices.maxPrice = maxPrice;
			}

			Object.assign( context, prices );

			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);

			const validatedPrices: Record< string, string > = {};
			const params = { ...productFiltersContext.params };

			if (
				Number( context.minPrice ) > context.minRange &&
				Number( context.minPrice ) < context.maxRange
			) {
				validatedPrices.min_price = context.minPrice.toString();
			} else {
				delete params.min_price;
			}

			if (
				Number( context.maxPrice ) > context.minRange &&
				Number( context.maxPrice ) < context.maxRange
			) {
				validatedPrices.max_price = context.maxPrice.toString();
			} else {
				delete params.max_price;
			}

			productFiltersContext.params = {
				...params,
				...validatedPrices,
			};
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
