/**
 * External dependencies
 */
import { screen, render } from '@testing-library/react';
import { SlotFillProvider } from '@woocommerce/blocks-checkout';
import { ShippingCalculatorContext } from '@woocommerce/base-components/cart-checkout/shipping-calculator/context';
import * as wpData from '@wordpress/data';
import { CartResponseTotals, CartShippingRate } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { TotalsShipping } from '../index';

jest.mock( '@wordpress/data', () => ( {
	__esModule: true,
	...jest.requireActual( '@wordpress/data' ),
	useSelect: jest.fn(),
} ) );

// Mock use select so we can override it when wc/store/checkout is accessed, but return the original select function if any other store is accessed.
wpData.useSelect.mockImplementation(
	jest.fn().mockImplementation( ( passedMapSelect ) => {
		const mockedSelect = jest.fn().mockImplementation( ( storeName ) => {
			if ( storeName === 'wc/store/checkout' ) {
				return {
					prefersCollection() {
						return false;
					},
				};
			}
			return jest.requireActual( '@wordpress/data' ).select( storeName );
		} );
		passedMapSelect( mockedSelect, {
			dispatch: jest.requireActual( '@wordpress/data' ).dispatch,
		} );
	} )
);

const shippingAddress = {
	first_name: 'John',
	last_name: 'Doe',
	company: 'Company',
	address_1: '409 Main Street',
	address_2: 'Apt 1',
	city: 'London',
	postcode: 'W1T 4JG',
	country: 'GB',
	state: '',
	email: 'john.doe@company',
	phone: '+1234567890',
};

const shippingRates = [
	{
		package_id: 0,
		name: 'Initial Shipment',
		destination: {
			address_1: '30 Test Street',
			address_2: 'Apt 1 Shipping',
			city: 'Liverpool',
			state: '',
			postcode: 'L1 0BP',
			country: 'GB',
		},
		items: [
			{
				key: 'acf4b89d3d503d8252c9c4ba75ddbf6d',
				name: 'Test product',
				quantity: 1,
			},
		],
		shipping_rates: [
			{
				rate_id: 'flat_rate:1',
				name: 'Shipping',
				description: '',
				delivery_time: '',
				price: '0',
				taxes: '0',
				instance_id: 13,
				method_id: 'flat_rate',
				meta_data: [
					{
						key: 'Items',
						value: 'Test product &times; 1',
					},
				],
				selected: false,
				currency_code: 'USD',
				currency_symbol: '$',
				currency_minor_unit: 2,
				currency_decimal_separator: '.',
				currency_thousand_separator: ',',
				currency_prefix: '$',
				currency_suffix: '',
			},
		],
	},
] as CartShippingRate[];

