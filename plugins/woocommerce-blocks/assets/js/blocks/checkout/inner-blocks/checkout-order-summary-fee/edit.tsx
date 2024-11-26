/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import {
	createSetOrderSummaryHeadingCallback,
	useOrderSummaryHeadings,
} from '../../../cart-checkout-shared/entities/order-summary-headings';

export const Edit = ( {
	attributes,
}: BlockEditProps< BlockAttributes > ): JSX.Element => {
	const { className } = attributes;
	const blockProps = useBlockProps();

	const feeHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_fee_heading'
	);

	const onFeeHeadingChange = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_fee_heading'
	);

	const headingText = feeHeading ?? __( 'Fees', 'woocommerce' );

	const heading = (
		<RichText value={ headingText } onChange={ onFeeHeadingChange } />
	);

	return (
		<div { ...blockProps }>
			<Block heading={ heading } className={ className } />
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
