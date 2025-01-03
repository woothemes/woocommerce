/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
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

	if ( ! settingsData ) {
		return null;
	}

	const { tab: activeTab } = query;

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
	title: string;
	backPack?: string;
};

export const Sidebar = ( { title, backPack }: SidebarProps ) => {
	return (
		<SidebarNavigationScreen
			isRoot
			title={ title }
			backPack={ backPack }
			content={ <SidebarNavigationScreenContent /> }
		/>
	);
};
