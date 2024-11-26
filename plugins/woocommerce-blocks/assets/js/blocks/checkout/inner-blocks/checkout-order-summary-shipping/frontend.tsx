/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useOrderSummaryHeadings } from '../../../cart-checkout-shared/entities/order-summary-headings';
import Block, { BlockAttributes } from './block';

const Frontend = ( { className }: BlockAttributes ) => {
	const shippingHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_shipping_heading'
	);

	const headingText = shippingHeading ?? __( 'Shipping', 'woocommerce' );

	return <Block heading={ headingText } className={ className } />;
};

export default Frontend;
