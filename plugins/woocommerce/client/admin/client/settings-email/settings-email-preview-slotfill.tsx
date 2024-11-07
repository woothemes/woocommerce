/**
 * External dependencies
 */
import { createSlotFill } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import { useState } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';
import { SETTINGS_SLOT_FILL_CONSTANT } from '~/settings/settings-slots';
import {
	EmailPreviewDeviceType,
	DEVICE_TYPE_DESKTOP,
} from './settings-email-preview-device-type';
import { EmailPreviewHeader } from './settings-email-preview-header';

const { Fill } = createSlotFill( SETTINGS_SLOT_FILL_CONSTANT );

type EmailPreviewFillProps = {
	previewUrl: string;
};

const EmailPreviewFill: React.FC< EmailPreviewFillProps > = ( {
	previewUrl,
} ) => {
	const [ deviceType, setDeviceType ] =
		useState< string >( DEVICE_TYPE_DESKTOP );
	return (
		<Fill>
			<div className="wc-settings-email-preview-container">
				<div className="wc-settings-email-preview-controls">
					<EmailPreviewDeviceType
						deviceType={ deviceType }
						setDeviceType={ setDeviceType }
					/>
				</div>
				<div
					className={ `wc-settings-email-preview wc-settings-email-preview-${ deviceType }` }
				>
					<EmailPreviewHeader />
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
