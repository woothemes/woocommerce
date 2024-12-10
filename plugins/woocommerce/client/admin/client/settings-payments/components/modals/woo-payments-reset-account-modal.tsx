/**
 * External dependencies
 */
import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { Button, Modal } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './modals.scss';
import { getWooPaymentsResetAccountLink } from '~/settings-payments/utils';

interface WooPaymentsResetAccountModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const WooPaymentsResetAccountModal = ( {
	isOpen,
	onClose,
}: WooPaymentsResetAccountModalProps ) => {
	const [ isResettingAccount, setIsResettingAccount ] = useState( false );

	const handleResetAccount = () => {
		setIsResettingAccount( true );

		window.location.href = getWooPaymentsResetAccountLink();
	};

	return (
		<>
			{ isOpen && (
				<Modal
					title={ __( 'Reset your test account', 'woocommerce' ) }
					className="woocommerce-woopayments-modal"
					isDismissible={ true }
					onRequestClose={ onClose }
				>
					<div className="woocommerce-woopayments-modal__content">
						<div className="woocommerce-woopayments-modal__content__item">
							<div>
								<span>
									{ __(
										'When you reset your test account, all data — including your WooPayments account details, test transactions, and payouts history — will be lost. This action cannot be undone, but you can create a new test account at any time.',
										'woocommerce'
									) }
								</span>
							</div>
						</div>
						<div className="woocommerce-woopayments-modal__content__item">
							<h3>
								{ __(
									"Are you sure you'd like to continue?",
									'woocommerce'
								) }
							</h3>
						</div>
					</div>
					<div className="woocommerce-woopayments-modal__actions">
						<Button
							className="danger"
							variant="secondary"
							isBusy={ isResettingAccount }
							disabled={ isResettingAccount }
							onClick={ handleResetAccount }
						>
							{ __( 'Yes, reset account', 'woocommerce' ) }
						</Button>
					</div>
				</Modal>
			) }
		</>
	);
};
