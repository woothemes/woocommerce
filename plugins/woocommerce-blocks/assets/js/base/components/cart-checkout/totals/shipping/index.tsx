/**
 * External dependencies
 */
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

export interface TotalShippingProps {
	label: string;
	values: CartResponseTotals;
	shippingRates: CartShippingRate[];
	shippingAddress: CartResponseShippingAddress;
	placeholder?: React.ReactNode | null;
	collaterals?: React.ReactNode | null;
}

export const TotalsShipping = ( {
	label,
	shippingAddress,
	shippingRates,
	values,
	placeholder = null,
	collaterals = null,
}: TotalShippingProps ): JSX.Element | null => {
	const hasRates = hasShippingRate( shippingRates );
	return (
		<div className="wc-block-components-totals-shipping">
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
