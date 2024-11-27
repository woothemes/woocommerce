/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useOrderSummaryHeadings } from '@woocommerce/blocks/cart-checkout-shared';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

const Frontend = ( { className = '' }: BlockAttributes ) => {
	const orderSummarySubtotalHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_subtotal_heading'
	);

	const headingText =
		orderSummarySubtotalHeading ?? __( 'Subtotal', 'woocommerce' );

	return <Block label={ headingText } className={ className } />;
};

export default Frontend;
