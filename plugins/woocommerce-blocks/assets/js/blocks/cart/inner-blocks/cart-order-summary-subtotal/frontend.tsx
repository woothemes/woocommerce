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
	const subtotalHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_subtotal_heading'
	);

	const heading = subtotalHeading ?? __( 'Subtotal', 'woocommerce' );

	return <Block heading={ heading } className={ className } />;
};

export default Frontend;
