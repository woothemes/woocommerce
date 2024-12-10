/**
 * External dependencies
 */
import React from 'react';
import { Button, CardDivider } from '@wordpress/components';
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
	pluginFile: string;
	isSuggestion: boolean;
	onToggle: () => void;
	links?: PaymentGatewayLink[];
	isWooPayments?: boolean;
	setResetAccountModalVisible?: ( isVisible: boolean ) => void;
	isEnabled?: boolean;
	needsSetup?: boolean;
	testMode?: boolean;
}

export const EllipsisMenuContent = ( {
	pluginId,
	pluginFile,
	isSuggestion,
	onToggle,
	links = [],
	isWooPayments = false,
	setResetAccountModalVisible = () => {},
	isEnabled = false,
	needsSetup = false,
	testMode = false,
}: EllipsisMenuContentProps ) => {
	const { deactivatePlugin } = useDispatch( PLUGINS_STORE_NAME );
	const [ isDeactivating, setIsDeactivating ] = useState( false );
	const [ isDisabling, setIsDisabling ] = useState( false );
	const [ isHidingSuggestion, setIsHidingSuggestion ] = useState( false );

	const {
		invalidateResolutionForStoreSelector,
		togglePaymentGateway,
		hideGatewaySuggestion,
	} = useDispatch( PAYMENT_SETTINGS_STORE_NAME );
	const { createErrorNotice, createSuccessNotice } =
		useDispatch( 'core/notices' );

	const typeToDisplayName: { [ key: string ]: string } = {
		pricing: __( 'See pricing & fees', 'woocommerce' ),
		about: __( 'Learn more', 'woocommerce' ),
		terms: __( 'See Terms of Service', 'woocommerce' ),
		support: __( 'Get support', 'woocommerce' ),
		documentation: __( 'View documentation', 'woocommerce' ),
	};

	const deactivateGateway = () => {
		setIsDeactivating( true );
		deactivatePlugin( pluginFile )
			.then( () => {
				createSuccessNotice(
					__( 'Plugin was successfully deactivated.', 'woocommerce' )
				);
				invalidateResolutionForStoreSelector( 'getPaymentProviders' );
				setIsDeactivating( false );
				onToggle();
			} )
			.catch( () => {
				createErrorNotice(
					__( 'Failed to deactivate the plugin.', 'woocommerce' )
				);
				setIsDeactivating( false );
				onToggle();
			} );
	};

	const disableGateway = () => {
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
				invalidateResolutionForStoreSelector( 'getPaymentProviders' );
				setIsDisabling( false );
				onToggle();
			} )
			.catch( () => {
				createErrorNotice(
					__( 'Failed to disable the plugin.', 'woocommerce' )
				);
				setIsDisabling( false );
				onToggle();
			} );
	};

	const hideSuggestion = () => {
		setIsHidingSuggestion( true );

		hideGatewaySuggestion( pluginId )
			.then( () => {
				invalidateResolutionForStoreSelector( 'getPaymentProviders' );
				setIsHidingSuggestion( false );
				onToggle();
			} )
			.catch( () => {
				createErrorNotice(
					__(
						'Failed to hide the payment gateway suggestion.',
						'woocommerce'
					)
				);
				setIsHidingSuggestion( false );
				onToggle();
			} );
	};

	return (
		<>
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
						<div
							className="woocommerce-ellipsis-menu__content__item"
							key={ link._type }
						>
							<Button target="_blank" href={ link.url }>
								{ displayName }
							</Button>
						</div>
					) : null;
				} ) }
			<CardDivider />
			{ isSuggestion && (
				<div
					className="woocommerce-ellipsis-menu__content__item"
					key="hide-suggestion"
				>
					<Button
						onClick={ hideSuggestion }
						isBusy={ isHidingSuggestion }
						disabled={ isHidingSuggestion }
					>
						{ __( 'Hide suggestion', 'woocommerce' ) }
					</Button>
				</div>
			) }
			{ ! isSuggestion && isWooPayments && ! needsSetup && testMode && (
				<div
					className="woocommerce-ellipsis-menu__content__item"
					key="reset-account"
				>
					<Button
						onClick={ () => {
							setResetAccountModalVisible( true );
							onToggle();
						} }
						className={ 'components-button__danger' }
					>
						{ __( 'Reset account', 'woocommerce' ) }
					</Button>
				</div>
			) }
			{ ! isSuggestion && ! isEnabled && (
				<div
					className="woocommerce-ellipsis-menu__content__item"
					key="deactivate"
				>
					<Button
						className={ 'components-button__danger' }
						onClick={ deactivateGateway }
						isBusy={ isDeactivating }
						disabled={ isDeactivating }
					>
						{ __( 'Deactivate', 'woocommerce' ) }
					</Button>
				</div>
			) }
			{ ! isSuggestion && isEnabled && (
				<div
					className="woocommerce-ellipsis-menu__content__item"
					key="disable"
				>
					<Button
						className={ 'components-button__danger' }
						onClick={ disableGateway }
						isBusy={ isDisabling }
						disabled={ isDisabling }
					>
						{ __( 'Disable', 'woocommerce' ) }
					</Button>
				</div>
			) }
		</>
	);
};
