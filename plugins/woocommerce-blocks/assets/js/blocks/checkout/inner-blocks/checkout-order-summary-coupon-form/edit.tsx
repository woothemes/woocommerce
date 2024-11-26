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
	useOrderSummaryHeadings,
} from '../../../cart-checkout-shared/entities/order-summary-headings';

export const Edit = ( {
	attributes,
}: BlockEditProps< BlockAttributes > ): JSX.Element => {
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
