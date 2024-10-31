/**
 * Internal dependencies
 */
import { getHasColorClasses } from '../';

describe( 'getHasColorClasses', () => {
	it( 'returns classes with "normal" colors, prioritizing them over "custom" colors', () => {
		const attributes = {
			className: 'wc-block-product-filter-checkbox-list',

			warningTextColor: 'dark',
			customWarningTextColor: '#000011',

			warningBackgroundColor: 'light',
			customWarningBackgroundColor: '#aaffff',
		};

		const colorAttributes: Array< keyof typeof attributes > = [
			'warningTextColor',
			'customWarningTextColor',
			'warningBackgroundColor',
			'customWarningBackgroundColor',
		];

		const result = getHasColorClasses( attributes, colorAttributes );

		expect( result ).toStrictEqual( {
			'has-warning-text-color': 'dark',
			'has-warning-background-color': 'light',
		} );
	} );

	it( 'returns classes with "custom" colors when "normal" colors are not defined', () => {
		const attributes = {
			className: 'wc-block-product-filter-checkbox-list',

			warningTextColor: undefined,
			customWarningTextColor: '#000011',
			warningBackgroundColor: undefined,
			customWarningBackgroundColor: '#aaffff',
		};

		const colorAttributes: Array< keyof typeof attributes > = [
			'warningTextColor',
			'customWarningTextColor',
			'warningBackgroundColor',
			'customWarningBackgroundColor',
		];

		const result = getHasColorClasses( attributes, colorAttributes );

		expect( result ).toStrictEqual( {
			'has-warning-text-color': '#000011',
			'has-warning-background-color': '#aaffff',
		} );
	} );
} );
