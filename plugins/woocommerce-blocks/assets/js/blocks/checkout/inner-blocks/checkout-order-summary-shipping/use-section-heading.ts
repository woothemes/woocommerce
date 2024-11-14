/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useStoreCart } from '@woocommerce/base-context';
import { useSelect } from '@wordpress/data';
import { CHECKOUT_STORE_KEY } from '@woocommerce/block-data';
import {
	filterShippingRatesByPrefersCollection,
	selectedRatesAreCollectable,
} from '@woocommerce/base-utils';

export const useSectionHeading = ( {
	sectionHeading,
}: {
	sectionHeading: string;
} ) => {
	const { shippingRates } = useStoreCart();

	const prefersCollection = useSelect( ( select ) =>
		select( CHECKOUT_STORE_KEY ).prefersCollection()
	);

	const hasSelectedCollectionOnly = selectedRatesAreCollectable(
		filterShippingRatesByPrefersCollection(
			shippingRates,
			prefersCollection ?? false
		)
	);

	const defaultLabel = hasSelectedCollectionOnly
		? __( 'Collection', 'woocommerce' )
		: __( 'Delivery', 'woocommerce' );

	const heading = sectionHeading ?? defaultLabel;

	return heading;
};
