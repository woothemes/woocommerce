/**
 * Internal dependencies
 */
import { getHasColorClasses } from '../';

describe( 'getHasColorClasses', () => {
	it( 'returns classes with "normal" colors, prioritizing them over "custom" colors', () => {
		const attributes = {
			className: 'wc-block-product-filter-checkbox-list',

			warningText: 'dark',
			customWarningText: '#000011',

			warningBackground: 'light',
			customWarningBackground: '#aaffff',
		};

		const colorAttributes: Array< keyof typeof attributes > = [
			'warningText',
			'warningBackground',
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

			warningText: '',
			customWarningText: '#000011',
			warningBackground: undefined,
			customWarningBackground: '#aaffff',
		};

		const colorAttributes: Array< keyof typeof attributes > = [
			'warningText',
			'warningBackground',
		];

		const result = getHasColorClasses( attributes, colorAttributes );

		expect( result ).toStrictEqual( {
			'has-warning-text-color': '#000011',
			'has-warning-background-color': '#aaffff',
		} );
	} );
} );
