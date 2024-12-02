/**
 * External dependencies
 */
import { useCallback } from 'react';
import {
	PLUGINS_STORE_NAME,
	PAYMENT_SETTINGS_STORE_NAME,
	PaymentProvider,
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
	// State to hold the sorted providers in case of changing the order, otherwise it will be null
	const [ sortedProviders, setSortedProviders ] = useState<
		PaymentProvider[] | null
	>( null );
	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );
	const { updateProviderOrdering } = useDispatch(
		PAYMENT_SETTINGS_STORE_NAME
	);
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

	function handleOrderingUpdate( sorted: PaymentProvider[] ) {
		// Extract the existing _order values in the sorted order
		const updatedOrderValues = sorted
			.map( ( provider ) => provider._order )
			.sort( ( a, b ) => a - b );

		// Build the orderMap by assigning the sorted _order values
		const orderMap: Record< string, number > = {};
		sorted.forEach( ( provider, index ) => {
			orderMap[ provider.id ] = updatedOrderValues[ index ];
		} );

		updateProviderOrdering( orderMap );

		// Set the sorted providers to the state to give a real-time update
		setSortedProviders( sorted );
	}

	return (
		<>
			<div className="settings-payments-main__container">
				<PaymentGateways
					providers={ sortedProviders || providers }
					installedPluginSlugs={ installedPluginSlugs }
					installingPlugin={ installingPlugin }
					setupPlugin={ setupPlugin }
					updateOrdering={ handleOrderingUpdate }
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
