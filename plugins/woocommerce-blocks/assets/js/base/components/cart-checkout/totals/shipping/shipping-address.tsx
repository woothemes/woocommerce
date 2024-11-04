/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { formatShippingAddress } from '@woocommerce/base-utils';
import { ShippingAddress as ShippingAddressType } from '@woocommerce/settings';
import {
	PickupLocation,
	ShippingCalculatorPanel,
} from '@woocommerce/base-components/cart-checkout';
import { CHECKOUT_STORE_KEY } from '@woocommerce/block-data';
import { useSelect } from '@wordpress/data';

export interface ShippingAddressProps {
	shippingAddress: ShippingAddressType;
	showCalculator: boolean;
}

export const ShippingAddress = ( {
	shippingAddress,
	showCalculator,
}: ShippingAddressProps ): JSX.Element | null => {
	const prefersCollection = useSelect( ( select ) =>
		select( CHECKOUT_STORE_KEY ).prefersCollection()
	);

	const formattedLocation = formatShippingAddress( shippingAddress );
	const hasFormattedAddress = !! formattedLocation;

	const title = hasFormattedAddress ? (
		<>
			{ __( 'Delivers to ', 'woocommerce' ) }
			<strong>{ formattedLocation }</strong>
		</>
	) : (
		__( 'Enter address to check delivery options', 'woocommerce' )
	);

	return (
		<>
			{ prefersCollection ? (
				<PickupLocation />
			) : (
				<ShippingCalculatorPanel title={ title } />
			) }
		</>
	);
};

export default ShippingAddress;
