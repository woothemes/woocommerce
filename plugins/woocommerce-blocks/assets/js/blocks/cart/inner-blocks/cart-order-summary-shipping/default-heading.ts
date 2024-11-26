/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useStoreCart } from '../../../../base/context';
import { selectedRatesAreCollectable } from '../../../../base/utils';

export const useDefaultHeading = () => {
	const { shippingRates } = useStoreCart();
	const hasSelectedCollectionOnly =
		selectedRatesAreCollectable( shippingRates );

	return hasSelectedCollectionOnly
		? __( 'Collection', 'woocommerce' )
		: __( 'Delivery', 'woocommerce' );
};
