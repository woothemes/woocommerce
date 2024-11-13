/**
 * External dependencies
 */
import { createContext, useContext } from '@wordpress/element';

/**
 * Context consumed by inner blocks.
 */
export type CheckoutBlockContextProps = {
	showOrderNotes: boolean;
	showPolicyLinks: boolean;
	showReturnToCart: boolean;
	cartPageId: number;
	showRateAfterTaxName: boolean;
	showFormStepNumbers: boolean;
};

export type CheckoutBlockControlsContextProps = {
	addressFieldControls: () => JSX.Element | null;
};

export const CheckoutBlockContext: React.Context< CheckoutBlockContextProps > =
	createContext< CheckoutBlockContextProps >( {
		showOrderNotes: true,
		showPolicyLinks: true,
		showReturnToCart: true,
		cartPageId: 0,
		showRateAfterTaxName: false,
		showFormStepNumbers: false,
	} );

export const CheckoutBlockControlsContext: React.Context< CheckoutBlockControlsContextProps > =
	createContext< CheckoutBlockControlsContextProps >( {
		addressFieldControls: () => null,
	} );

export const useCheckoutBlockContext = (): CheckoutBlockContextProps => {
	return useContext( CheckoutBlockContext );
};

export const useCheckoutBlockControlsContext =
	(): CheckoutBlockControlsContextProps => {
		return useContext( CheckoutBlockControlsContext );
	};
