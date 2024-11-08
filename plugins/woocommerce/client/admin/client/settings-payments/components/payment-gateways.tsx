/**
 * External dependencies
 */
import React, { useEffect, useState, useMemo } from 'react';
import { Gridicon } from '@automattic/components';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Plugin, PaymentGateway } from '@woocommerce/data';
import { List } from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import { PaymentGatewayListItem } from '~/settings-payments/components/payment-gateway-list-item';
import { PaymentExtensionSuggestionListItem } from '~/settings-payments/components/payment-extension-suggestion-list-item';
import { WooPaymentsGatewayData } from '~/settings-payments/types';
import { parseScriptTag } from '~/settings-payments/utils';

type PaymentGatewaysProps = {
	isInstalled: boolean;
	installingPlugin: string | null;
	setupPlugin: ( plugin: Plugin ) => void;
};

export const PaymentGateways = ( {
	isInstalled,
	installingPlugin,
	setupPlugin,
}: PaymentGatewaysProps ) => {
	const [ paymentGateways, setPaymentGateways ] = useState<
		PaymentGateway[]
	>( [] );
	const [
		preferredPaymentExtensionSuggestions,
		setPreferredPaymentExtensionSuggestions,
	] = useState< Plugin[] >( [] );
	const [ wooPaymentsGatewayData, setWooPaymentsGatewayData ] = useState<
		WooPaymentsGatewayData | undefined
	>( undefined );

	useEffect( () => {
		setWooPaymentsGatewayData(
			parseScriptTag( 'experimental_wc_settings_payments_woopayments' )
		);
		setPaymentGateways(
			parseScriptTag( 'experimental_wc_settings_payments_gateways' )
		);
		setPreferredPaymentExtensionSuggestions(
			parseScriptTag(
				'experimental_wc_settings_payments_preferred_extensions_suggestions'
			)
		);
	}, [ isInstalled ] );

	const setupLivePayments = () => {
		// TODO: Implement in future PR.
	};

	// Transform suggested preferred extensions comply with List component format.
	const preferredPaymentExtensionsList =
		preferredPaymentExtensionSuggestions.map( ( plugin: Plugin ) => {
			return PaymentExtensionSuggestionListItem( {
				plugin,
				installingPlugin,
				setupPlugin,
			} );
		} );

	// Transform payment gateways to comply with List component format.
	const paymentGatewaysList = useMemo(
		() =>
			paymentGateways.map( ( gateway: PaymentGateway ) => {
				return PaymentGatewayListItem( {
					gateway,
					wooPaymentsGatewayData,
					setupLivePayments,
				} );
			} ),
		[ paymentGateways, wooPaymentsGatewayData ]
	);

	// Add offline payment provider.
	paymentGatewaysList.push( {
		key: 'offline',
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
					...preferredPaymentExtensionsList,
					...paymentGatewaysList,
				] }
			/>
		</div>
	);
};
