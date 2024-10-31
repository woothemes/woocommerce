/**
 * External dependencies
 */
import React from 'react';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PaymentGateway } from '@woocommerce/data';

/**
 * Internal dependencies
 */

interface EnableGatewayButtonProps {
	gateway: PaymentGateway;
}

const EnableGatewayButton: React.FC< EnableGatewayButtonProps > = ( {
	gateway,
} ) => {
	const [ isBusy, setIsBusy ] = React.useState( false );

	const enableGateway = async ( e: React.MouseEvent ) => {
		e.preventDefault();
		setIsBusy( true );

		if ( ! window.woocommerce_admin.nonces?.gateway_toggle ) {
			// eslint-disable-next-line no-console
			console.warn( 'Unexpected error: Nonce not found' );
			// Redirect to payment setting page if nonce is not found. Users should still be able to toggle the payment method from that page.
			window.location.href = gateway.settings_url;
		}

		try {
			const response = await fetch( window.woocommerce_admin.ajax_url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams( {
					action: 'woocommerce_toggle_gateway_enabled',
					security: window.woocommerce_admin.nonces?.gateway_toggle,
					gateway_id: gateway.id,
				} ),
			} );

			const result = await response.json();

			if ( result.success ) {
				if ( result.data === true ) {
					gateway.enabled = true;
				} else if ( result.data === false ) {
					gateway.enabled = false;
				} else if ( result.data === 'needs_setup' ) {
					window.location.href = gateway.settings_url;
				}
			} else {
				window.location.href = gateway.settings_url;
			}
		} catch ( error ) {
			// eslint-disable-next-line no-console
			console.error( 'Error toggling gateway:', error );
		} finally {
			setIsBusy( false );
		}
	};

	return (
		<Button
			variant="primary"
			onClick={ ( e ) => {
				enableGateway( e );
			} }
			href={ gateway.settings_url }
			isBusy={ isBusy }
			disabled={ false }
		>
			{ __( 'Enable', 'woocommerce' ) }
		</Button>
	);
};

export default EnableGatewayButton;
