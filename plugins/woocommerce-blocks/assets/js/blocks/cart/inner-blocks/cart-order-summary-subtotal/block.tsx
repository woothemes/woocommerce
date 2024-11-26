/**
 * External dependencies
 */
import { Subtotal, TotalsWrapper } from '@woocommerce/blocks-components';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import { useStoreCart } from '@woocommerce/base-context/hooks';

export type BlockAttributes = {
	className: string;
};

export type BlockProps = BlockAttributes & {
	heading: React.ReactNode;
};

const Block = ( { className = '', heading }: BlockProps ): JSX.Element => {
	const { cartTotals } = useStoreCart();
	const totalsCurrency = getCurrencyFromPriceResponse( cartTotals );

	return (
		<TotalsWrapper className={ className }>
			<Subtotal
				label={ heading }
				currency={ totalsCurrency }
				values={ cartTotals }
			/>
		</TotalsWrapper>
	);
};

export default Block;
