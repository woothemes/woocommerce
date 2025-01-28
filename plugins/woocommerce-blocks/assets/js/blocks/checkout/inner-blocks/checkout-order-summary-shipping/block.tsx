/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { TotalsShipping } from '@woocommerce/base-components/cart-checkout';
import { useStoreCart } from '@woocommerce/base-context';
import { TotalsWrapper } from '@woocommerce/blocks-checkout';
import { useSelect } from '@wordpress/data';
import { checkoutStore } from '@woocommerce/block-data';
import {
	filterShippingRatesByPrefersCollection,
	isAddressComplete,
	selectedRatesAreCollectable,
} from '@woocommerce/base-utils';
import { useFormFields } from '@woocommerce/base-components/cart-checkout/form/prepare-form-fields';
import { ADDRESS_FORM_KEYS } from '@woocommerce/block-settings';

const Block = ( {
	className = '',
}: {
	className?: string;
} ): JSX.Element | null => {
	const { cartNeedsShipping, shippingRates, shippingAddress } =
		useStoreCart();
	const prefersCollection = useSelect( ( select ) =>
		select( checkoutStore ).prefersCollection()
	);
	const shippingFields = useFormFields( ADDRESS_FORM_KEYS, 'shipping' );
	if ( ! cartNeedsShipping ) {
		return null;
	}

	const hasSelectedCollectionOnly = selectedRatesAreCollectable(
		filterShippingRatesByPrefersCollection(
			shippingRates,
			prefersCollection ?? false
		)
	);

	const hasCompleteAddress = isAddressComplete(
		shippingAddress,
		shippingFields,
		[ 'state', 'country', 'postcode', 'city' ]
	);

	return (
		<TotalsWrapper className={ className }>
			<TotalsShipping
				label={
					hasSelectedCollectionOnly
						? __( 'Pickup', 'woocommerce' )
						: __( 'Delivery', 'woocommerce' )
				}
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
