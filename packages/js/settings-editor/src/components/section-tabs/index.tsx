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
		return (
			<>
				<div className="woocommerce-settings-section-tabs woocommerce-settings-section-tabs--no-tabs" />
				<div>{ children }</div>
			</>
		);
	}

	return (
		<TabPanel className="woocommerce-settings-section-tabs" tabs={ tabs }>
			{ () => <>{ children }</> }
		</TabPanel>
	);
};
