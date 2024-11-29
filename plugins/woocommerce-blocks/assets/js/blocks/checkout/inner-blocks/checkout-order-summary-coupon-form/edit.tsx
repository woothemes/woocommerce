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
import { createSetOrderSummaryHeadingCallback } from '../../../../entities/editor';

export const Edit = ( { attributes }: BlockEditProps< BlockAttributes > ) => {
	const { className = '', heading } = attributes;
	const blockProps = useBlockProps();

	const onCouponHeadingChange = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_coupon_form_heading'
	);

	const headingText = heading ?? __( 'Add a coupon', 'woocommerce' );
	const headingElement = (
		<RichText value={ headingText } onChange={ onCouponHeadingChange } />
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
