/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	StrictMode,
	Suspense,
	createElement,
	// @ts-expect-error createRoot is available.
	createRoot,
	lazy,
} from '@wordpress/element';
import { getGutenbergVersion } from '@woocommerce/admin-layout';

const ProductsApp = lazy( () =>
	import( './products-app' ).then( ( module ) => ( {
		default: module.ProductsApp,
	} ) )
);

/**
 * Initializes the "Products Dashboard".
 *
 * @param {string} id DOM element id.
 */
export function initializeProductsDashboard( id: string ) {
	const target = document.getElementById( id );
	const root = createRoot( target );
	const isGutenbergEnabled = getGutenbergVersion() > 0;

	root.render(
		<StrictMode>
			{ isGutenbergEnabled ? (
				<Suspense fallback={ null }>
					<ProductsApp />
				</Suspense>
			) : (
				<div>
					{ __(
						'Please enabled Gutenberg for this feature',
						'woocommerce'
					) }
				</div>
			) }
		</StrictMode>
	);

	return root;
}
