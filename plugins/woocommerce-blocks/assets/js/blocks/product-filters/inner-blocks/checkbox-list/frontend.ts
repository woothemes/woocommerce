/**
 * External dependencies
 */
import { getContext, getElement, store } from '@woocommerce/interactivity';
import { HTMLElementEvent } from '@woocommerce/types';

/**
 * Internal dependencies
 */

export type CheckboxListContext = {
	items: {
		id: string;
		label: string;
		value: string;
		selected: boolean;
	}[];
	showAll: boolean;
};

store( 'woocommerce/product-filter-checkbox-list', {
	state: {
		get isItemSelected() {
			const context = getContext< CheckboxListContext >();
			const { props } = getElement();
			const result = context.items.find(
				( item ) => item.value === props.value
			);

			if ( result ) return result.selected;

			return false;
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
						selected: ! item.selected,
					};
				}
				return item;
			} );
		},
	},
} );
