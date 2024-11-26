/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { useOrderSummaryHeadings } from '../../../cart-checkout-shared/entities/order-summary-headings';

const Frontend = ( { className }: BlockAttributes ): JSX.Element => {
	const feeHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_fee_heading'
	);

	const heading = feeHeading ?? __( 'Fees', 'woocommerce' );

	return <Block heading={ heading } className={ className } />;
};

export default Frontend;
