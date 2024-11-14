/**
 * External dependencies
 */
import { Gridicon } from '@automattic/components';
import { List } from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/settings';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PaymentGatewayListItem } from '~/settings-payments/components/payment-gateway-list-item';
import { PaymentExtensionSuggestionListItem } from '~/settings-payments/components/payment-extension-suggestion-list-item';
import {
	RegisteredPaymentGateway,
	SuggestedPaymentExtension,
	WooPaymentsGatewayData,
} from '~/settings-payments/types';
import { useMemo } from '@wordpress/element';

interface PaymentGatewaysProps {
	registeredPaymentGateways: RegisteredPaymentGateway[];
	installedPluginSlugs: string[];
	preferredPluginSuggestions: SuggestedPaymentExtension[];
	wooPaymentsGatewayData?: WooPaymentsGatewayData;
	installingPlugin: string | null;
	setupPlugin: ( extension: SuggestedPaymentExtension ) => void;
	togglePlugin: ( id: string, settings_url: string ) => void;
}

export const PaymentGateways = ( {
	registeredPaymentGateways,
	installedPluginSlugs,
	preferredPluginSuggestions,
	wooPaymentsGatewayData,
	installingPlugin,
	setupPlugin,
	togglePlugin
}: PaymentGatewaysProps ) => {
	const setupLivePayments = () => {};

	// Transform suggested preferred plugins comply with List component format.
	const preferredPluginSuggestionsList = useMemo(
		() =>
			preferredPluginSuggestions.map(
				( extension: SuggestedPaymentExtension ) => {
					const pluginInstalled = installedPluginSlugs.includes(
						extension.plugin.slug
					);
					return PaymentExtensionSuggestionListItem( {
						extension,
						installingPlugin,
						setupPlugin,
						pluginInstalled,
					} );
				}
			),
		[
			preferredPluginSuggestions,
			installedPluginSlugs,
			installingPlugin,
			setupPlugin,
		]
	);

	// Transform payment gateways to comply with List component format.
	const paymentGatewaysList = useMemo(
		() =>
			registeredPaymentGateways.map(
				( gateway: RegisteredPaymentGateway ) => {
					return PaymentGatewayListItem( {
						gateway,
						wooPaymentsGatewayData,
						setupLivePayments,
						togglePlugin
					} );
				}
			),
		[ registeredPaymentGateways, wooPaymentsGatewayData ]
	);

	// Add offline payment provider.
	paymentGatewaysList.push( {
		key: 'offline',
		className: 'woocommerce-item__payment-gateway transitions-disabled',
		title: <>{ __( 'Offline payment methods', 'woocommerce' ) }</>,
		content: (
			<>
				{ __(
					'Take payments via multiple offline methods. These can also be useful to test purchases.',
					'woocommerce'
				) }
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
		// todo change logo to appropriate one.
		before: (
			<img
				src={
					'https://woocommerce.com/wp-content/plugins/wccom-plugins/payment-gateway-suggestions/images/paypal.svg'
				}
				alt="offline payment methods"
			/>
		),
	} );

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
			<List
				items={ [
					...preferredPluginSuggestionsList,
					...paymentGatewaysList,
				] }
			/>
		</div>
	);
};
