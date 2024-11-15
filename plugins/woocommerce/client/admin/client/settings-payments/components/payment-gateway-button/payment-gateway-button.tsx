/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { PAYMENT_GATEWAYS_SUGGESTIONS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */

export const PaymentGatewayButton = ( {
	id,
	is_offline,
	enabled,
	needs_setup,
	settings_url,
	text_settings = __( 'Manage', 'woocommerce' ),
	text_enable = __( 'Enable', 'woocommerce' ),
	text_needs_setup = __( 'Complete setup', 'woocommerce' ),
}: {
	id: string;
	is_offline: boolean;
	enabled: boolean;
	needs_setup?: boolean;
	settings_url: string;
	text_settings?: string;
	text_enable?: string;
	text_needs_setup?: string;
} ) => {
	const { enablePaymentGateway } = useDispatch(
		PAYMENT_GATEWAYS_SUGGESTIONS_STORE_NAME
	);

	const { isUpdating } = useSelect( ( select ) => {
		return {
			isUpdating: select(
				PAYMENT_GATEWAYS_SUGGESTIONS_STORE_NAME
			).isUpdating( id ),
		};
	} );

	const onClick = ( e: React.MouseEvent ) => {
		if ( ! enabled ) {
			e.preventDefault();
			enablePaymentGateway(
				id,
				is_offline,
				window.woocommerce_admin.ajax_url,
				settings_url,
				window.woocommerce_admin.nonces?.gateway_toggle
			);
		}
	};

	const determineButtonText = () => {
		if ( needs_setup ) {
			return text_needs_setup;
		}

		return enabled ? text_settings : text_enable;
	};

	return (
		<div className="woocommerce-list__item-after__actions">
			<Button
				variant={ enabled ? 'secondary' : 'primary' }
				isBusy={ isUpdating }
				disabled={ isUpdating }
				onClick={ onClick }
				href={ settings_url }
			>
				{ determineButtonText() }
			</Button>
		</div>
	);
};
