/**
 * External dependencies
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import type { BlockEditProps, TemplateArray } from '@wordpress/blocks';
import { innerBlockAreas } from '@woocommerce/blocks-checkout';
import { TotalsFooterItem } from '@woocommerce/base-components/cart-checkout';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import { useStoreCart } from '@woocommerce/base-context/hooks';
import { __ } from '@wordpress/i18n';
import { useId, useState } from '@wordpress/element';
import { Icon } from '@wordpress/components';
import { chevronDown, chevronUp } from '@wordpress/icons';
import clsx from 'clsx';
import { FormattedMonetaryAmount } from '@woocommerce/blocks-components';
import { useContainerWidthContext } from '@woocommerce/base-context';

/**
 * Internal dependencies
 */
import {
	useForcedLayout,
	getAllowedBlocks,
} from '../../../cart-checkout-shared';
import { OrderMetaSlotFill } from './slotfills';
import { createSetOrderSummaryHeadingCallback } from '../../../../entities/editor';

export type BlockAttributes = {
	heading: string | null;
	footerHeading: string | null;
	className: string;
};

export const Edit = ( {
	clientId,
	attributes,
}: BlockEditProps< BlockAttributes > ) => {
	const blockProps = useBlockProps();
	const { cartTotals } = useStoreCart();
	const totalsCurrency = getCurrencyFromPriceResponse( cartTotals );
	const totalPrice = parseInt( cartTotals.total_price, 10 );
	const allowedBlocks = getAllowedBlocks(
		innerBlockAreas.CHECKOUT_ORDER_SUMMARY
	);
	const { isLarge } = useContainerWidthContext();
	const [ isOpen, setIsOpen ] = useState( false );
	const ariaControlsId = useId();

	const { heading, footerHeading } = attributes;

	const onOrderSummaryHeadingChange = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_heading'
	);

	const onOrderSummaryFooterHeadingChange =
		createSetOrderSummaryHeadingCallback(
			'woocommerce_order_summary_footer_heading'
		);

	const headingText = heading ?? __( 'Order summary', 'woocommerce' );
	const footerHeadingText = footerHeading ?? __( 'Total', 'woocommerce' );

	const headingElement = (
		<RichText
			tagName="span"
			identifier="headingText"
			value={ headingText }
			onChange={ onOrderSummaryHeadingChange }
		/>
	);

	const footerHeadingElement = (
		<RichText
			tagName="span"
			identifier="footerHeadingText"
			value={ footerHeadingText }
			onChange={ onOrderSummaryFooterHeadingChange }
		/>
	);

	const orderSummaryProps = ! isLarge
		? {
				role: 'button',
				onClick: () => setIsOpen( ! isOpen ),
				'aria-expanded': isOpen,
				'aria-controls': ariaControlsId,
				tabIndex: 0,
				onKeyDown: ( event: React.KeyboardEvent ) => {
					if ( event.key === 'Enter' || event.key === ' ' ) {
						setIsOpen( ! isOpen );
					}
				},
		  }
		: {};

	const defaultTemplate = [
		[ 'woocommerce/checkout-order-summary-cart-items-block', {}, [] ],
		[ 'woocommerce/checkout-order-summary-coupon-form-block', {}, [] ],
		[ 'woocommerce/checkout-order-summary-totals-block', {}, [] ],
	] as TemplateArray;

	useForcedLayout( {
		clientId,
		registeredBlocks: allowedBlocks,
		defaultTemplate,
	} );

	return (
		<div { ...blockProps }>
			<div
				className="wc-block-components-checkout-order-summary__title"
				{ ...orderSummaryProps }
			>
				<p
					className="wc-block-components-checkout-order-summary__title-text"
					role="heading"
				>
					{ headingElement }
				</p>
				{ ! isLarge && (
					<>
						<FormattedMonetaryAmount
							currency={ totalsCurrency }
							value={ totalPrice }
						/>

						<Icon icon={ isOpen ? chevronUp : chevronDown } />
					</>
				) }
			</div>
			<div
				className={ clsx(
					'wc-block-components-checkout-order-summary__content',
					{
						'is-open': isOpen,
					}
				) }
				id={ ariaControlsId }
			>
				<InnerBlocks
					allowedBlocks={ allowedBlocks }
					template={ defaultTemplate }
				/>
				<div className="wc-block-components-totals-wrapper">
					<TotalsFooterItem
						currency={ totalsCurrency }
						values={ cartTotals }
						label={ footerHeadingElement }
					/>
				</div>
				<OrderMetaSlotFill />
			</div>
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
