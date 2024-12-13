/**
 * External dependencies
 */

import { decodeEntities } from '@wordpress/html-entities';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { WooPaymentMethodsLogos } from '@woocommerce/onboarding';
import { PaymentExtensionSuggestionProvider } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';
import { EllipsisMenuWrapper as EllipsisMenu } from '~/settings-payments/components/ellipsis-menu-content';
import { isWooPayments } from '~/settings-payments/utils';
import { DefaultDragHandle } from '~/settings-payments/components/sortable';
import { StatusBadge } from '~/settings-payments/components/status-badge';

type PaymentExtensionSuggestionListItemProps = {
	extension: PaymentExtensionSuggestionProvider;
	installingPlugin: string | null;
	setupPlugin: ( id: string, slug: string ) => void;
	pluginInstalled: boolean;
};

export const PaymentExtensionSuggestionListItem = ( {
	extension,
	installingPlugin,
	setupPlugin,
	pluginInstalled,
	...props
}: PaymentExtensionSuggestionListItemProps ) => {
	const hasIncentive = !! extension._incentive;
	const shouldHighlightIncentive =
		hasIncentive && ! extension._incentive?.promo_id.includes( '-action-' );

	return (
		<div
			id={ extension.id }
			className={ `transitions-disabled woocommerce-list__item woocommerce-list__item-enter-done ${
				shouldHighlightIncentive ? `has-incentive` : ''
			}` }
			{ ...props }
		>
			<div className="woocommerce-list__item-inner">
				<div className="woocommerce-list__item-before">
					<DefaultDragHandle />
					<img
						src={ extension.icon }
						alt={ extension.title + ' logo' }
					/>
				</div>
				<div className="woocommerce-list__item-text">
					<span className="woocommerce-list__item-title">
						{ extension.title }{ ' ' }
						{ ! hasIncentive && isWooPayments( extension.id ) && (
							<StatusBadge status="recommended" />
						) }
						{ hasIncentive && extension._incentive && (
							<StatusBadge
								status="has_incentive"
								message={ extension._incentive.badge }
							/>
						) }
					</span>
					<span
						className="woocommerce-list__item-content"
						dangerouslySetInnerHTML={ sanitizeHTML(
							decodeEntities( extension.description )
						) }
					/>
					{ isWooPayments( extension.id ) && (
						<WooPaymentMethodsLogos
							maxElements={ 10 }
							isWooPayEligible={ true }
						/>
					) }
				</div>
				<div className="woocommerce-list__item-after">
					<div className="woocommerce-list__item-after__actions">
						<Button
							variant="primary"
							onClick={ () =>
								setupPlugin(
									extension.id,
									extension.plugin.slug
								)
							}
							isBusy={ installingPlugin === extension.id }
							disabled={ !! installingPlugin }
						>
							{ pluginInstalled
								? __( 'Enable', 'woocommerce' )
								: __( 'Install', 'woocommerce' ) }
						</Button>

						<EllipsisMenu
							label={ __(
								'Payment Provider Options',
								'woocommerce'
							) }
							provider={ extension }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
