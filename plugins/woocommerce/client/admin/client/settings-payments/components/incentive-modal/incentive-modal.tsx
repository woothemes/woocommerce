/**
 * External dependencies
 */
import React from 'react';
import interpolateComponents from '@automattic/interpolate-components';
import {
	Button,
	Card,
	CardBody,
	CardMedia,
	Modal,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Link, Pill } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './incentive-modal.scss';
import IncentiveIcon from './incentives-modal-icon.svg';

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
	const [ isSubmitted, setIsSubmitted ] = useState( false );

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
									src={ IncentiveIcon }
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
									<Pill>
										{ __(
											'Limited time offer',
											'woocommerce'
										) }
									</Pill>
								</div>
								<h2>
									{ __(
										'Save 10% on processing fees for your first 3 months when you sign up for WooPayments',
										'woocommerce'
									) }
								</h2>
								<p>
									{ __(
										'Use the native payments solution build and supported by Woo to accept online and in-person payments, track revenue, and handle all payment activity in one place.',
										'woocommerce'
									) }
								</p>
								<p
									className={
										'woocommerce-incentive-modal__terms'
									}
								>
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
									onClick={ () => {
										setIsSubmitted( true );
										onSubmit();
									} }
								>
									{ __( 'Get started', 'woocommerce' ) }
								</Button>
							</CardBody>
						</div>
					</Card>
				</Modal>
			) }
		</>
	);
};
