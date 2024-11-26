/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const EmailPreviewSend: React.FC = () => {
	return (
		<div className="wc-settings-email-preview-send">
			<Button variant="secondary">
				{ __( 'Send a test email', 'woocommerce' ) }
			</Button>
		</div>
	);
};
