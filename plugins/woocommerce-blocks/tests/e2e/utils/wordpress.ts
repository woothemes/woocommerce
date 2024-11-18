/**
 * Internal dependencies
 */
import { wpCLI } from './wp-cli';

export const getInstalledWordPressVersion = async () => {
	try {
		const { stdout } = await wpCLI( `core version` );

		const version = stdout
			.split( '\n' )
			.filter( ( line ) => line !== '' )
			.at( -1 );

		if ( ! version || isNaN( Number.parseFloat( version ) ) ) {
			throw new Error( "Couldn't parse WordPress version" );
		}

		return Number.parseFloat( version );
	} catch ( error ) {
		const errorMessage =
			error && typeof error === 'object' && 'message' in error
				? error.message
				: "Couldn't get WordPress version";
		throw new Error( `Error getting WordPress version: ${ errorMessage }` );
	}
};
