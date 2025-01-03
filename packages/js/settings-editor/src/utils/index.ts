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
 * Helper function to build the path for a settings section,
 * based on the settings slug and section.
 *
 * @param {string} slug    - The slug of the settings page.
 * @param {string} section - The section of the settings page.
 * @return { string } Path for the settings section.
 */
export function getSettingsSectionPath(
	slug: string,
	section?: string
): string {
	if ( slug === 'general' ) {
		return '/wc-settings';
	}

	const sectionPath =
		section?.length && section !== 'default' ? `/${ section }` : '';

	return `/wc-settings/${ slug }${ sectionPath }`;
}

export const settingsData: SettingsData =
	window.wcSettings?.admin?.settingsData || {};

export function getSettingsPage( slug: string ): SettingsPage {
	return settingsData?.[ slug ] || {};
}
