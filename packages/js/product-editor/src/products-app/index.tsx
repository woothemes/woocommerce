/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { Layout, unlock } from '@woocommerce/admin-layout';
import {
	UnsavedChangesWarning,
	// @ts-expect-error No types for this exist yet.
	privateApis as editorPrivateApis,
} from '@wordpress/editor';

/**
 * Internal dependencies
 */
import useLayoutAreas from './router';
import {
	NewNavigationProvider,
	useNewNavigation,
} from './utilites/new-navigation';

const { RouterProvider } = unlock( routerPrivateApis );
const { GlobalStylesProvider } = unlock( editorPrivateApis );

function ProductsLayout() {
	// This ensures the edited entity id and type are initialized properly.
	const [ showNewNavigation ] = useNewNavigation();
	if ( showNewNavigation ) {
		document.body.classList.add( 'is-fullscreen-mode' );
	} else {
		document.body.classList.remove( 'is-fullscreen-mode' );
	}
	const route = useLayoutAreas();
	return <Layout route={ route } showNewNavigation={ showNewNavigation } />;
}

export function ProductsApp() {
	return (
		<NewNavigationProvider>
			<GlobalStylesProvider>
				<UnsavedChangesWarning />
				<RouterProvider>
					<ProductsLayout />
				</RouterProvider>
			</GlobalStylesProvider>
		</NewNavigationProvider>
	);
}
