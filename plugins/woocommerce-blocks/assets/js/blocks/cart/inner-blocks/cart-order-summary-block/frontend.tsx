/**
 * External dependencies
 */
import { TotalsFooterItem } from '@woocommerce/base-components/cart-checkout';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import { useStoreCart } from '@woocommerce/base-context/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { OrderMetaSlotFill } from './slotfills';
import { useOrderSummaryHeadingFromFrontend } from '../../../../entities/frontend';

const FrontendBlock = ( {
	children,
	className = '',
}: {
	children?: JSX.Element | JSX.Element[];
	className?: string;
} ) => {
	const { cartTotals } = useStoreCart();
	const totalsCurrency = getCurrencyFromPriceResponse( cartTotals );

	const orderSummaryFooterHeading = useOrderSummaryHeadingFromFrontend(
		'woocommerce_order_summary_footer_heading'
	);

	const footerHeadingLabel =
		orderSummaryFooterHeading ?? __( 'Total', 'woocommerce' );

	return (
		<div className={ className }>
			{ children }
			<div className="wc-block-components-totals-wrapper">
				<TotalsFooterItem
					currency={ totalsCurrency }
					values={ cartTotals }
					label={ footerHeadingLabel }
				/>
			</div>
			<OrderMetaSlotFill />
		</div>
	);
};

export default FrontendBlock;
