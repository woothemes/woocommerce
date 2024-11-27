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
	const { className = '' } = attributes;
	const blockProps = useBlockProps();

	const couponHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_coupon_heading'
	);

	const onCouponHeadingChange = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_coupon_heading'
	);

	const headingText = couponHeading ?? __( 'Add a coupon', 'woocommerce' );
	const heading = (
		<RichText value={ headingText } onChange={ onCouponHeadingChange } />
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
