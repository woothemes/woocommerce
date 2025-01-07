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
import { getSettingsPageSections } from '../../routes/route';
/* eslint-enable @woocommerce/dependency-group */

const { useHistory, useLocation } = unlock( routerPrivateApis );

export const SectionTabs = ( { children }: { children: React.ReactNode } ) => {
	const { navigate } = useHistory();
	const { query } = useLocation();
	const { tab, section } = query;

	const page = getSettingsPage( tab );
	const sections = getSettingsPageSections( page );

	if ( sections.length <= 1 ) {
		return <>{ children }</>;
	}

	function navigateTo( nextSection: string ) {
		navigate( getSettingsSectionPath( tab, nextSection ) );
	}

	return (
		<TabPanel
			className="woocommerce-settings-section-tabs"
			tabs={ sections }
			onSelect={ navigateTo }
			initialTabName={ section }
		>
			{ () => children }
		</TabPanel>
	);
};
