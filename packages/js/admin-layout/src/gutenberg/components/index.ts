export * from './section-tabs';
export * from './header';

/**
 * External dependencies
 */
// @ts-expect-error missing type.
import SidebarNavigationScreen from '@wordpress/edit-site/build-module/components/sidebar-navigation-screen';
// @ts-ignore No types for this exist yet.
import SidebarNavigationItem from '@wordpress/edit-site/build-module/components/sidebar-navigation-item';

export { SidebarNavigationScreen, SidebarNavigationItem };
