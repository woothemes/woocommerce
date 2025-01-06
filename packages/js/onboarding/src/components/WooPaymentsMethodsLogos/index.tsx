/**
 * External dependencies
 */
import React, { useState, useEffect } from 'react';
import { Fragment, createElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Visa from '../../images/cards/visa';
import MasterCard from '../../images/cards/mastercard';
import Amex from '../../images/cards/amex';
import Discover from '../../images/cards/discover';
import ApplePay from '../../images/cards/applepay';
import GooglePay from '../../images/cards/googlepay';
import JCB from '../../images/cards/jcb';
import WooPay from '../../images/payment-methods/woopay';
import AfterPay from '../../images/payment-methods/afterpay';
import Affirm from '../../images/payment-methods/affirm';
import Klarna from '../../images/payment-methods/klarna';

/**
 * Payment methods list.
 */
const PaymentMethods = [
	{
		name: 'visa',
		component: <Visa key="visa" />,
	},
	{
		name: 'mastercard',
		component: <MasterCard key="mastercard" />,
	},
	{
		name: 'amex',
		component: <Amex key="amex" />,
	},
	{
		name: 'discover',
		component: <Discover key="discover" />,
	},
	{
		name: 'woopay',
		component: <WooPay key="woopay" />,
	},
	{
		name: 'applepay',
		component: <ApplePay key="applepay" />,
	},
	{
		name: 'googlepay',
		component: <GooglePay key="googlepay" />,
	},
	{
		name: 'afterpay',
		component: <AfterPay key="afterpay" />,
	},
	{
		name: 'affirm',
		component: <Affirm key="affirm" />,
	},
	{
		name: 'klarna',
		component: <Klarna key="klarna" />,
	},
	{
		name: 'jcb',
		component: <JCB key="jcb" />,
	},
];

export const WooPaymentsMethodsLogos: React.VFC< {
	isWooPayEligible: boolean;
	maxElements: number;
	tabletWidthBreakpoint?: number;
	maxElementsTablet?: number;
	mobileWidthBreakpoint?: number;
	maxElementsMobile?: number;
	totalPaymentMethods?: number;
} > = ( {
	/**
	 * Whether the store (location) is eligible for WooPay.
	 * Based on this we will include or not the WooPay logo in the list.
	 */
	isWooPayEligible = false,
	/**
	 * Maximum number of logos to be displayed (on a desktop screen).
	 */
	maxElements = 10,
	/**
	 * Breakpoint at which the number of logos to display changes to the tablet layout.
	 */
	tabletWidthBreakpoint = 768,
	/**
	 * Maximum number of logos to be displayed on a tablet screen.
	 */
	maxElementsTablet = 7,
	/**
	 * Breakpoint at which the number of logos to display changes to the mobile layout.
	 */
	mobileWidthBreakpoint = 480,
	/**
	 * Maximum number of logos to be displayed on a mobile screen.
	 */
	maxElementsMobile = 5,
	/**
	 * Total number of payment methods that WooPayments supports.
	 * The default is set according to https://woocommerce.com/document/woopayments/payment-methods.
	 * If not eligible for WooPay, the total number of payment methods is reduced by one.
	 */
	totalPaymentMethods = 20,
} ) => {
	const [ maxShownElements, setMaxShownElements ] = useState( maxElements );

	// Reduce the total number of payment methods by one if the store is not eligible for WooPay.
	const maxSupportedPaymentMethods = isWooPayEligible
		? totalPaymentMethods
		: totalPaymentMethods - 1;

	/**
	 * Determine the maximum number of logos to display, taking into account WooPay’s eligibility.
	 */
	const getMaxShownElements = ( maxElementsNumber: number ) => {
		if ( ! isWooPayEligible ) {
			return maxElementsNumber + 1;
		}

		return maxElementsNumber;
	};

	useEffect( () => {
		const updateMaxElements = () => {
			if ( window.innerWidth <= mobileWidthBreakpoint ) {
				setMaxShownElements( maxElementsMobile );
			} else if ( window.innerWidth <= tabletWidthBreakpoint ) {
				setMaxShownElements( maxElementsTablet );
			} else {
				setMaxShownElements( maxElements );
			}
		};

		updateMaxElements();

		// Update the number of logos to display when the window is resized.
		window.addEventListener( 'resize', updateMaxElements );

		// Cleanup on unmount.
		return () => {
			window.removeEventListener( 'resize', updateMaxElements );
		};
	}, [
		maxElements,
		maxElementsMobile,
		maxElementsTablet,
		tabletWidthBreakpoint,
		mobileWidthBreakpoint,
	] );

	return (
		<>
			<div className="woocommerce-woopayments-payment-methods-logos">
				{ PaymentMethods.slice(
					0,
					getMaxShownElements( maxShownElements )
				).map( ( pm ) => {
					// Do not display the WooPay logo if the store is not eligible for WooPay.
					if ( ! isWooPayEligible && pm.name === 'woopay' ) {
						return null;
					}

					return pm.component;
				} ) }
				{ maxShownElements < maxSupportedPaymentMethods && (
					<div className="woocommerce-woopayments-payment-methods-logos-count">
						+ { maxSupportedPaymentMethods - maxShownElements }
					</div>
				) }
			</div>
		</>
	);
};
