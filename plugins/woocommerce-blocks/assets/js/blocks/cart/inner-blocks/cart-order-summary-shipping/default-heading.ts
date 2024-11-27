/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useStoreCart } from '@woocommerce/base-context/hooks';
import { selectedRatesAreCollectable } from '@woocommerce/base-utils';

export const useDefaultHeading = () => {
	const { shippingRates } = useStoreCart();
	const hasSelectedCollectionOnly =
		selectedRatesAreCollectable( shippingRates );

	return hasSelectedCollectionOnly
		? __( 'Collection', 'woocommerce' )
		: __( 'Delivery', 'woocommerce' );
};
