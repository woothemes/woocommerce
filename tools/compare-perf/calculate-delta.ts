/**
 * External dependencies
 */
const bold = require( 'chalk' );
const path = require( 'path' );

/**
 * Internal dependencies
 */
const { readJSONFile, logAtIndent } = require( './utils' );

const formats = {
	success: bold.green,
};

const ARTIFACTS_PATH =
	process.env.WP_ARTIFACTS_PATH || path.join( process.cwd(), 'artifacts' );
const RESULTS_FILE_SUFFIX = '.performance-results.json';

/**
 * Calculates and prints the deltas for server response time for each test suite.
 *
 * @param {string[]} testSuites Test suites we are aiming.
 * @param {string[]} branches   Branches we are aiming.
 */
function calculateDelta( testSuites: string[], branches: string[] ): void {
	logAtIndent( 0, 'Checking delta' );

	// Calculate medians from all rounds.
	for ( const testSuite of testSuites ) {
		logAtIndent( 1, 'Test suite:', formats.success( testSuite ) );

		const calculatedResultsPath = path.join(
			ARTIFACTS_PATH,
			testSuite + RESULTS_FILE_SUFFIX
		);

		const results = readJSONFile( calculatedResultsPath, 'utf8' );
		const currentBranch = branches[ 0 ];
		const baseBranch = branches[ 1 ];

		const percentage =
			( results[ currentBranch ].serverResponse /
				results[ baseBranch ].serverResponse -
				1 ) *
			100;

		logAtIndent(
			2,
			'Server response delta:',
			formats.success( percentage )
		);
	}
}

module.exports = {
	calculateDelta,
};
