/**
 * External dependencies
 */
import React from 'react';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PaymentGatewayLink } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './ellipsis-menu-content.scss';

interface EllipsisMenuContentProps {
	isSuggestion: boolean;
	links: PaymentGatewayLink[];
	isWooPayments?: boolean;
	isEnabled?: boolean;
	needsSetup?: boolean;
	testMode?: boolean;
}

export const EllipsisMenuContent = ( {
	isSuggestion,
	links,
	isWooPayments = false,
	isEnabled = false,
	needsSetup = false,
	testMode = false,
}: EllipsisMenuContentProps ) => {
	const typeToDisplayName: { [ key: string ]: string } = {
		pricing: __( 'See pricing & fees', 'woocommerce' ),
		about: __( 'Learn more', 'woocommerce' ),
		terms: __( 'See Terms of Service', 'woocommerce' ),
		support: __( 'Get support', 'woocommerce' ),
		documentation: __( 'View documentation', 'woocommerce' ),
	};

	const deactivateGateway = ( e: React.MouseEvent ) => {
		e.preventDefault();
	};

	const disableGateway = ( e: React.MouseEvent ) => {
		e.preventDefault();
	};

	const hideSuggestion = ( e: React.MouseEvent ) => {
		e.preventDefault();
	};

	const resetWooPaymentsAccount = ( e: React.MouseEvent ) => {
		e.preventDefault();
	};

	return (
		<div className="woocommerce-list__item-after__ellipsis-menu">
			{ links
				.filter( ( link: PaymentGatewayLink ) => {
					switch ( link._type ) {
						case 'pricing':
							// show pricing link for any state
							return true;
						case 'terms':
						case 'about':
							// show terms and about links for gateways that are not enabled yet
							return ! isEnabled;
						case 'documentation':
						case 'support':
							// show documentation and support links for gateways are enabled
							return isEnabled;
						default:
							return false;
					}
				} )
				.map( ( link: PaymentGatewayLink ) => {
					const displayName = typeToDisplayName[ link._type ];
					return displayName ? (
						// eslint-disable-next-line react/jsx-key
						<Button target="_blank" href={ link.url }>
							{ displayName }
						</Button>
					) : null;
				} ) }
			{ isSuggestion && (
				<Button
					onClick={ hideSuggestion }
					isBusy={ false }
					disabled={ false }
				>
					{ __( 'Hide suggestion', 'woocommerce' ) }
				</Button>
			) }
			{ ! isSuggestion && isWooPayments && ! needsSetup && testMode && (
				<Button
					onClick={ resetWooPaymentsAccount }
					isBusy={ false }
					disabled={ false }
					className={ 'components-button__danger' }
				>
					{ __( 'Reset account', 'woocommerce' ) }
				</Button>
			) }
			{ ! isSuggestion && ! isEnabled && (
				<Button
					className={ 'components-button__danger' }
					onClick={ deactivateGateway }
					isBusy={ false }
					disabled={ false }
				>
					{ __( 'Deactivate', 'woocommerce' ) }
				</Button>
			) }
			{ ! isSuggestion && isEnabled && (
				<Button
					className={ 'components-button__danger' }
					onClick={ disableGateway }
					isBusy={ false }
					disabled={ false }
				>
					{ __( 'Disable', 'woocommerce' ) }
				</Button>
			) }
		</div>
	);
};
