/**
 * External dependencies
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { useCallback, useState } from '@wordpress/element';
import type { BlockEditProps, TemplateArray } from '@wordpress/blocks';
import { innerBlockAreas } from '@woocommerce/blocks-checkout';
import { __ } from '@wordpress/i18n';
import { TotalsFooterItem } from '@woocommerce/base-components/cart-checkout';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import { useStoreCart } from '@woocommerce/base-context/hooks';

/**
 * Internal dependencies
 */
import {
	useForcedLayout,
	getAllowedBlocks,
} from '../../../cart-checkout-shared';
import { OrderMetaSlotFill } from './slotfills';
import { DEFAULT_TOTAL_HEADING } from './constants';

export type BlockAttributes = {
	totalHeading: string;
	className: string;
};

export const Edit = ( {
	clientId,
	attributes,
	setAttributes,
}: BlockEditProps< BlockAttributes > ) => {
	const { totalHeading } = attributes;
	const blockProps = useBlockProps();
	const { cartTotals } = useStoreCart();
	const totalsCurrency = getCurrencyFromPriceResponse( cartTotals );
	const allowedBlocks = getAllowedBlocks(
		innerBlockAreas.CART_ORDER_SUMMARY
	);
	const defaultTemplate = [
		[
			'woocommerce/cart-order-summary-heading-block',
			{
				content: __( 'Cart totals', 'woocommerce' ),
			},
			[],
		],
		[ 'woocommerce/cart-order-summary-coupon-form-block', {}, [] ],
		[ 'woocommerce/cart-order-summary-totals-block', {}, [] ],
	] as TemplateArray;

	const [ totalHeadingText, setTotalHeadingText ] = useState(
		totalHeading || DEFAULT_TOTAL_HEADING
	);

	useForcedLayout( {
		clientId,
		registeredBlocks: allowedBlocks,
		defaultTemplate,
	} );

	const onTotalHeadingChange = useCallback(
		( value: string ) => {
			setTotalHeadingText( value );

			// If the user sets the text of the heading back to the default heading, we clear the block attribute,
			// this ensures that when returning to the default text they will get the translated heading, not a fixed
			// string saved in the block attribute.
			if ( value === DEFAULT_TOTAL_HEADING ) {
				setAttributes( { totalHeading: '' } );
			} else {
				setAttributes( { totalHeading: value } );
			}
		},
		[ setAttributes ]
	);

	const totalHeadingLabel = (
		<RichText
			value={ totalHeadingText }
			onChange={ onTotalHeadingChange }
			placeholder={ DEFAULT_TOTAL_HEADING }
		/>
	);

	return (
		<div { ...blockProps }>
			<InnerBlocks
				allowedBlocks={ allowedBlocks }
				template={ defaultTemplate }
			/>
			<div className="wc-block-components-totals-wrapper">
				<TotalsFooterItem
					label={ totalHeadingLabel }
					currency={ totalsCurrency }
					values={ cartTotals }
				/>
			</div>
			{ /* do I put an totals wrapper here? */ }
			<OrderMetaSlotFill />
		</div>
	);
};

export const Save = (): JSX.Element => {
	return (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	);
};
