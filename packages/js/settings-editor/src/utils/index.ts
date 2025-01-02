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
 * @param {string} slug - The slug of the settings page.
 * @return { string } Path for the settings section.
 */
export function getSettingsSectionPath( slug: string ): string {
	if ( slug === 'general' ) {
		return '/wc-settings';
	}

	return `/wc-settings/${ slug }`;
}

export const settingsData: SettingsData =
	window.wcSettings?.admin?.settingsData || [];
