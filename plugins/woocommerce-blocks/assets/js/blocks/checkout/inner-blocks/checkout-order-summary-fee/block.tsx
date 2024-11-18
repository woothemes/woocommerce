/**
 * External dependencies
 */
import { TotalsFees, TotalsWrapper } from '@woocommerce/blocks-components';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import { useStoreCart } from '@woocommerce/base-context/hooks';

export type BlockAttributes = {
	sectionHeading: string | null;
	className: string;
};

export type BlockProps = BlockAttributes & {
	className?: string;
	heading: React.ReactNode;
};

const Block = ( {
	className = '',
	heading,
}: Omit< BlockProps, 'sectionHeading' > ): JSX.Element => {
	const { cartFees, cartTotals } = useStoreCart();
	const totalsCurrency = getCurrencyFromPriceResponse( cartTotals );

	return (
		<TotalsWrapper className={ className }>
			<TotalsFees
				heading={ heading }
				currency={ totalsCurrency }
				cartFees={ cartFees }
			/>
		</TotalsWrapper>
	);
};

export default Block;
