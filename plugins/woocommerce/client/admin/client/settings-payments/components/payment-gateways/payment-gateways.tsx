/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import {
	PaymentProvider,
	PAYMENT_SETTINGS_STORE_NAME,
	WC_ADMIN_NAMESPACE,
} from '@woocommerce/data';
import { useDispatch } from '@wordpress/data';
import { useMemo } from '@wordpress/element';
import { decodeEntities } from '@wordpress/html-entities';
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

	const countryOptions = useMemo( () => {
		return Object.entries( window.wcSettings.countries || [] )
			.map( ( [ key, name ] ) => ( {
				key,
				name: decodeEntities( name ),
				types: [],
			} ) )
			.sort( ( a, b ) => a.name.localeCompare( b.name ) );
	}, [] );

	return (
		<div className="settings-payment-gateways">
			<div className="settings-payment-gateways__header">
				<div className="settings-payment-gateways__header-title">
					{ __( 'Payment providers', 'woocommerce' ) }
				</div>
				<div className="settings-payment-gateways__header-select-container">
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
