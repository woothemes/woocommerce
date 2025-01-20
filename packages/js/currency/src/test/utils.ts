/**
 * External dependencies
 */
import { numberFormat } from '@woocommerce/number';

/**
 * Internal dependencies
 */
import { localiseMonetaryValue } from '../utils';

const config = {
	code: 'USD',
	symbol: '$',
	symbolPosition: 'left',
	decimalSeparator: '.',
	priceFormat: '%1$s%2$s',
	thousandSeparator: ',',
	precision: 2,
};

describe( 'localiseMonetaryValue', () => {
	it( 'should format a number input correctly', () => {
		expect( localiseMonetaryValue( config, 1234 ) ).toBe(
			numberFormat( config, 1234 )
		);
	} );

	it( 'should format string numbers correctly', () => {
		expect( localiseMonetaryValue( config, '123456789' ) ).toBe(
			'123,456,789.00'
		);
	} );

	it( 'should format with swapped decimal and thousand separator', () => {
		const customConfig = {
			...config,
			decimalSeparator: ',',
			thousandSeparator: '.',
		};
		expect( localiseMonetaryValue( customConfig, '123.456.789' ) ).toBe(
			'123.456.789,00'
		);
	} );

	it( 'should not format incorrectly formatted numbers according to current config', () => {
		const customConfig = {
			...config,
			decimalSeparator: ',',
			thousandSeparator: '.',
		};
		expect( localiseMonetaryValue( customConfig, '7.5' ) ).toBe( '7.5' );
	} );

	it( 'should format number according to precision', () => {
		const customConfig = {
			...config,
			precision: 5,
		};
		expect( localiseMonetaryValue( customConfig, '123.4' ) ).toBe(
			'123.40000'
		);
	} );

	it( 'should format number and trim leading and trailing spaces', () => {
		expect( localiseMonetaryValue( config, ' 1234 ' ) ).toBe( '1,234.00' );
	} );

	it( 'should not format numbers when text is included', () => {
		expect( localiseMonetaryValue( config, 'Value 1234' ) ).toBe(
			'Value 1234'
		);
	} );

	it( 'should not format when formula is included', () => {
		expect(
			localiseMonetaryValue( config, '50 + (([qty]*2+1)(5*10))(1)' )
		).toBe( '50 + (([qty]*2+1)(5*10))(1)' );
	} );

	it( 'should return the original input for non-string, non-number inputs', () => {
		const input = { some: 'object' };
		expect( localiseMonetaryValue( config, input ) ).toBe( input );
	} );
} );
