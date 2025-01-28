/**
 * External dependencies
 */
import { store } from '@woocommerce/interactivity';
import { HTMLElementEvent } from '@woocommerce/types';

const getInputElementFromEvent = (
	event: HTMLElementEvent< HTMLButtonElement >
) => {
	const target = event.target as HTMLButtonElement;

	const inputElement = target.parentElement?.querySelector(
		'.input-text.qty.text'
	) as HTMLInputElement | null | undefined;

	return inputElement;
};

const getInputData = ( event: HTMLElementEvent< HTMLButtonElement > ) => {
	const inputElement = getInputElementFromEvent( event );

	if ( ! inputElement ) {
		return;
	}

	const parsedValue = parseInt( inputElement.value, 10 );
	const parsedMinValue = parseInt( inputElement.min, 10 );
	const parsedMaxValue = parseInt( inputElement.max, 10 );
	const parsedStep = parseInt( inputElement.step, 10 );

	const currentValue = isNaN( parsedValue ) ? 0 : parsedValue;
	const minValue = isNaN( parsedMinValue ) ? 1 : parsedMinValue;
	const maxValue = isNaN( parsedMaxValue ) ? undefined : parsedMaxValue;
	const step = isNaN( parsedStep ) ? 1 : parsedStep;

	return {
		currentValue,
		minValue,
		maxValue,
		step,
		inputElement,
	};
};

const dispatchChangeEvent = ( inputElement: HTMLInputElement ) => {
	const event = new Event( 'change' );

	inputElement.dispatchEvent( event );
};

store( 'woocommerce/add-to-cart-with-options', {
	state: {},
	actions: {
		addQuantity: ( event: HTMLElementEvent< HTMLButtonElement > ) => {
			const inputData = getInputData( event );
			if ( ! inputData ) {
				return;
			}
			const { currentValue, maxValue, step, inputElement } = inputData;
			const newValue = currentValue + step;

			if ( maxValue === undefined || newValue <= maxValue ) {
				inputElement.value = newValue.toString();
				dispatchChangeEvent( inputElement );
			}
		},
		removeQuantity: ( event: HTMLElementEvent< HTMLButtonElement > ) => {
			const inputData = getInputData( event );
			if ( ! inputData ) {
				return;
			}
			const { currentValue, minValue, step, inputElement } = inputData;
			const newValue = currentValue - step;

			if ( newValue >= minValue ) {
				inputElement.value = newValue.toString();
				dispatchChangeEvent( inputElement );
			}
		},
	},
} );
