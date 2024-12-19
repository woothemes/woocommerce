/**
 * External dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
/**
 * Internal dependencies
 */
import { store as woocommerceTemplateStateStore } from '../../../../shared/store';
import type { ProductTypeProps } from '../../types';

type ProductTypeSelector = {
	productTypes: ProductTypeProps[];
	current: ProductTypeProps;
	set: ( productType: string ) => void;
	registeredListeners: string[];
	registerListener: ( listener: string ) => void;
	unregisterListener: ( listener: string ) => void;
};

/**
 * Hook to get data from the store to manage the product type selector and listeners.
 * Also, it provides a function to switch the current product type.
 * It's a layer of abstraction to the store.
 *
 * @return {ProductTypeSelector} The product type selector data and functions.
 */
export default function useProductTypeSelector(): ProductTypeSelector {
	/*
	 * Get the registered listeners, available product types and the current product type
	 * from the store.
	 */
	const { productTypes, current, registeredListeners } = useSelect< {
		productTypes: ProductTypeProps[];
		current: ProductTypeProps;
		registeredListeners: string[];
	} >( ( select ) => {
		const {
			getProductTypes,
			getCurrentProductType,
			getRegisteredListeners,
		} = select( woocommerceTemplateStateStore );

		return {
			productTypes: getProductTypes(),
			current: getCurrentProductType(),
			registeredListeners: getRegisteredListeners(),
		};
	}, [] );

	const { registerListener, unregisterListener } = useDispatch(
		woocommerceTemplateStateStore
	);

	const { switchProductType } = useDispatch( woocommerceTemplateStateStore );

	return {
		productTypes,
		current,
		set: switchProductType,
		registeredListeners,
		registerListener,
		unregisterListener,
	};
}
