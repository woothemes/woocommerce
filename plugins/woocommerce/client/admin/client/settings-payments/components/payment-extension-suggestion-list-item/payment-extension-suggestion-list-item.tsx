/**
 * External dependencies
 */
import React from 'react';
import { decodeEntities } from '@wordpress/html-entities';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { WooPaymentsMethodsLogos } from '@woocommerce/onboarding';
import { PaymentExtensionSuggestionProvider } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';
import { EllipsisMenuWrapper as EllipsisMenu } from '~/settings-payments/components/ellipsis-menu-content';
import {
	isWooPayments,
	hasIncentive,
	isActionIncentive,
	isIncentiveDismissedInContext,
	isWooPayEligible,
} from '~/settings-payments/utils';
import { DefaultDragHandle } from '~/settings-payments/components/sortable';
import { StatusBadge } from '~/settings-payments/components/status-badge';
import { IncentiveStatusBadge } from '~/settings-payments/components/incentive-status-badge';

type PaymentExtensionSuggestionListItemProps = {
	/**
	 * The payment extension suggestion to display.
	 */
	extension: PaymentExtensionSuggestionProvider;
	/**
	 * The ID of the plugin currently being installed, or `null` if none.
	 */
	installingPlugin: string | null;
	/**
	 * Callback function to handle the setup of the plugin. Receives the plugin ID, slug, and onboarding URL (if available).
	 */
	setupPlugin: (
		id: string,
		slug: string,
		onboardingUrl: string | null
	) => void;
	/**
	 * Indicates whether the plugin is already installed.
	 */
	pluginInstalled: boolean;
	/**
	 * Callback function to handle accepting an incentive. Receives the incentive ID as a parameter.
	 */
	acceptIncentive: ( id: string ) => void;
};

/**
 * A component that renders an individual payment extension suggestion in a list.
 * Displays extension details including title, description, and an action button
 * for installation or enabling the plugin. The component highlights incentive if available.
 */
export const PaymentExtensionSuggestionListItem = ( {
	extension,
	installingPlugin,
	setupPlugin,
	pluginInstalled,
	acceptIncentive,
	...props
}: PaymentExtensionSuggestionListItemProps ) => {
	const incentive = hasIncentive( extension ) ? extension._incentive : null;
	const shouldHighlightIncentive =
		hasIncentive( extension ) &&
		( ! isActionIncentive( extension._incentive ) ||
			isIncentiveDismissedInContext(
				extension._incentive,
				'wc_settings_payments__banner'
			) );

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
					{ extension.icon && (
						<img
							className={ 'woocommerce-list__item-image' }
							src={ extension.icon }
							alt={ extension.title + ' logo' }
						/>
					) }
				</div>
				<div className="woocommerce-list__item-text">
					<span className="woocommerce-list__item-title">
						{ extension.title }{ ' ' }
						{ ! hasIncentive( extension ) &&
							isWooPayments( extension.id ) && (
								<StatusBadge status="recommended" />
							) }
						{ incentive && (
							<IncentiveStatusBadge incentive={ incentive } />
						) }
					</span>
					<span
						className="woocommerce-list__item-content"
						dangerouslySetInnerHTML={ sanitizeHTML(
							decodeEntities( extension.description )
						) }
					/>
					{ isWooPayments( extension.id ) && (
						<WooPaymentsMethodsLogos
							maxElements={ 10 }
							tabletWidthBreakpoint={ 1080 } // Reduce the number of logos earlier.
							mobileWidthBreakpoint={ 768 } // Reduce the number of logos earlier.
							isWooPayEligible={ isWooPayEligible( extension ) }
						/>
					) }
				</div>
				<div className="woocommerce-list__item-buttons">
					<div className="woocommerce-list__item-buttons__actions">
						<Button
							variant="primary"
							onClick={ () => {
								if ( incentive ) {
									acceptIncentive( incentive.promo_id );
								}

								setupPlugin(
									extension.id,
									extension.plugin.slug,
									extension.onboarding?._links.onboard.href ??
										null
								);
							} }
							isBusy={ installingPlugin === extension.id }
							disabled={ !! installingPlugin }
						>
							{ pluginInstalled
								? __( 'Enable', 'woocommerce' )
								: __( 'Install', 'woocommerce' ) }
						</Button>
					</div>
				</div>
				<div className="woocommerce-list__item-after">
					<div className="woocommerce-list__item-after__actions">
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
