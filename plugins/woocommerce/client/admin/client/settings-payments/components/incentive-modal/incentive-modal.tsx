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
import { PaymentIncentive } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './incentive-modal.scss';
import { StatusBadge } from '~/settings-payments/components/status-badge';
import { WC_ASSET_URL } from '~/utils/admin-settings';

interface IncentiveModalProps {
	/**
	 * Incentive data.
	 */
	incentive: PaymentIncentive;
	/**
	 * Callback to handle submit action.
	 */
	onSubmit: () => void;
	/**
	 * Callback to handle dismiss action.
	 */
	onDismiss: () => void;
}

export const IncentiveModal = ( {
	incentive,
	onSubmit,
	onDismiss,
}: IncentiveModalProps ) => {
	const [ isBusy, setIsBusy ] = useState( false );
	const [ isOpen, setIsOpen ] = useState( true );

	const handleClose = () => {
		setIsOpen( false );
	};

	return (
		<>
			{ isOpen && (
				<Modal
					title=""
					className="woocommerce-incentive-modal"
					onRequestClose={ () => {
						onDismiss();
						handleClose();
					} }
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
										'Incentive icon',
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
								<h2>{ incentive.title }</h2>
								<p>{ incentive.description }</p>
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
									isBusy={ isBusy }
									disabled={ isBusy }
									onClick={ () => {
										setIsBusy( true );
										onSubmit();
										setIsBusy( false );
										handleClose();
									} }
								>
									{ incentive.cta_label }
								</Button>
							</CardBody>
						</div>
					</Card>
				</Modal>
			) }
		</>
	);
};
