/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { dispatch, useDispatch } from '@wordpress/data';
import {
	PAYMENT_SETTINGS_STORE_NAME,
	EnableGatewayResponse,
} from '@woocommerce/data';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
	isWooPayments,
	getWooPaymentsSetupLiveAccountLink,
} from '~/settings-payments/utils';

export const PaymentGatewayButtons = ( {
	id,
	isOffline,
	enabled,
	needsSetup,
	testMode,
	devMode,
	settingsUrl,
	onboardUrl,
	textSettings = __( 'Manage', 'woocommerce' ),
	textEnable = __( 'Enable', 'woocommerce' ),
	textNeedsSetup = __( 'Complete setup', 'woocommerce' ),
}: {
	id: string;
	isOffline: boolean;
	enabled: boolean;
	needsSetup?: boolean;
	testMode?: boolean;
	devMode?: boolean;
	settingsUrl: string;
	onboardUrl: string;
	textSettings?: string;
	textEnable?: string;
	textNeedsSetup?: string;
} ) => {
	const { createErrorNotice } = dispatch( 'core/notices' );
	const { togglePaymentGateway, invalidateResolutionForStoreSelector } =
		useDispatch( PAYMENT_SETTINGS_STORE_NAME );
	const [ isUpdating, setIsUpdating ] = useState( false );
	const [ isActivatingPayments, setIsActivatingPayments ] = useState( false );

	const createApiErrorNotice = () => {
		createErrorNotice(
			__(
				'An API error occurred. You will be redirected to the settings page, try enabling the payment gateway there.',
				'woocommerce'
			),
			{
				type: 'snackbar',
				explicitDismiss: true,
			}
		);
	};

	const onClick = ( e: React.MouseEvent ) => {
		if ( ! enabled ) {
			e.preventDefault();
			const gatewayToggleNonce =
				window.woocommerce_admin.nonces?.gateway_toggle || '';

			if ( ! gatewayToggleNonce ) {
				createApiErrorNotice();
				window.location.href = settingsUrl;
				return;
			}
			setIsUpdating( true );
			togglePaymentGateway(
				id,
				window.woocommerce_admin.ajax_url,
				gatewayToggleNonce
			)
				.then( ( response: EnableGatewayResponse ) => {
					if ( response.data === 'needs_setup' ) {
						// Redirect to the gateway's onboarding URL if it needs setup.
						window.location.href = onboardUrl;
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
					createApiErrorNotice();
					window.location.href = settingsUrl;
				} );
		}
	};

	const activatePayments = () => {
		setIsActivatingPayments( true );

		window.location.href = getWooPaymentsSetupLiveAccountLink();
	};

	return (
		<div className="woocommerce-list__item-after__actions">
			{ ! needsSetup && (
				<Button variant={ 'secondary' } href={ settingsUrl }>
					{ textSettings }
				</Button>
			) }
			{ ! enabled && needsSetup && (
				<Button
					variant={ 'primary' }
					isBusy={ isUpdating }
					disabled={ isUpdating }
					onClick={ onClick }
					href={ settingsUrl }
				>
					{ textNeedsSetup }
				</Button>
			) }
			{ ! enabled && ! needsSetup && (
				<Button
					variant={ 'primary' }
					isBusy={ isUpdating }
					disabled={ isUpdating }
					onClick={ onClick }
					href={ settingsUrl }
				>
					{ textEnable }
				</Button>
			) }

			{ isWooPayments( id ) &&
				enabled &&
				! needsSetup &&
				testMode &&
				! devMode && (
					<Button
						variant="primary"
						onClick={ activatePayments }
						isBusy={ isActivatingPayments }
						disabled={ isActivatingPayments }
					>
						{ __( 'Activate payments', 'woocommerce' ) }
					</Button>
				) }
		</div>
	);
};
