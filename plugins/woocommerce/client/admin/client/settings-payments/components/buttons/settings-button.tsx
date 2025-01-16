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
}

/**
 * A simple button component that navigates to the provided settings URL when clicked.
 * Used for managing settings for a payment gateway.
 */
export const SettingsButton = ( {
	settingsHref,
	buttonText = __( 'Manage', 'woocommerce' ),
}: SettingsButtonProps ) => {
	return (
		<Button variant={ 'secondary' } href={ settingsHref }>
			{ buttonText }
		</Button>
	);
};
