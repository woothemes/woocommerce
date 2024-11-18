/**
 * External dependencies
 */
import clsx from 'clsx';
import { __ } from '@wordpress/i18n';
import { getSetting } from '@woocommerce/settings';
import type { CartFeeItem, Currency } from '@woocommerce/types';
import type { ReactElement } from 'react';

/**
 * Internal dependencies
 */
import TotalsItem from '../item';

export interface TotalsFeesProps {
	/**
	 * Currency
	 */
	currency: Currency;
	/**
	 * Cart fees
	 */
	cartFees: CartFeeItem[];
	/**
	 * Component wrapper classname
	 *
	 * @default 'wc-block-components-totals-fees'
	 */
	className?: string;

	/**
	 * Heading
	 */
	heading: React.ReactNode;
}

const TotalsFees = ( {
	currency,
	cartFees,
	className,
	heading,
}: TotalsFeesProps ): ReactElement | null => {
	return (
		<>
			{ cartFees.map( ( { id, key, name, totals }, index ) => {
				const feesValue = parseInt( totals.total, 10 );

				if ( ! feesValue ) {
					return null;
				}

				const feesTaxValue = parseInt( totals.total_tax, 10 );

				return (
					<TotalsItem
						key={ id || `${ index }-${ name }` }
						className={ clsx(
							'wc-block-components-totals-fees',
							'wc-block-components-totals-fees__' + key,
							className
						) }
						currency={ currency }
						label={ heading }
						value={
							getSetting( 'displayCartPricesIncludingTax', false )
								? feesValue + feesTaxValue
								: feesValue
						}
					/>
				);
			} ) }
		</>
	);
};

export default TotalsFees;
