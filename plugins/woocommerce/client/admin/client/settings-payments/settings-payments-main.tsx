/**
 * External dependencies
 */
import { useCallback, useEffect } from 'react';
import { Plugin, PaymentGateway, PLUGINS_STORE_NAME } from '@woocommerce/data';
import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './settings-payments-main.scss';
import { createNoticesFromResponse } from '~/lib/notices';
import { OtherPaymentGateways } from '~/settings-payments/components/other-payment-gateways';
import { PaymentGateways } from '~/settings-payments/components/payment-gateways';
import { WooPaymentsGatewayData } from '~/settings-payments/types';
import { parseScriptTag } from '~/settings-payments/utils';

export const SettingsPaymentsMain = () => {
	const [ registeredPaymentGateways, setRegisteredPaymentGateways ] =
		useState< PaymentGateway[] >( [] );
	const [ preferredPluginSuggestions, setPreferredPluginSuggestions ] =
		useState< Plugin[] >( [] );
	const [ otherPluginSuggestions, setOtherPluginSuggestions ] = useState<
		Plugin[]
	>( [] );
	const [ wooPaymentsGatewayData, setWooPaymentsGatewayData ] = useState<
		WooPaymentsGatewayData | undefined
	>( undefined );
	const [ installingPlugin, setInstallingPlugin ] = useState< string | null >(
		null
	);
	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );

	const installedPluginSlugs = useSelect( ( select ) => {
		return select( PLUGINS_STORE_NAME ).getInstalledPlugins();
	}, [] );

	useEffect( () => {
		setWooPaymentsGatewayData(
			parseScriptTag( 'experimental_wc_settings_payments_woopayments' )
		);
		setRegisteredPaymentGateways(
			parseScriptTag( 'experimental_wc_settings_payments_gateways' )
		);
		setPreferredPluginSuggestions(
			parseScriptTag(
				'experimental_wc_settings_payments_preferred_extensions_suggestions'
			)
		);
		setOtherPluginSuggestions(
			parseScriptTag(
				'experimental_wc_settings_payments_other_extensions_suggestions'
			)
		);
	}, [] );

	const setupPlugin = useCallback(
		( plugin: Plugin ) => {
			if ( installingPlugin ) {
				return;
			}
			setInstallingPlugin( plugin.id );
			installAndActivatePlugins( [ plugin.plugins[ 0 ] ] )
				.then( ( response ) => {
					createNoticesFromResponse( response );
					// Reload the page to reflect the changes - will be replaced with a more elegant solution in the future.
					window.location.reload();
				} )
				.catch( ( response: { errors: Record< string, string > } ) => {
					createNoticesFromResponse( response );
					setInstallingPlugin( null );
				} );
		},
		[ installAndActivatePlugins, installingPlugin ]
	);

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
