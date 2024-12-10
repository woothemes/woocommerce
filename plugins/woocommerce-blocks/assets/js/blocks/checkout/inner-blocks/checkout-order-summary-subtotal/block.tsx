/**
 * External dependencies
 */
import { Subtotal, TotalsWrapper } from '@woocommerce/blocks-components';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import { useStoreCart } from '@woocommerce/base-context/hooks';

export type BlockAttributes = {
	className: string;
	heading: string;
};

export type BlockProps = Omit< BlockAttributes, 'heading' > & {
	headingElement: React.ReactNode;
};

const Block = ( { className = '', headingElement }: BlockProps ) => {
	const { cartTotals } = useStoreCart();
	const totalsCurrency = getCurrencyFromPriceResponse( cartTotals );

	return (
		<TotalsWrapper className={ className }>
			<Subtotal
				label={ headingElement }
				currency={ totalsCurrency }
				values={ cartTotals }
			/>
		</TotalsWrapper>
	);
};

export default Block;
