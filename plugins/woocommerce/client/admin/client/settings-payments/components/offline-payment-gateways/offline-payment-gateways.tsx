/**
 * External dependencies
 */
import { List } from '@woocommerce/components';
import { PaymentGateway } from '@woocommerce/data';
import { Card, CardHeader } from '@wordpress/components';
import React from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { getAdminSetting } from '~/utils/admin-settings';
import { OfflinePaymentGatewayListItem } from '../offline-gateway-list-item';

const assetUrl = getAdminSetting( 'wcAdminAssetUrl' );

interface OfflinePaymentGatewaysProps {
	registeredPaymentGateways: PaymentGateway[];
}

export const OfflinePaymentGateways = ( {
	registeredPaymentGateways,
}: OfflinePaymentGatewaysProps ) => {
	// Mock payment gateways for now.
	const mockOfflinePaymentGateways = [
		{
			id: 'bacs',
			title: __( 'Direct bank transfer', 'woocommerce' ),
			content: __(
				'Accept payments via Bacs — more commonly known as direct/wire transfer.',
				'woocommerce'
			),
			image: assetUrl + '/payment_methods/bacs.svg',
			square_image: assetUrl + '/payment_methods/bacs.svg',
			image_72x72: assetUrl + '/payment_methods/bacs.svg',
			actionText: '',
		},
		{
			id: 'cheque',
			title: __( 'Check payments', 'woocommerce' ),
			content: __(
				'Take payments in person via checks. This payment method can also be used for testing purposes.',
				'woocommerce'
			),
			image: assetUrl + '/payment_methods/cheque.svg',
			square_image: assetUrl + '/payment_methods/cheque.svg',
			image_72x72: assetUrl + '/payment_methods/cheque.svg',
			actionText: '',
		},
		{
			id: 'cod',
			title: __( 'Cash on delivery', 'woocommerce' ),
			content: __(
				'Have your customers pay with cash (or by other means) upon delivery.',
				'woocommerce'
			),
			image: assetUrl + '/payment_methods/cod.svg',
			square_image: assetUrl + '/payment_methods/cod.svg',
			image_72x72: assetUrl + '/payment_methods/cod.svg',
			actionText: '',
		},
	];

	const availableOfflineGateways = mockOfflinePaymentGateways
		.map( ( gateway ) => {
			const installedGateway = registeredPaymentGateways.find(
				( g ) => g.id === gateway.id
			);

			if ( ! installedGateway ) {
				return null;
			}

			return {
				enabled: installedGateway.enabled,
				settings_url: installedGateway.settings_url,
				...gateway,
			};
		} )
		.filter( Boolean );

	// Transform plugins comply with List component format.
	const paymentGatewaysList = availableOfflineGateways.map( ( gateway ) => {
		if ( ! gateway ) return null;
		return OfflinePaymentGatewayListItem( {
			gateway,
		} );
	} );

	return (
		<Card size="medium" className="settings-payment-gateways">
			<CardHeader className="settings-payment-gateways__header">
				<div className="settings-payment-gateways__header-title">
					{ __( 'Payment methods', 'woocommerce' ) }
				</div>
			</CardHeader>
			<List items={ paymentGatewaysList } />
		</Card>
	);
};
