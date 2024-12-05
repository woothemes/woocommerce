/**
 * External dependencies
 */
import { SHIPPING_STATES } from '@woocommerce/block-settings';
import type { ValidatedTextInputHandle } from '@woocommerce/blocks-components';
import { forwardRef } from '@wordpress/element';
/**
 * Internal dependencies
 */
import StateInput from './state-input';
import type { StateInputProps } from './StateInputProps';

const ShippingStateInput = (
	props: StateInputProps,
	forwardedRef: React.Ref< ValidatedTextInputHandle >
): JSX.Element => {
	return (
		<StateInput
			states={ SHIPPING_STATES }
			{ ...props }
			ref={ forwardedRef }
		/>
	);
};

export default forwardRef( ShippingStateInput );
