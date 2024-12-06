/**
 * External dependencies
 */
import { Gridicon } from '@automattic/components';
import { List } from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/settings';
import { __ } from '@wordpress/i18n';
import { PaymentProvider } from '@woocommerce/data';
import { useMemo, useState } from '@wordpress/element';
import { decodeEntities } from '@wordpress/html-entities';

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
}

export const PaymentGateways = ( {
	providers,
	installedPluginSlugs,
	installingPlugin,
	setupPlugin,
	isFetching,
}: PaymentGatewaysProps ) => {
	const [ storeCountry, setStoreCountry ] = useState( 'US' );

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
								( country ) => country.key === storeCountry
							) ?? { key: 'US', name: 'United States (US)' }
						}
						options={ countryOptions }
						onChange={ ( value: string ) => {
							setStoreCountry( value );
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
