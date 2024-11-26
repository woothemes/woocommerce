/**
 * External dependencies
 */
import { Gridicon } from '@automattic/components';
import { List } from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/settings';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	RegisteredPaymentGateway,
	SuggestedPaymentExtension,
} from '@woocommerce/data';
import { useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { PaymentGatewayListItem } from '~/settings-payments/components/payment-gateway-list-item';
import { PaymentExtensionSuggestionListItem } from '~/settings-payments/components/payment-extension-suggestion-list-item';
import { WC_ASSET_URL } from '~/utils/admin-settings';

interface PaymentGatewaysProps {
	registeredPaymentGateways: RegisteredPaymentGateway[];
	installedPluginSlugs: string[];
	preferredPluginSuggestions: SuggestedPaymentExtension[];
	installingPlugin: string | null;
	setupPlugin: ( extension: SuggestedPaymentExtension ) => void;
}

export const PaymentGateways = ( {
	registeredPaymentGateways,
	installedPluginSlugs,
	preferredPluginSuggestions,
	installingPlugin,
	setupPlugin,
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
						setupLivePayments,
					} );
				}
			),
		[ registeredPaymentGateways ]
	);

	// Add offline payment provider.
	paymentGatewaysList.push( {
		key: 'offline',
		className: 'woocommerce-item__payment-gateway transitions-disabled',
		title: <>{ __( 'Take offline payments', 'woocommerce' ) }</>,
		content: (
			<>
				{ __(
					'Accept payments offline using multiple different methods. These can also be used to test purchases.',
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
		before: (
			<img
				src={ WC_ASSET_URL + 'images/payment_methods/cod.svg' }
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
