/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import {
	createSetOrderSummaryHeadingCallback,
	useOrderSummaryHeadingFromEditor,
} from '../../../../entities/editor';
import { useDefaultHeading } from './default-heading';

export const Edit = ( { attributes }: BlockEditProps< BlockAttributes > ) => {
	const { className } = attributes;
	const blockProps = useBlockProps();

	const defaultHeading = useDefaultHeading();

	const shippingHeading = useOrderSummaryHeadingFromEditor(
		'woocommerce_order_summary_shipping_heading'
	);

	const onShippingHeadingChange = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_shipping_heading'
	);

	const headingText = shippingHeading ?? defaultHeading;

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
