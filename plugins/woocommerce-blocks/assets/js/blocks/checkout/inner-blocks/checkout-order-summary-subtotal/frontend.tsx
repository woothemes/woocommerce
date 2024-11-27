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
	const orderSummarySubtotalHeading = useOrderSummaryHeadingFromFrontend(
		'woocommerce_order_summary_subtotal_heading'
	);

	const headingText =
		orderSummarySubtotalHeading ?? __( 'Subtotal', 'woocommerce' );

	return <Block label={ headingText } className={ className } />;
};

export default Frontend;
