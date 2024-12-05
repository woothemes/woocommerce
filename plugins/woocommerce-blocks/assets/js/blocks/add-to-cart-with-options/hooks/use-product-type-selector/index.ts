/**
 * External dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
/**
 * Internal dependencies
 */
import { store as woocommerceTemplateStateStore } from '../../store';
import type { ProductTypeProps } from '../../types';

type ProductTypeSelector = {
	productTypes: ProductTypeProps[];
	current: ProductTypeProps;
	set: ( productType: string ) => void;
};

/**
 * Hook to get data from the store to manage the product type selector.
 * Also, it provides a function to switch the current product type.
 * It's a layer of abstraction to the store.
 *
 * @return {ProductTypeSelector} The product type selector data and functions.
 */
export default function useProductTypeSelector(): ProductTypeSelector {
	/*
	 * Get the product types and the current product type
	 * from the store.
	 */
	const { productTypes, current } = useSelect< {
		productTypes: ProductTypeProps[];
		current: ProductTypeProps;
	} >( ( select ) => {
		const { getProductTypes, getCurrentProductType } = select(
			woocommerceTemplateStateStore
		);

		return {
			productTypes: getProductTypes(),
			current: getCurrentProductType(),
		};
	}, [] );

	const { switchProductType } = useDispatch( woocommerceTemplateStateStore );

	return {
		productTypes,
		current,
		set: switchProductType,
	};
}
