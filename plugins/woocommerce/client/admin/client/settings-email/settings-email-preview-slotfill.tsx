/**
 * External dependencies
 */
import { createSlotFill } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { SETTINGS_SLOT_FILL_CONSTANT } from '../settings/settings-slots';

const { Fill } = createSlotFill( SETTINGS_SLOT_FILL_CONSTANT );
const EmailPreviewFill: React.FC = () => {
	return (
		<Fill>
			<div>Email preview</div>
		</Fill>
	);
};

export const registerSettingsEmailPreviewFill = () => {
	registerPlugin( 'woocommerce-admin-settings-email-preview', {
		// @ts-expect-error 'scope' does exist. @types/wordpress__plugins is outdated.
		scope: 'woocommerce-email-preview-settings',
		render: EmailPreviewFill,
	} );
};
