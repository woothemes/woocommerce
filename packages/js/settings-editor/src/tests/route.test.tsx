/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { renderHook } from '@testing-library/react-hooks';
import { screen, render } from '@testing-library/react';
import { getQuery } from '@woocommerce/navigation';
import { addAction, applyFilters, didFilter } from '@wordpress/hooks';
/**
 * Internal dependencies
 */
import { useActiveRoute, useModernRoutes } from '../route';

// Mock external dependencies
jest.mock( '@woocommerce/navigation', () => ( {
	getQuery: jest.fn(),
} ) );

jest.mock( '@wordpress/hooks', () => ( {
	addAction: jest.fn(),
	removeAction: jest.fn(),
	applyFilters: jest.fn(),
	didFilter: jest.fn(),
} ) );

const mockSettingsPages = {
	general: {
		label: 'General',
		sections: {
			'': {
				label: 'General',
				settings: [
					{
						title: 'Store Address',
						type: 'title',
						desc: 'This is where your business is located.',
						id: 'store_address',
						value: false,
					},
				],
			},
		},
		is_modern: false,
	},
};

describe( 'route.tsx', () => {
	beforeEach( () => {
		// Reset all mocks
		jest.clearAllMocks();

		// Mock window.wcSettings
		window.wcSettings = {
			admin: {
				settingsPages: mockSettingsPages,
			},
		};

		// Default query mock
		( getQuery as jest.Mock ).mockReturnValue( {
			path: '/settings/general',
		} );
	} );

	describe( 'useActiveRoute', () => {
		it( 'should return legacy route for non-modern pages', () => {
			const { result } = renderHook( () => useActiveRoute() );

			expect( result.current.key ).toBe( 'general' );
			expect( result.current.areas.content ).toBeDefined();
			expect( result.current.areas.sidebar ).toBeDefined();
		} );

		it( 'should return not found route for non-existent pages', () => {
			( getQuery as jest.Mock ).mockReturnValue( {
				path: '/non-existent',
			} );

			const { result } = renderHook( () => useActiveRoute() );

			expect( result.current.key ).toBe( 'non-existent' );
			render( result.current.areas.content as JSX.Element );
			expect( screen.getByText( 'Page not found' ) ).toBeInTheDocument();
			expect( result.current.areas.sidebar ).toBeDefined();
		} );

		it( 'should return modern route for modern pages', () => {
			// Mock a modern page
			window.wcSettings = {
				admin: {
					settingsPages: {
						modern: {
							is_modern: true,
							label: 'Modern',
							sections: {},
						},
					},
				},
			};

			( getQuery as jest.Mock ).mockReturnValue( {
				path: '/modern',
			} );
			( applyFilters as jest.Mock ).mockReturnValue( {
				modern: {
					key: 'modern',
					areas: {
						sidebar: null,
						content: <div>Modern Page</div>,
					},
				},
			} );

			const { result } = renderHook( () => useActiveRoute() );
			expect( result.current.key ).toBe( 'modern' );
		} );
	} );

	describe( 'useModernRoutes', () => {
		it( 'should update routes when new hooks are added', () => {
			renderHook( () => useModernRoutes() );

			// Simulate hook added
			( didFilter as jest.Mock ).mockReturnValue( 1 );
			const hookAddedCallback = ( addAction as jest.Mock ).mock
				.calls[ 0 ][ 2 ];
			hookAddedCallback( 'woocommerce_admin_settings_pages' );

			expect( applyFilters ).toHaveBeenCalledWith(
				'woocommerce_admin_settings_pages',
				{}
			);
		} );

		it( 'should not update routes for unrelated hooks', () => {
			renderHook( () => useModernRoutes() );

			// Simulate unrelated hook added
			const hookAddedCallback = ( addAction as jest.Mock ).mock
				.calls[ 0 ][ 2 ];
			hookAddedCallback( 'unrelated_hook' );

			expect( applyFilters ).toHaveBeenCalledTimes( 1 ); // Only initial call
		} );
	} );
} );
