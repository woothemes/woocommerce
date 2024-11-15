/**
 * External dependencies
 */
import { decodeEntities } from '@wordpress/html-entities';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';
import { PaymentGatewayButton } from '~/settings-payments/components/payment-gateway-button';
import {
	DefaultDragHandle,
	SortableContainer,
	SortableItem,
} from '../sortable';

export interface OfflinePaymentGateway {
	id: string;
	title: string;
	content: string;
	image: string;
	square_image: string;
	image_72x72: string;
	actionText: string;
	settings_url: string;
	enabled: boolean;
	needs_setup: boolean;
}

type OfflinePaymentGatewayListItemProps = {
	gateway: OfflinePaymentGateway;
};

export const OfflinePaymentGatewayListItem = ( {
	gateway,
	...props
}: OfflinePaymentGatewayListItemProps ) => {
	const [ isEnabled, setIsEnabled ] = useState( gateway.enabled );

	return (
		<SortableItem
			id={ gateway.id }
			className="woocommerce-list__item woocommerce-list__item-enter-done"
			{ ...props }
		>
			<div className="woocommerce-list__item-inner">
				<div className="woocommerce-list__item-before">
					<DefaultDragHandle />
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
							needs_setup={ gateway.needs_setup }
						/>
					</div>
				</div>
			</div>
		</SortableItem>
	);
};

export const OfflinePaymentGatewayList = ( {
	gateways,
	setGateways,
}: {
	gateways: OfflinePaymentGateway[];
	setGateways: ( gateways: OfflinePaymentGateway[] ) => void;
} ) => {
	return (
		<SortableContainer< OfflinePaymentGateway >
			className="woocommerce-list"
			items={ gateways }
			setItems={ setGateways }
		>
			{ gateways.map( ( method ) => (
				<OfflinePaymentGatewayListItem
					gateway={ method }
					key={ method.id }
				/>
			) ) }
		</SortableContainer>
	);
};
