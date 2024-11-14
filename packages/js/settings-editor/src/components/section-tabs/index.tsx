/**
 * External dependencies
 */
import { createElement, Fragment } from '@wordpress/element';
import { TabPanel } from '@wordpress/components';

export const SectionTabs = ( {
	children,
	tabs,
}: {
	children: React.ReactNode;
	tabs: Array< {
		name: string;
		title: string;
	} >;
} ) => {
	if ( tabs.length <= 1 ) {
		return <>{ children }</>;
	}

	return <TabPanel tabs={ tabs }>{ () => <>{ children }</> }</TabPanel>;
};
