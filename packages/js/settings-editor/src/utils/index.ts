/**
 * External dependencies
 */
import { getSetting } from '@woocommerce/settings';

export function isGutenbergVersionAtLeast( version: number ) {
	const adminSettings: { gutenberg_version?: string } = getSetting( 'admin' );
	if ( adminSettings.gutenberg_version ) {
		return parseFloat( adminSettings?.gutenberg_version ) >= version;
	}
	return false;
}

/**
 * Helper function to get the path for a settings section,
 * based on the settings page.
 *
 * @param {SettingsPage} settingsPage - Settings page object.
 * @return { string } Path for the settings section.
 */
export function getSettingsSectionPath( settingsPage: SettingsPage ) {
	if ( settingsPage.slug === 'general' ) {
		return '/wc-settings';
	}

	return `/wc-settings/${ settingsPage.slug }`;
}
