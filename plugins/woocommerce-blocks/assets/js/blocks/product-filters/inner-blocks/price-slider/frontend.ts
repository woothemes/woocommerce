/**
 * External dependencies
 */
import { store, getContext, getElement } from '@woocommerce/interactivity';
import { formatPrice, getCurrency } from '@woocommerce/price-format';
import { HTMLElementEvent } from '@woocommerce/types';
import { debounce } from '@woocommerce/base-utils';

/**
 * Internal dependencies
 */
import {
	PriceFilterContext,
	ProductFilterPriceStore,
} from '../price-filter/frontend';
import { parseInt } from 'lodash';

function inRange( value: number, min: number, max: number ) {
	return value >= min && value <= max;
}

const constrainRangeSliderValues = (
	/**
	 * Tuple containing min and max values.
	 */
	values: [ number, number ],
	/**
	 * Min allowed value for the sliders.
	 */
	min?: number | null,
	/**
	 * Max allowed value for the sliders.
	 */
	max?: number | null,
	/**
	 * Step value for the sliders.
	 */
	step = 1,
	/**
	 * Whether we're currently interacting with the min range slider or not, so we update the correct values.
	 */
	isMin = false
): { minPrice: number; maxPrice: number } => {
	let [ minValue, maxValue ] = values;

	const isFinite = ( n: number | null | undefined ): n is number =>
		Number.isFinite( n );

	if ( ! isFinite( minValue ) ) {
		minValue = min || 0;
	}

	if ( ! isFinite( maxValue ) ) {
		maxValue = max || step;
	}

	if ( isFinite( min ) && min > minValue ) {
		minValue = min;
	}

	if ( isFinite( max ) && max <= minValue ) {
		minValue = max - step;
	}

	if ( isFinite( min ) && min >= maxValue ) {
		maxValue = min + step;
	}

	if ( isFinite( max ) && max < maxValue ) {
		maxValue = max;
	}

	if ( ! isMin && minValue >= maxValue ) {
		minValue = maxValue - step;
	}

	if ( isMin && maxValue <= minValue ) {
		maxValue = minValue + step;
	}

	return { minPrice: minValue, maxPrice: maxValue };
};

const _updateRange = (
	event: HTMLElementEvent< HTMLInputElement >,
	context: PriceSliderContext
) => {
	const { minPrice, maxPrice, minRange, maxRange } = context;
	const isMin = event.target.classList.contains( 'min' );
	const targetValue = Number( event.target.value );
	const stepValue = 1;
	const currentValues: [ number, number ] = isMin
		? [ Math.round( targetValue / stepValue ) * stepValue, maxPrice ]
		: [ minPrice, Math.round( targetValue / stepValue ) * stepValue ];
	const values = constrainRangeSliderValues(
		currentValues,
		minRange,
		maxRange,
		stepValue,
		isMin
	);

	if ( targetValue >= maxPrice ) {
		context.maxPrice = minPrice + 1;
	} else if ( targetValue <= minPrice ) {
		context.minPrice = maxPrice - 1;
	}

	if ( isMin ) {
		context.minPrice = values.minPrice;
	} else {
		context.maxPrice = values.maxPrice;
	}
};

const _debounceUpdateRange = debounce(
	(
		event: HTMLElementEvent< HTMLInputElement >,
		context: PriceSliderContext
	) => {
		const isMin = event.target.classList.contains( 'min' );
		const isMax = event.target.classList.contains( 'max' );
		const targetValue = Number( event.target.value );
		if ( isMin ) {
			if (
				targetValue &&
				inRange( targetValue, context.minRange, context.maxRange ) &&
				targetValue < context.maxPrice
			) {
				context.minPrice = targetValue;
			} else {
				context.minPrice = context.minRange;
			}
			event.target.setAttribute(
				'data-min-price',
				context.minPrice.toString()
			);
			event.target.value = formatPrice(
				context.minPrice,
				getCurrency( { minorUnit: 0 } )
			);
		}

		if ( isMax ) {
			if (
				targetValue &&
				inRange( targetValue, context.minRange, context.maxRange ) &&
				targetValue > context.minPrice
			) {
				context.maxPrice = targetValue;
			} else {
				context.maxPrice = context.maxRange;
			}
			event.target.setAttribute(
				'data-max-price',
				context.maxPrice.toString()
			);
			event.target.value = formatPrice(
				context.maxPrice,
				getCurrency( { minorUnit: 0 } )
			);
		}

		event.target.dispatchEvent( new Event( 'change' ) );
	},
	1000
);

store( 'woocommerce/product-filter-price-slider', {
	state: {
		rangeStyle: () => {
			const { state } = store< ProductFilterPriceStore >(
				'woocommerce/product-filter-price'
			);
			const { minPrice, maxPrice } = state;
			const { minRange, maxRange } = getContext< PriceFilterContext >(
				'woocommerce/product-filter-price'
			);
			console.log(
				minPrice,
				maxPrice,
				minRange,
				maxRange,
				( 100 * ( maxPrice - minRange ) ) / ( maxRange - minRange )
			);

			return `--low: ${
				( 100 * ( minPrice - minRange ) ) / ( maxRange - minRange )
			}%; --high: ${
				( 100 * ( maxPrice - minRange ) ) / ( maxRange - minRange )
			}%;`;
		},
		formattedMinPrice: () => {
			const { state } = store< ProductFilterPriceStore >(
				'woocommerce/product-filter-price'
			);
			const { minPrice } = state;
			return formatPrice( minPrice, getCurrency( { minorUnit: 0 } ) );
		},
		formattedMaxPrice: () => {
			const { state } = store< ProductFilterPriceStore >(
				'woocommerce/product-filter-price'
			);
			const { maxPrice } = state;
			return formatPrice( maxPrice, getCurrency( { minorUnit: 0 } ) );
		},
	},
	actions: {
		selectInputContent: () => {
			const element = getElement();
			if ( element && element.ref ) {
				element.ref.select();
			}
		},
		limitRange: ( e: HTMLElementEvent< HTMLInputElement > ) => {
			const { state } = store< ProductFilterPriceStore >(
				'woocommerce/product-filter-price'
			);
			const { minPrice, maxPrice } = state;
			if ( e.target.classList.contains( 'min' ) ) {
				e.target.value = Math.min(
					parseInt( e.target.value, 10 ),
					maxPrice - 1
				).toString();
			} else {
				e.target.value = Math.max(
					parseInt( e.target.value, 10 ),
					minPrice + 1
				).toString();
			}
		},
	},
} );
