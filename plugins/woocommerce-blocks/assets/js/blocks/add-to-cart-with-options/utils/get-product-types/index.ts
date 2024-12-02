/**
 * External dependencies
 */
import { getSetting } from '@woocommerce/settings';

const productTypes = getSetting< Record< string, string > >(
	'productTypes',
	{}
);

/**
 * Build options collection for product types.
 *
 * Return a collection of product types with their values and labels.
 */
export default function getProductTypeOptions() {
	return Object.keys( productTypes ).map( ( key ) => ( {
		value: key,
		label: productTypes[ key ],
	} ) );
}

export type ProductTypesOptions = typeof getProductTypeOptions;
