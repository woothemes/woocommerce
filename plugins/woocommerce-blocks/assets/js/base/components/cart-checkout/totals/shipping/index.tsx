/**
 * External dependencies
 */
import clsx from 'clsx';
import { __ } from '@wordpress/i18n';
import { TotalsItem } from '@woocommerce/blocks-components';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import { hasShippingRate } from '@woocommerce/base-utils';
import type {
	CartResponseShippingAddress,
	CartResponseTotals,
	CartShippingRate,
} from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { ShippingVia } from './shipping-via';
import { ShippingAddress } from './shipping-address';
import { renderShippingTotalValue } from './utils';
import './style.scss';

export const TotalsShipping = ( {
	label = __( 'Delivery', 'woocommerce' ),
	shippingAddress,
	shippingRates,
	values,
	placeholder = null,
	className,
	collaterals = null,
}: {
	label: string;
	shippingRates: CartShippingRate[];
	shippingAddress: CartResponseShippingAddress;
	values: CartResponseTotals;
	className?: string;
	placeholder?: React.ReactNode | null;
	collaterals?: React.ReactNode | null;
} ): JSX.Element | null => {
	const hasRates = hasShippingRate( shippingRates );
	return (
		<div
			className={ clsx(
				'wc-block-components-totals-shipping',
				className
			) }
		>
			<TotalsItem
				label={ label }
				value={
					hasRates ? renderShippingTotalValue( values ) : placeholder
				}
				description={
					<>
						{ hasRates && (
							<>
								<ShippingVia shippingRates={ shippingRates } />
								<ShippingAddress
									shippingRates={ shippingRates }
									shippingAddress={ shippingAddress }
								/>
							</>
						) }
						{ !! collaterals && (
							<div className="wc-block-components-totals-shipping__collaterals">
								{ collaterals }
							</div>
						) }
					</>
				}
				currency={ getCurrencyFromPriceResponse( values ) }
			/>
		</div>
	);
};

export default TotalsShipping;
