/**
 * External dependencies
 */
import { createSlotFill, SelectControl, Spinner } from '@wordpress/components';
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
import { EmailPreviewSend } from './settings-email-preview-send';
import { EmailPreviewType } from './settings-email-preview-type';

const { Fill } = createSlotFill( SETTINGS_SLOT_FILL_CONSTANT );

export type EmailType = SelectControl.Option;

type EmailPreviewFillProps = {
	emailTypes: EmailType[];
	previewUrl: string;
};

const EmailPreviewFill: React.FC< EmailPreviewFillProps > = ( {
	emailTypes,
	previewUrl,
} ) => {
	const [ deviceType, setDeviceType ] =
		useState< string >( DEVICE_TYPE_DESKTOP );
	const isSingleEmail = emailTypes.length === 1;
	const [ emailType, setEmailType ] = useState< string >(
		isSingleEmail
			? emailTypes[ 0 ].value
			: 'WC_Email_Customer_Processing_Order'
	);
	const [ isLoading, setIsLoading ] = useState< boolean >( false );
	const finalPreviewUrl = `${ previewUrl }&type=${ emailType }`;

	return (
		<Fill>
			<div className="wc-settings-email-preview-container">
				<div className="wc-settings-email-preview-controls">
					{ ! isSingleEmail && (
						<EmailPreviewType
							emailTypes={ emailTypes }
							emailType={ emailType }
							setEmailType={ ( newEmailType: string ) => {
								setIsLoading( true );
								setEmailType( newEmailType );
							} }
						/>
					) }
					<div className="wc-settings-email-preview-spinner">
						{ isLoading && <Spinner /> }
					</div>
					<div style={ { flexGrow: 1 } } />
					<EmailPreviewDeviceType
						deviceType={ deviceType }
						setDeviceType={ setDeviceType }
					/>
					<EmailPreviewSend type={ emailType } />
				</div>
				<div
					className={ `wc-settings-email-preview wc-settings-email-preview-${ deviceType }` }
				>
					<EmailPreviewHeader emailType={ emailType } />
					<iframe
						src={ finalPreviewUrl }
						title={ __( 'Email preview frame', 'woocommerce' ) }
						onLoad={ () => setIsLoading( false ) }
					/>
				</div>
			</div>
		</Fill>
	);
};

export const registerSettingsEmailPreviewFill = () => {
	const slotElementId = 'wc_settings_email_preview_slotfill';
	const slotElement = document.getElementById( slotElementId );
	if ( ! slotElement ) {
		return null;
	}
	const previewUrl = slotElement.getAttribute( 'data-preview-url' );
	if ( ! previewUrl ) {
		return null;
	}
	const emailTypesData = slotElement.getAttribute( 'data-email-types' );
	let emailTypes: EmailType[] = [];
	try {
		emailTypes = JSON.parse( emailTypesData || '' );
	} catch ( e ) {}

	registerPlugin( 'woocommerce-admin-settings-email-preview', {
		// @ts-expect-error 'scope' does exist. @types/wordpress__plugins is outdated.
		scope: 'woocommerce-email-preview-settings',
		render: () => (
			<EmailPreviewFill
				emailTypes={ emailTypes }
				previewUrl={ previewUrl }
			/>
		),
	} );
};
