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

export const PaymentGatewayButton = ( {
	id,
	isOffline,
	enabled,
	needsSetup,
	settingsUrl,
	textSettings = __( 'Manage', 'woocommerce' ),
	textEnable = __( 'Enable', 'woocommerce' ),
	textNeedsSetup = __( 'Complete setup', 'woocommerce' ),
}: {
	id: string;
	isOffline: boolean;
	enabled: boolean;
	needsSetup?: boolean;
	settingsUrl: string;
	textSettings?: string;
	textEnable?: string;
	textNeedsSetup?: string;
} ) => {
	const { createErrorNotice } = dispatch( 'core/notices' );
	const { togglePaymentGateway, invalidateResolutionForStoreSelector } =
		useDispatch( PAYMENT_SETTINGS_STORE_NAME );
	const [ isUpdating, setIsUpdating ] = useState( false );

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
			togglePaymentGateway(
				id,
				window.woocommerce_admin.ajax_url,
				gatewayToggleNonce
			)
				.then( ( response: EnableGatewayResponse ) => {
					if ( response.data === 'needs_setup' ) {
						window.location.href = settingsUrl;
						return;
					}
					invalidateResolutionForStoreSelector(
						isOffline
							? 'getOfflinePaymentGateways'
							: 'getRegisteredPaymentGateways'
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

	const determineButtonText = () => {
		if ( needsSetup ) {
			return textNeedsSetup;
		}

		return enabled ? textSettings : textEnable;
	};

	return (
		<div className="woocommerce-list__item-after__actions">
			<Button
				variant={ enabled ? 'secondary' : 'primary' }
				isBusy={ isUpdating }
				disabled={ isUpdating }
				onClick={ onClick }
				href={ settingsUrl }
			>
				{ determineButtonText() }
			</Button>
		</div>
	);
};
