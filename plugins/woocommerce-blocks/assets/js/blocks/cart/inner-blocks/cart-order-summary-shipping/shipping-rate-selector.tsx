/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import type {
	CartResponseShippingAddress,
	CartResponseShippingRate,
} from '@woocommerce/types';
import NoticeBanner from '@woocommerce/base-components/notice-banner';
import { createInterpolateElement } from '@wordpress/element';
import { formatShippingAddress } from '@woocommerce/base-utils';
import { ShippingRatesControl } from '@woocommerce/base-components/cart-checkout';

export interface ShippingRateSelectorProps {
	shippingRates: CartResponseShippingRate[];
	shippingAddress: CartResponseShippingAddress;
	isLoadingRates: boolean;
	hasCompleteAddress: boolean;
}

export const ShippingRateSelector = ( {
	shippingRates,
	shippingAddress,
	isLoadingRates,
	hasCompleteAddress,
}: ShippingRateSelectorProps ): JSX.Element => {
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
