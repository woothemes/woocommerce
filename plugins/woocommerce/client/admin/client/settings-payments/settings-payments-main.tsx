/**
 * External dependencies
 */
import { useCallback } from 'react';
import { __ } from '@wordpress/i18n';
import {
	PLUGINS_STORE_NAME,
	PAYMENT_SETTINGS_STORE_NAME,
} from '@woocommerce/data';
import { useDispatch, useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './settings-payments-main.scss';
import './settings-payments-body.scss';
import { createNoticesFromResponse } from '~/lib/notices';
import { OtherPaymentGateways } from '~/settings-payments/components/other-payment-gateways';
import { PaymentGateways } from '~/settings-payments/components/payment-gateways';
import {
	getWooPaymentsTestDriveAccountLink,
	isWooPayments,
	providersContainWooPaymentsInTestMode,
} from '~/settings-payments/utils';
import { WooPaymentsPostSandboxAccountSetupModal } from '~/settings-payments/components/woo-payments-post-sandbox-account-setup-modal';

export const SettingsPaymentsMain = () => {
	const [ installingPlugin, setInstallingPlugin ] = useState< string | null >(
		null
	);
	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );

	const [ errorMessage, setErrorMessage ] = useState< string | null >( null );
	const [ livePaymentsModalVisible, setLivePaymentsModalVisible ] =
		useState( false );

	const urlParams = new URLSearchParams( window.location.search );

	useEffect( () => {
		const isAccountTestDriveError =
			urlParams.get( 'test_drive_error' ) === 'true';
		if ( isAccountTestDriveError ) {
			setErrorMessage(
				__(
					'An error occurred while setting up your sandbox account. Please try again.',
					'woocommerce'
				)
			);
		}

		const isJetpackConnectionError =
			urlParams.get( 'wcpay-connect-jetpack-error' ) === '1';

		if ( isJetpackConnectionError ) {
			setErrorMessage(
				__(
					'There was a problem connecting your WordPress.com account - please try again.',
					'woocommerce'
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

	// Make UI refresh when plugin is installed.
	const { invalidateResolutionForStoreSelector } = useDispatch(
		PAYMENT_SETTINGS_STORE_NAME
	);

	const { providers, suggestions, suggestionCategories, isFetching } =
		useSelect( ( select ) => {
			return {
				providers: select(
					PAYMENT_SETTINGS_STORE_NAME
				).getPaymentProviders(),
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

	return (
		<>
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
