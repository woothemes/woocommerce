/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { useOrderSummaryHeadingFromFrontend } from '../../../../entities/frontend';

const Frontend = ( { className = '' }: BlockAttributes ) => {
	const couponHeading = useOrderSummaryHeadingFromFrontend(
		'woocommerce_order_summary_coupon_heading'
	);

	console.log( 'couponHeading', `**** ${ couponHeading } ****` );

	const headingText = couponHeading ?? __( 'Add a coupon', 'woocommerce' );

	console.log( 'headingText', `**** ${ headingText } ****` );

	return <Block heading={ headingText } className={ className } />;
};

export default Frontend;
