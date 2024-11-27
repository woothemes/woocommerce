/**
 * Internal dependencies
 */
import { useOrderSummaryHeadingFromFrontend } from '../../../../entities/frontend';
import Block, { BlockProps } from './block';
import { useDefaultHeading } from './default-heading';

const Frontend = ( props: BlockProps ) => {
	const defaultHeading = useDefaultHeading();
	const heading =
		useOrderSummaryHeadingFromFrontend(
			'woocommerce_order_summary_shipping_heading'
		) ?? defaultHeading;

	console.log(
		'useOrderSummaryHeadingFromFrontend heading',
		`**** ${ heading } ****`
	);

	return <Block { ...props } heading={ heading } />;
};

export default Frontend;
