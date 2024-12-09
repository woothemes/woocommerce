/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import {
	UnsavedChangesWarning,
	// @ts-expect-error No types for this exist yet.
	privateApis as editorPrivateApis,
} from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { unlock } from '../lock-unlock';
import { Layout } from './layout';
import {
	NewNavigationProvider,
	useNewNavigation,
} from './utilites/new-navigation';
import SidebarNavigationScreen from './sidebar-navigation-screen';
import DataViewsSidebarContent from './sidebar-dataviews';
import ProductList from './product-list';
import ProductEdit from './product-edit';

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

	return <Layout showNewNavigation={ showNewNavigation } />;
}

export function ProductsApp() {
	const routes = [
		{
			name: 'product-list',
			path: '/woocommerce-products-dashboard',
			key: 'products-list',
			areas: {
				sidebar: (
					<SidebarNavigationScreen
						title={ 'Products' }
						isRoot
						content={ <DataViewsSidebarContent /> }
					/>
				),
				content: <ProductList />,
				preview: false,
				mobile: <ProductList postType={ 'product' } />,
			},
			widths: {
				edit: 300,
			},
		},
		{
			name: 'product-edit',
			path: '/woocommerce-products-dashboard/:productId',
			key: 'products-edit',
			areas: {
				sidebar: (
					<SidebarNavigationScreen
						title={ 'Products' }
						isRoot
						content={ <DataViewsSidebarContent /> }
					/>
				),
				content: <ProductEdit />,
				preview: false,
				mobile: null,
			},
			widths: {
				edit: 300,
			},
		},
	];
	return (
		<NewNavigationProvider>
			<GlobalStylesProvider>
				<UnsavedChangesWarning />
				<RouterProvider routes={ routes } pathArg={ 'page' }>
					<ProductsLayout />
				</RouterProvider>
			</GlobalStylesProvider>
		</NewNavigationProvider>
	);
}
