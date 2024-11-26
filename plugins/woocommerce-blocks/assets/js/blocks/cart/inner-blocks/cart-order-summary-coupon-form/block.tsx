/**
 * External dependencies
 */
import { TotalsCoupon } from '@woocommerce/base-components/cart-checkout';
import { useStoreCartCoupons } from '@woocommerce/base-context/hooks';
import { getSetting } from '@woocommerce/settings';
import { TotalsWrapper } from '@woocommerce/blocks-components';

export type BlockAttributes = {
	className: string;
};

type BlockProps = BlockAttributes & {
	isEditor?: boolean;
	heading?: React.ReactNode;
};

const Block = ( {
	className,
	heading,
	isEditor = false,
}: BlockProps ): JSX.Element | null => {
	const couponsEnabled = getSetting( 'couponsEnabled', true );

	const { applyCoupon, isApplyingCoupon } = useStoreCartCoupons( 'wc/cart' );

	if ( ! couponsEnabled ) {
		return null;
	}

	return (
		<TotalsWrapper className={ className }>
			<TotalsCoupon
				heading={ heading }
				onSubmit={ applyCoupon }
				isLoading={ isApplyingCoupon }
				instanceId="coupon"
				isEditor={ isEditor }
			/>
		</TotalsWrapper>
	);
};

export default Block;
