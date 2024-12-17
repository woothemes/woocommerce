/**
 * External dependencies
 */
import {
	BlockAttributes,
	BlockConfiguration,
	BlockVariation,
	registerBlockType,
	registerBlockVariation,
	unregisterBlockType,
	unregisterBlockVariation,
} from '@wordpress/blocks';
import { subscribe, select } from '@wordpress/data';
import { isNumber, isEmpty } from '@woocommerce/types';

/**
 * Configuration object for registering a block.
 *
 * @typedef {Object} BlockConfig
 * @property {string}                               blockName               - The name of the block to register
 * @property {(string|Partial<BlockConfiguration>)} [blockMetadata]         - Block metadata or name
 * @property {Partial<BlockConfiguration>}          blockSettings           - Block settings configuration
 * @property {boolean}                              [isVariationBlock]      - Whether this block is a variation
 * @property {string}                               [variationName]         - The name of the variation if applicable
 * @property {boolean}                              isAvailableOnPostEditor - Whether the block should be available in post editor
 */
type BlockConfig = {
	blockName: string;
	blockMetadata?: string | Partial< BlockConfiguration >;
	blockSettings: Partial< BlockConfiguration >;
	isVariationBlock?: boolean;
	variationName?: string;
	isAvailableOnPostEditor: boolean;
};

/**
 * Manages the registration and unregistration of WooCommerce blocks in different WordPress contexts.
 *
 * This class implements the Singleton pattern to ensure only one instance handles all block registrations.
 * It provides centralized management of blocks between single product templates and other contexts,
 * handling the different ancestor requirements and registration states efficiently.
 *
 * @class BlockRegistrationManager
 */
class BlockRegistrationManager {
	private static instance: BlockRegistrationManager;
	private blocks: Map< string, BlockConfig > = new Map();
	private currentTemplateId: string | undefined = '';
	private initialized = false;
	private blockRegistrationAttempts = new Set< string >();

	/**
	 * Private constructor to prevent direct construction calls with the `new` operator.
	 */
	private constructor() {
		this.initializeSubscriptions();
	}

	/**
	 * Gets the singleton instance of the BlockRegistrationManager.
	 *
	 * @return {BlockRegistrationManager} The singleton instance
	 */
	public static getInstance(): BlockRegistrationManager {
		if ( ! BlockRegistrationManager.instance ) {
			BlockRegistrationManager.instance = new BlockRegistrationManager();
		}
		return BlockRegistrationManager.instance;
	}

	/**
	 * Parses a template ID from various possible formats.
	 * Handles both string and number inputs due to Gutenberg 16.3.0 changes.
	 *
	 * @private
	 * @param {string | number | undefined} templateId - The template ID to parse
	 * @return {string | undefined} The parsed template ID
	 */
	private parseTemplateId(
		templateId: string | number | undefined
	): string | undefined {
		const parsedTemplateId = isNumber( templateId )
			? undefined
			: templateId;
		return parsedTemplateId?.split( '//' )[ 1 ];
	}

	/**
	 * Initializes the subscription system for both site editor and post editor contexts.
	 * Sets up listeners for template changes and post editor state.
	 *
	 * @private
	 */
	private initializeSubscriptions(): void {
		if ( this.initialized ) return;

		const editSiteStore = select( 'core/edit-site' );

		// Set up site editor subscription
		if ( editSiteStore ) {
			subscribe( () => {
				const previousTemplateId = this.currentTemplateId;
				this.currentTemplateId = this.parseTemplateId(
					editSiteStore?.getEditedPostId<
						string | number | undefined
					>()
				);

				if ( previousTemplateId === this.currentTemplateId ) {
					return;
				}

				this.handleTemplateChange( previousTemplateId );
			}, 'core/edit-site' );
		}

		// Set up post editor subscription
		subscribe( () => {
			if ( ! editSiteStore ) {
				this.handlePostEditorRegistrations();
			}
		}, 'core/edit-post' );

		this.initialized = true;
	}

