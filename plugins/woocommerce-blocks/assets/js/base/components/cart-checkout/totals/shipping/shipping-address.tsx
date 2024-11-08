/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { formatShippingAddress } from '@woocommerce/base-utils';
import { useStoreCart } from '@woocommerce/base-context';
import { ShippingCalculatorButton } from '@woocommerce/base-components/cart-checkout';
import { useSelect } from '@wordpress/data';
import { CHECKOUT_STORE_KEY } from '@woocommerce/block-data';

/**
 * Internal dependencies
 */
import { getPickupLocation } from './utils';
import { ShippingCalculatorPanel } from '../../shipping-calculator/shipping-calculator-panel';

export const ShippingAddress = (): JSX.Element => {
	const { shippingRates, shippingAddress } = useStoreCart();
	const prefersCollection = useSelect( ( select ) =>
		select( CHECKOUT_STORE_KEY ).prefersCollection()
	);

	const formattedAddress = prefersCollection
		? getPickupLocation( shippingRates )
		: formatShippingAddress( shippingAddress );

	const addressLabel = prefersCollection
		? __( 'Collection from ', 'woocommerce' )
		: __( 'Delivers to ', 'woocommerce' );

	// const calculatorLabel =
	// 	! formattedAddress || prefersCollection
	// 		? __( 'Enter address to check delivery options', 'woocommerce' )
	// 		: __( 'Change address', 'woocommerce' );

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
			<ShippingCalculatorPanel title={ title } />
		</div>
	);
};

export default ShippingAddress;
