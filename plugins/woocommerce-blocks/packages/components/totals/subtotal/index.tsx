/**
 * External dependencies
 */
import { getSetting } from '@woocommerce/settings';
import type { Currency } from '@woocommerce/types';
import type { ReactElement } from 'react';

/**
 * Internal dependencies
 */
import TotalsItem from '../item';

interface Values {
	total_items: string;
	total_items_tax: string;
}

export interface SubtotalProps {
	className?: string;
	currency: Currency;
	values: Values | Record< string, never >;
	label: string | React.ReactNode;
}

const Subtotal = ( {
	currency,
	values,
	className,
	label,
}: SubtotalProps ): ReactElement => {
	const { total_items: totalItems, total_items_tax: totalItemsTax } = values;
	const itemsValue = parseInt( totalItems, 10 );
	const itemsTaxValue = parseInt( totalItemsTax, 10 );

	return (
		<TotalsItem
			className={ className }
			currency={ currency }
			label={ label }
			value={
				getSetting( 'displayCartPricesIncludingTax', false )
					? itemsValue + itemsTaxValue
					: itemsValue
			}
		/>
	);
};

export default Subtotal;
