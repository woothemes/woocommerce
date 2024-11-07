/**
 * External dependencies
 */
import { createSlotFill } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import {__} from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import './style.scss';
import { SETTINGS_SLOT_FILL_CONSTANT } from '../settings/settings-slots';

const { Fill } = createSlotFill( SETTINGS_SLOT_FILL_CONSTANT );

type EmailPreviewFillProps = {
	previewUrl: string;
};

const EmailPreviewFill: React.FC< EmailPreviewFillProps > = ( {
	previewUrl,
} ) => {
	return (
		<Fill>
			<div className="wc-settings-email-preview-container">
				<div className="wc-settings-email-preview-controls"></div>
				<div className="wc-settings-email-preview">
					<div className="wc-settings-email-preview-header"></div>
					<iframe
						src={ previewUrl }
						title={ __( 'Email preview frame', 'woocommerce' ) }
					/>
				</div>
			</div>
		</Fill>
	);
};

export const registerSettingsEmailPreviewFill = () => {
	const slot_element_id = 'wc_settings_email_preview_slotfill';
	const slot_element = document.getElementById( slot_element_id );
	const preview_url = slot_element?.getAttribute( 'data-preview-url' );
	if ( ! preview_url ) {
		return null;
	}
	registerPlugin( 'woocommerce-admin-settings-email-preview', {
		// @ts-expect-error 'scope' does exist. @types/wordpress__plugins is outdated.
		scope: 'woocommerce-email-preview-settings',
		render: () => <EmailPreviewFill previewUrl={ preview_url } />,
	} );
};
