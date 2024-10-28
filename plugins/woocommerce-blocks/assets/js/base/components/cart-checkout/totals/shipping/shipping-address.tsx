/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { formatShippingAddress } from '@woocommerce/base-utils';
import {
	ShippingLocation,
	PickupLocation,
	ShippingCalculatorButton,
} from '@woocommerce/base-components/cart-checkout';
import { useCheckoutAddress } from '@woocommerce/base-context';
import type { ShippingAddress as ShippingAddressType } from '@woocommerce/settings';

export const ShippingAddress = ( {
	shippingAddress,
}: {
	shippingAddress: ShippingAddressType;
} ): JSX.Element => {
	const { prefersCollection } = useCheckoutAddress();
	const formattedLocation = formatShippingAddress( shippingAddress );
	const label = !! formattedLocation
		? __( 'Change address', 'woocommerce' )
		: __( 'Enter address to check delivery options', 'woocommerce' );
	return (
		<>
			{ prefersCollection ? (
				<PickupLocation />
			) : (
				<ShippingLocation formattedLocation={ formattedLocation } />
			) }
			<ShippingCalculatorButton label={ label } />
		</>
	);
};

export default ShippingAddress;
