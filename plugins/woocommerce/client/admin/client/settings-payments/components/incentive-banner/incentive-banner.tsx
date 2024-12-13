/**
 * External dependencies
 */
import React from 'react';
import { Button, Card, CardBody } from '@wordpress/components';
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
	 * Callback used when an incentive is accepted.
	 *
	 * @param id   Plugin ID.
	 * @param slug Plugin slug.
	 */
	onAccept: ( id: string, slug: string ) => void;
	/**
	 * Callback to handle dismiss action.
	 *
	 * @param dismissUrl Dismiss URL.
	 * @param context    The context in which the incentive is dismissed. (e.g. whether it was in a modal or banner).
	 */
	onDismiss: ( dismissUrl: string, context: string ) => void;
}

export const IncentiveBanner = ( {
	incentive,
	onDismiss,
	onAccept,
}: IncentiveBannerProps ) => {
	const [ isSubmitted, setIsSubmitted ] = useState( false );
	const [ isDismissed, setIsDismissed ] = useState( false );
	const [ isBusy, setIsBusy ] = useState( false );

	const incentiveContext = 'wc_settings_payments__banner';

	const handleAccept = () => {
		setIsBusy( true );
		onAccept( 'woopayments', 'woocommerce-payments' );
		setIsBusy( false );
		setIsSubmitted( true );
	};

	const handleDismiss = () => {
		setIsBusy( true );
		onDismiss( incentive._links.dismiss.href, incentiveContext );
		setIsBusy( false );
		setIsDismissed( true );
	};

	const isDismissedInContext =
		incentive._dismissals.includes( 'all' ) ||
		incentive._dismissals.includes( incentiveContext );

	if ( isDismissedInContext || isSubmitted || isDismissed ) {
		return null;
	}

	return (
		<Card className="woocommerce-incentive-banner" isRounded={ true }>
			<div className="woocommerce-incentive-banner__content">
				<img
					src={
						WC_ASSET_URL +
						'images/settings-payments/incentives-illustration.svg'
					}
					alt={ __( 'Incentive illustration', 'woocommerce' ) }
				/>
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
						onClick={ handleAccept }
					>
						{ incentive.cta_label }
					</Button>
					<Button
						variant={ 'tertiary' }
						isBusy={ isBusy }
						disabled={ isBusy }
						onClick={ handleDismiss }
					>
						{ __( 'Dismiss', 'woocommerce' ) }
					</Button>
				</CardBody>
			</div>
		</Card>
	);
};
