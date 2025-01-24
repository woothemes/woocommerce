/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
/* eslint-disable @woocommerce/dependency-group */
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalItemGroup as ItemGroup } from '@wordpress/components';
// @ts-ignore No types for this exist yet.
import SidebarNavigationScreen from '@wordpress/edit-site/build-module/components/sidebar-navigation-screen';
import * as IconPackage from '@wordpress/icons';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import { SettingItem } from './setting-item';

const { Icon, ...icons } = IconPackage;

const SidebarNavigationScreenContent = ( {
	activePage,
	settingsData,
}: {
	activePage: string;
	settingsData: SettingsData;
} ) => {
	return (
		<ItemGroup>
			{ Object.keys( settingsData ).map( ( slug ) => {
				const { label, icon } = settingsData[ slug ];
				return (
					<SettingItem
						key={ slug }
						slug={ slug }
						label={ label }
						isActive={ activePage === slug }
						icon={
							<Icon
								icon={
									icons[ icon as keyof typeof icons ] ||
									icons.settings
								}
							/>
						}
					/>
				);
			} ) }
		</ItemGroup>
	);
};

export const Sidebar = ( {
	activePage,
	settingsData,
	pageTitle,
}: {
	activePage: string;
	settingsData: SettingsData;
	pageTitle: string;
} ) => {
	return (
		<SidebarNavigationScreen
			title={ pageTitle }
			isRoot
			content={
				<SidebarNavigationScreenContent
					activePage={ activePage }
					settingsData={ settingsData }
				/>
			}
		/>
	);
};
