/**
 * External dependencies
 */
import { EllipsisMenu } from '@woocommerce/components';
import { WooPaymentMethodsLogos } from '@woocommerce/onboarding';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { RegisteredPaymentGateway } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';
import { StatusBadge } from '~/settings-payments/components/status-badge';
import { PaymentGatewayButton } from '~/settings-payments/components/payment-gateway-button';
import { WooPaymentsGatewayData } from '~/settings-payments/types';

type PaymentGatewayItemProps = {
	gateway: RegisteredPaymentGateway;
	wooPaymentsGatewayData?: WooPaymentsGatewayData;
	setupLivePayments: () => void;
};

export const PaymentGatewayListItem = ( {
	gateway,
	wooPaymentsGatewayData,
	setupLivePayments,
}: PaymentGatewayItemProps ) => {
	const isWCPay = [
		'pre_install_woocommerce_payments_promotion',
		'woocommerce_payments',
	].includes( gateway.id );

	const hasIncentive =
		gateway.id === 'pre_install_woocommerce_payments_promotion';
	const determineGatewayStatus = () => {
		if ( ! gateway.state.enabled && gateway.state.needs_setup ) {
			return 'needs_setup';
		}
		if ( gateway.state.enabled ) {
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
		className: `transitions-disabled woocommerce-item__payment-gateway ${
			isWCPay ?? `woocommerce-item__woocommerce-payment`
		} ${ hasIncentive ?? `has-incentive` }`,
		title: (
			<>
				{ gateway.title }
				{ hasIncentive ? (
					<StatusBadge
						status="has_incentive"
						message={ __(
							'Save 10% on processing fees',
							'woocommerce'
						) }
					/>
				) : (
					<StatusBadge status={ determineGatewayStatus() } />
				) }
			</>
		),
		content: (
			<>
				<span
					dangerouslySetInnerHTML={ sanitizeHTML(
						decodeEntities( gateway.description )
					) }
				/>
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
						isOffline={ false }
						enabled={ gateway.state.enabled }
						needsSetup={ gateway.state.needs_setup }
						settingsUrl={ gateway.management.settings_url }
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
		before: <img src={ gateway.icon } alt={ gateway.title + ' logo' } />,
	};
};
