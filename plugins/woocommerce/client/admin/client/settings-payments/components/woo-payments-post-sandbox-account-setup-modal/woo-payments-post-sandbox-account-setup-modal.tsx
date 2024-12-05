/**
 * External dependencies
 */
import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { Button, Modal } from '@wordpress/components';
import { Link } from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import './woo-payments-post-sandbox-account-setup-modal.scss';
import { getWooPaymentsSetupLiveAccountLink } from '~/settings-payments/utils';
import { WC_ASSET_URL } from '~/utils/admin-settings';

interface WooPaymentsReadyToTestModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const WooPaymentsPostSandboxAccountSetupModal = ( {
	isOpen,
	onClose,
}: WooPaymentsReadyToTestModalProps ) => {
	const [ isActivatingPayments, setIsActivatingPayments ] = useState( false );
	const [ isContinuingStoreSetup, setIsContinuingStoreSetup ] =
		useState( false );
	const handleActivatePayments = () => {
		setIsActivatingPayments( true );

		window.location.href = getWooPaymentsSetupLiveAccountLink();
	};

	const handleContinueStoreSetup = () => {
		setIsContinuingStoreSetup( true );

		window.location.href = getAdminLink( 'admin.php?page=wc-admin' );
	};

	return (
		<>
			{ isOpen && (
				<Modal
					title={ __(
						"You're ready to test payments!",
						'woocommerce'
					) }
					className="woocommerce-woopayments-ready-to-test-modal"
					isDismissible={ true }
					onRequestClose={ onClose }
				>
					<div className="woocommerce-woopayments-ready-to-test-modal__content">
						<div className="woocommerce-woopayments-ready-to-test-modal__content__item">
							<div>
								<span>
									{ __(
										"We've created a test account for you so that you can begin testing payments on your store. Not sure what to test? Take a look at ",
										'woocommerce'
									) }
								</span>
								<Link
									href={
										'https://woocommerce.com/document/woopayments/testing-and-troubleshooting/sandbox-mode/'
									}
									target="_blank"
									rel="noreferrer"
									type="external"
								>
									how to test payments
								</Link>
								<span>.</span>
							</div>
						</div>
						<div className="woocommerce-woopayments-ready-to-test-modal__content__item">
							<h2>{ __( "What's next:", 'woocommerce' ) }</h2>
						</div>
						<div className="woocommerce-woopayments-ready-to-test-modal__content__item-flex">
							<img
								src={ WC_ASSET_URL + 'images/icons/store.svg' }
								alt="store icon"
							/>
							<div className="woocommerce-woopayments-ready-to-test-modal__content__item-flex__description">
								<h3>
									{ __(
										'Continue your store setup',
										'woocommerce'
									) }
								</h3>
								<div>
									{ __(
										'Finish completing the tasks required to launch your store.',
										'woocommerce'
									) }
								</div>
							</div>
						</div>
						<div className="woocommerce-woopayments-ready-to-test-modal__content__item-flex">
							<img
								src={ WC_ASSET_URL + 'images/icons/dollar.svg' }
								alt="dollar icon"
							/>
							<div className="woocommerce-woopayments-ready-to-test-modal__content__item-flex__description">
								<h3>
									{ __( 'Activate payments', 'woocommerce' ) }
								</h3>
								<div>
									<span>
										{ __(
											'Provide some additional details about your business so you can being accepting real payments. ',
											'woocommerce'
										) }
									</span>
									<Link
										href={
											'https://woocommerce.com/document/woopayments/startup-guide/#sign-up-process'
										}
										target="_blank"
										rel="noreferrer"
										type="external"
									>
										Learn more
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="woocommerce-woopayments-ready-to-test-modal__actions">
						<Button
							variant="primary"
							isBusy={ isContinuingStoreSetup }
							disabled={ isContinuingStoreSetup }
							onClick={ handleContinueStoreSetup }
						>
							{ __( 'Continue store setup', 'woocommerce' ) }
						</Button>
						<Button
							variant="secondary"
							isBusy={ isActivatingPayments }
							disabled={ isActivatingPayments }
							onClick={ handleActivatePayments }
						>
							{ __( 'Activate payments', 'woocommerce' ) }
						</Button>
					</div>
				</Modal>
			) }
		</>
	);
};
