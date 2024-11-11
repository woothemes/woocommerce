/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
// @ts-expect-error missing type.
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis, @woocommerce/dependency-group
import { __experimentalItemGroup as ItemGroup } from '@wordpress/components';
import * as IconPackage from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { Page } from '../types';
import { SettingItem } from './setting-item';

const { Icon, ...icons } = IconPackage;

export const Sidebar = ( { pages }: { pages: Record< string, Page > } ) => {
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
