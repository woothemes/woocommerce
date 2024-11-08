/**
 * External dependencies
 */
import React from 'react';
import { Button, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './ellipsis-menu-content.scss';

interface EllipsisMenuContentProps {
	gatewayType: 'woopayments' | 'preferred' | 'third_party';
	isInstalled: boolean;
	isEnabled: boolean;
	needsSetup: boolean;
}

const EllipsisMenuContent = ( {
	gatewayType,
	isEnabled,
	isInstalled,
	needsSetup,
}: EllipsisMenuContentProps ) => {
	return (
		<div className="woocommerce-list__item-after__ellipsis-menu">
			{ gatewayType === 'woopayments' && (
				<Button>{ __( 'See pricing & fees', 'woocommerce' ) }</Button>
			) }
			{ ( ! isInstalled || gatewayType === 'third_party' ) && (
				<Button>{ __( 'Learn more', 'woocommerce' ) }</Button>
			) }
			{ ( gatewayType === 'woopayments' ||
				gatewayType === 'preferred' ) &&
				! isEnabled && (
					<Button>
						{ __( 'See Terms of Service', 'woocommerce' ) }
					</Button>
				) }
			{ ( gatewayType === 'woopayments' ||
				gatewayType === 'preferred' ) &&
				isInstalled && (
					<Button>
						{ __( 'View documentation', 'woocommerce' ) }
					</Button>
				) }
			{ isEnabled &&
				( gatewayType === 'woopayments' ||
					gatewayType === 'preferred' ) && (
					<Button>{ __( 'Get support', 'woocommerce' ) }</Button>
				) }
			<CardDivider />
			{ gatewayType === 'woopayments' && isEnabled && needsSetup && (
				<Button>{ __( 'Reset account', 'woocommerce' ) }</Button>
			) }
			{ isEnabled && <Button className={ 'components-button__danger' }>{ __( 'Disable', 'woocommerce' ) }</Button> }
			{ ! isInstalled && ! isEnabled && (
				<Button>{ __( 'Hide suggestion', 'woocommerce' ) }</Button>
			) }
			{ isInstalled && ! isEnabled && (
				<Button>{ __( 'Deactivate', 'woocommerce' ) }</Button>
			) }
		</div>
	);
};

export default EllipsisMenuContent;
