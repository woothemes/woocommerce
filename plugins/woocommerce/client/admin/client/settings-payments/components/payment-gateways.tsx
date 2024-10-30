/**
 * External dependencies
 */
import React, { useEffect, useState } from 'react';
import { Gridicon } from '@automattic/components';
import { Button, SelectControl } from '@wordpress/components';
import { decodeEntities } from '@wordpress/html-entities';
import { __ } from '@wordpress/i18n';
import { EllipsisMenu, List, Pill } from '@woocommerce/components';
import { WooPaymentMethodsLogos } from '@woocommerce/onboarding';
import { PaymentGateway } from '@woocommerce/data';
import { getAdminLink } from '@woocommerce/settings';

/**
 * Internal dependencies
 */

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

	const recommendedGateways = [ 'woocommerce_payments' ];

	const enableGateway = ( gateway: PaymentGateway ) => () => {
		console.log( 'Enable gateway', gateway );
	};

	const setupLivePayments = () => {
		console.log( 'Setup live payments' );
	};

	// Transform plugins comply with List component format.
	const paymentGatewaysList = paymentGateways.map(
		( gateway: PaymentGateway ) => {
			return {
				key: gateway.id,
				title: (
					<>
						{ gateway.method_title }
						{ recommendedGateways.includes( gateway.id ) && (
							// TODO: Support recommended flag
							<Pill>{ __( 'Recommended', 'woocommerce' ) }</Pill>
						) }
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
							{ gateway.enabled ? (
								<Button
									variant="secondary"
									href={
										'admin.php?page=wc-settings&tab=checkout&section=' +
										gateway.id
									}
									isBusy={ false }
									disabled={ false }
								>
									{ __( 'Manage', 'woocommerce' ) }
								</Button>
							) : (
								<Button
									variant="primary"
									onClick={ enableGateway( gateway ) }
									isBusy={ false }
									disabled={ false }
								>
									{ __( 'Enable', 'woocommerce' ) }
								</Button>
							) }
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
									'Task List Options',
									'woocommerce'
								) }
								renderContent={ () => (
									<div>
										<Button>
											{ __(
												'Learn more',
												'woocommerce'
											) }
										</Button>
										<Button>
											{ __(
												'See Terms of Service',
												'woocommerce'
											) }
										</Button>
									</div>
								) }
							/>
						</>
					</div>
				),
				// TODO add drag-and-drop icon before image (future PR)
				before: (
					<img
						src={
							gateway.square_image ||
							gateway.image_72x72 ||
							gateway.image ||
							'https://woocommerce.com/wp-content/plugins/wccom-plugins/payment-gateway-suggestions/images/wcpay.svg'
						}
						alt={ gateway.title + ' logo' }
					/>
				),
			};
		}
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
