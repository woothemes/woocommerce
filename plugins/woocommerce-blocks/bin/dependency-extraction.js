const WPDependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const webpack = require( 'webpack' );

class DependencyExtractionWebpackPlugin extends WPDependencyExtractionWebpackPlugin {
	/**
	 * @param {any} asset Asset Data
	 * @return {string} Stringified asset data suitable for output
	 */
	stringify( asset ) {
		asset.dependencies = asset.dependencies.map( ( dep ) => {
			if ( Array.isArray( dep ) ) {
				return dep[ 1 ].replace(
					/[A-Z]/g,
					( m ) => '-' + m.toLowerCase()
				);
			}
			return dep;
		} );
		return super.stringify( asset );
	}
	/** @type {webpack.WebpackPluginInstance['apply']} */
	apply( compiler ) {
		this.useModules = Boolean( compiler.options.output?.module );

		/**
		 * Offload externalization work to the ExternalsPlugin.
		 * @type {webpack.ExternalsPlugin}
		 */
		this.externalsPlugin = new webpack.ExternalsPlugin(
			'window',
			this.externalizeWpDeps.bind( this )
		);

		this.externalsPlugin.apply( compiler );

		compiler.hooks.thisCompilation.tap(
			this.constructor.name,
			( compilation ) => {
				compilation.hooks.processAssets.tap(
					{
						name: this.constructor.name,
						stage: compiler.webpack.Compilation
							.PROCESS_ASSETS_STAGE_OPTIMIZE_COMPATIBILITY,
					},
					() => this.checkForMagicComments( compilation )
				);
				compilation.hooks.processAssets.tap(
					{
						name: this.constructor.name,
						stage: compiler.webpack.Compilation
							.PROCESS_ASSETS_STAGE_ANALYSE,
					},
					() => this.addAssets( compilation )
				);
			}
		);
	}
}

module.exports = DependencyExtractionWebpackPlugin;
