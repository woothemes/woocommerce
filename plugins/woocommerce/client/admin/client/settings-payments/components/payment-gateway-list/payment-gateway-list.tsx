/**
 * External dependencies
 */
import {
	PaymentProvider,
	PaymentProviderType,
	PaymentGatewayProvider,
	OfflinePmsGroupProvider,
	PaymentExtensionSuggestionProvider,
} from '@woocommerce/data';
import { Gridicon } from '@automattic/components';

/**
 * Internal dependencies
 */
import {
	DefaultDragHandle,
	SortableContainer,
	SortableItem,
} from '~/settings-payments/components/sortable';
import { PaymentExtensionSuggestionListItem } from '~/settings-payments/components/payment-extension-suggestion-list-item';
import { PaymentGatewayListItem } from '~/settings-payments/components/payment-gateway-list-item';
import './payment-gateway-list.scss';

interface PaymentGatewayListProps {
	providers: PaymentProvider[];
	installedPluginSlugs: string[];
	installingPlugin: string | null;
	setupPlugin: ( id: string, slug: string ) => void;
	updateOrdering: ( providers: PaymentProvider[] ) => void;
}

export const PaymentGatewayList = ( {
	providers,
	installedPluginSlugs,
	installingPlugin,
	setupPlugin,
	updateOrdering,
}: PaymentGatewayListProps ) => {
	return (
		<SortableContainer< PaymentProvider >
			items={ providers }
			className={ 'settings-payment-gateways__list' }
			setItems={ updateOrdering }
		>
			{ providers.map( ( provider: PaymentProvider ) => {
				switch ( provider._type ) {
					case PaymentProviderType.Suggestion:
						const suggestion =
							provider as PaymentExtensionSuggestionProvider;
						const pluginInstalled = installedPluginSlugs.includes(
							provider.plugin.slug
						);
						return (
							<SortableItem
								key={ suggestion.id }
								id={ suggestion.id }
							>
								{ PaymentExtensionSuggestionListItem( {
									extension: suggestion,
									installingPlugin,
									setupPlugin,
									pluginInstalled,
								} ) }
							</SortableItem>
						);
					case PaymentProviderType.Gateway:
						const gateway = provider as PaymentGatewayProvider;
						return (
							<SortableItem
								key={ provider.id }
								id={ provider.id }
							>
								{ PaymentGatewayListItem( {
									gateway,
								} ) }
							</SortableItem>
						);
					case PaymentProviderType.OfflinePmsGroup:
						const offlinePmsGroup =
							provider as OfflinePmsGroupProvider;
						return (
							<SortableItem
								key={ offlinePmsGroup.id }
								id={ offlinePmsGroup.id }
							>
								{ /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */ }
								<div
									id={ offlinePmsGroup.id }
									className="transitions-disabled woocommerce-list__item clickable-list-item enter-done"
									onClick={ () => {
										window.location.href =
											offlinePmsGroup.management._links.settings.href;
									} }
								>
									<div className="woocommerce-list__item-inner">
										<div className="woocommerce-list__item-before">
											<DefaultDragHandle />
											<img
												src={ offlinePmsGroup.icon }
												alt={
													offlinePmsGroup.title +
													' logo'
												}
											/>
										</div>
										<div className="woocommerce-list__item-text">
											<span className="woocommerce-list__item-title">
												{ offlinePmsGroup.title }
											</span>
											<span
												className="woocommerce-list__item-content"
												dangerouslySetInnerHTML={ {
													__html: offlinePmsGroup.description,
												} }
											/>
										</div>
										<div className="woocommerce-list__item-after centered">
											<div className="woocommerce-list__item-after__actions">
												<a
													href={
														offlinePmsGroup
															.management._links
															.settings.href
													}
												>
													<Gridicon icon="chevron-right" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</SortableItem>
						);
					default:
						return null;
				}
			} ) }
		</SortableContainer>
	);
};
