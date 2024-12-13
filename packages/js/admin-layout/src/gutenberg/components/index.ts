export * from './section-tabs';
export * from './header';

/**
 * External dependencies
 */
/* eslint-disable @woocommerce/dependency-group */
// @ts-expect-error missing type.
import SidebarNavigationScreen from '@wordpress/edit-site/build-module/components/sidebar-navigation-screen';
// @ts-ignore No types for this exist yet.
import SidebarNavigationItem from '@wordpress/edit-site/build-module/components/sidebar-navigation-item';
/* eslint-enable @woocommerce/dependency-group */

export { SidebarNavigationScreen, SidebarNavigationItem };
