/**
 * External dependencies
 */
import { decodeEntities } from '@wordpress/html-entities';
import { getSelectedShippingRateNames } from '@woocommerce/base-utils';
import type { CartShippingRate } from '@woocommerce/types';

export const ShippingVia = ( {
	shippingRates,
}: {
	shippingRates: CartShippingRate[];
} ): JSX.Element | null => {
	const rateNames = getSelectedShippingRateNames( shippingRates );
	return rateNames ? (
		<div className="wc-block-components-totals-shipping__via">
			{ decodeEntities(
				rateNames
					.filter(
						( item, index ) => rateNames.indexOf( item ) === index
					)
					.join( ', ' )
			) }
		</div>
	) : null;
};

export default ShippingVia;
