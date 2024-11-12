/**
 * External dependencies
 */
import { decodeEntities } from '@wordpress/html-entities';
import { SortableHandle } from '@woocommerce/components';
import { useState } from '@wordpress/element';

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
	index: number;
};

export const OfflinePaymentGatewayListItem = ( {
	gateway,
	index,
}: OfflinePaymentGatewayListItemProps ) => {
	const [ isEnabled, setIsEnabled ] = useState( gateway.enabled );

	return (
		<div className="woocommerce-list__item woocommerce-list__item-enter-done">
			<div className="woocommerce-list__item-inner">
				<div className="woocommerce-list__item-before">
					<SortableHandle itemIndex={ index } />
					<img
						src={
							gateway.square_image ||
							gateway.image_72x72 ||
							gateway.image
						}
						alt={ gateway.title + ' logo' }
					/>
				</div>
				<div className="woocommerce-list__item-text">
					<span className="woocommerce-list__item-title">
						{ gateway.title }
					</span>
					<span
						className="woocommerce-list__item-content"
						dangerouslySetInnerHTML={ sanitizeHTML(
							decodeEntities( gateway.content )
						) }
					/>
				</div>
				<div className="woocommerce-list__item-after">
					<div className="woocommerce-list__item-after__actions">
						<PaymentGatewayButton
							id={ gateway.id }
							enabled={ isEnabled }
							settings_url={ gateway.settings_url }
							setIsEnabled={ setIsEnabled }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
