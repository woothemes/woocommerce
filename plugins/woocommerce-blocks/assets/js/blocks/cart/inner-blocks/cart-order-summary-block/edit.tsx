/**
 * External dependencies
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import type { TemplateArray } from '@wordpress/blocks';
import { innerBlockAreas } from '@woocommerce/blocks-checkout';
import { __ } from '@wordpress/i18n';
import { TotalsFooterItem } from '@woocommerce/base-components/cart-checkout';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import { useStoreCart } from '@woocommerce/base-context/hooks';

/**
 * Internal dependencies
 */
import {
	useForcedLayout,
	getAllowedBlocks,
} from '../../../cart-checkout-shared';
import { OrderMetaSlotFill } from './slotfills';
import {
	createSetOrderSummaryHeadingCallback,
	useOrderSummaryHeadings,
} from '../../../cart-checkout-shared/entities/order-summary-headings';

export const Edit = ( { clientId }: { clientId: string } ): JSX.Element => {
	const blockProps = useBlockProps();
	const { cartTotals } = useStoreCart();
	const totalsCurrency = getCurrencyFromPriceResponse( cartTotals );
	const allowedBlocks = getAllowedBlocks(
		innerBlockAreas.CART_ORDER_SUMMARY
	);

	const orderSummaryFooterHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_footer_heading'
	);

	const orderSummaryFooterHeadingText =
		orderSummaryFooterHeading ?? __( 'Total', 'woocommerce' );

	const onChangeOrderSummaryFooterHeading =
		createSetOrderSummaryHeadingCallback(
			'woocommerce_order_summary_footer_heading'
		);

	const editableFooterHeading = (
		<RichText
			className="wc-block-components-totals-footer-heading"
			value={ orderSummaryFooterHeadingText }
			onChange={ onChangeOrderSummaryFooterHeading }
		/>
	);

	const defaultTemplate = [
		[
			'woocommerce/cart-order-summary-heading-block',
			{
				content: __( 'Cart totals', 'woocommerce' ),
			},
			[],
		],
		[ 'woocommerce/cart-order-summary-coupon-form-block', {}, [] ],
		[ 'woocommerce/cart-order-summary-totals-block', {}, [] ],
	] as TemplateArray;

	useForcedLayout( {
		clientId,
		registeredBlocks: allowedBlocks,
		defaultTemplate,
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks
				allowedBlocks={ allowedBlocks }
				template={ defaultTemplate }
			/>
			<div className="wc-block-components-totals-wrapper">
				<TotalsFooterItem
					currency={ totalsCurrency }
					values={ cartTotals }
					label={ editableFooterHeading }
				/>
			</div>
			<OrderMetaSlotFill />
		</div>
	);
};

export const Save = (): JSX.Element => {
	return (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	);
};
