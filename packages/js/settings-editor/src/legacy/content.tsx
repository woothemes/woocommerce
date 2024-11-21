/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';

export const LegacyContent = ( {
	settingsPage,
	activeSection,
}: {
	settingsPage: SettingsPage;
	activeSection: string;
} ) => {
	return (
		<div style={ { padding: '24px' } }>
			<p>Legacy Content: { settingsPage.label }</p>
			<p>Active Section: { activeSection }</p>
		</div>
	);
};
