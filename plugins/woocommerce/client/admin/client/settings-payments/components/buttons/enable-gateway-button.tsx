/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { dispatch, useDispatch } from '@wordpress/data';
import {
	EnableGatewayResponse,
	PAYMENT_SETTINGS_STORE_NAME,
	PaymentIncentive,
	RecommendedPaymentMethod,
} from '@woocommerce/data';
import { getHistory, getNewPath } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import { isWooPayments } from '~/settings-payments/utils';

interface EnableGatewayButtonProps {
	/**
	 * The ID of the gateway to enable.
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
	 * Whether this is an offline payment gateway.
	 */
	isOffline: boolean;
	/**
	 * Callback used when an incentive is accepted.
	 *
	 * @param id Incentive ID.
	 */
	acceptIncentive?: ( id: string ) => void;
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

export const EnableGatewayButton = ( {
	gatewayId,
	settingsHref,
	onboardingHref,
	isOffline,
	acceptIncentive = () => {},
	recommendedPaymentMethods = [],
	buttonText = __( 'Enable', 'woocommerce' ),
	incentive = null,
}: EnableGatewayButtonProps ) => {
	const [ isUpdating, setIsUpdating ] = useState( false );
	const { createErrorNotice } = dispatch( 'core/notices' );
	const { togglePaymentGateway, invalidateResolutionForStoreSelector } =
		useDispatch( PAYMENT_SETTINGS_STORE_NAME );

	const throwError = () => {
		createErrorNotice(
			__(
				'An error occurred. You will be redirected to the settings page, try enabling the payment gateway there.',
				'woocommerce'
			),
			{
				type: 'snackbar',
				explicitDismiss: true,
			}
		);
	};

	const enableGateway = () => {
		const gatewayToggleNonce =
			window.woocommerce_admin.nonces?.gateway_toggle || '';

		if ( ! gatewayToggleNonce ) {
			throwError();
			window.location.href = settingsHref;
			return;
		}

		setIsUpdating( true );

		if ( incentive ) {
			acceptIncentive( incentive.promo_id );
		}

		togglePaymentGateway(
			gatewayId,
			window.woocommerce_admin.ajax_url,
			gatewayToggleNonce
		)
			.then( ( response: EnableGatewayResponse ) => {
				if ( response.data === 'needs_setup' ) {
					if ( isWooPayments( gatewayId ) ) {
						if ( ( recommendedPaymentMethods ?? [] ).length > 0 ) {
							const history = getHistory();
							history.push(
								getNewPath( {}, '/payment-methods' )
							);
						} else {
							window.location.href = onboardingHref;
						}
						return;
					}
					// Redirect to the gateway's onboarding URL if it needs setup.
					window.location.href = onboardingHref;
					return;
				}
				invalidateResolutionForStoreSelector(
					isOffline
						? 'getOfflinePaymentGateways'
						: 'getPaymentProviders'
				);
				setIsUpdating( false );
			} )
			.catch( () => {
				// In case of errors, redirect to the gateway settings page.
				setIsUpdating( false );
				throwError();
				window.location.href = settingsHref;
			} );
	};

	return (
		<Button
			variant={ 'primary' }
			isBusy={ isUpdating }
			disabled={ isUpdating }
			onClick={ enableGateway }
			href={ settingsHref }
		>
			{ buttonText }
		</Button>
	);
};