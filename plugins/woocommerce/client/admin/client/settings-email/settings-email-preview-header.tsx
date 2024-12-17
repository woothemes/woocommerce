/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useCallback, useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import avatarIcon from './icon-avatar.svg';

type EmailPreviewHeaderProps = {
	emailType: string;
};

type EmailPreviewSubjectResponse = {
	subject: string;
};

export const EmailPreviewHeader: React.FC< EmailPreviewHeaderProps > = ( {
	emailType,
} ) => {
	const [ fromName, setFromName ] = useState( '' );
	const [ fromAddress, setFromAddress ] = useState( '' );
	const [ subject, setSubject ] = useState( '' );
	let subjectEl: Element | null = null;

	const fetchSubject = useCallback( async () => {
		try {
			const response: EmailPreviewSubjectResponse = await apiFetch( {
				path: `wc-admin-email/settings/email/preview-subject?type=${ emailType }`,
			} );
			setSubject( response.subject );
			if ( subjectEl ) {
				subjectEl.dispatchEvent( new Event( 'subject-updated' ) );
			}
		} catch ( e ) {
			setSubject( '' );
		}
	}, [ emailType ] );

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
			if ( ! fromNameEl || ! fromAddressEl ) {
				return;
			}
			fromNameEl.removeEventListener( 'change', handleFromNameChange );
			fromAddressEl.removeEventListener(
				'change',
				handleFromAddressChange
			);
		};
	}, [] );

	useEffect( () => {
		fetchSubject();
	}, [ emailType, fetchSubject ] );

	useEffect( () => {
		subjectEl = document.querySelector(
			'[id^="woocommerce_"][id$="_subject"]'
		);

		if ( ! subjectEl ) {
			return;
		}

		subjectEl.addEventListener( 'transient-saved', fetchSubject );

		return () => {
			if ( ! subjectEl ) {
				return;
			}
			subjectEl.removeEventListener( 'transient-saved', fetchSubject );
		};
	}, [ fetchSubject ] );

	return (
		<div className="wc-settings-email-preview-header">
			<h3 className="wc-settings-email-preview-header-subject">
				{ subject }
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
