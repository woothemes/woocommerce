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
import { createSetOrderSummaryHeadingCallback } from '../../../../entities/editor';

export const Edit = ( { attributes }: BlockEditProps< BlockAttributes > ) => {
	const { className, heading } = attributes;
	const blockProps = useBlockProps();

	const onFeeHeadingChange = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_fee_heading'
	);

	const headingText = heading ?? __( 'Fees', 'woocommerce' );

	const headingElement = (
		<RichText value={ headingText } onChange={ onFeeHeadingChange } />
	);

	return (
		<div { ...blockProps }>
			<Block headingElement={ headingElement } className={ className } />
		</div>
	);
};

export const Save = () => {
	return <div { ...useBlockProps.save() } />;
};
