/**
 * External dependencies
 */
import { EllipsisMenu } from '@woocommerce/components';
import { PaymentGateway } from '@woocommerce/data';
import { WooPaymentMethodsLogos } from '@woocommerce/onboarding';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Internal dependencies
 */
import { StatusBadge } from '~/settings-payments/components/status-badge';
import { PaymentGatewayButton } from '~/settings-payments/components/payment-gateway-button';
import { WooPaymentsGatewayData } from '~/settings-payments/types';
import { useState } from 'react';

type PaymentGatewayItemProps = {
	gateway: PaymentGateway;
	wooPaymentsGatewayData?: WooPaymentsGatewayData;
	setupLivePayments: () => void;
};

export const PaymentGatewayListItem = ( {
	gateway,
	wooPaymentsGatewayData,
	setupLivePayments,
}: PaymentGatewayItemProps ) => {
	const [ isEnabled, setIsEnabled ] = useState( gateway.enabled );

	const isWCPay = [
		'pre_install_woocommerce_payments_promotion',
		'woocommerce_payments',
	].includes( gateway.id );

	const determineGatewayStatus = () => {
		if ( ! isEnabled && gateway?.needs_setup ) {
			return 'needs_setup';
		}
		if ( isEnabled ) {
			if ( isWCPay ) {
				if ( wooPaymentsGatewayData?.isInTestMode ) {
					return 'test_mode';
				}
			}
			return 'active';
		}

		if ( isWCPay ) {
			return 'recommended';
		}

		return 'inactive';
	};

	return {
		key: gateway.id,
		className: isWCPay
			? 'woocommerce-item__woocommerce-payment transitions-disabled'
			: 'transitions-disabled',
		title: (
			<>
				{ gateway.method_title }
				<StatusBadge status={ determineGatewayStatus() } />
			</>
		),
		content: (
			<>
				{ decodeEntities( gateway.method_description ) }
				{ isWCPay && (
					<WooPaymentMethodsLogos
						maxElements={ 10 }
						isWooPayEligible={ true }
					/>
				) }
			</>
		),
		after: (
			<div className="woocommerce-list__item-after__actions">
				<>
					<PaymentGatewayButton
						id={ gateway.id }
						enabled={ isEnabled }
						needs_setup={ gateway.needs_setup }
						settings_url={ gateway.settings_url }
						setIsEnabled={ setIsEnabled }
					/>
					{ isWCPay && wooPaymentsGatewayData?.isInTestMode && (
						<Button
							variant="primary"
							onClick={ setupLivePayments }
							isBusy={ false }
							disabled={ false }
						>
							{ __( 'Set up live payments', 'woocommerce' ) }
						</Button>
					) }
					<EllipsisMenu
						label={ __( 'Task List Options', 'woocommerce' ) }
						renderContent={ () => (
							<div>
								<Button>
									{ __( 'Learn more', 'woocommerce' ) }
								</Button>
								<Button>
									{ __(
										'See Terms of Service',
										'woocommerce'
									) }
								</Button>
							</div>
						) }
					/>
				</>
			</div>
		),
		// TODO add drag-and-drop icon before image (future PR)
		before: (
			<img
				src={
					// TODO: Need a way to make images available here.
					'https://woocommerce.com/wp-content/plugins/wccom-plugins/payment-gateway-suggestions/images/wcpay.svg'
				}
				alt={ gateway.title + ' logo' }
			/>
		),
	};
};
