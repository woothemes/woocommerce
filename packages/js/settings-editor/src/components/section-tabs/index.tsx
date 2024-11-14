/**
 * External dependencies
 */
import { createElement, Fragment } from '@wordpress/element';
import { TabPanel } from '@wordpress/components';

export const SectionTabs = ( { children }: { children: React.ReactNode } ) => {
	const settingsData: SettingsData = window.wcSettings?.admin?.settingsData;
	const sections = Object.values( settingsData );

	return (
		<TabPanel
			tabs={ sections.map( ( section ) => ( {
				name: section.slug,
				title: section.label,
			} ) ) }
		>
			{ () => <>{ children }</> }
		</TabPanel>
	);
};
