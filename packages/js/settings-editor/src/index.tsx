/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { isGutenbergVersionAtLeast } from './utils';
import { Layout } from './layout';

const Sidebar = <div>Sidebar content goes here</div>;

export const SettingsEditor = () => {
	const isRequiredGutenbergVersion = isGutenbergVersionAtLeast( 19.0 );

	if ( ! isRequiredGutenbergVersion ) {
		return (
			//  Temporary during development.
			<div style={ { margin: 'auto' } }>
				{ __(
					'Please enable Gutenberg version 19.0 or higher for this feature',
					'woocommerce'
				) }
			</div>
		);
	}

	return (
		<Layout
			route={ {
				key: 'settings',
				areas: { sidebar: Sidebar },
				widths: {},
			} }
		/>
	);
};
