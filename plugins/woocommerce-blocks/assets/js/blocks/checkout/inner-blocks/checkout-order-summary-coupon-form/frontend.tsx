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
	const couponHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_coupon_heading'
	);

	const headingText = couponHeading ?? __( 'Add a coupon', 'woocommerce' );

	return <Block heading={ headingText } className={ className } />;
};

export default Frontend;
