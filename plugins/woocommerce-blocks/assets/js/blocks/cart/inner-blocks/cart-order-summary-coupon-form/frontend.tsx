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
	const couponHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_coupon_heading'
	);

	const couponHeadingLabel =
		couponHeading ?? __( 'Add a coupon', 'woocommerce' );

	return (
		<Block
			isEditor={ false }
			className={ className }
			heading={ couponHeadingLabel }
		/>
	);
};

export default Frontend;
