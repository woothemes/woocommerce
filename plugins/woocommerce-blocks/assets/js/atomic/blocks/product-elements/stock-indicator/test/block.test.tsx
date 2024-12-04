/**
 * External dependencies
 */
import { render } from '@testing-library/react';
import { ProductDataContextProvider } from '@woocommerce/shared-context';
import { ProductResponseItem } from '@woocommerce/types';
import { getSetting } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import { Block } from '../block';

jest.mock( '@woocommerce/settings', () => ( {
	getSetting: jest.fn().mockImplementation( ( param ) => {
		if ( param === 'wcBlocksConfig' ) {
			return {
				pluginUrl: '/mock-url/',
				productCount: 0,
				defaultAvatar: '',
				restApiRoutes: {},
				wordCountType: 'words',
			};
		}
		if ( param === 'attributes' ) {
			return [
				{
					attribute_id: '1',
					attribute_name: 'test',
					attribute_label: 'Test',
					attribute_orderby: 'menu_order',
					attribute_public: 1,
					attribute_type: 'select',
				},
			];
		}
		if ( param === 'stockStatusOptions' ) {
			return {
				instock: 'In stock',
				outofstock: 'Out of stock',
				onbackorder: 'On backorder',
			};
		}
	} ),
	getSettingWithCoercion: jest.fn().mockReturnValue( false ),
	STORE_PAGES: {
		shop: null,
		cart: null,
		checkout: null,
		myaccount: null,
		privacy: null,
		terms: null,
	},
	SITE_CURRENCY: {
		code: 'USD',
		symbol: '$',
		minorUnit: 2,
	},
	defaultFields: {
		first_name: '',
		last_name: '',
		company: '',
		address_1: '',
		address_2: '',
		city: '',
		state: '',
		postcode: '',
		country: '',
		phone: '',
		email: '',
	},
} ) );

jest.mock( '@woocommerce/base-hooks', () => ( {
	__esModule: true,
	useStyleProps: jest.fn( () => ( {
		className: '',
		style: {},
	} ) ),
} ) );

jest.mock( '@woocommerce/block-settings', () => ( {
	ADDRESS_FORM_KEYS: [
		'first_name',
		'last_name',
		'company',
		'address_1',
		'address_2',
		'city',
		'state',
		'postcode',
		'country',
		'phone',
		'email',
	],
	COUNTRY_LOCALE: {
		country: 'US',
		locale: 'en_US',
	},
	blocksConfig: {
		defaultAvatar: 'test-avatar-url',
	},
} ) );

const defaultProduct: ProductResponseItem = {
	name: 'Test Product',
	id: 1,
	type: 'simple',
	is_in_stock: true,
	manage_stock: true,
	is_on_backorder: false,
	backorder_notification_enabled: false,
	parent: 0,
	permalink: '',
	images: [],
	variation: '',
	sku: '',
	short_description: '',
	description: '',
	on_sale: false,
	prices: {
		currency_code: 'USD',
		currency_symbol: '',
		currency_minor_unit: 0,
		currency_decimal_separator: '',
		currency_thousand_separator: '',
		currency_prefix: '',
		currency_suffix: '',
		price: '',
		regular_price: '',
		sale_price: '',
		price_range: null,
	},
	price_html: '',
	average_rating: '',
	review_count: 0,
	categories: [],
	tags: [],
	attributes: [],
	variations: [],
	has_options: false,
	is_purchasable: true,
	low_stock_remaining: null,
	sold_individually: false,
	add_to_cart: {
		text: '',
		description: '',
		url: '',
		minimum: 1,
		maximum: 99,
		multiple_of: 1,
	},
	slug: '',
};

describe( 'Stock Indicator Block', () => {
	beforeEach( () => {
		( getSetting as jest.Mock ).mockImplementation( ( setting ) => {
			if ( setting === 'productTypesWithoutStockIndicator' ) {
				return [ 'external', 'grouped', 'variable' ];
			}
			return undefined;
		} );
	} );

	describe( 'isStockVisible', () => {
		it( 'should not show stock indicator for grouped products', () => {
			const product = {
				...defaultProduct,
				type: 'grouped',
			};

			const { container } = render(
				<ProductDataContextProvider
					product={ product }
					isLoading={ false }
				>
					<Block
						productId={ 1 }
						isDescendentOfQueryLoop={ false }
						isDescendantOfAllProducts={ false }
					/>
				</ProductDataContextProvider>
			);

			expect( container.firstChild ).toBeNull();
		} );

		it( 'should not show stock indicator when product is in stock and stock is not managed', () => {
			const product = {
				...defaultProduct,
				is_in_stock: true,
				manage_stock: false,
				is_on_backorder: false,
			};

			const { container } = render(
				<ProductDataContextProvider
					product={ product }
					isLoading={ false }
				>
					<Block
						productId={ 1 }
						isDescendentOfQueryLoop={ false }
						isDescendantOfAllProducts={ false }
					/>
				</ProductDataContextProvider>
			);

			expect( container.firstChild ).toBeNull();
		} );

		it( 'should not show stock indicator for variations with specific conditions', () => {
			const product = {
				...defaultProduct,
				type: 'variation',
				backorder_notification_enabled: false,
				is_on_backorder: true,
				manage_stock: true,
			};

			const { container } = render(
				<ProductDataContextProvider
					product={ product }
					isLoading={ false }
				>
					<Block
						productId={ 1 }
						isDescendentOfQueryLoop={ false }
						isDescendantOfAllProducts={ false }
					/>
				</ProductDataContextProvider>
			);

			expect( container.firstChild ).toBeNull();
		} );

		it( 'should show stock indicator for simple products with managed stock', () => {
			const product = {
				...defaultProduct,
				type: 'simple',
				manage_stock: true,
			};

			const { container } = render(
				<ProductDataContextProvider
					product={ product }
					isLoading={ false }
				>
					<Block
						productId={ 1 }
						isDescendentOfQueryLoop={ false }
						isDescendantOfAllProducts={ false }
					/>
				</ProductDataContextProvider>
			);

			expect( container.firstChild ).not.toBeNull();
		} );

		it( 'should show stock indicator for variations with backorder enabled', () => {
			const product = {
				...defaultProduct,
				type: 'variation',
				backorder_notification_enabled: true,
			};
			const { container } = render(
				<ProductDataContextProvider
					product={ product }
					isLoading={ false }
				>
					<Block
						productId={ 1 }
						isDescendentOfQueryLoop={ false }
						isDescendantOfAllProducts={ false }
					/>
				</ProductDataContextProvider>
			);

			expect( container.firstChild ).not.toBeNull();
		} );

		it( 'should show stock indicator for out of stock variations with manage stock false', () => {
			const product = {
				...defaultProduct,
				type: 'variation',
				manage_stock: false,
				is_in_stock: false,
			};

			const { container } = render(
				<ProductDataContextProvider
					product={ product }
					isLoading={ false }
				>
					<Block
						productId={ 1 }
						isDescendentOfQueryLoop={ false }
						isDescendantOfAllProducts={ false }
					/>
				</ProductDataContextProvider>
			);

			expect( container.firstChild ).not.toBeNull();
		} );
	} );
} );
