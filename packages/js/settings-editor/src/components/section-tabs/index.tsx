/**
 * External dependencies
 */
import { createElement, Fragment } from '@wordpress/element';
import { TabPanel } from '@wordpress/components';
import { privateApis as routerPrivateApis } from '@wordpress/router';
/* eslint-disable @woocommerce/dependency-group */
// @ts-ignore No types for this exist yet.
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';
import { getSettingsPage, getSettingsSectionPath } from '../../utils';
import { getSettingsPageTabs } from '../../routes/route';
/* eslint-enable @woocommerce/dependency-group */

const { useHistory, useLocation } = unlock( routerPrivateApis );

export const SectionTabs = ( {
	children,
	activeSection,
}: {
	children: React.ReactNode;
	activeSection?: string;
} ) => {
	const { navigate } = useHistory();
	const { name } = useLocation();

	const settingsPage = getSettingsPage( name );
	const tabs = getSettingsPageTabs( settingsPage );

	if ( tabs.length <= 1 ) {
		return <>{ children }</>;
	}

	function navigateTo( nextSection: string ) {
		navigate( getSettingsSectionPath( name, nextSection ) );
	}

	return (
		<TabPanel
			className="woocommerce-settings-section-tabs"
			tabs={ tabs }
			onSelect={ navigateTo }
			initialTabName={ activeSection || tabs[ 0 ].name }
		>
			{ () => children }
		</TabPanel>
	);
};
