/**
 * External dependencies
 */
import { Gridicon } from '@automattic/components';
import { Button, Tooltip } from '@wordpress/components';
import React, { useState, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import {
	SuggestedPaymentExtension,
	SuggestedPaymentExtensionCategory,
} from '@woocommerce/data';

/**
 * Internal dependencies
 */
import { getAdminSetting } from '~/utils/admin-settings';
import { GridItemPlaceholder } from '~/settings-payments/components/grid-item-placeholder';

const assetUrl = getAdminSetting( 'wcAdminAssetUrl' );

interface OtherPaymentGatewaysProps {
	suggestions: SuggestedPaymentExtension[];
	suggestionCategories: SuggestedPaymentExtensionCategory[];
	installingPlugin: string | null;
	setupPlugin: (
		id: string,
		slug: string,
		onboardingUrl: string | null
	) => void;
	isFetching: boolean;
}

export const OtherPaymentGateways = ( {
	suggestions,
	suggestionCategories,
	installingPlugin,
	setupPlugin,
	isFetching,
}: OtherPaymentGatewaysProps ) => {
	const urlParams = new URLSearchParams( window.location.search );
	// Determine the initial expanded state based on URL params.
	const initialExpanded = urlParams.get( 'other_pes_section' ) === 'expanded';
	const [ isExpanded, setIsExpanded ] = useState( initialExpanded );

	const suggestionsByCategory = useMemo(
		() =>
			suggestionCategories.map(
				(
					category
				): {
					category: SuggestedPaymentExtensionCategory;
					suggestions: SuggestedPaymentExtension[];
				} => {
					return {
						category,
						suggestions: suggestions.filter(
							( suggestion ) => suggestion._type === category.id
						),
					};
				}
			),
		[ suggestions, suggestionCategories ]
	);

	// Memoize the collapsed images to avoid re-rendering when not expanded
	const collapsedImages = useMemo( () => {
		return isFetching ? (
			<>
				<div className="other-payment-gateways__header__title__image-placeholder" />
				<div className="other-payment-gateways__header__title__image-placeholder" />
				<div className="other-payment-gateways__header__title__image-placeholder" />
			</>
		) : (
			suggestions.map( ( extension ) => (
				<img
					key={ extension.id }
					src={ extension.icon }
					alt={ extension.title }
					width="24"
					height="24"
					className="other-payment-gateways__header__title__image"
				/>
			) )
		);
	}, [ suggestions, isFetching ] );

	// Memoize the expanded content to avoid re-rendering when expanded
	const expandedContent = useMemo( () => {
		return isFetching ? (
			<>
				<GridItemPlaceholder />
				<GridItemPlaceholder />
				<GridItemPlaceholder />
			</>
		) : (
			suggestionsByCategory.map(
				( { category, suggestions: categorySuggestions } ) => {
					if ( categorySuggestions.length === 0 ) {
						return null;
					}

					return (
						<div key={ category.id }>
							<div className="other-payment-gateways__content__title">
								<h3 className="other-payment-gateways__content__title__h3">
									{ decodeEntities( category.title ) }
								</h3>
								<Tooltip
									text={ decodeEntities(
										category.description
									) }
									position="top right"
								>
									<Gridicon
										icon="info-outline"
										className="other-payment-gateways__content__title__tooltip"
									/>
								</Tooltip>
							</div>

							<div className="other-payment-gateways__content__grid">
								{ categorySuggestions.map( ( extension ) => (
									<div
										className="other-payment-gateways__content__grid-item"
										key={ extension.id }
									>
										<img
											src={ extension.icon }
											alt={ decodeEntities(
												extension.title
											) }
										/>
										<div className="other-payment-gateways__content__grid-item__content">
											<span className="other-payment-gateways__content__grid-item__content__title">
												{ extension.title }
											</span>
											<span className="other-payment-gateways__content__grid-item__content__description">
												{ decodeEntities(
													extension.description
												) }
											</span>
											<div className="other-payment-gateways__content__grid-item__content__actions">
												<Button
													variant="primary"
													onClick={ () =>
														setupPlugin(
															extension.id,
															extension.plugin
																.slug,
															null // Suggested gateways won't have an onboarding URL.
														)
													}
													isBusy={
														installingPlugin ===
														extension.id
													}
													disabled={
														!! installingPlugin
													}
												>
													{ __(
														'Install',
														'woocommerce'
													) }
												</Button>
											</div>
										</div>
									</div>
								) ) }
							</div>
						</div>
					);
				}
			)
		);
	}, [ suggestionsByCategory, installingPlugin, setupPlugin, isFetching ] );

	if ( ! isFetching && suggestions.length === 0 ) {
		return null; // Don't render the component if there are no suggestions
	}

	return (
		<div className="other-payment-gateways">
			<div
				className="other-payment-gateways__header"
				onClick={ () => {
					setIsExpanded( ! isExpanded );
				} }
				onKeyDown={ ( event ) => {
					if ( event.key === 'Enter' || event.key === ' ' ) {
						setIsExpanded( ! isExpanded );
					}
				} }
				role="button"
				tabIndex={ 0 }
				aria-expanded={ isExpanded }
			>
				<div className="other-payment-gateways__header__title">
					<span>
						{ __( 'Other payment options', 'woocommerce' ) }
					</span>
					{ ! isExpanded && <>{ collapsedImages }</> }
				</div>
				<Gridicon icon={ isExpanded ? 'chevron-up' : 'chevron-down' } />
			</div>
			{ isExpanded && (
				<div className="other-payment-gateways__content">
					{ expandedContent }
					<div className="other-payment-gateways__content__external-icon">
						<Button
							variant={ 'link' }
							target="_blank"
							href="https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/"
						>
							<img
								src={ assetUrl + '/icons/external-link.svg' }
								alt=""
							/>
							{ __( 'More payment options', 'woocommerce' ) }
						</Button>
					</div>
				</div>
			) }
		</div>
	);
};
