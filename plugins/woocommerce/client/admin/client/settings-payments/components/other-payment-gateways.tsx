/**
 * External dependencies
 */
import { Gridicon } from '@automattic/components';
import { Plugin } from '@woocommerce/data';
import { Button } from '@wordpress/components';
import React, { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useEffect } from 'react';

/**
 * Internal dependencies
 */
import { getAdminSetting } from '~/utils/admin-settings';
import { parseScriptTag } from '~/settings-payments/utils';

const assetUrl = getAdminSetting( 'wcAdminAssetUrl' );

type OtherPaymentGatewaysProps = {
	isInstalled: boolean;
	installingPlugin: string | null;
	setupPlugin: ( plugin: Plugin ) => void;
};

export const OtherPaymentGateways = ( {
	isInstalled,
	installingPlugin,
	setupPlugin,
}: OtherPaymentGatewaysProps ) => {
	const [ isExpanded, setIsExpanded ] = useState( false );
	const [
		otherPaymentExtensionSuggestions,
		setOtherPaymentExtensionSuggestions,
	] = useState< Plugin[] >( [] );

	useEffect( () => {
		setOtherPaymentExtensionSuggestions(
			parseScriptTag(
				'experimental_wc_settings_payments_other_extensions_suggestions'
			)
		);
	}, [ isInstalled ] );

	if ( otherPaymentExtensionSuggestions.length === 0 ) {
		return null; // Don't render the component if there are no suggestions
	}

	return (
		<div className="other-payment-gateways">
			<div className="other-payment-gateways__header">
				<div className="other-payment-gateways__header__title">
					<span>
						{ __( 'Other payment options', 'woocommerce' ) }
					</span>
					{ ! isExpanded && (
						<>
							{ otherPaymentExtensionSuggestions.map(
								( plugin: Plugin ) => (
									<img
										key={ plugin.id }
										src={ plugin.image_72x72 }
										alt={ plugin.title }
										width="24"
										height="24"
										className="other-payment-gateways__header__title__image"
									/>
								)
							) }
						</>
					) }
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
						{ otherPaymentExtensionSuggestions.map(
							( plugin: Plugin ) => (
								<div
									className="other-payment-gateways__content__grid-item"
									key={ plugin.id }
								>
									<img
										src={ plugin.image_72x72 }
										alt={ plugin.title }
									/>
									<div className="other-payment-gateways__content__grid-item__content">
										<span className="other-payment-gateways__content__grid-item__content__title">
											{ plugin.title }
										</span>
										<span className="other-payment-gateways__content__grid-item__content__description">
											{ plugin.content }
										</span>
										<div className="other-payment-gateways__content__grid-item__content__actions">
											<Button
												variant="primary"
												onClick={ () =>
													setupPlugin( plugin )
												}
												isBusy={
													installingPlugin ===
													plugin.id
												}
												disabled={ !! installingPlugin }
											>
												{ __(
													'Install',
													'woocommerce'
												) }
											</Button>
										</div>
									</div>
								</div>
							)
						) }
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
