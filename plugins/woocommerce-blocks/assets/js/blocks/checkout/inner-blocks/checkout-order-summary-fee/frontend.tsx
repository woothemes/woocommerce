/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { useOrderSummaryHeadingFromFrontend } from '../../../../entities/frontend';

const Frontend = ( { className }: BlockAttributes ) => {
	const feeHeading = useOrderSummaryHeadingFromFrontend(
		'woocommerce_order_summary_fee_heading'
	);

	const heading = feeHeading ?? __( 'Fee', 'woocommerce' );

	return <Block heading={ heading } className={ className } />;
};

export default Frontend;
