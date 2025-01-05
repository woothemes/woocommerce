/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import * as icons from '@wordpress/icons';
import { privateApis as routerPrivateApis } from '@wordpress/router';

/* eslint-disable @woocommerce/dependency-group */
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalItemGroup as ItemGroup } from '@wordpress/components';
// @ts-ignore No types for this exist yet.
import SidebarNavigationScreen from '@wordpress/edit-site/build-module/components/sidebar-navigation-screen';
// @ts-ignore No types for this exist yet.
import SidebarNavigationItem from '@wordpress/edit-site/build-module/components/sidebar-navigation-item';
// @ts-ignore No types for this exist yet.
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import {
	getSettingsPage,
	getSettingsSectionPath,
	settingsData,
} from '../../utils';

const { useLocation } = unlock( routerPrivateApis );

const SidebarNavigationScreenContent = () => {
	const { query } = useLocation();
	const { tab: activeTab = 'general' } = query;

	return (
		<ItemGroup>
			{ Object.keys( settingsData ).map( ( tab ) => {
				const { label, icon } = getSettingsPage( tab );
				const to = getSettingsSectionPath( tab );

				return (
					<SidebarNavigationItem
						icon={
							icons[ icon as keyof typeof icons ] ||
							icons.settings
						}
						aria-current={ activeTab === tab }
						uid={ tab }
						key={ tab }
						to={ to }
					>
						{ label }
					</SidebarNavigationItem>
				);
			} ) }
		</ItemGroup>
	);
};

type SidebarProps = {
	backPack?: string;
};

export const Sidebar = ( { backPack }: SidebarProps ) => {
	return (
		<SidebarNavigationScreen
			isRoot
			title={ __( 'Settings', 'woocommerce' ) }
			backPack={ backPack }
			content={ <SidebarNavigationScreenContent /> }
		/>
	);
};
