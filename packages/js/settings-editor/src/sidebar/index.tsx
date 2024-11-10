/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
// @ts-expect-error missing type.
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis, @woocommerce/dependency-group
import { __experimentalItemGroup as ItemGroup } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { Page } from '../types';

export const Sidebar = ( { pages }: { pages: Record< string, Page > } ) => {
	console.log( pages );
	return (
		<ItemGroup>
			{ Object.keys( pages ).map( ( page ) => {
				return <div key={ page }>{ pages[ page ].label }</div>;
			} ) }
		</ItemGroup>
	);
};
