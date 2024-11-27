/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { useOrderSummaryHeadingFromFrontend } from '../../../../entities/frontend';
import { useDefaultHeading } from './default-heading';

const Frontend = ( { className }: BlockAttributes ) => {
	const shippingHeading = useOrderSummaryHeadingFromFrontend(
		'woocommerce_order_summary_shipping_heading'
	);

	const defaultHeading = useDefaultHeading();

	const headingText = shippingHeading ?? defaultHeading;

	return <Block heading={ headingText } className={ className } />;
};

export default Frontend;
