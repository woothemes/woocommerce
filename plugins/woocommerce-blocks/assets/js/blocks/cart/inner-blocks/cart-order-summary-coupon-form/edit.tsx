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
	const { className, heading } = attributes;
	const blockProps = useBlockProps();

	const onCouponHeadingChange = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_coupon_heading'
	);

	const couponHeadingLabel = heading ?? __( 'Add a coupon', 'woocommerce' );

	const headingElement = (
		<RichText
			value={ couponHeadingLabel }
			onChange={ onCouponHeadingChange }
			label={ couponHeadingLabel }
		/>
	);

	return (
		<div { ...blockProps }>
			<Block
				headingElement={ headingElement }
				isEditor={ true }
				className={ className }
			/>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
