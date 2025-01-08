/**
 * External dependencies
 */
import { createContext } from '@wordpress/element';

type ShippingCalculatorContextType = {
	shippingCalculatorID: string;
	showCalculator: boolean;
	isShippingCalculatorOpen: boolean;
	setIsShippingCalculatorOpen: ( value: boolean ) => void;
};

export const ShippingCalculatorContext =
	createContext< ShippingCalculatorContextType >( {
		shippingCalculatorID: '',
		showCalculator: false,
		isShippingCalculatorOpen: false,
		setIsShippingCalculatorOpen: () => {
			/* Do nothing */
		},
	} );
