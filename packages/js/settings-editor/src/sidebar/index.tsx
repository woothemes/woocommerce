/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
// @ts-expect-error missing type.
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis, @woocommerce/dependency-group
import { __experimentalItemGroup as ItemGroup } from '@wordpress/components';

export const Sidebar = () => {
	return (
		<ItemGroup>
			<div>Sidebar content goes THAR</div>
		</ItemGroup>
	);
};
