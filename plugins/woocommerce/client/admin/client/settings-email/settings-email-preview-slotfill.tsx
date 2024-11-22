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
import { EmailPreviewType } from './settings-email-preview-type';

const { Fill } = createSlotFill( SETTINGS_SLOT_FILL_CONSTANT );

type EmailPreviewFillProps = {
	emailTypes: SelectControl.Option[];
	previewUrl: string;
};

const EmailPreviewFill: React.FC< EmailPreviewFillProps > = ( {
	emailTypes,
	previewUrl,
} ) => {
	const [ deviceType, setDeviceType ] =
		useState< string >( DEVICE_TYPE_DESKTOP );
	const [ emailType, setEmailType ] = useState< string >(
		'WC_Email_Customer_Processing_Order'
	);
	const [ isLoading, setIsLoading ] = useState< boolean >( false );
	const finalPreviewUrl = `${ previewUrl }&type=${ emailType }`;

	return (
		<Fill>
			<div className="wc-settings-email-preview-container">
				<div className="wc-settings-email-preview-controls">
					<EmailPreviewType
						emailTypes={ emailTypes }
						emailType={ emailType }
						setEmailType={ ( newEmailType: string ) => {
							setIsLoading( true );
							setEmailType( newEmailType );
						} }
					/>
					<div className="wc-settings-email-preview-spinner">
						{ isLoading && <Spinner /> }
					</div>
					<div style={ { flexGrow: 1 } } />
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
	let emailTypes: SelectControl.Option[] = [];
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
