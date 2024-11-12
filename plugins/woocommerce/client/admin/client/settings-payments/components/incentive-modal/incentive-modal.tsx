/**
 * External dependencies
 */
import React from 'react';
import {
	Button,
	Card,
	CardBody,
	CardMedia,
	Modal,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { createInterpolateElement, useState } from '@wordpress/element';
import { Link } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './incentive-modal.scss';
import { StatusBadge } from '~/settings-payments/components/status-badge';
import { WC_ASSET_URL } from '~/utils/admin-settings';

interface IncentiveModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
}

export const IncentiveModal = ( {
	isOpen,
	onClose,
	onSubmit,
}: IncentiveModalProps ) => {
	const [ isBusy, setIsBusy ] = useState( false );

	return (
		<>
			{ isOpen && (
				<Modal
					title=""
					className="woocommerce-incentive-modal"
					onRequestClose={ onClose }
				>
					<Card className={ 'woocommerce-incentive-modal__card' }>
						<div className="woocommerce-incentive-modal__content">
							<CardMedia
								className={
									'woocommerce-incentive-modal__media'
								}
							>
								<img
									src={
										WC_ASSET_URL +
										'images/settings-payments/incentives-icon.svg'
									}
									alt={ __(
										'Incentive hero image',
										'woocommerce'
									) }
								/>
							</CardMedia>
							<CardBody
								className={
									'woocommerce-incentive-modal__body'
								}
							>
								<div>
									<StatusBadge
										status={ 'has_incentive' }
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
								<p
									className={
										'woocommerce-incentive-modal__terms'
									}
								>
									{ createInterpolateElement(
										__(
											'See <termsLink /> for details.',
											'woocommerce'
										),
										{
											termsLink: (
												<Link
													href="https://woocommerce.com/terms-conditions/woopayments-action-promotion-2023/"
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
									isBusy={ isBusy }
									disabled={ isBusy }
									onClick={ () => {
										setIsBusy( true );
										onSubmit();
										setIsBusy( false );
									} }
								>
									{ __( 'Save 10%', 'woocommerce' ) }
								</Button>
							</CardBody>
						</div>
					</Card>
				</Modal>
			) }
		</>
	);
};
