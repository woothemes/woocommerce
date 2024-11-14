/**
 * External dependencies
 */
import '@testing-library/jest-dom';
import '@wordpress/jest-console';

const consoleErrorSpy = jest
	.spyOn( console, 'error' )
	.mockImplementation( ( message, ...args ) => {
		// Ignore messages that match the pattern "Store ".*" is already registered." because we have duplicate registration in the test environment as there are multiple instances of the same store such as core-data, core/block-editor, etc.
		if (
			typeof message === 'string' &&
			message.match( /Store ".*" is already registered/ )
		) {
			return;
		}
		// Otherwise, call the original console.error
		consoleErrorSpy.mock.calls.push( [ message, ...args ] );
	} );
