/**
 * External dependencies
 */
import { Gridicon } from '@automattic/components';
import { List } from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/settings';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PaymentProvider } from '@woocommerce/data';
import { useMemo } from '@wordpress/element';
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';
import { PaymentGatewayListItem } from '~/settings-payments/components/payment-gateway-list-item';
import { PaymentExtensionSuggestionListItem } from '~/settings-payments/components/payment-extension-suggestion-list-item';
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
	const setupLivePayments = () => {};

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
							setupLivePayments,
						} );
					case 'offline_pms_group':
						return {
							key: provider.id,
							className: 'transitions-disabled',
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
							after: (
								<a
									href={ getAdminLink(
										'admin.php?page=wc-settings&tab=checkout&section=offline'
									) }
								>
									<Gridicon icon="chevron-right" />
								</a>
							),
							before: (
								<img
									src={ provider.icon }
									alt={ provider.title + ' logo' }
								/>
							),
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
					<SelectControl
						className="woocommerce-select-control__country"
						prefix={ __( 'Business location :', 'woocommerce' ) }
						placeholder={ '' }
						label={ '' }
						options={ [
							{ label: 'United States', value: 'US' },
							{ label: 'Canada', value: 'Canada' },
						] }
						onChange={ () => {} }
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
