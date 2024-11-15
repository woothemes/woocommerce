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
	togglePlugin: ( id: string, settings_url: string ) => void;
};

export const OfflinePaymentGatewayListItem = ( {
	gateway,
	togglePlugin,
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
				enabled={ gateway.state.enabled }
				settings_url={ gateway.management.settings_url }
				togglePlugin={ togglePlugin }
			/>
		),
		before: <img src={ gateway.icon } alt={ gateway.title + ' logo' } />,
	};
};
