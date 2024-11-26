/**
 * External dependencies
 */
import { store as coreStore } from '@wordpress/core-data';
import { dispatch, useSelect } from '@wordpress/data';

type OrderSummaryHeadings = {
	woocommerce_order_summary_shipping_heading: string;
	woocommerce_order_summary_coupon_heading: string;
	woocommerce_order_summary_fee_heading: string;
	woocommerce_order_summary_subtotal_heading: string;
	woocommerce_order_summary_heading: string;
	woocommerce_order_summary_footer_heading: string;
};

export const useOrderSummaryHeadings = (
	headingName: keyof OrderSummaryHeadings
) => {
	const heading = useSelect(
		( select ) => {
			return select(
				coreStore
			).getEditedEntityRecord< OrderSummaryHeadings >(
				'root',
				'site',
				undefined
			)?.[ headingName ] as string | undefined;
		},
		[ headingName ]
	);

	return heading;
};

export const createSetOrderSummaryHeadingCallback = (
	headingName: keyof OrderSummaryHeadings
) => {
	return ( heading: string ) => {
		dispatch( coreStore ).editEntityRecord( 'root', 'site', undefined, {
			[ headingName ]: heading,
		} );
	};
};
