/**
 * External dependencies
 */
import { Gridicon } from '@automattic/components';
import { List } from '@woocommerce/components';
import { Plugin, PaymentGateway } from '@woocommerce/data';
import { getAdminLink } from '@woocommerce/settings';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PaymentGatewayListItem } from '~/settings-payments/components/payment-gateway-list-item';
import { PaymentExtensionSuggestionListItem } from '~/settings-payments/components/payment-extension-suggestion-list-item';
import { WooPaymentsGatewayData } from '~/settings-payments/types';

interface PaymentGatewaysProps {
	registeredPaymentGateways: PaymentGateway[];
	installedPluginSlugs: string[];
	preferredPluginSuggestions: Plugin[];
	wooPaymentsGatewayData?: WooPaymentsGatewayData;
	installingPlugin: string | null;
	setupPlugin: ( plugin: Plugin ) => void;
}

export const PaymentGateways = ( {
	registeredPaymentGateways,
	installedPluginSlugs,
	preferredPluginSuggestions,
	wooPaymentsGatewayData,
	installingPlugin,
	setupPlugin,
}: PaymentGatewaysProps ) => {
	const setupLivePayments = () => {};

	// Transform suggested preferred plugins comply with List component format.
	const preferredPluginSuggestionsList = preferredPluginSuggestions.map(
		( plugin: Plugin ) => {
			const pluginInstalled = installedPluginSlugs.includes(
				plugin.plugins[ 0 ]
			);
			return PaymentExtensionSuggestionListItem( {
				plugin,
				installingPlugin,
				setupPlugin,
				pluginInstalled,
			} );
		}
	);

	// Transform payment gateways to comply with List component format.
	const paymentGatewaysList = registeredPaymentGateways.map(
		( gateway: PaymentGateway ) => {
			return PaymentGatewayListItem( {
				gateway,
				wooPaymentsGatewayData,
				setupLivePayments,
			} );
		}
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
