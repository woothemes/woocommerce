let config = require( '../../playwright.config.js' );
const { tags } = require( '../../fixtures/fixtures' );

process.env.USE_WP_ENV = 'true';

config = {
	...config,
	projects: [
		{
			name: 'WooCommerce Shipping & Tax',
			grep: new RegExp( tags.SERVICES ),
		},
	],
};

module.exports = config;
