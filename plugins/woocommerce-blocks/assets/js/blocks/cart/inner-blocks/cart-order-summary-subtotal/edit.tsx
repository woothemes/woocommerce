/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useOrderSummaryHeadings,
	createSetOrderSummaryHeadingCallback,
} from '@woocommerce/blocks/cart-checkout-shared';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

export const Edit = ( { attributes }: BlockEditProps< BlockAttributes > ) => {
	const { className } = attributes;
	const blockProps = useBlockProps();
	const onChangeHeading = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_subtotal_heading'
	);

	const subtotalHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_subtotal_heading'
	);

	const headingText = subtotalHeading ?? __( 'Subtotal', 'woocommerce' );

	const heading = (
		<RichText
			value={ headingText }
			onChange={ onChangeHeading }
			placeholder={ __( 'Subtotal', 'woocommerce' ) }
		/>
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
