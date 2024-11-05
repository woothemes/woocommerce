/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { formatShippingAddress } from '@woocommerce/base-utils';
import { ShippingAddress as ShippingAddressType } from '@woocommerce/settings';
import {
	PickupLocation,
	ShippingCalculatorContext,
	ShippingCalculatorPanel,
} from '@woocommerce/base-components/cart-checkout';
import { CHECKOUT_STORE_KEY } from '@woocommerce/block-data';
import { useSelect } from '@wordpress/data';
import { useContext } from '@wordpress/element';

export interface ShippingAddressProps {
	shippingAddress: ShippingAddressType;
	showCalculator: boolean;
}

export const ShippingAddress = ( {
	shippingAddress,
}: ShippingAddressProps ): JSX.Element | null => {
	const prefersCollection = useSelect( ( select ) =>
		select( CHECKOUT_STORE_KEY ).prefersCollection()
	);

	const { showCalculator } = useContext( ShippingCalculatorContext );
	const formattedLocation = formatShippingAddress( shippingAddress );
	const hasFormattedAddress = !! formattedLocation;

	const title = (
		<p className="wc-block-components-totals-shipping-address-summary">
			{ hasFormattedAddress ? (
				<>
					{ __( 'Delivers to ', 'woocommerce' ) }
					<strong>{ formattedLocation }</strong>
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

	const DeliverySummary = showCalculator ? (
		<ShippingCalculatorPanel title={ title } />
	) : (
		title
	);
	return <>{ prefersCollection ? <PickupLocation /> : DeliverySummary }</>;
};

export default ShippingAddress;
