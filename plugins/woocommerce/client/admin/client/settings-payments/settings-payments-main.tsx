/**
 * External dependencies
 */
import { useCallback } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import {
	PLUGINS_STORE_NAME,
	PAYMENT_SETTINGS_STORE_NAME,
	PaymentProvider,
} from '@woocommerce/data';
import { useDispatch, useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import './settings-payments-main.scss';
import './settings-payments-body.scss';
import { createNoticesFromResponse } from '~/lib/notices';
import { OtherPaymentGateways } from '~/settings-payments/components/other-payment-gateways';
import { PaymentGateways } from '~/settings-payments/components/payment-gateways';
import { IncentiveBanner } from '~/settings-payments/components/incentive-banner';
import { IncentiveModal } from '~/settings-payments/components/incentive-modal';
import {
	getWooPaymentsTestDriveAccountLink,
	isWooPayments,
	providersContainWooPaymentsInTestMode,
} from '~/settings-payments/utils';
import { WooPaymentsPostSandboxAccountSetupModal } from '~/settings-payments/components/modals';

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
	const [ errorMessage, setErrorMessage ] = useState< string | null >( null );
	const [ livePaymentsModalVisible, setLivePaymentsModalVisible ] =
		useState( false );

	const [ storeCountry, setStoreCountry ] = useState< string | null >(
		window.wcSettings?.admin?.woocommerce_payments_nox_profile
			?.business_country_code || null
	);

	const urlParams = new URLSearchParams( window.location.search );

	useEffect( () => {
		const isAccountTestDriveError =
			urlParams.get( 'test_drive_error' ) === 'true';
		if ( isAccountTestDriveError ) {
			setErrorMessage(
				sprintf(
					/* translators: %s: plugin name */
					__(
						'%s: An error occurred while setting up your sandbox account — please try again.',
						'woocommerce'
					),
					'WooPayments'
				)
			);
		}

		const isJetpackConnectionError =
			urlParams.get( 'wcpay-connect-jetpack-error' ) === '1';

		if ( isJetpackConnectionError ) {
			setErrorMessage(
				sprintf(
					/* translators: %s: plugin name */
					__(
						'%s: There was a problem connecting your WordPress.com account — please try again.',
						'woocommerce'
					),
					'WooPayments'
				)
			);
		}

		const isSandboxOnboardedSuccessful =
			urlParams.get( 'wcpay-sandbox-success' ) === 'true';

		if ( isSandboxOnboardedSuccessful ) {
			setLivePaymentsModalVisible( true );
		}
	}, [] );

	const installedPluginSlugs = useSelect( ( select ) => {
		return select( PLUGINS_STORE_NAME ).getInstalledPlugins();
	}, [] );

	const dismissIncentive = useCallback(
		( dismissHref: string, context: string ) => {
			// The dismissHref is the full URL to dismiss the incentive.
			apiFetch( {
				url: dismissHref,
				method: 'POST',
				data: {
					context,
				},
			} );
		},
		[]
	);

	// Make UI refresh when plugin is installed.
	const { invalidateResolutionForStoreSelector } = useDispatch(
		PAYMENT_SETTINGS_STORE_NAME
	);

	const { providers, suggestions, suggestionCategories, isFetching } =
		useSelect( ( select ) => {
			return {
				providers: select(
					PAYMENT_SETTINGS_STORE_NAME
				).getPaymentProviders( storeCountry ),
				suggestions: select(
					PAYMENT_SETTINGS_STORE_NAME
				).getSuggestions(),
				suggestionCategories: select(
					PAYMENT_SETTINGS_STORE_NAME
				).getSuggestionCategories(),
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
					if ( isWooPayments( id ) ) {
						window.location.href =
							getWooPaymentsTestDriveAccountLink();
						return;
					}
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

	const incentive = providers.find(
		( provider ) => '_incentive' in provider
	)?._incentive;

	const isSwitchIncentive =
		incentive && incentive.promo_id.includes( '-switch-' );

	const incentiveBannerContext = 'wc_settings_payments__banner';
	const incentiveModalContext = 'wc_settings_payments__modal';

	const isIncentiveDismissedInBannerContext =
		( incentive?._dismissals.includes( 'all' ) ||
			incentive?._dismissals.includes( incentiveBannerContext ) ) ??
		false;

	const isIncentiveDismissedInModalContext =
		( incentive?._dismissals.includes( 'all' ) ||
			incentive?._dismissals.includes( incentiveModalContext ) ) ??
		false;

	return (
		<>
			{ incentive &&
				isSwitchIncentive &&
				! isIncentiveDismissedInModalContext && (
					<IncentiveModal
						incentive={ incentive }
						onDismiss={ dismissIncentive }
						onAccept={ setupPlugin }
					/>
				) }
			{ errorMessage && (
				<div className="notice notice-error is-dismissible wcpay-settings-notice">
					<p>{ errorMessage }</p>
					<button
						type="button"
						className="notice-dismiss"
						onClick={ () => {
							setErrorMessage( null );
						} }
					></button>
				</div>
			) }
			{ incentive &&
				! isSwitchIncentive &&
				! isIncentiveDismissedInBannerContext && (
					<IncentiveBanner
						incentive={ incentive }
						onDismiss={ dismissIncentive }
						onAccept={ setupPlugin }
					/>
				) }
			<div className="settings-payments-main__container">
				<PaymentGateways
					providers={ sortedProviders || providers }
					installedPluginSlugs={ installedPluginSlugs }
					installingPlugin={ installingPlugin }
					setupPlugin={ setupPlugin }
					updateOrdering={ handleOrderingUpdate }
					isFetching={ isFetching }
					businessRegistrationCountry={ storeCountry }
					setBusinessRegistrationCountry={ setStoreCountry }
				/>
				<OtherPaymentGateways
					suggestions={ suggestions }
					suggestionCategories={ suggestionCategories }
					installingPlugin={ installingPlugin }
					setupPlugin={ setupPlugin }
					isFetching={ isFetching }
				/>
			</div>
			<WooPaymentsPostSandboxAccountSetupModal
				isOpen={
					livePaymentsModalVisible &&
					providersContainWooPaymentsInTestMode( providers )
				}
				onClose={ () => setLivePaymentsModalVisible( false ) }
			/>
		</>
	);
};

export default SettingsPaymentsMain;
