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
	const subtotalHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_subtotal_heading'
	);

	const heading = subtotalHeading ?? __( 'Subtotal', 'woocommerce' );

	return <Block heading={ heading } className={ className } />;
};

export default Frontend;
