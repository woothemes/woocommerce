/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	createSetOrderSummaryHeadingCallback,
	useOrderSummaryHeadings,
} from '@woocommerce/blocks/cart-checkout-shared';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

export const Edit = ( { attributes }: BlockEditProps< BlockAttributes > ) => {
	const { className } = attributes;
	const blockProps = useBlockProps();

	const shippingHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_shipping_heading'
	);

	const onShippingHeadingChange = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_shipping_heading'
	);

	const headingText = shippingHeading ?? __( 'Shipping', 'woocommerce' );

	const heading = (
		<RichText value={ headingText } onChange={ onShippingHeadingChange } />
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
