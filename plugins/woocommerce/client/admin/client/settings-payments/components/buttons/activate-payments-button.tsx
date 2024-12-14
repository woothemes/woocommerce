/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { PaymentIncentive, RecommendedPaymentMethod } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import { getWooPaymentsSetupLiveAccountLink } from '~/settings-payments/utils';

interface ActivatePaymentsButtonProps {
	/**
	 * The ID of the gateway to activate payments for.
	 */
	gatewayId: string;
	/**
	 * The settings URL to navigate to when the enable gateway button is clicked.
	 */
	settingsHref: string;
	/**
	 * The onboarding URL to navigate to when the gateway needs setup.
	 */
	onboardingHref: string;
	/**
	 * Callback used when an incentive is accepted.
	 *
	 * @param id Incentive ID.
	 */
	acceptIncentive: ( id: string ) => void;
	/**
	 * Whether this is an offline payment gateway.
	 */
	isOffline: boolean;
	/**
	 * Recommended payment methods for this gateway (if available).
	 */
	recommendedPaymentMethods?: RecommendedPaymentMethod[];
	/**
	 * The text of the button.
	 */
	buttonText?: string;
	/**
	 * Incentive data. If provided, the incentive will be accepted when the button is clicked.
	 */
	incentive?: PaymentIncentive | null;
}

export const ActivatePaymentsButton = ( {
	acceptIncentive,
	buttonText = __( 'Activate payments', 'woocommerce' ),
	incentive = null,
}: ActivatePaymentsButtonProps ) => {
	const [ isUpdating, setIsUpdating ] = useState( false );

	const activatePayments = () => {
		setIsUpdating( true );

		if ( incentive ) {
			acceptIncentive( incentive.promo_id );
		}

		window.location.href = getWooPaymentsSetupLiveAccountLink();
	};

	return (
		<Button
			variant={ 'primary' }
			isBusy={ isUpdating }
			disabled={ isUpdating }
			onClick={ activatePayments }
		>
			{ buttonText }
		</Button>
	);
};
