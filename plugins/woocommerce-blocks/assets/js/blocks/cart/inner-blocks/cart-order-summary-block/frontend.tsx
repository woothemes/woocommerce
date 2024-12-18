/**
 * External dependencies
 */
import { TotalsFooterItem } from '@woocommerce/base-components/cart-checkout';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import { useStoreCart } from '@woocommerce/base-context/hooks';

/**
 * Internal dependencies
 */
import { OrderMetaSlotFill } from './slotfills';
import { BlockAttributes } from './edit';
import { DEFAULT_TOTAL_HEADING } from './constants';

const FrontendBlock = ( {
	children,
	className = '',
	totalHeading,
}: BlockAttributes & { children?: JSX.Element | JSX.Element[] } ) => {
	const { cartTotals } = useStoreCart();
	const totalsCurrency = getCurrencyFromPriceResponse( cartTotals );
	const headingLabel = totalHeading || DEFAULT_TOTAL_HEADING;

	return (
		<div className={ className }>
			{ children }
			<div className="wc-block-components-totals-wrapper">
				<TotalsFooterItem
					label={ headingLabel }
					currency={ totalsCurrency }
					values={ cartTotals }
				/>
			</div>
			<OrderMetaSlotFill />
		</div>
	);
};

export default FrontendBlock;
