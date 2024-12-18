/**
 * External dependencies
 */
import { WooPaymentMethodsLogos } from '@woocommerce/onboarding';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { PaymentGatewayProvider } from '@woocommerce/data';
import { Tooltip } from '@wordpress/components';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';
import { StatusBadge } from '~/settings-payments/components/status-badge';
import { EllipsisMenuWrapper as EllipsisMenu } from '~/settings-payments/components/ellipsis-menu-content';
import { hasIncentive, isWooPayments } from '~/settings-payments/utils';
import { DefaultDragHandle } from '~/settings-payments/components/sortable';
import { WC_ASSET_URL } from '~/utils/admin-settings';
import {
	ActivatePaymentsButton,
	CompleteSetupButton,
	EnableGatewayButton,
	SettingsButton,
} from '~/settings-payments/components/buttons';

type PaymentGatewayItemProps = {
	gateway: PaymentGatewayProvider;
	acceptIncentive: ( id: string ) => void;
};

export const PaymentGatewayListItem = ( {
	gateway,
	acceptIncentive,
	...props
}: PaymentGatewayItemProps ) => {
	const isWcPay = isWooPayments( gateway.id );
	const incentive = hasIncentive( gateway ) ? gateway._incentive : null;
	const shouldHighlightIncentive =
		incentive && ! incentive?.promo_id.includes( '-action-' );

	const gatewayHasRecommendedPaymentMethods =
		( gateway.onboarding.recommended_payment_methods ?? [] ).length > 0;

	// If the account is not connected or the onboarding is not started, or not completed then the gateway needs setup.
	const gatewayNeedsOnboarding =
		! gateway.state.account_connected ||
		( gateway.state.account_connected &&
			! gateway.onboarding.state.started ) ||
		( gateway.state.account_connected &&
			gateway.onboarding.state.started &&
			! gateway.onboarding.state.completed );

	const determineGatewayStatus = () => {
		if ( ! gateway.state.enabled && gateway.state.needs_setup ) {
			return 'needs_setup';
		}
		if ( gateway.state.enabled ) {
			if ( isWcPay ) {
				if ( gateway.state.test_mode ) {
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
				isWcPay ? `woocommerce-item__woocommerce-payments` : ''
			} ${ shouldHighlightIncentive ? `has-incentive` : '' }` }
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
						{ incentive ? (
							<StatusBadge
								status="has_incentive"
								message={ incentive.badge }
							/>
						) : (
							<StatusBadge status={ determineGatewayStatus() } />
						) }
						{ gateway.supports?.includes( 'subscriptions' ) && (
							<Tooltip
								text={ __(
									'Supports recurring payments',
									'woocommerce'
								) }
								children={
									<img
										src={
											WC_ASSET_URL +
											'images/icons/recurring-payments.svg'
										}
										alt={ __(
											'Icon to indicate support for recurring payments',
											'woocommerce'
										) }
									/>
								}
							/>
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
						{ ! gateway.state.enabled &&
							! gatewayNeedsOnboarding && (
								<EnableGatewayButton
									gatewayId={ gateway.id }
									gatewayState={ gateway.state }
									settingsHref={
										gateway.management._links.settings.href
									}
									onboardingHref={
										gateway.onboarding._links.onboard.href
									}
									isOffline={ false }
									gatewayHasRecommendedPaymentMethods={
										gatewayHasRecommendedPaymentMethods
									}
									incentive={ incentive }
									acceptIncentive={ acceptIncentive }
								/>
							) }

						{ ! gatewayNeedsOnboarding && (
							<SettingsButton
								settingsHref={
									gateway.management._links.settings.href
								}
							/>
						) }

						{ gatewayNeedsOnboarding && (
							<CompleteSetupButton
								gatewayId={ gateway.id }
								gatewayState={ gateway.state }
								onboardingState={ gateway.onboarding.state }
								settingsHref={
									gateway.management._links.settings.href
								}
								onboardingHref={
									gateway.onboarding._links.onboard.href
								}
								gatewayHasRecommendedPaymentMethods={
									gatewayHasRecommendedPaymentMethods
								}
							/>
						) }

						{ isWooPayments( gateway.id ) &&
							// There is no actual switch-to-live in dev mode.
							! gateway.state.dev_mode &&
							gateway.state.account_connected &&
							gateway.onboarding.state.completed &&
							gateway.onboarding.state.test_mode && (
								<ActivatePaymentsButton
									acceptIncentive={ acceptIncentive }
									incentive={ incentive }
								/>
							) }

						<EllipsisMenu
							label={ __(
								'Payment Provider Options',
								'woocommerce'
							) }
							provider={ gateway }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
