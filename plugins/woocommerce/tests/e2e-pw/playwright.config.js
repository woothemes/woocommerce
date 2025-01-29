/**
 * External dependencies
 */
import { defineConfig, devices } from '@playwright/test';
/**
 * Internal dependencies
 */
import { tags } from './fixtures/fixtures';

require( 'dotenv' ).config( { path: __dirname + '/.env' } );

if ( ! process.env.BASE_URL ) {
	console.log( 'BASE_URL is not set. Using default.' );
	process.env.BASE_URL = 'http://localhost:8086';
}

const {
	ALLURE_RESULTS_DIR,
	BASE_URL,
	CI,
	DEFAULT_TIMEOUT_OVERRIDE,
	E2E_MAX_FAILURES,
	REPEAT_EACH,
} = process.env;

export const TESTS_ROOT_PATH = __dirname;
export const TESTS_RESULTS_PATH = `${ TESTS_ROOT_PATH }/test-results`;
export const STORAGE_DIR_PATH = `${ TESTS_ROOT_PATH }/.state/`;
export const ADMIN_STATE_PATH = `${ STORAGE_DIR_PATH }/admin.json`;
export const CUSTOMER_STATE_PATH = `${ STORAGE_DIR_PATH }/customer.json`;
export const CONSUMER_KEY = { name: '', key: '', secret: '' };

const reporter = [
	[ 'list' ],
	[
		'allure-playwright',
		{
			outputFolder:
				ALLURE_RESULTS_DIR ??
				`${ TESTS_ROOT_PATH }/test-results/allure-results`,
			detail: true,
			suiteTitle: true,
		},
	],
	[
		'json',
		{
			outputFile: `${ TESTS_ROOT_PATH }/test-results/test-results-${ Date.now() }.json`,
		},
	],
	[
		`${ TESTS_ROOT_PATH }/reporters/environment-reporter.js`,
		{ outputFolder: `${ TESTS_ROOT_PATH }/test-results/allure-results` },
	],
	[
		`${ TESTS_ROOT_PATH }/reporters/flaky-tests-reporter.js`,
		{ outputFolder: `${ TESTS_ROOT_PATH }/test-results/flaky-tests` },
	],
];

if ( process.env.CI ) {
	reporter.push( [ 'buildkite-test-collector/playwright/reporter' ] );
	reporter.push( [ `${ TESTS_ROOT_PATH }/reporters/skipped-tests.js` ] );
} else {
	reporter.push( [
		'html',
		{
			outputFolder: `${ TESTS_ROOT_PATH }/playwright-report`,
			open: 'on-failure',
		},
	] );
}

export const setupProjects = [
	{
		name: 'global authentication',
		testDir: `${ TESTS_ROOT_PATH }/fixtures`,
		testMatch: 'auth.setup.js',
	},
	{
		name: 'consumer token setup',
		testDir: `${ TESTS_ROOT_PATH }/fixtures`,
		testMatch: 'token.setup.js',
		teardown: 'consumer token teardown',
		dependencies: [ 'global authentication' ],
	},
	{
		name: 'consumer token teardown',
		testDir: `${ TESTS_ROOT_PATH }/fixtures`,
		testMatch: `token.teardown.js`,
	},
	{
		name: 'site setup',
		testDir: `${ TESTS_ROOT_PATH }/fixtures`,
		testMatch: `site.setup.js`,
		dependencies: [ 'consumer token setup' ],
	},
];

export default defineConfig( {
	timeout: DEFAULT_TIMEOUT_OVERRIDE
		? Number( DEFAULT_TIMEOUT_OVERRIDE )
		: 120 * 1000,
	expect: { timeout: 20 * 1000 },
	outputDir: TESTS_RESULTS_PATH,
	testDir: `${ TESTS_ROOT_PATH }/tests`,
	retries: CI ? 1 : 0,
	repeatEach: REPEAT_EACH ? Number( REPEAT_EACH ) : 1,
	workers: 1,
	reportSlowTests: { max: 5, threshold: 30 * 1000 }, // 30 seconds threshold
	reporter,
	maxFailures: E2E_MAX_FAILURES ? Number( E2E_MAX_FAILURES ) : 0,
	forbidOnly: !! CI,
	use: {
		baseURL: `${ BASE_URL }/`.replace( /\/+$/, '/' ),
		screenshot: { mode: 'only-on-failure', fullPage: true },
		trace:
			/^https?:\/\/localhost/.test( BASE_URL ) || ! CI
				? 'retain-on-first-failure'
				: 'off',
		video: 'retain-on-failure',
		actionTimeout: 20 * 1000,
		navigationTimeout: 20 * 1000,
		channel: 'chrome',
		...devices[ 'Desktop Chrome' ],
	},
	snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}',

	projects: [
		...setupProjects,
		{
			name: 'e2e',
			testIgnore: '**/api-tests/**',
			dependencies: [ 'site setup' ],
		},
		{
			name: 'api',
			testMatch: '**/api-tests/**',
			dependencies: [ 'site setup' ],
		},
		{
			name: 'e2e-hpos-disabled',
			grep: new RegExp( tags.HPOS ),
		},
	],
} );
