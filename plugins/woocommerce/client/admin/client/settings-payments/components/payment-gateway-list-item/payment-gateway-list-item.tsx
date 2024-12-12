/**
 * External dependencies
 */
import { WooPaymentMethodsLogos } from '@woocommerce/onboarding';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { PaymentProvider } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';
import { StatusBadge } from '~/settings-payments/components/status-badge';
import { PaymentGatewayButtons } from '~/settings-payments/components/payment-gateway-buttons';
import { EllipsisMenuWrapper as EllipsisMenu } from '~/settings-payments/components/ellipsis-menu-content';
import { isWooPayments } from '~/settings-payments/utils';
import { DefaultDragHandle } from '~/settings-payments/components/sortable';

type PaymentGatewayItemProps = {
	gateway: PaymentProvider;
};

export const PaymentGatewayListItem = ( {
	gateway,
	...props
}: PaymentGatewayItemProps ) => {
	const isWcPay = isWooPayments( gateway.id );

	const hasIncentive =
		gateway.id === 'pre_install_woocommerce_payments_promotion';
	const determineGatewayStatus = () => {
		if ( ! gateway.state?.enabled && gateway.state?.needs_setup ) {
			return 'needs_setup';
		}
		if ( gateway.state?.enabled ) {
			if ( isWcPay ) {
				if ( gateway.state?.test_mode ) {
					return 'test_mode';
				}
			}
			return 'active';
		}

		return 'inactive';
	};

	return (
		<div
			id={ gateway.id }
			className={ `transitions-disabled woocommerce-list__item woocommerce-list__item-enter-done woocommerce-item__payment-gateway ${
				isWcPay ?? `woocommerce-item__woocommerce-payment`
			} ${ hasIncentive ?? `has-incentive` }` }
			{ ...props }
		>
			<div className="woocommerce-list__item-inner">
				<div className="woocommerce-list__item-before">
					<DefaultDragHandle />
					<img src={ gateway.icon } alt={ gateway.title + ' logo' } />
				</div>
				<div className="woocommerce-list__item-text">
					<span className="woocommerce-list__item-title">
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
					</span>
					<span
						className="woocommerce-list__item-content"
						dangerouslySetInnerHTML={ sanitizeHTML(
							decodeEntities( gateway.description )
						) }
					/>
					{ isWcPay && (
						<WooPaymentMethodsLogos
							maxElements={ 10 }
							isWooPayEligible={ true }
						/>
					) }
				</div>
				<div className="woocommerce-list__item-after">
					<div className="woocommerce-list__item-after__actions">
						<>
							<PaymentGatewayButtons
								id={ gateway.id }
								isOffline={ false }
								enabled={ gateway.state?.enabled || false }
								needsSetup={ gateway.state?.needs_setup }
								testMode={ gateway.state?.test_mode }
								settingsUrl={
									gateway.management?.settings_url || ''
								}
							/>
							<EllipsisMenu
								label={ __(
									'Payment Provider Options',
									'woocommerce'
								) }
								provider={ gateway }
							/>
						</>
					</div>
				</div>
			</div>
		</div>
	);
};
