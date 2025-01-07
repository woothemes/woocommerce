/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import { getSetting } from '@woocommerce/settings';

type PathArgs = Record< string, string >;

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
 * @param {string}   tab     - The slug of the settings page.
 * @param {string}   section - The section of the settings page.
 * @param {PathArgs} args    - Additional query arguments.
 * @return {string} Path for the settings section.
 */
export function getSettingsSectionPath(
	tab: string,
	section?: string,
	args?: PathArgs
): string {
	if ( tab === 'general' ) {
		return 'wc-settings';
	}

	const queryArgs = {
		tab,
		section,
		...args,
	};

	// clean section query arg if it's the general section
	if ( section && section === 'general' ) {
		delete queryArgs.section;
	}

	return addQueryArgs( 'wc-settings', queryArgs );
}

export const settingsData: SettingsData =
	window.wcSettings?.admin?.settingsData || {};

export function getSettingsPage( slug: string ): SettingsPage {
	return settingsData?.[ slug ] || {};
}
