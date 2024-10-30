/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { ShippingCalculatorButton } from '@woocommerce/base-components/cart-checkout';

export interface ShippingPlaceholderProps {
	showCalculator: boolean;
	isCheckout?: boolean;
	addressProvided: boolean;
}

export const ShippingPlaceholder = ( {
	showCalculator,
	addressProvided,
	isCheckout = false,
}: ShippingPlaceholderProps ): JSX.Element => {
	if ( ! showCalculator ) {
		const label = addressProvided
			? __( 'No available delivery option', 'woocommerce' )
			: __( 'Enter address to calculate', 'woocommerce' );
		return (
			<span className="wc-block-components-shipping-placeholder__value">
				{ isCheckout
					? label
					: __( 'Calculated at checkout', 'woocommerce' ) }
			</span>
		);
	}

	return (
		<ShippingCalculatorButton
			label={ __(
				'Enter address to check delivery options',
				'woocommerce'
			) }
		/>
	);
};

export default ShippingPlaceholder;
