/**
 * External dependencies
 */

import { decodeEntities } from '@wordpress/html-entities';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { WooPaymentMethodsLogos } from '@woocommerce/onboarding';
import { EllipsisMenu } from '@woocommerce/components';
import { PaymentProvider } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';
import { EllipsisMenuContent } from '~/settings-payments/components/ellipsis-menu-content';
import { isWooPayments } from '~/settings-payments/utils';
import { StatusBadge } from '~/settings-payments/components/status-badge';

type PaymentExtensionSuggestionListItemProps = {
	extension: PaymentProvider;
	installingPlugin: string | null;
	setupPlugin: ( id: string, slug: string ) => void;
	pluginInstalled: boolean;
};

export const PaymentExtensionSuggestionListItem = ( {
	extension,
	installingPlugin,
	setupPlugin,
	pluginInstalled,
}: PaymentExtensionSuggestionListItemProps ) => {
	const hasIncentive = !! extension._incentive;

	return {
		key: extension.id,
		className: `transitions-disabled woocommerce-item__payment-gateway ${
			hasIncentive ? `has-incentive` : ''
		}`,
		title: (
			<>
				{ extension.title }
				{ hasIncentive && extension._incentive && (
					<StatusBadge
						status="has_incentive"
						message={ extension._incentive.badge }
					/>
				) }
			</>
		),
		content: (
			<>
				<span
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
			</>
		),
		after: (
			<div className="woocommerce-list__item-after__actions">
				<>
					<Button
						variant="primary"
						onClick={ () =>
							setupPlugin( extension.id, extension.plugin.slug )
						}
						isBusy={ installingPlugin === extension.id }
						disabled={ !! installingPlugin }
					>
						{ pluginInstalled
							? __( 'Enable', 'woocommerce' )
							: __( 'Install', 'woocommerce' ) }
					</Button>

					<EllipsisMenu
						label={ __( 'Task List Options', 'woocommerce' ) }
						renderContent={ ( { onToggle } ) => (
							<EllipsisMenuContent
								pluginId={ extension.id }
								pluginName={ extension.plugin.slug }
								isSuggestion={ true }
								links={ extension.links }
								onToggle={ onToggle }
							/>
						) }
					/>
				</>
			</div>
		),
		before: (
			<img src={ extension.icon } alt={ extension.title + ' logo' } />
		),
	};
};
