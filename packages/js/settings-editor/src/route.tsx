/**
 * External dependencies
 */
import {
	createElement,
	useEffect,
	useMemo,
	useState,
} from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	addAction,
	applyFilters,
	didFilter,
	removeAction,
} from '@wordpress/hooks';
/* eslint-disable @woocommerce/dependency-group */
// @ts-ignore No types for this exist yet.
import SidebarNavigationScreen from '@wordpress/edit-site/build-module/components/sidebar-navigation-screen';
// @ts-ignore No types for this exist yet.
import { privateApis as routerPrivateApis } from '@wordpress/router';
// @ts-ignore No types for this exist yet.
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import { Sidebar } from './sidebar';
import { Route, Location } from './types';

const { useLocation } = unlock( routerPrivateApis );

const NotFound = () => {
	return (
		<h1 style={ { color: 'white' } }>
			{ __( 'Page not found', 'woocommerce' ) }
		</h1>
	);
};

/**
 * Default route when a page is not found.
 *
 */
const getNotFoundRoute = ( page: string ): Route => ( {
	key: page,
	areas: {
		sidebar: null,
		content: <NotFound />,
		edit: null,
	},
	widths: {
		content: undefined,
		edit: undefined,
	},
} );

/**
 * Creates a route configuration for legacy settings pages.
 *
 * @param {string} page - The page identifier.
 */
const getLegacyRoute = (
	page: string,
	pages: typeof window.wcSettings.admin.settingsPages
): Route => ( {
	key: page,
	areas: {
		sidebar: (
			<SidebarNavigationScreen
				title={ 'Settings Title TBD' }
				isRoot
				content={ <Sidebar pages={ pages } /> }
			/>
		),
		content: <div>Content Placeholder: current tab: { page }</div>,
		edit: null,
	},
	widths: {
		content: undefined,
		edit: undefined,
	},
} );

const PAGES_FILTER = 'woocommerce_admin_settings_pages';

const getPages = () => {
	/**
	 * Get the modern settings pages.
	 *
	 * @return {Record<string, Route>} The pages.
	 */
	return applyFilters( PAGES_FILTER, {} ) as Record< string, Route >;
};

/**
 * Hook to get the modern settings pages.
 *
 * @return {Record<string, Route>} The pages.
 */
export function useModernRoutes() {
	const [ routes, setRoutes ] = useState( getPages() );

	/*
	 * Handler for new pages being added after the initial filter has been run,
	 * so that if any routing pages are added later, they can still be rendered
	 * instead of falling back to the `NoMatch` page.
	 */
	useEffect( () => {
		const handleHookAdded = ( hookName: string ) => {
			if ( hookName !== PAGES_FILTER ) {
				return;
			}

			const filterCount = didFilter( PAGES_FILTER );
			if ( filterCount && filterCount > 0 ) {
				setRoutes( getPages() );
			}
		};

		const namespace = `woocommerce/woocommerce/watch_${ PAGES_FILTER }`;
		addAction( 'hookAdded', namespace, handleHookAdded );

		return () => {
			removeAction( 'hookAdded', namespace );
		};
	}, [] );

	return routes;
}

/**
 * Hook to determine and return the active route based on the current path.
 */
export const useActiveRoute = () => {
	const settingsPages = window.wcSettings?.admin?.settingsPages;
	const location = useLocation() as Location;
	const modernRoutes = useModernRoutes();

	return useMemo( () => {
		const { tab: page = 'general' } = location.params;
		const pageSettings = settingsPages?.[ page ];

		if ( ! pageSettings ) {
			return getNotFoundRoute( page );
		}

		// Handle legacy pages.
		if ( ! pageSettings.is_modern ) {
			return getLegacyRoute( page, settingsPages );
		}

		// Handle modern pages.
		return modernRoutes[ page ] || getNotFoundRoute( page );
	}, [ settingsPages, location, modernRoutes ] );
};
