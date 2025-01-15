let config = require( '../../playwright.config.js' );
const { tags } = require( '../../fixtures/fixtures' );

process.env.USE_WP_ENV = 'true';

config = {
	...config,
	projects: [
		{
			name: 'WooCommerce PayPal Payments',
			grep: new RegExp( tags.PAYMENTS ),
		},
	],
};

module.exports = config;
