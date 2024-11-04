/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { createInterpolateElement } from '@wordpress/element';
import { ShippingRatesControl } from '@woocommerce/base-components';
import NoticeBanner from '@woocommerce/base-components/notice-banner';
import { useStoreCart } from '@woocommerce/base-context';
import {
	formatShippingAddress,
	isAddressComplete,
} from '@woocommerce/base-utils';

export const ShippingRateSelector = (): JSX.Element => {
	const { shippingRates, isLoadingRates, shippingAddress } = useStoreCart();

	const hasCompleteAddress = isAddressComplete( shippingAddress, [
		'state',
		'country',
		'postcode',
		'city',
	] );

	return (
		<fieldset className="wc-block-components-totals-shipping__fieldset">
			<legend className="screen-reader-text">
				{ __( 'Shipping options', 'woocommerce' ) }
			</legend>
			<ShippingRatesControl
				className="wc-block-components-totals-shipping__options"
				noResultsMessage={
					<>
						{ hasCompleteAddress && (
							<NoticeBanner
								isDismissible={ false }
								className="wc-block-components-shipping-rates-control__no-results-notice"
								status="warning"
							>
								{ createInterpolateElement(
									sprintf(
										// translators: %s is the address that was used to calculate shipping.
										__(
											'No delivery options available for <strong>%s</strong>. Please verify the address is correct or try a different address.',
											'woocommerce'
										),
										formatShippingAddress( shippingAddress )
									),
									{
										strong: <strong />,
									}
								) }
							</NoticeBanner>
						) }
					</>
				}
				shippingRates={ shippingRates }
				isLoadingRates={ isLoadingRates }
				context="woocommerce/cart"
			/>
		</fieldset>
	);
};

export default ShippingRateSelector;
