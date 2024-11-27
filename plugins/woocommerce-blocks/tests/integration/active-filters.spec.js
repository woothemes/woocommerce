/**
 * External dependencies
 */
import { fireEvent, screen, within } from '@testing-library/react';

/**
 * Internal dependencies
 */
import { initializeEditor, selectBlock } from '../utils/integration/editor';
import '../../assets/js/blocks/active-filters';

async function setup( attributes ) {
	const testBlock = [ { name: 'woocommerce/active-filters', attributes } ];
	return initializeEditor( testBlock );
}

describe( 'active filters', () => {
	beforeAll( () => {
		global.ResizeObserver = jest.fn().mockImplementation( () => ( {
			observe: jest.fn(),
			unobserve: jest.fn(),
			disconnect: jest.fn(),
		} ) );
	} );

	afterAll( () => {
		jest.resetAllMocks();
	} );

	test( 'should change the display style', async () => {
		await setup();

		const activeFiltersBlock = within(
			screen.getByLabelText( /Block: Active Filters/i )
		);

		expect(
			activeFiltersBlock.queryByRole( 'button', {
				name: /Clear All Filters/i,
			} )
		).toBeInTheDocument();

		const filterList = activeFiltersBlock.getByRole( 'list' );

		expect( filterList.classList ).toContain(
			'wc-block-active-filters__list'
		);
		expect( filterList.classList ).not.toContain(
			'wc-block-active-filters__list--chips'
		);

		await selectBlock( /Block: Active Filters/i );

		const displaySettings = screen.getByRole( 'button', {
			name: /Display Settings/i,
		} );

		if ( displaySettings.getAttribute( 'aria-expanded' ) !== 'true' ) {
			fireEvent.click( displaySettings );
		}

		fireEvent.click( screen.getByRole( 'radio', { name: /Chips/i } ) );

		expect( filterList.classList ).toContain(
			'wc-block-active-filters__list'
		);
		expect( filterList.classList ).toContain(
			'wc-block-active-filters__list--chips'
		);
	} );
} );
