/**
 * External dependencies
 */
import React, { useEffect, useState, useMemo } from 'react';
import { Gridicon } from '@automattic/components';
import { Button, CardDivider, SelectControl } from '@wordpress/components';
import { decodeEntities } from '@wordpress/html-entities';
import { __ } from '@wordpress/i18n';
import { PaymentGateway } from '@woocommerce/data';
import { EllipsisMenu, List } from '@woocommerce/components';
import { WooPaymentMethodsLogos } from '@woocommerce/onboarding';
import { getAdminLink } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import { PaymentGatewayButton } from '~/settings-payments/components/payment-gateway-button';
import { StatusBadge } from '~/settings-payments/components/status-badge';
import EllipsisMenuContent from '~/settings-payments/components/ellipsis-menu-content/ellipsis-menu-content';

// TODO: This should either be a util function, or handled in a different way e.g. passing the data as props.
const parseScriptTag = ( elementId: string ) => {
	const scriptTag = document.getElementById( elementId );
	return scriptTag ? JSON.parse( scriptTag.textContent || '' ) : [];
};

interface WooPaymentsGatewayData {
	isSupported: boolean;
	isAccountOnboarded: boolean;
	isInTestMode: boolean;
}

export const PaymentGateways = () => {
	const [ paymentGateways, setPaymentGateways ] = useState<
		PaymentGateway[]
	>( [] );
	const [ wooPaymentsGatewayData, setWooPaymentsGatewayData ] =
		useState< WooPaymentsGatewayData | null >( null );

	useEffect( () => {
		setWooPaymentsGatewayData(
			parseScriptTag( 'experimental_wc_settings_payments_woopayments' )
		);
		setPaymentGateways(
			parseScriptTag( 'experimental_wc_settings_payments_gateways' )
		);
	}, [] );

	const setupLivePayments = () => {
		// TODO: Implement in future PR.
	};

	// Transform payment gateways to comply with List component format.
	const paymentGatewaysList = useMemo(
		() =>
			paymentGateways.map( ( gateway: PaymentGateway ) => {
				const determineGatewayStatus = () => {
					if ( gateway.enabled ) {
						if ( gateway.needs_setup ?? false ) {
							return 'needs_setup';
						}

						if ( gateway.id === 'woocommerce_payments' ) {
							if ( wooPaymentsGatewayData?.isInTestMode ) {
								return 'test_mode';
							}
						}
						return 'active';
					}

					if ( gateway.id === 'woocommerce_payments' ) {
						return 'recommended';
					}

					return 'inactive';
				};

				const status = determineGatewayStatus();
				return {
					key: gateway.id,
					title: (
						<>
							{ gateway.method_title }
							<StatusBadge status={ status } />
						</>
					),
					content: (
						<>
							{ decodeEntities( gateway.method_description ) }
							{ gateway.id === 'woocommerce_payments' && (
								<WooPaymentMethodsLogos
									maxElements={ 10 }
									isWooPayEligible={ true }
								/>
							) }
						</>
					),
					after: (
						<div className="woocommerce-list__item-after__actions">
							<>
								<PaymentGatewayButton
									id={ gateway.id }
									enabled={ gateway.enabled }
									settings_url={ gateway.settings_url }
								/>
								{ gateway.id === 'woocommerce_payments' &&
									wooPaymentsGatewayData?.isInTestMode && (
										<Button
											variant="primary"
											onClick={ setupLivePayments }
											isBusy={ false }
											disabled={ false }
										>
											{ __(
												'Set up live payments',
												'woocommerce'
											) }
										</Button>
									) }
								<EllipsisMenu
									label={ __(
										'Payment Gateway Options',
										'woocommerce'
									) }
									renderContent={ () => (
										<EllipsisMenuContent
											isEnabled={ gateway.enabled }
											isInstalled={ true }
											gatewayType={
												gateway.id === 'woopayments'
													? 'woopayments'
													: 'preferred'
											}
											needsSetup={
												!! gateway.needs_setup
											}
										/>
									) }
								/>
							</>
						</div>
					),
					// TODO add drag-and-drop icon before image (future PR)
					before: (
						<img
							src={
								// TODO: Need a way to make images available here.
								// gateway.square_image ||
								// gateway.image_72x72 ||
								// gateway.image ||
								'https://woocommerce.com/wp-content/plugins/wccom-plugins/payment-gateway-suggestions/images/wcpay.svg'
							}
							alt={ gateway.title + ' logo' }
						/>
					),
				};
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
			<List items={ paymentGatewaysList } />
		</div>
	);
};
