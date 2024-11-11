/**
 * External dependencies
 */
import React from 'react';
import interpolateComponents from '@automattic/interpolate-components';
import { Button, Card, CardBody, CardMedia } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Link } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './incentive-banner.scss';
import IncentiveIcon from './incentive-icon.svg';
import { StatusBadge } from '~/settings-payments/components/status-badge';

export const IncentiveBanner = () => {
	const [ isSubmitted, setIsSubmitted ] = useState( false );
	const [ isDismissClicked, setIsDismissClicked ] = useState( false );

	const handleSetup = () => {
		console.log( 'Handle setup' );
		setIsSubmitted( true );
	};

	const handleDismiss = () => {
		console.log( 'Handle dismiss' );
		setIsDismissClicked( true );
	};

	return (
		<Card className="woocommerce-incentive-banner" isRounded={ true }>
			<div className="woocommerce-incentive-banner__content">
				<CardMedia>
					<img
						src={ IncentiveIcon }
						alt={ __( 'Incentive hero image', 'woocommerce' ) }
					/>
				</CardMedia>
				<CardBody className={ 'woocommerce-incentive-banner__body' }>
					<div>
						<StatusBadge
							status="has_incentive"
							message={ __(
								'Limited time offer',
								'woocommerce'
							) }
						/>
					</div>
					<h2>
						{ __(
							'Save 10% on processing fees for your first 3 months when you sign up for WooPayments',
							'woocommerce'
						) }
					</h2>
					<p>
						{ __(
							'Use the native payments solution built and supported by Woo to accept online and in-person payments, track revenue, and handle all payment activity in one place.',
							'woocommerce'
						) }
					</p>
					<p className={ 'woocommerce-incentive-banner__terms' }>
						{ interpolateComponents( {
							mixedString: __(
								'See {{link}}Terms and Conditions{{/link}} for details.',
								'woocommerce'
							),
							components: {
								link: (
									<Link
										href="https://woocommerce.com/terms-conditions/woopayments-action-promotion-2023/"
										target="_blank"
									>
										<></>
									</Link>
								),
							},
						} ) }
					</p>
					<Button
						variant={ 'primary' }
						isBusy={ isSubmitted }
						disabled={ isSubmitted }
						onClick={ handleSetup }
					>
						{ __( 'Get started', 'woocommerce' ) }
					</Button>
					<Button
						variant={ 'tertiary' }
						isBusy={ isDismissClicked }
						disabled={ isDismissClicked }
						onClick={ handleDismiss }
					>
						{ __( 'No thanks', 'woocommerce' ) }
					</Button>
				</CardBody>
			</div>
		</Card>
	);
};
