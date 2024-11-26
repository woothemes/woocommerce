/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	TotalsShipping,
	ShippingCalculatorButton,
	ShippingCalculator,
} from '@woocommerce/base-components/cart-checkout';
import { ShippingCalculatorContext } from '@woocommerce/base-components/cart-checkout/shipping-calculator/context';
import { useEditorContext, useStoreCart } from '@woocommerce/base-context';
import { TotalsWrapper } from '@woocommerce/blocks-checkout';
import {
	getShippingRatesPackageCount,
	selectedRatesAreCollectable,
	allRatesAreCollectable,
} from '@woocommerce/base-utils';
import { getSetting } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import { ShippingRateSelector } from './shipping-rate-selector';
import { EditableText } from '../../../../../../packages/components/editable-text';
import { useOrderSummaryHeadings } from '../../../cart-checkout-shared/entities/order-summary-headings';

export type BlockAttributes = {
	sectionHeading: string | null;
	className: string;
};

export type BlockProps = {
	className: string;
	onChangeHeading?: ( heading: string ) => void;
};

const Block = ( { className, onChangeHeading }: BlockProps ) => {
	const { isEditor } = useEditorContext();
	const { cartNeedsShipping, shippingRates } = useStoreCart();
	const [ isShippingCalculatorOpen, setIsShippingCalculatorOpen ] =
		useState( false );

	const hasSelectedCollectionOnly =
		selectedRatesAreCollectable( shippingRates );

	const collectionOrDelivery = hasSelectedCollectionOnly
		? __( 'Collection', 'woocommerce' )
		: __( 'Delivery', 'woocommerce' );

	const sectionHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_shipping_heading'
	);

	const heading = sectionHeading ?? collectionOrDelivery;

	const label =
		isEditor && onChangeHeading ? (
			<EditableText value={ heading } onChange={ onChangeHeading } />
		) : (
			heading
		);

	if ( ! cartNeedsShipping ) {
		return null;
	}

	if ( isEditor && getShippingRatesPackageCount( shippingRates ) === 0 ) {
		return null;
	}

	const showCalculator = getSetting< boolean >(
		'isShippingCalculatorEnabled',
		true
	);

	return (
		<TotalsWrapper className={ className }>
			<ShippingCalculatorContext.Provider
				value={ {
					showCalculator,
					shippingCalculatorID: 'shipping-calculator-form-wrapper',
					isShippingCalculatorOpen,
					setIsShippingCalculatorOpen,
				} }
			>
				<TotalsShipping
					label={ label }
					placeholder={
						showCalculator ? (
							<ShippingCalculatorButton
								label={ __(
									'Enter address to check delivery options',
									'woocommerce'
								) }
							/>
						) : (
							<span className="wc-block-components-shipping-placeholder__value">
								{ __(
									'Calculated on checkout',
									'woocommerce'
								) }
							</span>
						)
					}
					collaterals={
						<>
							{ isShippingCalculatorOpen && (
								<ShippingCalculator />
							) }
							{ ! isShippingCalculatorOpen && (
								<ShippingRateSelector />
							) }
							{ ! showCalculator &&
								allRatesAreCollectable( shippingRates ) && (
									<div className="wc-block-components-totals-shipping__delivery-options-notice">
										{ __(
											'Delivery options will be calculated during checkout',
											'woocommerce'
										) }
									</div>
								) }
						</>
					}
				/>
			</ShippingCalculatorContext.Provider>
		</TotalsWrapper>
	);
};

export default Block;
