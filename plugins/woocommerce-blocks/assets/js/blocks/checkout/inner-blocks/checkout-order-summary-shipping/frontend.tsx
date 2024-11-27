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
	const shippingHeading = useOrderSummaryHeadingFromFrontend(
		'woocommerce_order_summary_shipping_heading'
	);

	const headingText = shippingHeading ?? __( 'Shipping', 'woocommerce' );

	return <Block heading={ headingText } className={ className } />;
};

export default Frontend;
