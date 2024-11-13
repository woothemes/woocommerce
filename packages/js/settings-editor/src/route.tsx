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
	return <h1>{ __( 'Page not found', 'woocommerce' ) }</h1>;
};

/**
 * Default route when active page is not found.
 *
 * @param {string}                                       activePage - The active page.
 * @param {typeof window.wcSettings.admin.settingsPages} pages      - The pages.
 *
 */
const getNotFoundRoute = (
	activePage: string,
	pages: typeof window.wcSettings.admin.settingsPages
): Route => ( {
	key: activePage,
	areas: {
		sidebar: (
			<Sidebar
				activePage={ activePage }
				pages={ pages }
				pageTitle={ 'Settings' }
			/>
		),
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
 * @param {string}                                       activePage - The active page.
 * @param {typeof window.wcSettings.admin.settingsPages} pages      - The pages.
 */
const getLegacyRoute = (
	activePage: string,
	pages: typeof window.wcSettings.admin.settingsPages
): Route => {
	const pageTitle =
		pages[ activePage ]?.label || __( 'Settings', 'woocommerce' );

	return {
		key: activePage,
		areas: {
			sidebar: (
				<Sidebar
					activePage={ activePage }
					pages={ pages }
					pageTitle={ pageTitle }
				/>
			),
			content: <div>Content Placeholder</div>,
			edit: null,
		},
		widths: {
			content: undefined,
			edit: undefined,
		},
	};
};

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
		const { tab: activePage = 'general' } = location.params;
		const pageSettings = settingsPages?.[ activePage ];

		if ( ! pageSettings ) {
			return getNotFoundRoute( activePage, settingsPages );
		}

		// Handle legacy pages.
		if ( ! pageSettings.is_modern ) {
			return getLegacyRoute( activePage, settingsPages );
		}

		const modernRoute = modernRoutes[ activePage ];

		// Handle modern pages.
		if ( ! modernRoute ) {
			return getNotFoundRoute( activePage, settingsPages );
		}

		// Sidebar is responsibility of WooCommerce, not extensions so add it here.
		modernRoute.areas.sidebar = (
			<Sidebar
				activePage={ activePage }
				pages={ settingsPages }
				pageTitle={ pageSettings.label }
			/>
		);
		// Make sure we have a key.
		modernRoute.key = activePage;

		return modernRoute;
	}, [ settingsPages, location.params, modernRoutes ] );
};
