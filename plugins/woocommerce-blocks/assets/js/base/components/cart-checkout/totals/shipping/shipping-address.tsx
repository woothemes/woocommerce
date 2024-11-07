/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { formatShippingAddress } from '@woocommerce/base-utils';
import { useStoreCart } from '@woocommerce/base-context';
import { useSelect } from '@wordpress/data';
import { CHECKOUT_STORE_KEY } from '@woocommerce/block-data';
import { useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { getPickupLocation } from './utils';
import {
	ShippingCalculatorContext,
	ShippingCalculatorPanel,
} from '../../shipping-calculator';

export const ShippingAddress = (): JSX.Element => {
	const { shippingRates, shippingAddress } = useStoreCart();
	const { showCalculator } = useContext( ShippingCalculatorContext );
	const prefersCollection = useSelect( ( select ) =>
		select( CHECKOUT_STORE_KEY ).prefersCollection()
	);

	const formattedAddress = prefersCollection
		? getPickupLocation( shippingRates )
		: formatShippingAddress( shippingAddress );

	const addressLabel = prefersCollection
		? __( 'Collection from ', 'woocommerce' )
		: __( 'Delivers to ', 'woocommerce' );

	const hasFormattedAddress = !! formattedAddress;

	const title = (
		<p className="wc-block-components-totals-shipping-address-summary">
			{ hasFormattedAddress ? (
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
		<>
			{ showCalculator ? (
				<ShippingCalculatorPanel title={ title } />
			) : (
				title
			) }
		</>
	);
};

export default ShippingAddress;
