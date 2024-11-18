/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';

export const LegacyContent = ( {
	settingsPage,
}: {
	settingsPage: SettingsPage;
} ) => {
	return <div>Legacy Content: { settingsPage.label }</div>;
};
