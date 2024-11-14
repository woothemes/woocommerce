/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { TotalsShipping } from '@woocommerce/base-components/cart-checkout';
import { useStoreCart } from '@woocommerce/base-context';
import { TotalsWrapper } from '@woocommerce/blocks-checkout';
import { useSelect } from '@wordpress/data';
import { CHECKOUT_STORE_KEY } from '@woocommerce/block-data';
import {
	filterShippingRatesByPrefersCollection,
	isAddressComplete,
	selectedRatesAreCollectable,
} from '@woocommerce/base-utils';

/**
 * Internal dependencies
 */
import { EditableText } from '../../../../../../packages/components/editable-text';
// todo alias import

export type BlockAttributes = {
	sectionHeading: string | null;
	className: string;
};

export type BlockProps = BlockAttributes & {
	onChangeSectionHeading: ( label: string ) => void;
};

const Block = ( {
	className = '',
	sectionHeading,
	onChangeSectionHeading,
}: BlockProps ) => {
	const { cartNeedsShipping, shippingRates, shippingAddress } =
		useStoreCart();

	const prefersCollection = useSelect( ( select ) =>
		select( CHECKOUT_STORE_KEY ).prefersCollection()
	);

	if ( ! cartNeedsShipping ) {
		return null;
	}

	const hasSelectedCollectionOnly = selectedRatesAreCollectable(
		filterShippingRatesByPrefersCollection(
			shippingRates,
			prefersCollection ?? false
		)
	);

	const defaultLabel = hasSelectedCollectionOnly
		? __( 'Collection', 'woocommerce' )
		: __( 'Delivery', 'woocommerce' );

	const heading = sectionHeading === null ? defaultLabel : sectionHeading;

	const label = (
		<EditableText value={ heading } onChange={ onChangeSectionHeading } />
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
				label={ label }
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
