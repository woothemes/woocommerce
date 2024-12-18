/**
 * External dependencies
 */
import '@testing-library/jest-dom';
import '@wordpress/jest-console';

/**
 * Internal dependencies
 */
import { createBlockCategory } from './create-block-category';

beforeAll( async () => {
	global.ResizeObserver = jest.fn().mockImplementation( () => ( {
		observe: jest.fn(),
		unobserve: jest.fn(),
		disconnect: jest.fn(),
	} ) );

	await createBlockCategory();
} );

afterAll( () => {
	jest.resetAllMocks();
} );
