/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */

interface SettingsButtonProps {
	/**
	 * The settings URL to navigate to when the enable gateway button is clicked.
	 */
	settingsHref: string;
	/**
	 * The text of the button.
	 */
	buttonText?: string;
	/**
	 * ID of the plugin that is being installed.
	 */
	installingPlugin: string | null;
}

/**
 * A simple button component that navigates to the provided settings URL when clicked.
 * Used for managing settings for a payment gateway.
 */
export const SettingsButton = ( {
	settingsHref,
	installingPlugin,
	buttonText = __( 'Manage', 'woocommerce' ),
}: SettingsButtonProps ) => {
	return (
		<Button
			variant={ 'secondary' }
			href={ settingsHref }
			disabled={ !! installingPlugin }
		>
			{ buttonText }
		</Button>
	);
};