	/**
	 * Handles block registration/unregistration when template context changes.
	 * Specifically manages transitions to and from single product templates.
	 *
	 * @private
	 * @param {string | undefined} previousTemplateId - The previous template ID
	 */
	private handleTemplateChange(
		previousTemplateId: string | undefined
	): void {
		const isTransitioningToOrFromSingleProduct =
			this.currentTemplateId?.includes( 'single-product' ) ||
			previousTemplateId?.includes( 'single-product' );

		if ( ! isTransitioningToOrFromSingleProduct ) return;

		// Re-register all blocks with updated context
		this.blocks.forEach( ( config, key ) => {
			this.unregisterBlock( config );
			this.registerBlock( config );
		} );
	}

	/**
	 * Handles block registration specifically for the post editor context.
	 * Ensures blocks are only registered once and only if they should be available in the post editor.
	 *
	 * @private
	 */
	private handlePostEditorRegistrations(): void {
		this.blocks.forEach( ( config ) => {
			if ( ! config.isAvailableOnPostEditor ) return;

			const registrationKey = config.variationName || config.blockName;
			if ( this.blockRegistrationAttempts.has( registrationKey ) ) return;

			this.registerBlock( config );
			this.blockRegistrationAttempts.add( registrationKey );
		} );
	}

	/**
	 * Unregisters a block or block variation based on its configuration.
	 *
	 * @private
	 * @param {BlockConfig} config - The configuration of the block to unregister
	 */
	private unregisterBlock( config: BlockConfig ): void {
		const { blockName, isVariationBlock, variationName } = config;

		if ( isVariationBlock && variationName ) {
			unregisterBlockVariation( blockName, variationName );
		} else {
			unregisterBlockType( blockName );
		}
	}

	/**
	 * Registers a block or block variation based on its configuration.
	 * Handles different registration requirements for single product templates vs other contexts.
	 *
	 * @private
	 * @param {BlockConfig} config - The configuration of the block to register
	 */
	private registerBlock( config: BlockConfig ): void {
		const {
			blockName,
			blockMetadata = blockName,
			blockSettings,
			isVariationBlock,
		} = config;

		if ( isVariationBlock ) {
			registerBlockVariation(
				blockName,
				blockSettings as BlockVariation< BlockAttributes >
			);
		} else {
			const ancestor = isEmpty( blockSettings?.ancestor )
				? [ 'woocommerce/single-product' ]
				: blockSettings?.ancestor;

			// @ts-expect-error blockMetadata is a string or Partial<BlockConfiguration> which is compatible with registerBlockType
			registerBlockType( blockMetadata, {
				...blockSettings,
				ancestor: ! this.currentTemplateId?.includes( 'single-product' )
					? ancestor
					: undefined,
			} );
		}
	}

	/**
	 * Public method to register a new block configuration with the manager.
	 * This is the main entry point for adding new blocks to be managed.
	 *
	 * @public
	 * @param {BlockConfig} config - The configuration for the block to register
	 */
	public registerBlockConfig( config: BlockConfig ): void {
		const key = config.variationName || config.blockName;
		this.blocks.set( key, config );

		// Handle immediate registration for post editor context
		const editSiteStore = select( 'core/edit-site' );
		if ( ! editSiteStore && config.isAvailableOnPostEditor ) {
			this.registerBlock( config );
			this.blockRegistrationAttempts.add( key );
		}
	}
}

/**
 * Registers a block for use in single product templates and optionally in the post editor.
 * This is the main export and public API for the block registration system.
 *
 * @example
 * ```typescript
 * registerBlockSingleProductTemplate({
 *     blockName: 'woocommerce/product-price',
 *     blockSettings: {
 *         title: 'Product Price',
 *         icon: 'dollar',
 *         category: 'woocommerce',
 *     },
 *     isAvailableOnPostEditor: true
 * });
 * ```
 *
 * @param {BlockConfig} config - The configuration object for the block
 */
export const registerBlockSingleProductTemplate = (
	config: BlockConfig
): void => {
	BlockRegistrationManager.getInstance().registerBlockConfig( config );
};
