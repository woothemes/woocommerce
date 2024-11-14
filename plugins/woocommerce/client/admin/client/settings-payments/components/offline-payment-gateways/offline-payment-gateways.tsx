/**
 * External dependencies
 */
import { PaymentGateway } from '@woocommerce/data';
import { Card, CardHeader } from '@wordpress/components';
import React, { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { getAdminSetting } from '~/utils/admin-settings';
import {
	OfflinePaymentGateway,
	OfflinePaymentGatewayList,
} from '../offline-gateway-list-item/offline-payment-gateway-list-item';
import { parseOrdering } from '~/settings-payments/utils';

const assetUrl = getAdminSetting( 'wcAdminAssetUrl' );

interface OfflinePaymentGatewaysProps {
	registeredPaymentGateways: PaymentGateway[];
	ordering: Record< string, number >;
	updateOrdering: ( ordering: Record< string, number > ) => void;
}

export const OfflinePaymentGateways = ( {
	registeredPaymentGateways,
	ordering,
	updateOrdering,
}: OfflinePaymentGatewaysProps ) => {
	const [ offlineGateways, setOfflineGateways ] = useState<
		OfflinePaymentGateway[]
	>( [] );

	useEffect( () => {
		// Mock payment gateways for now.
		// TODO Get the list of gateways via the API in future PR.
		const mockOfflinePaymentGateways = [
			{
				id: 'bacs',
				title: __( 'Direct bank transfer', 'woocommerce' ),
				content: __(
					'Take payments in person via BACS. More commonly known as direct bank/wire transfer.',
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
					'Take payments in person via checks. This offline gateway can also be useful to test purchases.',
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
			.filter( Boolean )
			.sort( ( a, b ) => {
				return (
					( ordering[ a?.id ?? '' ] ?? Number.MAX_SAFE_INTEGER ) -
					( ordering[ b?.id ?? '' ] ?? Number.MAX_SAFE_INTEGER )
				);
			} ) as OfflinePaymentGateway[];
		setOfflineGateways( availableOfflineGateways );
	}, [ registeredPaymentGateways, ordering ] );

	const handleOrderingUpdate = ( items: OfflinePaymentGateway[] ) => {
		// Optimistically update the items to prevent flicker.
		setOfflineGateways( items );
		updateOrdering( parseOrdering( items ) );
	};

	return (
		<Card size="medium" className="settings-payment-gateways">
			<CardHeader className="settings-payment-gateways__header">
				<div className="settings-payment-gateways__header-title">
					{ __( 'Payment methods', 'woocommerce' ) }
				</div>
			</CardHeader>
			<OfflinePaymentGatewayList
				gateways={ offlineGateways }
				setGateways={ handleOrderingUpdate }
			/>
		</Card>
	);
};
