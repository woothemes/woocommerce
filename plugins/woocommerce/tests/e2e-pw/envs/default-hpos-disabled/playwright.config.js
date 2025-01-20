let config = require( '../../playwright.config.js' );
const { tags } = require( '../../fixtures/fixtures' );

process.env.USE_WP_ENV = 'true';
process.env.DISABLE_HPOS = '1';

config = {
	...config,
	projects: [
		{
			name: 'ui',
			grep: new RegExp( tags.HPOS ),
		},
		{
			name: 'api',
			testMatch: '**/api-tests/**',
		},
	],
};

module.exports = config;
