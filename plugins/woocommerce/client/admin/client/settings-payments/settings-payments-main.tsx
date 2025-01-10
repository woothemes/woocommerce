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
import { resolveSelect, useDispatch, useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { getHistory, getNewPath } from '@woocommerce/navigation';

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
	providersContainWooPaymentsInTestMode,
	providersContainWooPaymentsInDevMode,
	isIncentiveDismissedInContext,
	isSwitchIncentive,
	isWooPayments,
	getWooPaymentsTestDriveAccountLink,
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
	const [
		postSandboxAccountSetupModalVisible,
		setPostSandboxAccountSetupModalVisible,
	] = useState( false );

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
			setPostSandboxAccountSetupModalVisible( true );
		}
	}, [] );

	const installedPluginSlugs = useSelect( ( select ) => {
		return select( PLUGINS_STORE_NAME ).getInstalledPlugins();
	}, [] );

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

	const acceptIncentive = useCallback( ( id: string ) => {
		apiFetch( {
			path: `/wc-analytics/admin/notes/experimental-activate-promo/${ id }`,
			method: 'POST',
		} );
	}, [] );

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

	const incentiveProvider = providers.find(
		( provider ) => '_incentive' in provider
	);
	const incentive = incentiveProvider ? incentiveProvider._incentive : null;

	const setupPlugin = useCallback(
		( id, slug, onboardingUrl: string | null ) => {
			if ( installingPlugin ) {
				return;
			}

			// A fail-safe to ensure that the onboarding URL is set for Woo Payments.
			// Note: We should get rid this sooner rather than later!
			if ( ! onboardingUrl && isWooPayments( id ) ) {
				onboardingUrl = getWooPaymentsTestDriveAccountLink();
			}

			setInstallingPlugin( id );
			installAndActivatePlugins( [ slug ] )
				.then( async ( response ) => {
					createNoticesFromResponse( response );
					invalidateResolutionForStoreSelector(
						'getPaymentProviders'
					);

					// Wait for the state update and fetch the latest providers.
					const updatedProviders = await resolveSelect(
						PAYMENT_SETTINGS_STORE_NAME
					).getPaymentProviders( storeCountry );

					// Find the matching provider the updated list.
					const updatedProvider = updatedProviders.find(
						( provider ) =>
							provider.id === id ||
							provider?._suggestion_id === id || // For suggestions that were replaced by a gateway.
							provider.plugin.slug === slug // Last resort to find the provider.
					);

					// If the installed and/or activated extension has recommended payment methods,
					// redirect to the payment methods page.
					if (
						(
							updatedProvider?.onboarding
								?.recommended_payment_methods ?? []
						).length > 0
					) {
						const history = getHistory();
						history.push( getNewPath( {}, '/payment-methods' ) );

						setInstallingPlugin( null );
						return;
					}

					setInstallingPlugin( null );

					if ( onboardingUrl ) {
						window.location.href = onboardingUrl;
					}
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
			storeCountry,
		]
	);

	return (
		<>
			{ incentiveProvider &&
				incentive &&
				isSwitchIncentive( incentive ) &&
				! isIncentiveDismissedInContext(
					incentive,
					'wc_settings_payments__modal'
				) && (
					<IncentiveModal
						incentive={ incentive }
						provider={ incentiveProvider }
						onboardingUrl={
							incentiveProvider.onboarding?._links.onboard.href ??
							null
						}
						onDismiss={ dismissIncentive }
						onAccept={ acceptIncentive }
						setupPlugin={ setupPlugin }
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
			{ incentiveProvider &&
				incentive &&
				! isSwitchIncentive( incentive ) &&
				! isIncentiveDismissedInContext(
					incentive,
					'wc_settings_payments__banner'
				) && (
					<IncentiveBanner
						incentive={ incentive }
						provider={ incentiveProvider }
						onboardingUrl={
							incentiveProvider.onboarding?._links.onboard.href ??
							null
						}
						onDismiss={ dismissIncentive }
						onAccept={ acceptIncentive }
						setupPlugin={ setupPlugin }
					/>
				) }
			<div className="settings-payments-main__container">
				<PaymentGateways
					providers={ sortedProviders || providers }
					installedPluginSlugs={ installedPluginSlugs }
					installingPlugin={ installingPlugin }
					setupPlugin={ setupPlugin }
					acceptIncentive={ acceptIncentive }
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
					postSandboxAccountSetupModalVisible &&
					providersContainWooPaymentsInTestMode( providers )
				}
				devMode={ providersContainWooPaymentsInDevMode( providers ) }
				onClose={ () =>
					setPostSandboxAccountSetupModalVisible( false )
				}
			/>
		</>
	);
};

export default SettingsPaymentsMain;
