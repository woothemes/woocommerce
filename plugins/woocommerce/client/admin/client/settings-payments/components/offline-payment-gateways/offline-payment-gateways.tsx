/**
 * External dependencies
 */
import { PaymentGateway, type OfflinePaymentGateway } from '@woocommerce/data';
import { Card, CardHeader } from '@wordpress/components';
import React from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { OfflinePaymentGatewayList } from '../offline-gateway-list-item/offline-payment-gateway-list-item';
import { parseOrdering } from '~/settings-payments/utils';
import { OfflinePaymentGatewayListItem } from '../offline-gateway-list-item';

interface OfflinePaymentGatewaysProps {
	registeredPaymentGateways: PaymentGateway[];
	ordering: Record< string, number >;
	updateOrdering: ( ordering: Record< string, number > ) => void;
}

export const OfflinePaymentGateways = ( {
	offlinePaymentGateways,
}: OfflinePaymentGatewaysProps ) => {
	// Transform plugins comply with List component format.
	const handleOrderingUpdate = ( items: OfflinePaymentGateway[] ) => {
		// Optimistically update the items to prevent flicker.
		// setOfflineGateways( items );
		// updateOrdering( parseOrdering( items ) );
	};

	return (
		<Card size="medium" className="settings-payment-gateways">
			<CardHeader className="settings-payment-gateways__header">
				<div className="settings-payment-gateways__header-title">
					{ __( 'Payment methods', 'woocommerce' ) }
				</div>
			</CardHeader>
			<OfflinePaymentGatewayList
				gateways={ offlinePaymentGateways }
				setGateways={ handleOrderingUpdate }
			/>
		</Card>
	);
};
