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
	const subtotalHeading = useOrderSummaryHeadingFromFrontend(
		'woocommerce_order_summary_subtotal_heading'
	);

	const heading = subtotalHeading ?? __( 'Subtotal', 'woocommerce' );

	return <Block heading={ heading } className={ className } />;
};

export default Frontend;
