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
import { useCallback, useId, useState } from '@wordpress/element';
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
	const [ totalHeadingText, setTotalHeadingText ] = useState(
		attributes.totalHeading || DEFAULT_TOTAL_HEADING
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

	const onChangeTotalHeading = useCallback(
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
			onChange={ onChangeTotalHeading }
			placeholder={ DEFAULT_TOTAL_HEADING }
		/>
	);

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
					{ __( 'Order summary', 'woocommerce' ) }
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
						label={ totalHeadingLabel }
						currency={ totalsCurrency }
						values={ cartTotals }
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
