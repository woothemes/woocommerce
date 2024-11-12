/**
 * External dependencies
 */
import { SETTINGS_STORE_NAME } from '@woocommerce/data';
import { __ } from '@wordpress/i18n';
import { resolveSelect } from '@wordpress/data';
import { useEffect, useState } from 'react';

/**
 * Internal dependencies
 */
import avatarIcon from './icon-avatar.svg';

type FromSettings = {
	woocommerce_email_from_name?: string;
	woocommerce_email_from_address?: string;
};

export const EmailPreviewHeader: React.FC = () => {
	const [ fromName, setFromName ] = useState( '' );
	const [ fromAddress, setFromAddress ] = useState( '' );
	useEffect( () => {
		const fetchSettings = async () => {
			const {
				woocommerce_email_from_name = '',
				woocommerce_email_from_address = '',
			} = (
				await resolveSelect( SETTINGS_STORE_NAME ).getSettings(
					'email'
				)
			 ).email as FromSettings;

			setFromName( woocommerce_email_from_name );
			setFromAddress( woocommerce_email_from_address );
		};
		fetchSettings();
	}, [] );

	return (
		<div className="wc-settings-email-preview-header">
			<h3 className="wc-settings-email-preview-header-subject">
				Your SampleStore order is now complete
			</h3>
			<div className="wc-settings-email-preview-header-data">
				<div className="wc-settings-email-preview-header-icon">
					<img
						src={ avatarIcon }
						alt={ __( 'Avatar icon', 'woocommerce' ) }
					/>
				</div>
				<div className="wc-settings-email-preview-header-sender">
					{ fromName }
					<span>{ fromAddress }</span>
				</div>
			</div>
		</div>
	);
};
