/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import clsx from 'clsx';
import {
	PaymentProvider,
	PAYMENT_SETTINGS_STORE_NAME,
	WC_ADMIN_NAMESPACE,
} from '@woocommerce/data';
import { useDispatch } from '@wordpress/data';
import { useMemo, useState } from '@wordpress/element';
import { decodeEntities } from '@wordpress/html-entities';
import { Popover } from '@wordpress/components';
import { Link } from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/settings';
import InfoOutline from 'gridicons/dist/info-outline';
import interpolateComponents from '@automattic/interpolate-components';

/**
 * Internal dependencies
 */
import { CountrySelector } from '~/settings-payments/components/country-selector';
import { ListPlaceholder } from '~/settings-payments/components/list-placeholder';
import { PaymentGatewayList } from '~/settings-payments/components/payment-gateway-list';

interface PaymentGatewaysProps {
	providers: PaymentProvider[];
	installedPluginSlugs: string[];
	installingPlugin: string | null;
	setupPlugin: (
		id: string,
		slug: string,
		onboardingUrl: string | null
	) => void;
	acceptIncentive: ( id: string ) => void;
	updateOrdering: ( providers: PaymentProvider[] ) => void;
	isFetching: boolean;
	businessRegistrationCountry: string | null;
	setBusinessRegistrationCountry: ( country: string ) => void;
}

/**
 * A component for displaying and managing the list of payment providers. It includes a country selector
 * to filter providers based on the business location and supports real-time updates when the country or
 * provider order changes.
 */
export const PaymentGateways = ( {
	providers,
	installedPluginSlugs,
	installingPlugin,
	setupPlugin,
	acceptIncentive,
	updateOrdering,
	isFetching,
	businessRegistrationCountry,
	setBusinessRegistrationCountry,
}: PaymentGatewaysProps ) => {
	const { invalidateResolution } = useDispatch( PAYMENT_SETTINGS_STORE_NAME );
	const [ isPopoverVisible, setIsPopoverVisible ] = useState( false );
	const storeCountryCode = (
		window.wcSettings?.admin?.preloadSettings?.general
			?.woocommerce_default_country || 'US'
	).split( ':' )[ 0 ]; // Retrieve the default store country code, by removing the state code if present.

	/**
	 * Generates a list of country options from the WooCommerce settings.
	 */
	const countryOptions = useMemo( () => {
		return Object.entries( window.wcSettings.countries || [] )
			.map( ( [ key, name ] ) => ( {
				key,
				name: decodeEntities( name ),
				types: [],
			} ) )
			.sort( ( a, b ) => a.name.localeCompare( b.name ) );
	}, [] );

	const isBaseCountryDiffrent =
		storeCountryCode !== businessRegistrationCountry;
	const selectContainerClass = clsx(
		'settings-payment-gateways__header-select-container',
		{
			'has-alert': isBaseCountryDiffrent,
		}
	);

	return (
		<div className="settings-payment-gateways">
			<div className="settings-payment-gateways__header">
				<div className="settings-payment-gateways__header-title">
					{ __( 'Payment providers', 'woocommerce' ) }
				</div>
				<div className={ selectContainerClass }>
					<CountrySelector
						className="woocommerce-select-control__country"
						label={ __( 'Business location :', 'woocommerce' ) }
						placeholder={ '' }
						value={
							countryOptions.find(
								( country ) =>
									country.key === businessRegistrationCountry
							) ?? { key: 'US', name: 'United States (US)' }
						}
						options={ countryOptions }
						onChange={ ( value: string ) => {
							// Save selected country and refresh the store by invalidating getPaymentProviders.
							apiFetch( {
								path:
									WC_ADMIN_NAMESPACE +
									'/settings/payments/country',
								method: 'POST',
								data: { location: value },
							} ).then( () => {
								setBusinessRegistrationCountry( value );
								invalidateResolution( 'getPaymentProviders', [
									value,
								] );
							} );
						} }
					/>
					{ isBaseCountryDiffrent && (
						<div
							className="settings-payment-gateways__header-select-container--indicator"
							onClick={ () =>
								setIsPopoverVisible( ! isPopoverVisible )
							}
							onMouseEnter={ () => setIsPopoverVisible( true ) }
							onMouseLeave={ () => setIsPopoverVisible( false ) }
							tabIndex={ 0 }
							role="button"
							onKeyDown={ ( event ) => {
								if (
									event.key === 'Enter' ||
									event.key === ' '
								) {
									setIsPopoverVisible( ! isPopoverVisible );
								}
							} }
						>
							<div className="settings-payment-gateways__header-select-container--indicator-icon">
								<InfoOutline />
							</div>

							{ isPopoverVisible && (
								<Popover
									position="top left"
									noArrow={ true }
									onClose={ () =>
										setIsPopoverVisible( false )
									}
								>
									<div className="settings-payment-gateways__header-select-container--indicator-popover">
										{ interpolateComponents( {
											mixedString: __(
												'Your business location does not match your store location. {{link}}Edit store location.{{/link}}',
												'woocommerce'
											),
											components: {
												link: (
													<Link
														href={ getAdminLink(
															'admin.php?page=wc-settings&tab=general'
														) }
														target="_blank"
														type="external"
													/>
												),
											},
										} ) }
									</div>
								</Popover>
							) }
						</div>
					) }
				</div>
			</div>
			{ isFetching ? (
				<ListPlaceholder rows={ 5 } />
			) : (
				<PaymentGatewayList
					providers={ providers }
					installedPluginSlugs={ installedPluginSlugs }
					installingPlugin={ installingPlugin }
					setupPlugin={ setupPlugin }
					acceptIncentive={ acceptIncentive }
					updateOrdering={ updateOrdering }
				/>
			) }
		</div>
	);
};
