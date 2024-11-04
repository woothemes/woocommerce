export const ShippingCollaterals = ( {
	collaterals,
}: {
	collaterals?: React.ReactNode;
} ): JSX.Element | null => {
	if ( ! collaterals ) {
		return null;
	}
	return (
		<div className="wc-block-components-totals-shipping__collaterals">
			{ collaterals }
		</div>
	);
};

export default ShippingCollaterals;
