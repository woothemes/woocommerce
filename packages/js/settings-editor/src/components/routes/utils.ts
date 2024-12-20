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
