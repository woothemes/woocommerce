/**
 * External dependencies
 */
import '@testing-library/jest-dom';
import '@wordpress/jest-console';

global.ResizeObserver = jest.fn().mockImplementation( () => ( {
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
} ) );

/**
 * Ignore messages that match the pattern `Store ".*" is already registered.`
 * It's expected to have duplicate registration in the test environment as there are multiple instances of the same store such as core-data, core/block-editor, etc.
 */
const consoleErrorSpy = jest
	.spyOn( console, 'error' )
	.mockImplementation( ( message: unknown, ...args: unknown[] ) => {
		if (
			typeof message === 'string' &&
			// The error was introduced since @wordpress/data@8.6.0.
			message.match( /Store ".*" is already registered/ )
		) {
			return;
		}
		// Otherwise, call the original console.error
		consoleErrorSpy.mock.calls.push( [ message, ...args ] );
	} );

const consoleWarnSpy = jest
	.spyOn( console, 'warn' )
	.mockImplementation( ( message: unknown, ...args: unknown[] ) => {
		if (
			typeof message === 'string' &&
			message.match(
				/The block ".*" is registered with an invalid category "woocommerce"./
			)
		) {
			return;
		}
		// Otherwise, call the original console.warn
		consoleWarnSpy.mock.calls.push( [ message, ...args ] );
	} );
