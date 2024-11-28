/**
 * External dependencies
 */
import { TotalsCoupon } from '@woocommerce/base-components/cart-checkout';
import { useStoreCartCoupons } from '@woocommerce/base-context/hooks';
import { getSetting } from '@woocommerce/settings';
import { TotalsWrapper } from '@woocommerce/blocks-components';

export type BlockAttributes = {
	className: string;
	heading: string | null;
};

type BlockProps = Omit< BlockAttributes, 'heading' > & {
	isEditor?: boolean;
	headingElement?: React.ReactNode;
};

const Block = ( {
	className,
	headingElement,
	isEditor = false,
}: BlockProps ) => {
	const couponsEnabled = getSetting( 'couponsEnabled', true );
	const { applyCoupon, isApplyingCoupon } = useStoreCartCoupons( 'wc/cart' );

	if ( ! couponsEnabled ) {
		return null;
	}

	return (
		<TotalsWrapper className={ className }>
			<TotalsCoupon
				heading={ headingElement }
				onSubmit={ applyCoupon }
				isLoading={ isApplyingCoupon }
				instanceId="coupon"
				isEditor={ isEditor }
			/>
		</TotalsWrapper>
	);
};

export default Block;
