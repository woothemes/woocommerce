/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { createSetOrderSummaryHeadingCallback } from '../../../../entities/editor';
import { useDefaultHeading } from './default-heading';

export const Edit = ( { attributes }: BlockEditProps< BlockAttributes > ) => {
	const { className, heading } = attributes;
	const blockProps = useBlockProps();
	const defaultHeading = useDefaultHeading();
	const onShippingHeadingChange = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_shipping_heading'
	);

	const headingText = heading ?? defaultHeading;
	const headingElement = (
		<RichText value={ headingText } onChange={ onShippingHeadingChange } />
	);

	return (
		<div { ...blockProps }>
			<Block headingElement={ headingElement } className={ className } />
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
