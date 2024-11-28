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
import { BlockAttributes } from './edit';

type FrontendBlockProps = BlockAttributes & {
	children?: JSX.Element | JSX.Element[];
};

const FrontendBlock = ( {
	children,
	className = '',
	footerHeading,
}: FrontendBlockProps ) => {
	const { cartTotals } = useStoreCart();
	const totalsCurrency = getCurrencyFromPriceResponse( cartTotals );
	const footerHeadingLabel = footerHeading ?? __( 'Total', 'woocommerce' );

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
