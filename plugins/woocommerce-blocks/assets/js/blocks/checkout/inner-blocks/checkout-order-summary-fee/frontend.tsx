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
	const feeHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_fee_heading'
	);

	const heading = feeHeading ?? __( 'Fees', 'woocommerce' );

	return <Block heading={ heading } className={ className } />;
};

export default Frontend;
