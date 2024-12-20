/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
/* eslint-disable @woocommerce/dependency-group */
// @ts-expect-error missing type.
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
	routeKey,
}: {
	routeKey: string;
} ) => {
	const settingsData: SettingsData = window.wcSettings?.admin?.settingsData;
	if ( ! settingsData ) {
		return null;
	}

	return (
		<ItemGroup>
			{ Object.keys( settingsData ).map( ( slug ) => {
				const { label, icon } = settingsData[ slug ];
				return (
					<SettingItem
						key={ slug }
						slug={ slug }
						label={ label }
						isActive={ routeKey === slug }
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

type SidebarProps = {
	title: string;
	routeKey: string;
	backPack: string;
};

export const Sidebar = ( { title, routeKey, backPack }: SidebarProps ) => {
	return (
		<SidebarNavigationScreen
			title={ title }
			isRoot
			backPack={ backPack }
			content={ <SidebarNavigationScreenContent routeKey={ routeKey } /> }
		/>
	);
};
