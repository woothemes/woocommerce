/**
 * External dependencies
 */
import { getSetting } from '@woocommerce/settings';

type ProductTypeProps = {
	value: string;
	label: string;
};

const productTypes = getSetting< Record< string, string > >(
	'productTypes',
	{}
);

/**
 * Build product types collection for product types.
 *
 * @return {ProductTypeProps[]} Product types collection.
 */
export default function getProductTypeOptions(): ProductTypeProps[] {
	return Object.keys( productTypes ).map( ( key ) => ( {
		value: key,
		label: productTypes[ key ],
	} ) );
}

export type ProductTypesOptions = typeof getProductTypeOptions;
