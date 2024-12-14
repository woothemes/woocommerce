/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import {
	RecommendedPaymentMethod,
	PaymentProviderState,
} from '@woocommerce/data';
import { getHistory, getNewPath } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */

interface CompleteSetupButtonProps {
	/**
	 * The ID of the gateway to activate payments for.
	 */
	gatewayId: string;
	/**
	 * The state of the gateway.
	 */
	gatewayState: PaymentProviderState;
	/**
	 * The settings URL to navigate to, if we don't have an onboarding URL.
	 */
	settingsHref: string;
	/**
	 * The onboarding URL to navigate to when the gateway needs setup.
	 */
	onboardingHref: string;
	/**
	 * Recommended payment methods for this gateway (if available).
	 */
	recommendedPaymentMethods?: RecommendedPaymentMethod[];
	/**
	 * The text of the button.
	 */
	buttonText?: string;
}

export const CompleteSetupButton = ( {
	gatewayId,
	gatewayState,
	settingsHref,
	onboardingHref,
	recommendedPaymentMethods = [],
	buttonText = __( 'Complete setup', 'woocommerce' ),
}: CompleteSetupButtonProps ) => {
	const [ isUpdating, setIsUpdating ] = useState( false );

	const completeSetup = () => {
		// Double check that the gateway actually needs setup.
		if ( ! gatewayState.needs_setup ) {
			return;
		}

		setIsUpdating( true );

		if ( ! gatewayState.account_connected ) {
			if ( ( recommendedPaymentMethods ?? [] ).length > 0 ) {
				const history = getHistory();
				history.push( getNewPath( {}, '/payment-methods' ) );
			} else {
				// Redirect to the gateway's onboarding URL if it needs setup.
				window.location.href = onboardingHref;
				return;
			}
		} else {
			// Redirect to the gateway's settings URL if the account is already connected.
			window.location.href = settingsHref;
			return;
		}

		setIsUpdating( false );
	};

	return (
		<Button
			key={ gatewayId }
			variant={ 'primary' }
			isBusy={ isUpdating }
			disabled={ isUpdating }
			onClick={ completeSetup }
		>
			{ buttonText }
		</Button>
	);
};
