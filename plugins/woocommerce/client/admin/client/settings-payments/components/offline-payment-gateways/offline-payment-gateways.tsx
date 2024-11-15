/**
 * External dependencies
 */
import { List } from '@woocommerce/components';
import { OfflinePaymentGateway } from '@woocommerce/data';
import { Card, CardHeader } from '@wordpress/components';
import React from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { OfflinePaymentGatewayListItem } from '../offline-gateway-list-item';

interface OfflinePaymentGatewaysProps {
	offlinePaymentGateways: OfflinePaymentGateway[];
}

export const OfflinePaymentGateways = ( {
	offlinePaymentGateways,
}: OfflinePaymentGatewaysProps ) => {
	// Transform plugins comply with List component format.
	const paymentGatewaysList = offlinePaymentGateways.map(
		( gateway: OfflinePaymentGateway ) => {
			return OfflinePaymentGatewayListItem( {
				gateway,
			} );
		}
	);

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
