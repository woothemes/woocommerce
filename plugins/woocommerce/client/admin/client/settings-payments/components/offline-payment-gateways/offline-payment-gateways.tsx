/**
 * External dependencies
 */
import { type OfflinePaymentGateway } from '@woocommerce/data';
import { Card, CardHeader } from '@wordpress/components';
import React from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { OfflinePaymentGatewayList } from '../offline-gateway-list-item/offline-payment-gateway-list-item';

interface OfflinePaymentGatewaysProps {
	offlinePaymentGateways: OfflinePaymentGateway[];
	updateOrdering: ( gateways: OfflinePaymentGateway[] ) => void;
}

export const OfflinePaymentGateways = ( {
	offlinePaymentGateways,
	updateOrdering,
}: OfflinePaymentGatewaysProps ) => {
	return (
		<Card size="medium" className="settings-payment-gateways">
			<CardHeader className="settings-payment-gateways__header">
				<div className="settings-payment-gateways__header-title">
					{ __( 'Payment methods', 'woocommerce' ) }
				</div>
			</CardHeader>
			<OfflinePaymentGatewayList
				gateways={ offlinePaymentGateways }
				setGateways={ updateOrdering }
			/>
		</Card>
	);
};
