/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	formatShippingAddress,
	hasShippingRate,
} from '@woocommerce/base-utils';
import { useStoreCart } from '@woocommerce/base-context';
import {
	ShippingCalculatorPanel,
	ShippingCalculatorContext,
} from '@woocommerce/base-components/cart-checkout';
import { useSelect } from '@wordpress/data';
import { CHECKOUT_STORE_KEY } from '@woocommerce/block-data';
import { useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { getPickupLocation } from './utils';

export const ShippingAddress = (): JSX.Element => {
	const { shippingRates, shippingAddress } = useStoreCart();
	const prefersCollection = useSelect( ( select ) =>
		select( CHECKOUT_STORE_KEY ).prefersCollection()
	);

	const hasRates = hasShippingRate( shippingRates );

	const { showCalculator } = useContext( ShippingCalculatorContext );

	const formattedAddress = prefersCollection
		? getPickupLocation( shippingRates )
		: formatShippingAddress( shippingAddress );

	const deliversToLabel = hasRates
		? __( 'Delivers to ', 'woocommerce' )
		: __( 'No delivery options available for ', 'woocommerce' );

	const addressLabel = prefersCollection
		? __( 'Collection from ', 'woocommerce' )
		: deliversToLabel;

	const title = (
		<p className="wc-block-components-totals-shipping-address-summary">
			{ !! formattedAddress ? (
				<>
					{ addressLabel }
					<strong>{ formattedAddress }</strong>
				</>
			) : (
				<>
					{ __(
						'Enter address to check delivery options',
						'woocommerce'
					) }
				</>
			) }
		</p>
	);

	return (
		<div className="wc-block-components-shipping-address">
			{ showCalculator && <ShippingCalculatorPanel title={ title } /> }
		</div>
	);
};

export default ShippingAddress;
