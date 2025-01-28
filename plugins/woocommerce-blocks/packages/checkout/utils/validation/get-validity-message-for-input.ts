/**
 * External dependencies
 */
import { __, sprintf, getLocaleData } from '@wordpress/i18n';

const defaultValidityMessage =
	( label: string | undefined, inputElement: HTMLInputElement ) =>
	( validity: ValidityState ): string | undefined => {
		const localeData = getLocaleData();
		const shouldKeepOriginalCase = [ 'de', 'de_AT', 'de_CH' ].includes(
			localeData?.[ '' ]?.lang ?? 'en'
		);

		const fieldLabel = shouldKeepOriginalCase
			? label
			: label?.toLocaleLowerCase() || __( 'field', 'woocommerce' );

		let invalidFieldMessage = sprintf(
			/* translators: %s field label */
			__( 'Please enter a valid %s', 'woocommerce' ),
			fieldLabel
		);

		if ( inputElement.type === 'checkbox' ) {
			invalidFieldMessage = __(
				'Please check this box if you want to proceed.',
				'woocommerce'
			);
		}

		if (
			validity.valueMissing ||
			validity.badInput ||
			validity.typeMismatch
		) {
			return invalidFieldMessage;
		}
	};

/**
 * Converts an input's validityState to a string to display on the frontend.
 *
 * This returns custom messages for invalid/required fields. Other error types use defaults from the browser (these
 * could be implemented in the future but are not currently used by the block checkout).
 */
const getValidityMessageForInput = (
	label: string | undefined,
	inputElement: HTMLInputElement,
	customValidityMessage?: ( validity: ValidityState ) => string
): string => {
	// No errors, or custom error - return early.
	if ( inputElement.validity.valid || inputElement.validity.customError ) {
		return inputElement.validationMessage;
	}

	const validityMessageCallback =
		customValidityMessage || defaultValidityMessage( label, inputElement );

	return (
		validityMessageCallback( inputElement.validity ) ||
		inputElement.validationMessage
	);
};

export default getValidityMessageForInput;
