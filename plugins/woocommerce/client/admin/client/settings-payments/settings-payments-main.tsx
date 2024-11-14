/**
 * External dependencies
 */
import { useCallback, useEffect } from 'react';
import { PLUGINS_STORE_NAME } from '@woocommerce/data';
import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './settings-payments-main.scss';
import { createNoticesFromResponse } from '~/lib/notices';
import { OtherPaymentGateways } from '~/settings-payments/components/other-payment-gateways';
import { PaymentGateways } from '~/settings-payments/components/payment-gateways';
import {
	OfflinePaymentGateway,
	RegisteredPaymentGateway,
	SuggestedPaymentExtension,
	SuggestedPaymentExtensionCategory,
	WooPaymentsGatewayData,
} from '~/settings-payments/types';
import { parseScriptTag } from '~/settings-payments/utils';
import apiFetch from '@wordpress/api-fetch';

interface PaymentProvidersResponse {
	gateways: RegisteredPaymentGateway[];
	offline_payment_methods: OfflinePaymentGateway[];
	preferred_suggestions: SuggestedPaymentExtension[];
	other_suggestions: SuggestedPaymentExtension[];
	suggestion_categories: SuggestedPaymentExtensionCategory[];
}

export const SettingsPaymentsMain = () => {
	const [ registeredPaymentGateways, setRegisteredPaymentGateways ] =
		useState< RegisteredPaymentGateway[] >( [] );
	const [ preferredPluginSuggestions, setPreferredPluginSuggestions ] =
		useState< SuggestedPaymentExtension[] >( [] );
	const [ otherPluginSuggestions, setOtherPluginSuggestions ] = useState<
		SuggestedPaymentExtension[]
	>( [] );
	const [ wooPaymentsGatewayData, setWooPaymentsGatewayData ] = useState<
		WooPaymentsGatewayData | undefined
	>( undefined );
	const [ installingPlugin, setInstallingPlugin ] = useState< string | null >(
		null
	);
	const [ isInstalled, setIsInstalled ] = useState< boolean >( false );
	const [ isEnabled, setIsEnabled ] = useState< boolean >( false );
	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );

	const installedPluginSlugs = useSelect( ( select ) => {
		return select( PLUGINS_STORE_NAME ).getInstalledPlugins();
	}, [] );

	const getGatewayAndSuggestionsData = async () => {
		try {
			const response: PaymentProvidersResponse = await apiFetch( {
				path: '/wc-admin/settings/payments/providers',
				method: 'GET',
			} );
			console.log( response );
			setRegisteredPaymentGateways( response.gateways );
			setPreferredPluginSuggestions( response.preferred_suggestions );
			setOtherPluginSuggestions( response.other_suggestions );
		} catch ( error ) {
			console.log( error );
		}
	};

	const setupPlugin = useCallback(
		( extension: SuggestedPaymentExtension ) => {
			if ( installingPlugin ) {
				return;
			}
			setInstallingPlugin( extension.id );
			installAndActivatePlugins( [ extension.plugin.slug ] )
				.then( ( response ) => {
					createNoticesFromResponse( response );
					setIsInstalled( true );
					setInstallingPlugin( null );
				} )
				.catch( ( response: { errors: Record< string, string > } ) => {
					createNoticesFromResponse( response );
					setInstallingPlugin( null );
				} );
		},
		[ installingPlugin, isInstalled ]
	);

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

	useEffect( () => {
		getGatewayAndSuggestionsData();
		setWooPaymentsGatewayData(
			parseScriptTag( 'experimental_wc_settings_payments_woopayments' )
		);
	}, [ isInstalled, isEnabled ] );

	return (
		<>
			<div className="settings-payments-main__container">
				<PaymentGateways
					registeredPaymentGateways={ registeredPaymentGateways }
					installedPluginSlugs={ installedPluginSlugs }
					preferredPluginSuggestions={ preferredPluginSuggestions }
					wooPaymentsGatewayData={ wooPaymentsGatewayData }
					installingPlugin={ installingPlugin }
					setupPlugin={ setupPlugin }
					togglePlugin={ togglePlugin }
				/>
				<OtherPaymentGateways
					otherPluginSuggestions={ otherPluginSuggestions }
					installingPlugin={ installingPlugin }
					setupPlugin={ setupPlugin }
				/>
			</div>
		</>
	);
};

export default SettingsPaymentsMain;
