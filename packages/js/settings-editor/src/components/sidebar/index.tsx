/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import * as icons from '@wordpress/icons';

/* eslint-disable @woocommerce/dependency-group */
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalItemGroup as ItemGroup } from '@wordpress/components';
// @ts-ignore No types for this exist yet.
import SidebarNavigationScreen from '@wordpress/edit-site/build-module/components/sidebar-navigation-screen';
// @ts-ignore No types for this exist yet.
import SidebarNavigationItem from '@wordpress/edit-site/build-module/components/sidebar-navigation-item';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import { getSettingsSectionPath } from '../routes/utils';

const SidebarNavigationScreenContent = () => {
	const settingsData: SettingsData = window.wcSettings?.admin?.settingsData;
	if ( ! settingsData ) {
		return null;
	}

	return (
		<ItemGroup>
			{ Object.keys( settingsData ).map( ( slug ) => {
				const { label, icon } = settingsData[ slug ];

				return (
					<SidebarNavigationItem
						icon={
							icons[ icon as keyof typeof icons ] ||
							icons.settings
						}
						uid={ slug }
						key={ slug }
						to={ getSettingsSectionPath( settingsData[ slug ] ) }
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
	backPack: string;
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
