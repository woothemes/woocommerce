/**
 * External dependencies
 */
import { useOrderSummaryHeadings } from '@woocommerce/blocks/cart-checkout-shared';

/**
 * Internal dependencies
 */
import Block, { BlockProps } from './block';
import { useDefaultHeading } from './default-heading';

const Frontend = ( props: BlockProps ) => {
	const defaultHeading = useDefaultHeading();
	const heading =
		useOrderSummaryHeadings(
			'woocommerce_order_summary_shipping_heading'
		) ?? defaultHeading;

	return <Block { ...props } heading={ heading } />;
};

export default Frontend;
