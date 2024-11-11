/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
/* eslint-disable @woocommerce/dependency-group */
// @ts-expect-error missing type.
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalItemGroup as ItemGroup } from '@wordpress/components';
import * as IconPackage from '@wordpress/icons';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import { SettingItem } from './setting-item';

const { Icon, ...icons } = IconPackage;

export const Sidebar = ( {
	pages,
}: {
	pages: typeof window.wcSettings.admin.settingsPages;
} ) => {
	return (
		<ItemGroup>
			{ Object.keys( pages ).map( ( slug ) => {
				const { label, icon } = pages[ slug ];
				return (
					<SettingItem
						key={ slug }
						slug={ slug }
						label={ label }
						isActive={ false }
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
