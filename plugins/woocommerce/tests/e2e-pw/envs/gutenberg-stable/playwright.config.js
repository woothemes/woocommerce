let config = require( '../../playwright.config.js' );
const { tags } = require( '../../fixtures/fixtures' );

process.env.USE_WP_ENV = 'true';

config = {
	...config,
	projects: [
		{
			name: 'Gutenberg',
			grep: new RegExp( tags.GUTENBERG ),
		},
	],
};

module.exports = config;
