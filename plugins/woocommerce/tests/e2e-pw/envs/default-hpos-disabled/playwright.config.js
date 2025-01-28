let config = require( '../../playwright.config.js' );

process.env.USE_WP_ENV = 'true';
process.env.DISABLE_HPOS = '1';

config = {
	...config,
};

module.exports = config;
