/**
 * External dependencies
 */
import { useState } from 'react';
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';
import { PaymentGatewayButton } from '~/settings-payments/components/payment-gateway-button';

interface OfflinePaymentGateway {
	id: string;
	title: string;
	content: string;
	image: string;
	square_image: string;
	image_72x72: string;
	actionText: string;
	settings_url: string;
	enabled: boolean;
}

type OfflinePaymentGatewayListItemProps = {
	gateway: OfflinePaymentGateway;
};

export const OfflinePaymentGatewayListItem = ( {
	gateway,
}: OfflinePaymentGatewayListItemProps ) => {
	const [ isEnabled, setIsEnabled ] = useState( gateway.enabled );

	return {
		key: gateway.id,
		title: <>{ gateway.title }</>,
		className: 'transitions-disabled',
		content: (
			<span
				dangerouslySetInnerHTML={ sanitizeHTML(
					decodeEntities( gateway.content )
				) }
			/>
		),
		after: (
			<PaymentGatewayButton
				id={ gateway.id }
				enabled={ isEnabled }
				settings_url={ gateway.settings_url }
				setIsEnabled={ setIsEnabled }
			/>
		),
		before: (
			<img
				src={
					gateway.square_image || gateway.image_72x72 || gateway.image
				}
				alt={ gateway.title + ' logo' }
			/>
		),
	};
};
