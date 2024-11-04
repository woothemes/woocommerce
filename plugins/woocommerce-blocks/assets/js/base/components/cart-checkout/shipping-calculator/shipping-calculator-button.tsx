/**
 * External dependencies
 */
import { Button } from '@ariakit/react';
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import { Panel } from '@woocommerce/blocks-components';

/**
 * Internal dependencies
 */
import { ShippingCalculatorContext } from './context';
import './style.scss';
import ShippingCalculator from './shipping-calculator';

type ShippingCalculatorPanelProps = {
	title: string;
};

export const ShippingCalculatorPanel = ( {
	title,
}: ShippingCalculatorPanelProps ) => {
	const { isShippingCalculatorOpen, setIsShippingCalculatorOpen } =
		useContext( ShippingCalculatorContext );
	return (
		<Panel
			className="wc-block-components-totals-shipping-panel"
			initialOpen={ false }
			hasBorder={ false }
			title={ title }
			state={ [ isShippingCalculatorOpen, setIsShippingCalculatorOpen ] }
		>
			<ShippingCalculator />
		</Panel>
	);
};

export const ShippingCalculatorButton = ( {
	label = __( 'Calculate', 'woocommerce' ),
}: {
	label?: string;
} ): JSX.Element | null => {
	const {
		isShippingCalculatorOpen,
		setIsShippingCalculatorOpen,
		showCalculator,
		shippingCalculatorID,
	} = useContext( ShippingCalculatorContext );

	if ( ! showCalculator ) {
		return null;
	}

	return (
		<Button
			render={ <span /> }
			className="wc-block-components-totals-shipping__change-address__link"
			id="wc-block-components-totals-shipping__change-address__link"
			onClick={ ( e ) => {
				e.preventDefault();
				setIsShippingCalculatorOpen( ! isShippingCalculatorOpen );
			} }
			aria-label={ label }
			aria-expanded={ isShippingCalculatorOpen }
			aria-controls={ shippingCalculatorID }
		>
			{ label }
		</Button>
	);
};

export default ShippingCalculatorButton;
