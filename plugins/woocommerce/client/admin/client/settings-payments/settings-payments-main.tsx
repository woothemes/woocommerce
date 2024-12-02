/**
 * External dependencies
 */
import { useCallback } from 'react';
import {
	PLUGINS_STORE_NAME,
	PAYMENT_SETTINGS_STORE_NAME,
} from '@woocommerce/data';
import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';

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

	// Make UI refresh when plugin is installed.
	const { invalidateResolutionForStoreSelector } = useDispatch(
		PAYMENT_SETTINGS_STORE_NAME
	);

	const { providers, suggestions, isFetching } = useSelect( ( select ) => {
		return {
			providers: select(
				PAYMENT_SETTINGS_STORE_NAME
			).getPaymentProviders(),
			suggestions: select( PAYMENT_SETTINGS_STORE_NAME ).getSuggestions(),
			isFetching: select( PAYMENT_SETTINGS_STORE_NAME ).isFetching(),
		};
	} );

	const setupPlugin = useCallback(
		( id, slug ) => {
			if ( installingPlugin ) {
				return;
			}
			setInstallingPlugin( id );
			installAndActivatePlugins( [ slug ] )
				.then( ( response ) => {
					createNoticesFromResponse( response );
					invalidateResolutionForStoreSelector(
						'getPaymentProviders'
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
					providers={ providers }
					installedPluginSlugs={ installedPluginSlugs }
					installingPlugin={ installingPlugin }
					setupPlugin={ setupPlugin }
					isFetching={ isFetching }
				/>
				<OtherPaymentGateways
					suggestions={ suggestions }
					installingPlugin={ installingPlugin }
					setupPlugin={ setupPlugin }
					isFetching={ isFetching }
				/>
			</div>
		</>
	);
};

export default SettingsPaymentsMain;
