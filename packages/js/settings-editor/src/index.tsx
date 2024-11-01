/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Layout } from './layout';

const Sidebar = <div>Sidebar content goes here</div>;

export const SettingsEditor = () => {
	return (
		<Layout
			route={ {
				key: 'settings',
				areas: { sidebar: Sidebar },
				widths: {},
			} }
			showNewNavigation={ true }
		/>
	);
};
