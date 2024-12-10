/**
 * External dependencies
 */
import { Gridicon } from '@automattic/components';
import { List } from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/settings';
import { __ } from '@wordpress/i18n';
import {
	PAYMENT_SETTINGS_STORE_NAME,
	PaymentProvider,
	WC_ADMIN_NAMESPACE,
} from '@woocommerce/data';
import { useMemo } from '@wordpress/element';
import { decodeEntities } from '@wordpress/html-entities';
import { useDispatch } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';
import { PaymentGatewayListItem } from '~/settings-payments/components/payment-gateway-list-item';
import { PaymentExtensionSuggestionListItem } from '~/settings-payments/components/payment-extension-suggestion-list-item';
import { CountrySelector } from '~/settings-payments/components/country-selector';
import { ListPlaceholder } from '~/settings-payments/components/list-placeholder';

interface PaymentGatewaysProps {
	providers: PaymentProvider[];
	installedPluginSlugs: string[];
	installingPlugin: string | null;
	setupPlugin: ( id: string, slug: string ) => void;
	isFetching: boolean;
	businessRegistrationCountry: string | null;
	setBusinessRegistrationCountry: ( country: string ) => void;
}

export const PaymentGateways = ( {
	providers,
	installedPluginSlugs,
	installingPlugin,
	setupPlugin,
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

	// Transform payment gateways to comply with List component format.
	const providersList = useMemo(
		() =>
			providers.map( ( provider: PaymentProvider ) => {
				switch ( provider._type ) {
					case 'suggestion':
						const pluginInstalled = installedPluginSlugs.includes(
							provider.plugin.slug
						);
						return PaymentExtensionSuggestionListItem( {
							extension: provider,
							installingPlugin,
							setupPlugin,
							pluginInstalled,
						} );
					case 'gateway':
						return PaymentGatewayListItem( {
							gateway: provider,
						} );
					case 'offline_pms_group':
						return {
							key: provider.id,
							className:
								'clickable-list-item transitions-disabled',
							title: <>{ provider.title }</>,
							content: (
								<>
									<span
										dangerouslySetInnerHTML={ sanitizeHTML(
											decodeEntities(
												provider.description
											)
										) }
									/>
								</>
							),
							after: <Gridicon icon="chevron-right" />,
							before: (
								<img
									src={ provider.icon }
									alt={ provider.title + ' logo' }
								/>
							),
							onClick: () => {
								window.location.href = getAdminLink(
									'admin.php?page=wc-settings&tab=checkout&section=offline'
								);
							},
						};
					default:
						return null; // if unsupported type found
				}
			} ),
		[ providers, installedPluginSlugs, installingPlugin, setupPlugin ]
	);

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
							setBusinessRegistrationCountry( value );
							invalidateResolution( 'getPaymentProviders', [
								value,
							] );
							apiFetch( {
								path:
									WC_ADMIN_NAMESPACE +
									'/settings/payments/country',
								method: 'POST',
								data: { location: value },
							} );
						} }
					/>
				</div>
			</div>
			{ isFetching ? (
				<ListPlaceholder rows={ 5 } />
			) : (
				<List items={ providersList } />
			) }
		</div>
	);
};
