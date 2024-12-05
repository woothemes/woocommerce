/**
 * External dependencies
 */
import React from 'react';
import { Button, Card, CardBody, CardMedia } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { createInterpolateElement, useState } from '@wordpress/element';
import { Link } from '@woocommerce/components';
import { PaymentIncentive } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import { WC_ASSET_URL } from '~/utils/admin-settings';
import './incentive-banner.scss';
import { StatusBadge } from '~/settings-payments/components/status-badge';

interface IncentiveBannerProps {
	/**
	 * Incentive data.
	 */
	incentive: PaymentIncentive;
	/**
	 * Callback to handle dismiss action.
	 */
	onDismiss: () => void;
	/**
	 * Callback to handle setup action.
	 */
	onSetup: () => void;
}
export const IncentiveBanner = ( {
	incentive,
	onDismiss,
	onSetup,
}: IncentiveBannerProps ) => {
	const [ isSubmitted, setIsSubmitted ] = useState( false );
	const [ isDismissClicked, setIsDismissClicked ] = useState( false );

	const handleSetup = () => {
		setIsSubmitted( true );
	};

	const handleDismiss = () => {
		setIsDismissClicked( true );
	};

	return (
		<Card className="woocommerce-incentive-banner" isRounded={ true }>
			<div className="woocommerce-incentive-banner__content">
				<CardMedia>
					<img
						src={
							WC_ASSET_URL +
							'images/settings-payments/incentives-icon.svg'
						}
						alt={ __( 'Incentive icon', 'woocommerce' ) }
					/>
				</CardMedia>
				<CardBody className="woocommerce-incentive-banner__body">
					<StatusBadge
						status="has_incentive"
						message={ __( 'Limited time offer', 'woocommerce' ) }
					/>
					<h2>{ incentive.title }</h2>
					<p>{ incentive.description }</p>
					<p className={ 'woocommerce-incentive-banner__terms' }>
						{ createInterpolateElement(
							__(
								'See <termsLink /> for details.',
								'woocommerce'
							),
							{
								termsLink: (
									<Link
										href={ incentive.tc_url }
										target="_blank"
										rel="noreferrer"
										type="external"
									>
										{ __(
											'Terms and Conditions',
											'woocommerce'
										) }
									</Link>
								),
							}
						) }
					</p>

					<Button
						variant={ 'primary' }
						isBusy={ isSubmitted }
						disabled={ isSubmitted }
						onClick={ handleSetup }
					>
						{ incentive.cta_label }
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
