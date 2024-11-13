/**
 * External dependencies
 */
import { defaultFields, FormFields } from '@woocommerce/settings';
import { createContext, useContext } from '@wordpress/element';

/**
 * Context consumed by inner blocks.
 */
export type CheckoutBlockContextProps = {
	defaultFields: FormFields;
	showOrderNotes: boolean;
	showPolicyLinks: boolean;
	showReturnToCart: boolean;
	cartPageId: number;
	showRateAfterTaxName: boolean;
	showFormStepNumbers: boolean;
};

const defaultCheckoutBlockContext = {
	defaultFields,
	showOrderNotes: true,
	showPolicyLinks: true,
	showReturnToCart: true,
	cartPageId: 0,
	showRateAfterTaxName: false,
	showFormStepNumbers: false,
};

export type CheckoutBlockControlsContextProps = {
	addressFieldControls: () => JSX.Element | null;
};

export const CheckoutBlockContext: React.Context<
	Partial< CheckoutBlockContextProps >
> = createContext< CheckoutBlockContextProps >( defaultCheckoutBlockContext );

export const CheckoutBlockControlsContext: React.Context< CheckoutBlockControlsContextProps > =
	createContext< CheckoutBlockControlsContextProps >( {
		addressFieldControls: () => null,
	} );

export const useCheckoutBlockContext = (): CheckoutBlockContextProps => {
	const context = useContext( CheckoutBlockContext );
	return {
		...defaultCheckoutBlockContext,
		...context,
	};
};

export const useCheckoutBlockControlsContext =
	(): CheckoutBlockControlsContextProps => {
		return useContext( CheckoutBlockControlsContext );
	};
