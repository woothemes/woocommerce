/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from 'react';

/**
 * Internal dependencies
 */
import avatarIcon from './icon-avatar.svg';

export const EmailPreviewHeader: React.FC = () => {
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
					<span>&lt;{ fromAddress }&gt;</span>
				</div>
			</div>
		</div>
	);
};
