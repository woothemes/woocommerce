/**
 * External dependencies
 */
import '@wordpress/element';
import { select } from '@wordpress/data';
import { PAYMENT_GATEWAYS_STORE_NAME, PaymentGateway } from '@woocommerce/data';
import { useCallback, useEffect } from 'react';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './settings-payments-offline.scss';
import { OfflinePaymentGateways } from './components/offline-payment-gateways';

export const SettingsPaymentsOffline = () => {
	const [ isEnabled, setIsEnabled ] = useState< boolean >( false );
	const [ registeredPaymentGateways, setRegisteredPaymentGateways ] =
		useState< PaymentGateway[] >( [] );

	useEffect( () => {
		setRegisteredPaymentGateways(
			select( PAYMENT_GATEWAYS_STORE_NAME ).getPaymentGateways()
		);
	}, [ isEnabled ] );

	// TODO remove duplication alongside with settings-payments-main.
	const togglePlugin = useCallback(
		async ( id: string, settings_url: string ) => {
			if ( ! window.woocommerce_admin.nonces?.gateway_toggle ) {
				// eslint-disable-next-line no-console
				console.warn( 'Unexpected error: Nonce not found' );
				// Redirect to payment setting page if nonce is not found. Users should still be able to toggle the payment method from that page.
				window.location.href = settings_url;
				return;
			}

			try {
				const response = await fetch(
					window.woocommerce_admin.ajax_url,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						body: new URLSearchParams( {
							action: 'woocommerce_toggle_gateway_enabled',
							security:
								window.woocommerce_admin.nonces?.gateway_toggle,
							gateway_id: id,
						} ),
					}
				);

				const result = await response.json();

				if ( result.success ) {
					if ( result.data === true ) {
						setIsEnabled( true );
					} else if ( result.data === false ) {
						setIsEnabled( false );
					} else if ( result.data === 'needs_setup' ) {
						window.location.href = settings_url;
					}
				} else {
					window.location.href = settings_url;
				}
			} catch ( error ) {
				// eslint-disable-next-line no-console
				console.error( 'Error toggling gateway:', error );
			}
		},
		[ isEnabled ]
	);

	return (
		<div className="settings-payments-offline__container">
			<OfflinePaymentGateways
				registeredPaymentGateways={ registeredPaymentGateways }
				togglePlugin={ togglePlugin }
			/>
		</div>
	);
};

export default SettingsPaymentsOffline;
