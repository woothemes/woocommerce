/**
 * External dependencies
 */
import { useCallback } from 'react';
import {
	PLUGINS_STORE_NAME,
	PAYMENT_SETTINGS_STORE_NAME,
	SuggestedPaymentExtension,
} from '@woocommerce/data';
import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './settings-payments-main.scss';
import { createNoticesFromResponse } from '~/lib/notices';
import { OtherPaymentGateways } from '~/settings-payments/components/other-payment-gateways';
import { PaymentGateways } from '~/settings-payments/components/payment-gateways';

export const SettingsPaymentsMain = () => {
	const [ installingPlugin, setInstallingPlugin ] = useState< string | null >(
		null
	);
	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );

	const installedPluginSlugs = useSelect( ( select ) => {
		return select( PLUGINS_STORE_NAME ).getInstalledPlugins();
	}, [] );

	// Make UI to refresh when plugin is installed.
	const { invalidateResolutionForStoreSelector } = useDispatch(
		PAYMENT_SETTINGS_STORE_NAME
	);

	const {
		registeredPaymentGateways,
		preferredPluginSuggestions,
		otherPluginSuggestions,
	} = useSelect( ( select ) => {
		return {
			registeredPaymentGateways: select(
				PAYMENT_SETTINGS_STORE_NAME
			).getRegisteredPaymentGateways(),
			preferredPluginSuggestions: select(
				PAYMENT_SETTINGS_STORE_NAME
			).getPreferredExtensionSuggestions(),
			otherPluginSuggestions: select(
				PAYMENT_SETTINGS_STORE_NAME
			).getOtherExtensionSuggestions(),
		};
	} );

	const setupPlugin = useCallback(
		( extension: SuggestedPaymentExtension ) => {
			if ( installingPlugin ) {
				return;
			}
			setInstallingPlugin( extension.id );
			installAndActivatePlugins( [ extension.plugin.slug ] )
				.then( ( response ) => {
					createNoticesFromResponse( response );
					invalidateResolutionForStoreSelector(
						'getRegisteredPaymentGateways'
					);
					setInstallingPlugin( null );
				} )
				.catch( ( response: { errors: Record< string, string > } ) => {
					createNoticesFromResponse( response );
					setInstallingPlugin( null );
				} );
		},
		[
			installingPlugin,
			installAndActivatePlugins,
			invalidateResolutionForStoreSelector,
		]
	);

	return (
		<>
			<div className="settings-payments-main__container">
				<PaymentGateways
					registeredPaymentGateways={ registeredPaymentGateways }
					installedPluginSlugs={ installedPluginSlugs }
					preferredPluginSuggestions={ preferredPluginSuggestions }
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
