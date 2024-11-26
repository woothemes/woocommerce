/**
 * External dependencies
 */
import { TotalsCoupon } from '@woocommerce/base-components/cart-checkout';
import { useStoreCartCoupons } from '@woocommerce/base-context/hooks';
import { getSetting } from '@woocommerce/settings';
import { TotalsWrapper } from '@woocommerce/blocks-components';
import { useEditorContext } from '@woocommerce/base-context';

export type BlockAttributes = {
	className?: string;
	sectionHeading: string | null;
};

export type BlockProps = {
	className?: string;
	heading: React.ReactNode;
};

const Block = ( { className = '', heading }: BlockProps ) => {
	const couponsEnabled = getSetting( 'couponsEnabled', true );

	const { isEditor } = useEditorContext();

	const { applyCoupon, isApplyingCoupon } =
		useStoreCartCoupons( 'wc/checkout' );

	if ( ! couponsEnabled ) {
		return null;
	}

	return (
		<TotalsWrapper className={ className }>
			<TotalsCoupon
				isEditor={ isEditor }
				onSubmit={ applyCoupon }
				isLoading={ isApplyingCoupon }
				instanceId="coupon"
				heading={ heading }
			/>
		</TotalsWrapper>
	);
};

export default Block;
