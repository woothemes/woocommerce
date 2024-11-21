/**
 * External dependencies
 */
import React from 'react';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	PLUGINS_STORE_NAME,
	PAYMENT_SETTINGS_STORE_NAME,
	PaymentGatewayLink,
} from '@woocommerce/data';
import { useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './ellipsis-menu-content.scss';

interface EllipsisMenuContentProps {
	pluginId: string;
	pluginName: string;
	isSuggestion: boolean;
	links: PaymentGatewayLink[];
	isWooPayments?: boolean;
	isEnabled?: boolean;
	needsSetup?: boolean;
	testMode?: boolean;
}

export const EllipsisMenuContent = ( {
	pluginId,
	pluginName,
	isSuggestion,
	links,
	isWooPayments = false,
	isEnabled = false,
	needsSetup = false,
	testMode = false,
}: EllipsisMenuContentProps ) => {
	const { deactivatePlugin, createErrorNotice } =
		useDispatch( PLUGINS_STORE_NAME );
	const [ isDeactivating, setIsDeactivating ] = useState( false );
	const [ isDisabling, setIsDisabling ] = useState( false );

	const { invalidateResolutionForStoreSelector, togglePaymentGateway } =
		useDispatch( PAYMENT_SETTINGS_STORE_NAME );
	const { createSuccessNotice } = useDispatch( 'core/notices' );

	const typeToDisplayName: { [ key: string ]: string } = {
		pricing: __( 'See pricing & fees', 'woocommerce' ),
		about: __( 'Learn more', 'woocommerce' ),
		terms: __( 'See Terms of Service', 'woocommerce' ),
		support: __( 'Get support', 'woocommerce' ),
		documentation: __( 'View documentation', 'woocommerce' ),
	};

	const deactivateGateway = ( e: React.MouseEvent ) => {
		e.preventDefault();
		setIsDeactivating( true );
		deactivatePlugin( pluginName )
			.then( () => {
				createSuccessNotice(
					__( 'Plugin was successfully deactivated.', 'woocommerce' )
				);
				invalidateResolutionForStoreSelector(
					'getRegisteredPaymentGateways'
				);
				setIsDeactivating( false );
			} )
			.catch( () => {
				createErrorNotice(
					__( 'Failed to deactivate the plugin.', 'woocommerce' )
				);
				setIsDeactivating( false );
			} );
	};

	const disableGateway = ( e: React.MouseEvent ) => {
		e.preventDefault();
		const gatewayToggleNonce =
			window.woocommerce_admin.nonces?.gateway_toggle || '';

		if ( ! gatewayToggleNonce ) {
			createErrorNotice(
				__( 'Failed to disable the plugin.', 'woocommerce' )
			);
			return;
		}
		setIsDisabling( true );
		togglePaymentGateway(
			pluginId,
			window.woocommerce_admin.ajax_url,
			gatewayToggleNonce
		)
			.then( () => {
				invalidateResolutionForStoreSelector(
					'getRegisteredPaymentGateways'
				);
				setIsDisabling( false );
			} )
			.catch( () => {
				createErrorNotice(
					__( 'Failed to disable the plugin.', 'woocommerce' )
				);
				setIsDisabling( false );
			} );
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
					isBusy={ isDeactivating }
					disabled={ isDeactivating }
				>
					{ __( 'Deactivate', 'woocommerce' ) }
				</Button>
			) }
			{ ! isSuggestion && isEnabled && (
				<Button
					className={ 'components-button__danger' }
					onClick={ disableGateway }
					isBusy={ isDisabling }
					disabled={ isDisabling }
				>
					{ __( 'Disable', 'woocommerce' ) }
				</Button>
			) }
		</div>
	);
};
