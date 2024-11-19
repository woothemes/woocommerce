/**
 * External dependencies
 */
import { decodeEntities } from '@wordpress/html-entities';
import { OfflinePaymentGateway } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';
import { PaymentGatewayButton } from '~/settings-payments/components/payment-gateway-button';

type OfflinePaymentGatewayListItemProps = {
	gateway: OfflinePaymentGateway;
};

export const OfflinePaymentGatewayListItem = ( {
	gateway,
}: OfflinePaymentGatewayListItemProps ) => {
	return {
		key: gateway.id,
		title: <>{ gateway.title }</>,
		className: 'transitions-disabled',
		content: (
			<span
				dangerouslySetInnerHTML={ sanitizeHTML(
					decodeEntities( gateway.description )
				) }
			/>
		),
		after: (
			<PaymentGatewayButton
				id={ gateway.id }
				isOffline={ true }
				enabled={ gateway.state.enabled }
				settingsUrl={ gateway.management.settings_url }
			/>
		),
		before: <img src={ gateway.icon } alt={ gateway.title + ' logo' } />,
	};
};
