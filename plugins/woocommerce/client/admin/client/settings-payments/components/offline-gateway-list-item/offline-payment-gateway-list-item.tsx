/**
 * External dependencies
 */
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Internal dependencies
 */
import { PaymentGatewayButton } from '~/settings-payments/components/payment-gateway-button';
import { useState } from 'react';

interface OfflinePaymentGateway {
	id: string,
	title: string,
	content: string,
	image: string,
	square_image: string,
	image_72x72: string,
	actionText: string,
	settings_url: string,
	enabled: boolean,
}

type OfflinePaymentGatewayListItemProps = {
	gateway: OfflinePaymentGateway;
};

export const OfflinePaymentGatewayListItem = ({
	gateway,
}: OfflinePaymentGatewayListItemProps ) => {
	const [ isEnabled, setIsEnabled ] = useState( gateway.enabled );

	return {
		key: gateway.id,
		title: <>{ gateway.title }</>,
		content: <>{ decodeEntities( gateway.content ) }</>,
		after: (
			<PaymentGatewayButton
				id={ gateway.id }
				enabled={ isEnabled }
				settings_url={ gateway.settings_url }
				setIsEnabled={ setIsEnabled }
			/>
		),
		// TODO add drag-and-drop icon before image (future PR)
		before: (
			<img
				src={
					gateway.square_image ||
					gateway.image_72x72 ||
					gateway.image
				}
				alt={ gateway.title + ' logo' }
			/>
		),
	};
};
