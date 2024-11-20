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
	ProductFilterPriceContext,
	ProductFilterPriceStore,
} from '../price-filter/frontend';

const _debounceSetPrice = debounce(
	(
		event: HTMLElementEvent< HTMLInputElement >,
		productFilterPriceStore: ProductFilterPriceStore
	) => {
		const isMin = event.target.classList.contains( 'min' );
		const targetValue = Number( event.target.value );
		productFilterPriceStore.actions.setPrice(
			isMin ? 'min' : 'max',
			targetValue
		);

		event.target.dispatchEvent( new Event( 'change' ) );
	},
	1000
);

store( 'woocommerce/product-filter-price-slider', {
	state: {
		rangeStyle: () => {
			const { minRange, maxRange } =
				getContext< ProductFilterPriceContext >(
					'woocommerce/product-filter-price'
				);
			const productFilterPriceStore = store< ProductFilterPriceStore >(
				'woocommerce/product-filter-price'
			);
			const { minPrice, maxPrice } = productFilterPriceStore.state;

			return `--low: ${
				( 100 * ( minPrice - minRange ) ) / ( maxRange - minRange )
			}%; --high: ${
				( 100 * ( maxPrice - minRange ) ) / ( maxRange - minRange )
			}%;`;
		},
		formattedMinPrice: () => {
			const productFilterPriceStore = store< ProductFilterPriceStore >(
				'woocommerce/product-filter-price'
			);
			const { minPrice } = productFilterPriceStore.state;
			return formatPrice( minPrice, getCurrency( { minorUnit: 0 } ) );
		},
		formattedMaxPrice: () => {
			const productFilterPriceStore = store< ProductFilterPriceStore >(
				'woocommerce/product-filter-price'
			);
			const { maxPrice } = productFilterPriceStore.state;
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
		debounceSetPrice: debounce(
			( e: HTMLElementEvent< HTMLInputElement > ) => {
				e.target.dispatchEvent( new Event( 'change' ) );
			},
			1000
		),
		limitRange: ( e: HTMLElementEvent< HTMLInputElement > ) => {
			const productFilterPriceStore = store< ProductFilterPriceStore >(
				'woocommerce/product-filter-price'
			);
			const { minPrice, maxPrice } = productFilterPriceStore.state;
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
