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
	const couponHeading = useOrderSummaryHeadingFromFrontend(
		'woocommerce_order_summary_coupon_heading'
	);
	const headingElement = couponHeading ?? __( 'Add a coupon', 'woocommerce' );

	return (
		<Block
			isEditor={ false }
			className={ className }
			headingElement={ headingElement }
		/>
	);
};

export default Frontend;
