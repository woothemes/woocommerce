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

export const Edit = ( { attributes }: BlockEditProps< BlockAttributes > ) => {
	const { className } = attributes;
	const blockProps = useBlockProps();

	const onCouponHeadingChange = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_coupon_heading'
	);

	const couponHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_coupon_heading'
	);

	const couponHeadingLabel =
		couponHeading ?? __( 'Add a coupon', 'woocommerce' );

	const heading = (
		<RichText
			value={ couponHeadingLabel }
			onChange={ onCouponHeadingChange }
			label={ couponHeadingLabel }
		/>
	);

	return (
		<div { ...blockProps }>
			<Block
				heading={ heading }
				isEditor={ true }
				className={ className }
			/>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
