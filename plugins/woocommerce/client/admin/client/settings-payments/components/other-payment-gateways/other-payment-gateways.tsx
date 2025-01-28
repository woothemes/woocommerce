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
	/**
	 * Array of suggested payment extensions.
	 */
	suggestions: SuggestedPaymentExtension[];
	/**
	 * Array of categories for the suggested payment extensions.
	 */
	suggestionCategories: SuggestedPaymentExtensionCategory[];
	/**
	 * The ID of the plugin currently being installed, or `null` if none.
	 */
	installingPlugin: string | null;
	/**
	 * Callback to handle plugin setup. Accepts the plugin ID, slug, and onboarding URL (if available).
	 */
	setupPlugin: (
		id: string,
		slug: string,
		onboardingUrl: string | null
	) => void;
	/**
	 * Indicates whether the suggestions are still being fetched.
	 */
	isFetching: boolean;
}

/**
 * A component that displays a collapsible list of suggested payment extensions grouped by categories.
 * When collapsed, it shows a few icons representing the suggestions. When expanded, it displays detailed
 * information about each suggestion and allows the user to install them.
 */
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

	// Group suggestions by category.
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
				<div className="other-payment-gateways__header__title-image-placeholder" />
				<div className="other-payment-gateways__header__title-image-placeholder" />
				<div className="other-payment-gateways__header__title-image-placeholder" />
			</>
		) : (
			// Go through the category hierarchy so we render the collapsed images in the same order as when expanded.
			suggestionsByCategory.map(
				( { suggestions: categorySuggestions } ) => {
					if ( categorySuggestions.length === 0 ) {
						return null;
					}

					return categorySuggestions.map( ( extension ) => (
						<img
							key={ extension.id }
							src={ extension.icon }
							alt={ extension.title + ' small logo' }
							width="24"
							height="24"
							className="other-payment-gateways__header__title-image"
						/>
					) );
				}
			)
		);
	}, [ suggestionsByCategory, isFetching ] );

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
											className="other-payment-gateways__content__grid-item-image"
											src={ extension.icon }
											alt={
												decodeEntities(
													extension.title
												) + ' logo'
											}
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

	// Don't render the component if there are no suggestions and not fetching.
	if ( ! isFetching && suggestions.length === 0 ) {
		return null;
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
