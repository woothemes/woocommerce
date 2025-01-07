/**
 * External dependencies
 */
import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

/**
 * Internal dependencies
 */

addons.setConfig( {
	theme: { ...themes.light },
	sidebar: {
		collapsedRoots: [
			'components',
			'experimental',
			'onboarding',
			'product-editor',
			'woocommerce-admin',
		],
	},
} );
