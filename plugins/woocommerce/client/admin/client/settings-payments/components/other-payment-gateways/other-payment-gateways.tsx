/**
 * External dependencies
 */
import { Gridicon } from '@automattic/components';
import { Button } from '@wordpress/components';
import React, { useState, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { SuggestedPaymentExtension } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import { getAdminSetting } from '~/utils/admin-settings';

const assetUrl = getAdminSetting( 'wcAdminAssetUrl' );

interface OtherPaymentGatewaysProps {
	otherPluginSuggestions: SuggestedPaymentExtension[];
	installingPlugin: string | null;
	setupPlugin: ( extension: SuggestedPaymentExtension ) => void;
}

export const OtherPaymentGateways = ( {
	otherPluginSuggestions,
	installingPlugin,
	setupPlugin,
}: OtherPaymentGatewaysProps ) => {
	const [ isExpanded, setIsExpanded ] = useState( false );

	// Memoize the collapsed images to avoid re-rendering when not expanded
	const collapsedImages = useMemo(
		() =>
			otherPluginSuggestions.map( ( extension ) => (
				<img
					key={ extension.id }
					src={ extension.icon }
					alt={ extension.title }
					width="24"
					height="24"
					className="other-payment-gateways__header__title__image"
				/>
			) ),
		[ otherPluginSuggestions ]
	);

	// Memoize the expanded content to avoid re-rendering when expanded
	const expandedContent = useMemo(
		() =>
			otherPluginSuggestions.map( ( extension ) => (
				<div
					className="other-payment-gateways__content__grid-item"
					key={ extension.id }
				>
					<img src={ extension.icon } alt={ extension.title } />
					<div className="other-payment-gateways__content__grid-item__content">
						<span className="other-payment-gateways__content__grid-item__content__title">
							{ extension.title }
						</span>
						<span className="other-payment-gateways__content__grid-item__content__description">
							{ extension.description }
						</span>
						<div className="other-payment-gateways__content__grid-item__content__actions">
							<Button
								variant="primary"
								onClick={ () => setupPlugin( extension ) }
								isBusy={ installingPlugin === extension.id }
								disabled={ !! installingPlugin }
							>
								{ __( 'Install', 'woocommerce' ) }
							</Button>
						</div>
					</div>
				</div>
			) ),
		[ otherPluginSuggestions, installingPlugin ]
	);

	if ( otherPluginSuggestions.length === 0 ) {
		return null; // Don't render the component if there are no suggestions
	}

	return (
		<div className="other-payment-gateways">
			<div className="other-payment-gateways__header">
				<div className="other-payment-gateways__header__title">
					<span>
						{ __( 'Other payment options', 'woocommerce' ) }
					</span>
					{ ! isExpanded && <>{ collapsedImages }</> }
				</div>
				<Button
					variant={ 'link' }
					onClick={ () => {
						setIsExpanded( ! isExpanded );
					} }
					aria-expanded={ isExpanded }
				>
					{ isExpanded ? (
						<Gridicon icon="chevron-up" />
					) : (
						<Gridicon icon="chevron-down" />
					) }
				</Button>
			</div>
			{ isExpanded && (
				<div className="other-payment-gateways__content">
					<div className="other-payment-gateways__content__grid">
						{ expandedContent }
					</div>
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
