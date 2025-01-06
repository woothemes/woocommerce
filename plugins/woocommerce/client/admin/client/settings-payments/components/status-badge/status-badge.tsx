/**
 * External dependencies
 */
import React from 'react';
import { __ } from '@wordpress/i18n';
import { Pill } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './status-badge.scss';

interface StatusBadgeProps {
	/**
	 * Status of the badge. This decides which class to apply, and what the
	 * status message should be.
	 */
	status:
		| 'active'
		| 'inactive'
		| 'needs_setup'
		| 'test_mode'
		| 'recommended'
		| 'has_incentive';
	/**
	 * Override the default status message to display a custom one. Optional.
	 */
	message?: string;
}

export const StatusBadge = ( { status, message }: StatusBadgeProps ) => {
	const getStatusClass = () => {
		switch ( status ) {
			case 'active':
			case 'has_incentive':
				return 'woocommerce-status-badge--success';
			case 'needs_setup':
			case 'test_mode':
				return 'woocommerce-status-badge--warning';
			case 'recommended':
			case 'inactive':
				return 'woocommerce-status-badge--info';
			default:
				return '';
		}
	};

	const getStatusMessage = () => {
		switch ( status ) {
			case 'active':
				return __( 'Active', 'woocommerce' );
			case 'inactive':
				return __( 'Inactive', 'woocommerce' );
			case 'needs_setup':
				return __( 'Action needed', 'woocommerce' );
			case 'test_mode':
				return __( 'Test mode', 'woocommerce' );
			case 'recommended':
				return __( 'Recommended', 'woocommerce' );
			default:
				return '';
		}
	};

	return (
		<Pill className={ `woocommerce-status-badge ${ getStatusClass() }` }>
			{ message || getStatusMessage() }
		</Pill>
	);
};
