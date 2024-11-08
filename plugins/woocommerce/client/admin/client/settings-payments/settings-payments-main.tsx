/**
 * External dependencies
 */
import { useCallback, useEffect } from 'react';
import { Plugin, PaymentGateway, PLUGINS_STORE_NAME } from '@woocommerce/data';
import { useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

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
	const [ paymentGateways, setPaymentGateways ] = useState<
		PaymentGateway[]
	>( [] );
	const [
		preferredPaymentExtensionSuggestions,
		setPreferredPaymentExtensionSuggestions,
	] = useState< Plugin[] >( [] );
	const [
		otherPaymentExtensionSuggestions,
		setOtherPaymentExtensionSuggestions,
	] = useState< Plugin[] >( [] );
	const [ wooPaymentsGatewayData, setWooPaymentsGatewayData ] = useState<
		WooPaymentsGatewayData | undefined
	>( undefined );
	const [ installingPlugin, setInstallingPlugin ] = useState< string | null >(
		null
	);
	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );

	// TODO get the real data from server instead of parsing script tag.
	useEffect( () => {
		setWooPaymentsGatewayData(
			parseScriptTag( 'experimental_wc_settings_payments_woopayments' )
		);
		setPaymentGateways(
			parseScriptTag( 'experimental_wc_settings_payments_gateways' )
		);
		setPreferredPaymentExtensionSuggestions(
			parseScriptTag(
				'experimental_wc_settings_payments_preferred_extensions_suggestions'
			)
		);
		setOtherPaymentExtensionSuggestions(
			parseScriptTag(
				'experimental_wc_settings_payments_other_extensions_suggestions'
			)
		);
	}, [] );

	const setupPlugin = useCallback( ( plugin: Plugin ) => {
		if ( installingPlugin ) {
			return;
		}
		setInstallingPlugin( plugin.id );
		installAndActivatePlugins( [ plugin.plugins[ 0 ] ] )
			.then( ( response ) => {
				createNoticesFromResponse( response );
				window.location.reload();
			} )
			.catch( ( response: { errors: Record< string, string > } ) => {
				createNoticesFromResponse( response );
				setInstallingPlugin( null );
			} );
	}, [] );

	return (
		<>
			<div className="settings-payments-main__container">
				<PaymentGateways
					paymentGateways={ paymentGateways }
					preferredPaymentExtensionSuggestions={
						preferredPaymentExtensionSuggestions
					}
					wooPaymentsGatewayData={ wooPaymentsGatewayData }
					installingPlugin={ installingPlugin }
					setupPlugin={ setupPlugin }
				/>
				<OtherPaymentGateways
					otherPaymentExtensionSuggestions={
						otherPaymentExtensionSuggestions
					}
					installingPlugin={ installingPlugin }
					setupPlugin={ setupPlugin }
				/>
			</div>
		</>
	);
};

export default SettingsPaymentsMain;
