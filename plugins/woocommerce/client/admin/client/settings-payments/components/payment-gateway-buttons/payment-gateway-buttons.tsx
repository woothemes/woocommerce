/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { dispatch, useDispatch } from '@wordpress/data';
import {
	PAYMENT_SETTINGS_STORE_NAME,
	EnableGatewayResponse,
	PaymentGatewayProvider,
	OfflinePaymentMethodProvider,
} from '@woocommerce/data';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
	isWooPayments,
	getWooPaymentsTestDriveAccountLink,
	getWooPaymentsSetupLiveAccountLink,
} from '~/settings-payments/utils';

export const PaymentGatewayButtons = ( {
	gateway,
	isOffline,
	enabled,
	needsSetup,
	testMode,
	settingsUrl,
	acceptIncentive,
	textSettings = __( 'Manage', 'woocommerce' ),
	textEnable = __( 'Enable', 'woocommerce' ),
	textNeedsSetup = __( 'Complete setup', 'woocommerce' ),
}: {
	gateway: PaymentGatewayProvider | OfflinePaymentMethodProvider;
	isOffline: boolean;
	enabled: boolean;
	needsSetup?: boolean;
	testMode?: boolean;
	settingsUrl: string;
	acceptIncentive: ( id: string ) => void;
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
				'An API error occurred. You will be redirected to the settings page, try enabling the gateway there.',
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

			if ( '_incentive' in gateway && !! gateway._incentive ) {
				acceptIncentive( gateway._incentive.id );
			}

			togglePaymentGateway(
				gateway.id,
				window.woocommerce_admin.ajax_url,
				gatewayToggleNonce
			)
				.then( ( response: EnableGatewayResponse ) => {
					if ( response.data === 'needs_setup' ) {
						if ( isWooPayments( gateway.id ) ) {
							window.location.href =
								getWooPaymentsTestDriveAccountLink();
							return;
						}
						window.location.href = settingsUrl;
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
					setIsUpdating( false );
					createApiErrorNotice();
					window.location.href = settingsUrl;
				} );
		}
	};

	const activatePayments = () => {
		setIsActivatingPayments( true );

		if ( '_incentive' in gateway && !! gateway._incentive ) {
			acceptIncentive( gateway._incentive.id );
		}

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

			{ isWooPayments( gateway.id ) &&
				enabled &&
				! needsSetup &&
				testMode && (
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
