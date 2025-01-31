/**
 * External dependencies
 */
const path = require( 'path' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

/**
 * Internal dependencies
 */
const { sharedOptimizationConfig } = require( './webpack-shared-config' );

// TODO: Implement support for block.json viewScriptModule.
const blockEntries = {
	'woocommerce/store-notices': './assets/js/blocks/store-notices/frontend.ts',
	'woocommerce/product-button':
		'./assets/js/atomic/blocks/product-elements/button/frontend.tsx',
	'woocommerce/product-filter-active':
		'./assets/js/blocks/product-filters/inner-blocks/active-filters/frontend.ts',
	'woocommerce/product-filter-attribute':
		'./assets/js/blocks/product-filters/inner-blocks/attribute-filter/frontend.ts',
	'woocommerce/product-filter-checkbox-list':
		'./assets/js/blocks/product-filters/inner-blocks/checkbox-list/frontend.ts',
};

module.exports = {
	entry: blockEntries,
	optimization: sharedOptimizationConfig,
	name: 'interactivity-blocks-modules',
	experiments: {
		outputModule: true,
	},
	output: {
		devtoolNamespace: 'wc',
		filename: '[name].js',
		library: {
			type: 'module',
		},
		path: path.resolve( __dirname, '../build/' ),
		asyncChunks: false,
		chunkFormat: 'module',
		module: true,
	},
	resolve: {
		extensions: [ '.js', '.ts', '.tsx' ],
	},
	plugins: [
		new DependencyExtractionWebpackPlugin( {
			combineAssets: true,
			combinedOutputFile: './interactivity-blocks-frontend-assets.php',
		} ),
	],
	module: {
		rules: [
			{
				test: /\.(j|t)sx?$/,
				exclude: [ /[\/\\](node_modules|build|docs|vendor)[\/\\]/ ],
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@wordpress/babel-preset-default',
								{
									modules: false,
									targets: {
										browsers: [
											'extends @wordpress/browserslist-config',
										],
									},
								},
							],
						],
						cacheDirectory: path.resolve(
							__dirname,
							'../../../node_modules/.cache/babel-loader'
						),
						cacheCompression: false,
					},
				},
			},
			{
				test: /\.s[c|a]ss$/,
				use: {
					loader: 'ignore-loader',
				},
			},
		],
	},
};
