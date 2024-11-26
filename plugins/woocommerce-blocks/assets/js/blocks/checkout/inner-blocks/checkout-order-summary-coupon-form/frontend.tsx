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
	const couponHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_coupon_heading'
	);

	const headingText = couponHeading ?? __( 'Add a coupon', 'woocommerce' );

	return <Block heading={ headingText } className={ className } />;
};

export default Frontend;
