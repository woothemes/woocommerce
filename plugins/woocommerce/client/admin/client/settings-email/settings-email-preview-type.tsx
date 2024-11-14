/**
 * External dependencies
 */
import { SelectControl } from '@wordpress/components';

type EmailPreviewTypeProps = {
	emailTypes: SelectControl.Option[];
	emailType: string;
	setEmailType: ( emailType: string ) => void;
};

export const EmailPreviewType: React.FC< EmailPreviewTypeProps > = ( {
	emailTypes,
	emailType,
	setEmailType,
} ) => {
	return (
		<div className="wc-settings-email-preview-order-type">
			<SelectControl
				onChange={ setEmailType }
				options={ emailTypes }
				value={ emailType }
			></SelectControl>
		</div>
	);
};
