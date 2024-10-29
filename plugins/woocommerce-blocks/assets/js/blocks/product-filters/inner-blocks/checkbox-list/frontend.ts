/**
 * External dependencies
 */
import { getContext, getElement, store } from '@woocommerce/interactivity';
import { HTMLElementEvent } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { ProductFiltersContext } from '../../frontend';

/**
 * Internal dependencies
 */

export type CheckboxListContext = {
	items: {
		id: string;
		label: string;
		value: string;
		checked: boolean;
	}[];
	showAll: boolean;
	filterKey: string;
};

store( 'woocommerce/product-filter-checkbox-list', {
	state: {
		get isItemSelected() {
			const { props } = getElement();
			const { filterKey } = getContext< CheckboxListContext >();
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			return (
				filterKey &&
				productFiltersContext.activeFilters &&
				productFiltersContext.activeFilters[ filterKey ] &&
				productFiltersContext.activeFilters[ filterKey ].includes(
					props.value
				)
			);
		},
	},
	actions: {
		showAllItems: () => {
			const context = getContext< CheckboxListContext >();
			context.showAll = true;
		},

		selectCheckboxItem: ( event: HTMLElementEvent< HTMLInputElement > ) => {
			const context = getContext< CheckboxListContext >();
			const value = event.target.value;

			context.items = context.items.map( ( item ) => {
				if ( item.value.toString() === value ) {
					return {
						...item,
						checked: ! item.checked,
					};
				}
				return item;
			} );
		},
	},
} );
