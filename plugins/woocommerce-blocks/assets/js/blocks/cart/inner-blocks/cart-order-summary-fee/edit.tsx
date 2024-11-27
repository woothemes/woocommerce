/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
	useOrderSummaryHeadings,
	createSetOrderSummaryHeadingCallback,
} from '@woocommerce/blocks/cart-checkout-shared';

/**
 * Internal dependencies
 */
import Block from './block';

export const Edit = ( {
	attributes,
}: {
	attributes: {
		className: string;
	};
	setAttributes: ( attributes: Record< string, unknown > ) => void;
} ) => {
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

export const Save = () => {
	return <div { ...useBlockProps.save() } />;
};
