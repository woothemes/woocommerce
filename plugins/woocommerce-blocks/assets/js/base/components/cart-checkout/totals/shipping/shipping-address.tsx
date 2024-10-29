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

export const ShippingAddress = (): JSX.Element => {
	const { shippingRates, shippingAddress } = useStoreCart();
	const prefersCollection = useSelect( ( select ) =>
		select( CHECKOUT_STORE_KEY ).prefersCollection()
	);

	const formattedAddress = prefersCollection
		? getPickupLocation( shippingRates )
		: formatShippingAddress( shippingAddress );

	const addressLabel = prefersCollection
		? /* translators: %s location. */
		  __( 'Collection from %s', 'woocommerce' )
		: /* translators: %s location. */
		  __( 'Delivers to %s', 'woocommerce' );

	const calculatorLabel =
		! formattedAddress || prefersCollection
			? __( 'Enter address to check delivery options', 'woocommerce' )
			: __( 'Change address', 'woocommerce' );

	return (
		<div className="wc-block-components-shipping-address">
			{ formattedAddress
				? sprintf( addressLabel, formattedAddress ) + ' '
				: null }
			<ShippingCalculatorButton label={ calculatorLabel } />
		</div>
	);
};

export default ShippingAddress;
