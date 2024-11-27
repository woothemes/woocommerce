/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { BlockEditProps } from '@wordpress/blocks';
import {
	createSetOrderSummaryHeadingCallback,
	useOrderSummaryHeadings,
} from '@woocommerce/blocks/cart-checkout-shared';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

export const Edit = ( { attributes }: BlockEditProps< BlockAttributes > ) => {
	const { className = '' } = attributes;
	const blockProps = useBlockProps();

	const subtotalHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_subtotal_heading'
	);

	const onSubtotalHeadingChange = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_subtotal_heading'
	);

	const headingText = subtotalHeading ?? __( 'Subtotal', 'woocommerce' );

	const label = (
		<RichText value={ headingText } onChange={ onSubtotalHeadingChange } />
	);

	return (
		<div { ...blockProps }>
			<Block label={ label } className={ className } />
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
