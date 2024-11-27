/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useOrderSummaryHeadings } from '@woocommerce/blocks/cart-checkout-shared';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

const Frontend = ( { className }: BlockAttributes ) => {
	const shippingHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_shipping_heading'
	);

	const headingText = shippingHeading ?? __( 'Shipping', 'woocommerce' );

	return <Block heading={ headingText } className={ className } />;
};

export default Frontend;
