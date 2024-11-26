/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { useOrderSummaryHeadings } from '../../../cart-checkout-shared/entities/order-summary-headings';

const Frontend = ( { className = '' }: BlockAttributes ) => {
	const orderSummarySubtotalHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_subtotal_heading'
	);

	const headingText =
		orderSummarySubtotalHeading ?? __( 'Subtotal', 'woocommerce' );

	return <Block label={ headingText } className={ className } />;
};

export default Frontend;
