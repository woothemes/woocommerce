/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { TotalsShipping } from '@woocommerce/base-components/cart-checkout';
import { useStoreCart, useCheckoutAddress } from '@woocommerce/base-context';
import { TotalsWrapper } from '@woocommerce/blocks-checkout';
import {
	filterShippingRatesByPrefersCollection,
	isAddressComplete,
	selectedRatesAreCollectable,
} from '@woocommerce/base-utils';

const Block = ( {
	className = '',
}: {
	className?: string;
} ): JSX.Element | null => {
	const {
		cartTotals,
		cartNeedsShipping,
		shippingRates: cartShippingRates,
		shippingAddress,
	} = useStoreCart();
	const { prefersCollection } = useCheckoutAddress();

	if ( ! cartNeedsShipping ) {
		return null;
	}

	const shippingRates = filterShippingRatesByPrefersCollection(
		cartShippingRates,
		prefersCollection ?? false
	);
	const hasCompleteAddress = isAddressComplete( shippingAddress, [
		'state',
		'country',
		'postcode',
		'city',
	] );

	return (
		<TotalsWrapper className={ className }>
			<TotalsShipping
				label={
					selectedRatesAreCollectable( shippingRates )
						? __( 'Collection', 'woocommerce' )
						: __( 'Delivery', 'woocommerce' )
				}
				shippingAddress={ shippingAddress }
				shippingRates={ shippingRates }
				values={ cartTotals }
				placeholder={
					<span className="wc-block-components-shipping-placeholder__value">
						{ hasCompleteAddress
							? __(
									'No available delivery option',
									'woocommerce'
							  )
							: __(
									'Enter address to calculate',
									'woocommerce'
							  ) }
					</span>
				}
			/>
		</TotalsWrapper>
	);
};

export default Block;
