/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { date } from '@wordpress/date';
import { getSetting } from '@woocommerce/settings';
import { useEffect, useState } from 'react';

/**
 * Internal dependencies
 */
import avatarIcon from './icon-avatar.svg';
import { EmailType } from './settings-email-preview-slotfill';

type EmailPreviewHeaderProps = {
	emailTypes: EmailType[];
	emailType: string;
};

export const EmailPreviewHeader: React.FC< EmailPreviewHeaderProps > = ( {
	emailTypes,
	emailType,
} ) => {
	const [ fromName, setFromName ] = useState( '' );
	const [ fromAddress, setFromAddress ] = useState( '' );

	useEffect( () => {
		const fromNameEl = document.getElementById(
			'woocommerce_email_from_name'
		) as HTMLInputElement;
		const fromAddressEl = document.getElementById(
			'woocommerce_email_from_address'
		) as HTMLInputElement;

		if ( ! fromNameEl || ! fromAddressEl ) {
			return;
		}

		// Set initial values
		setFromName( fromNameEl.value || '' );
		setFromAddress( fromAddressEl.value || '' );

		const handleFromNameChange = ( event: Event ) => {
			const target = event.target as HTMLInputElement;
			setFromName( target.value || '' );
		};
		const handleFromAddressChange = ( event: Event ) => {
			const target = event.target as HTMLInputElement;
			setFromAddress( target.value || '' );
		};

		fromNameEl.addEventListener( 'change', handleFromNameChange );
		fromAddressEl.addEventListener( 'change', handleFromAddressChange );

		return () => {
			fromNameEl.removeEventListener( 'change', handleFromNameChange );
			fromAddressEl.removeEventListener(
				'change',
				handleFromAddressChange
			);
		};
	}, [] );

	const getSubject = () => {
		const email = emailTypes.find( ( type ) => type.value === emailType );
		if ( ! email ) {
			return '';
		}
		const subject = email.subject || '';
		const today = date( getSetting( 'dateFormat' ), new Date(), undefined );
		const placeholders: Record< string, string > = {
			'{site_title}': getSetting( 'siteTitle' ),
			'{order_number}': '12345',
			'{order_date}': today,
		};
		return subject.replace(
			/{\w+}/g,
			( match ) => placeholders[ match ] ?? match
		);
	};

	return (
		<div className="wc-settings-email-preview-header">
			<h3 className="wc-settings-email-preview-header-subject">
				{ getSubject() }
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
					<span>&lt;{ fromAddress }&gt;</span>
				</div>
			</div>
		</div>
	);
};
