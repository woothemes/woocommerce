/**
 * External dependencies
 */
import { Button, Modal, TextControl } from '@wordpress/components';
import { useState } from 'react';
import { __ } from '@wordpress/i18n';

export const EmailPreviewSend: React.FC = () => {
	const [ isModalOpen, setIsModalOpen ] = useState( false );
	const [ email, setEmail ] = useState( '' );

	return (
		<div className="wc-settings-email-preview-send">
			<Button
				variant="secondary"
				onClick={ () => setIsModalOpen( true ) }
			>
				{ __( 'Send a test email', 'woocommerce' ) }
			</Button>

			{ isModalOpen && (
				<Modal
					title={ __( 'Send a test email', 'woocommerce' ) }
					onRequestClose={ () => setIsModalOpen( false ) }
					className="wc-settings-email-preview-send-modal"
				>
					<p>
						{ __(
							'Send yourself a test email to check how your email looks in different email apps.',
							'woocommerce'
						) }
					</p>

					<TextControl
						label={ __( 'Send to', 'woocommerce' ) }
						type="email"
						value={ email }
						placeholder={ __( 'Enter an email', 'woocommerce' ) }
						onChange={ setEmail }
					/>

					<div className="wc-settings-email-preview-send-modal-buttons">
						<Button
							variant="tertiary"
							onClick={ () => setIsModalOpen( false ) }
						>
							{ __( 'Cancel', 'woocommerce' ) }
						</Button>
						<Button variant="primary">
							{ __( 'Send test email', 'woocommerce' ) }
						</Button>
					</div>
				</Modal>
			) }
		</div>
	);
};
