/**
 * External dependencies
 */
import { createReduxStore, register } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	ACTION_SET_PRODUCT_TYPES,
	ACTION_SWITCH_PRODUCT_TYPE,
	STORE_NAME,
} from './constants';
import getProductTypeOptions from '../utils/get-product-types';
import type { ProductTypeProps } from '../types';

const productTypesOptions = getProductTypeOptions();

type StoreState = {
	productTypes: {
		list: ProductTypeProps[];
		current: string | undefined;
	};
};

type Actions = {
	type: typeof ACTION_SET_PRODUCT_TYPES | typeof ACTION_SWITCH_PRODUCT_TYPE;
	productTypes?: ProductTypeProps[];
	current?: string;
};

const DEFAULT_STATE = {
	productTypes: {
		list: productTypesOptions,
		current: undefined,
	},
};

const actions = {
	switchProductType( slug: string ) {
		return {
			type: ACTION_SWITCH_PRODUCT_TYPE,
			current: slug,
		};
	},

	setProductTypes( productTypes: ProductTypeProps[] ) {
		return {
			type: ACTION_SET_PRODUCT_TYPES,
			productTypes,
		};
	},
};

const selectors = {
	getProductTypes( state: StoreState ) {
		return state.productTypes.list;
	},
	getCurrentProductType( state: StoreState ) {
		return state.productTypes.list.find(
			( productType ) => productType.slug === state.productTypes.current
		);
	},
};

const reducer = ( state: StoreState = DEFAULT_STATE, action: Actions ) => {
	switch ( action.type ) {
		case ACTION_SET_PRODUCT_TYPES:
			return {
				...state,
				productTypes: {
					...state.productTypes,
					list: action.productTypes || [],
				},
			};

		case ACTION_SWITCH_PRODUCT_TYPE:
			return {
				...state,
				productTypes: {
					...state.productTypes,
					current: action.current,
				},
			};

		default:
			return state;
	}
};

const store = createReduxStore( STORE_NAME, {
	reducer,
	actions,
	selectors,
} );

export default function registerStore() {
	register( store );
}
