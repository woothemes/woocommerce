/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { RecommendedPaymentMethod } from '@woocommerce/data';
import { getHistory, getNewPath } from '@woocommerce/navigation';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { isWooPayments } from '~/settings-payments/utils';

interface CompleteSetupButtonProps {
	/**
	 * The ID of the gateway to activate payments for.
	 */
	gatewayId: string;
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
	onboardingHref,
	recommendedPaymentMethods = [],
	buttonText = __( 'Complete setup', 'woocommerce' ),
}: CompleteSetupButtonProps ) => {
	const [ isUpdating, setIsUpdating ] = useState( false );

	const completeSetup = () => {
		setIsUpdating( true );
		if ( isWooPayments( gatewayId ) ) {
			if ( ( recommendedPaymentMethods ?? [] ).length > 0 ) {
				const history = getHistory();
				history.push( getNewPath( {}, '/payment-methods' ) );
			} else {
				window.location.href = onboardingHref;
			}
			setIsUpdating( false );
			return;
		}
		// Redirect to the gateway's onboarding URL if it needs setup.
		window.location.href = onboardingHref;
	};

	return (
		<Button
			variant={ 'primary' }
			isBusy={ isUpdating }
			disabled={ isUpdating }
			onClick={ completeSetup }
		>
			{ buttonText }
		</Button>
	);
};