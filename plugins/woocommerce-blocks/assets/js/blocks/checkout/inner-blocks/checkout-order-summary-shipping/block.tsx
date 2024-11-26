/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { TotalsShipping } from '@woocommerce/base-components/cart-checkout';
import { useStoreCart } from '@woocommerce/base-context';
import { TotalsWrapper } from '@woocommerce/blocks-checkout';
import { isAddressComplete } from '@woocommerce/base-utils';

export type BlockAttributes = {
	className: string;
};

export type BlockProps = {
	heading: React.ReactNode;
	className: string;
};

const Block = ( { className = '', heading }: BlockProps ) => {
	const { cartNeedsShipping, shippingAddress } = useStoreCart();

	if ( ! cartNeedsShipping ) {
		return null;
	}

	const hasCompleteAddress = isAddressComplete( shippingAddress, [
		'state',
		'country',
		'postcode',
		'city',
	] );

	return (
		<TotalsWrapper className={ className }>
			<TotalsShipping
				label={ heading }
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
