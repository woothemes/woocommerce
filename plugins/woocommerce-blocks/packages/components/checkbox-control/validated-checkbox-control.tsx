/**
 * External dependencies
 */
import {
	useEffect,
	useCallback,
	forwardRef,
	useImperativeHandle,
	useRef,
} from '@wordpress/element';
import clsx from 'clsx';
import { isObject } from '@woocommerce/types';
import { useDispatch, useSelect } from '@wordpress/data';
import { VALIDATION_STORE_KEY } from '@woocommerce/block-data';
import { useInstanceId } from '@wordpress/compose';
import type { InputHTMLAttributes, ReactElement } from 'react';

/**
 * Internal dependencies
 */
import CheckboxControl from './index';
import './style.scss';
import { ValidationInputError } from '../validation-input-error';
import { getValidityMessageForInput } from '../../checkout/utils';

export interface ValidatedCheckboxControlProps
	extends Omit<
		InputHTMLAttributes< HTMLInputElement >,
		'onChange' | 'onBlur' | 'aria-describedby'
	> {
	// id to use for the input. If not provided, an id will be generated.
	id?: string;
	// Unique instance ID. id will be used instead if provided.
	instanceId?: string | undefined;
	// Class name to add to the input.
	className?: string | undefined;
	// aria-describedby attribute to add to the input.
	ariaDescribedBy?: string | undefined;
	// id to use for the error message. If not provided, an id will be generated.
	errorId?: string;
	// Feedback to display alongside the input. May be hidden when validation errors are displayed.
	feedback?: ReactElement | null;
	// Callback to run on change which is passed the updated value.
	onChange: ( newValue: boolean ) => void;
	// Optional label for the field.
	label?: string | undefined;
	// Field value.
	checked?: boolean | undefined;
	// If true, validation errors will be shown.
	showError?: boolean;
	// Error message to display alongside the field regardless of validation.
	errorMessage?: string | undefined;
	// Custom validation function that is run on change. Use setCustomValidity to set an error message.
	customValidation?:
		| ( ( inputObject: HTMLInputElement ) => boolean )
		| undefined;
	// Custom validation message to display when validity is false. Given the input element. Expected to use inputObject.validity.
	customValidityMessage?: ( validity: ValidityState ) => undefined | string;
	// Whether validation should run when focused - only has an effect when focusOnMount is also true.
	validateOnMount?: boolean | undefined;
}

export type ValidatedCheckboxControlHandle = {
	focus?: () => void;
	revalidate: () => void;
};

/**
 * A text based input which validates the input value.
 */
const ValidatedCheckboxControl = forwardRef<
	ValidatedCheckboxControlHandle,
	ValidatedCheckboxControlProps
>(
	(
		{
			className,
			id,
			ariaDescribedBy,
			errorId,
			onChange,
			showError = true,
			errorMessage: passedErrorMessage = '',
			checked = false,
			customValidation = () => true,
			customValidityMessage,
			feedback = null,
			label,
			validateOnMount = true,
			instanceId: preferredInstanceId = '',
			...rest
		},
		forwardedRef
	): JSX.Element => {
		// Ref for the input element.
		const inputRef = useRef< HTMLInputElement >( null );

		const instanceId = useInstanceId(
			ValidatedCheckboxControl,
			'',
			preferredInstanceId
		);
		const textInputId =
			typeof id !== 'undefined' ? id : 'textinput-' + instanceId;
		const errorIdString = errorId !== undefined ? errorId : textInputId;

		const { setValidationErrors, clearValidationError } =
			useDispatch( VALIDATION_STORE_KEY );

		// Ref for validation callback.
		const customValidationRef = useRef( customValidation );

		// Update ref when validation callback changes.
		useEffect( () => {
			customValidationRef.current = customValidation;
		}, [ customValidation ] );

		const { validationError, validationErrorId } = useSelect(
			( select ) => {
				const store = select( VALIDATION_STORE_KEY );
				return {
					validationError: store.getValidationError( errorIdString ),
					validationErrorId:
						store.getValidationErrorId( errorIdString ),
				};
			}
		);

		const validateInput = useCallback(
			( errorsHidden = true ) => {
				const inputObject = inputRef.current || null;

				if ( inputObject === null ) {
					return;
				}

				if (
					inputObject.checkValidity() &&
					customValidationRef.current( inputObject )
				) {
					clearValidationError( errorIdString );
					return;
				}

				setValidationErrors( {
					[ errorIdString ]: {
						message: getValidityMessageForInput(
							label,
							inputObject,
							customValidityMessage
						),
						hidden: errorsHidden,
					},
				} );
			},
			[
				clearValidationError,
				errorIdString,
				setValidationErrors,
				label,
				customValidityMessage,
			]
		);

		// Allows parent to trigger revalidation.
		useImperativeHandle(
			forwardedRef,
			function () {
				return {
					focus() {
						inputRef.current?.focus();
					},
					revalidate() {
						validateInput( false );
					},
				};
			},
			[ validateInput ]
		);

		/**
		 * Validation on mount.
		 */
		useEffect( () => {
			if ( validateOnMount ) {
				validateInput( false );
			}
		}, [ validateOnMount, validateInput ] );

		// Remove validation errors when unmounted.
		useEffect( () => {
			return () => {
				clearValidationError( errorIdString );
			};
		}, [ clearValidationError, errorIdString ] );

		if ( passedErrorMessage !== '' && isObject( validationError ) ) {
			validationError.message = passedErrorMessage;
		}

		const hasError = validationError?.message && ! validationError?.hidden;

		return (
			<CheckboxControl
				className={ clsx( className, {
					'has-error': hasError,
				} ) }
				aria-invalid={ hasError === true }
				id={ textInputId }
				aria-errormessage={
					// we're using the internal `aria-errormessage` attribute, calculated from the data store.
					// If a consumer wants to overwrite the attribute, they can pass a prop.
					showError && hasError && validationErrorId
						? validationErrorId
						: undefined
				}
				ref={ inputRef }
				onChange={ ( newValue ) => {
					validateInput( false );
					// Push the changes up to the parent component.
					onChange( newValue );
				} }
				ariaDescribedBy={ ariaDescribedBy }
				checked={ checked }
				title="" // This prevents the same error being shown on hover.
				label={ label }
				feedback={
					showError && hasError ? (
						<ValidationInputError
							errorMessage={ passedErrorMessage }
							propertyName={ errorIdString }
							elementId={ errorIdString }
						/>
					) : (
						feedback
					)
				}
				{ ...rest }
			/>
		);
	}
);

export default ValidatedCheckboxControl;