describe( 'TotalsShipping', () => {
	it( 'shows FREE if shipping cost is 0', () => {
		const mockShippingRates = shippingRates;
		mockShippingRates[ 0 ].shipping_rates[ 0 ].price = '0';
		const { rerender } = render(
			<SlotFillProvider>
				<TotalsShipping
					label="Delivery"
					shippingRates={ mockShippingRates }
					shippingAddress={ shippingAddress }
					values={
						{
							total_shipping: '0',
							total_shipping_tax: '0',
							currency_code: 'USD',
							currency_symbol: '$',
							currency_minor_unit: 2,
							currency_decimal_separator: '.',
							currency_prefix: '',
							currency_suffix: '',
							currency_thousand_separator: ', ',
						} as CartResponseTotals
					}
				/>
			</SlotFillProvider>
		);
		expect(
			screen.getByText( 'Free', { exact: true } )
		).toBeInTheDocument();
		expect( screen.queryByText( '0.00' ) ).not.toBeInTheDocument();

		rerender(
			<SlotFillProvider>
				<TotalsShipping
					label="Delivery"
					shippingRates={ shippingRates }
					shippingAddress={ shippingAddress }
					values={
						{
							total_shipping: '5678',
							total_shipping_tax: '0',
							currency_code: 'USD',
							currency_symbol: '$',
							currency_minor_unit: 2,
							currency_decimal_separator: '.',
							currency_prefix: '',
							currency_suffix: '',
							currency_thousand_separator: ', ',
						} as CartResponseTotals
					}
				/>
			</SlotFillProvider>
		);

		expect( screen.queryByText( 'Free' ) ).not.toBeInTheDocument();
		expect( screen.getByText( '56.78' ) ).toBeInTheDocument();
	} );

	it( 'should show correct calculator button label if address is complete', () => {
		render(
			<SlotFillProvider>
				<ShippingCalculatorContext.Provider
					value={ {
						showCalculator: true,
						isShippingCalculatorOpen: false,
						setIsShippingCalculatorOpen: jest.fn(),
						shippingCalculatorID:
							'shipping-calculator-form-wrapper',
					} }
				>
					<TotalsShipping
						label="Delivery"
						shippingRates={ shippingRates }
						shippingAddress={ shippingAddress }
						values={
							{
								total_shipping: '5678',
								total_shipping_tax: '0',
								currency_code: 'USD',
								currency_symbol: '$',
								currency_minor_unit: 2,
								currency_decimal_separator: '.',
								currency_prefix: '',
								currency_suffix: '',
								currency_thousand_separator: ', ',
							} as CartResponseTotals
						}
					/>
				</ShippingCalculatorContext.Provider>
			</SlotFillProvider>
		);
		expect(
			screen.getByText(
				'Delivers to W1T 4JG, London, United Kingdom (UK)'
			)
		).toBeInTheDocument();
		expect( screen.getByText( 'Change address' ) ).toBeInTheDocument();
	} );

	it( 'should show correct calculator button label if address is incomplete', () => {
		render(
			<SlotFillProvider>
				<ShippingCalculatorContext.Provider
					value={ {
						showCalculator: true,
						isShippingCalculatorOpen: false,
						setIsShippingCalculatorOpen: jest.fn(),
						shippingCalculatorID:
							'shipping-calculator-form-wrapper',
					} }
				>
					<TotalsShipping
						label="Delivery"
						shippingRates={ shippingRates }
						shippingAddress={ {
							...shippingAddress,
							city: '',
							country: '',
							postcode: '',
						} }
						values={
							{
								total_shipping: '5678',
								total_shipping_tax: '0',
								currency_code: 'USD',
								currency_symbol: '$',
								currency_minor_unit: 2,
								currency_decimal_separator: '.',
								currency_prefix: '',
								currency_suffix: '',
								currency_thousand_separator: ', ',
							} as CartResponseTotals
						}
					/>
				</ShippingCalculatorContext.Provider>
			</SlotFillProvider>
		);
		expect(
			screen.queryByText( 'Change address' )
		).not.toBeInTheDocument();
		expect(
			screen.getByText( 'Enter address to check delivery options' )
		).toBeInTheDocument();
	} );

	it( 'does show the calculator button when default rates are available and has formatted address', () => {
		render(
			<SlotFillProvider>
				<ShippingCalculatorContext.Provider
					value={ {
						showCalculator: true,
						isShippingCalculatorOpen: false,
						setIsShippingCalculatorOpen: jest.fn(),
						shippingCalculatorID:
							'shipping-calculator-form-wrapper',
					} }
				>
					<TotalsShipping
						label="Delivery"
						shippingRates={ shippingRates }
						shippingAddress={ {
							...shippingAddress,
							city: '',
							state: 'California',
							country: 'US',
							postcode: '',
						} }
						values={
							{
								total_shipping: '5678',
								total_shipping_tax: '0',
								currency_code: 'USD',
								currency_symbol: '$',
								currency_minor_unit: 2,
								currency_decimal_separator: '.',
								currency_prefix: '',
								currency_suffix: '',
								currency_thousand_separator: ', ',
							} as CartResponseTotals
						}
					/>
				</ShippingCalculatorContext.Provider>
			</SlotFillProvider>
		);
		expect( screen.queryByText( 'Change address' ) ).toBeInTheDocument();
		expect(
			screen.queryByText( 'Enter address to check delivery options' )
		).not.toBeInTheDocument();
	} );
} );
