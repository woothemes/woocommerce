/**
 * External dependencies
 */
import { createElement, Fragment } from '@wordpress/element';
import { TabPanel } from '@wordpress/components';

export const SectionTabs = ( {
	children,
	settingsPage,
}: {
	children: React.ReactNode;
	settingsPage: SettingsPage;
} ) => {
	const sections = Object.keys( settingsPage.sections );

	if ( sections.length <= 1 ) {
		return <>{ children }</>;
	}

	return (
		<TabPanel
			tabs={ sections.map( ( key ) => ( {
				name: settingsPage.sections[ key ].label,
				title: settingsPage.sections[ key ].label,
			} ) ) }
		>
			{ () => <>{ children }</> }
		</TabPanel>
	);
};
