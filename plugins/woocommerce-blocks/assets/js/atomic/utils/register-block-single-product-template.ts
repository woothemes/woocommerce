/**
 * External dependencies
 */
import {
	BlockAttributes,
	BlockVariation,
	registerBlockType,
	registerBlockVariation,
	unregisterBlockType,
	unregisterBlockVariation,
	getBlockType,
	BlockConfiguration,
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
 * Manages block registration and unregistration for WordPress blocks in different contexts.
 * Implements the Singleton pattern to ensure consistent block management across the application.
 */
export class BlockRegistrationManager {
	/** Singleton instance of the manager */
	private static instance: BlockRegistrationManager;
	/** Map storing block configurations keyed by block name or variation name */
	private blocks: Map< string, BlockConfig > = new Map();
	/** Current template ID being edited */
	private currentTemplateId: string | undefined = '';
	/** Flag indicating if the manager has been initialized */
	private initialized = false;
	/** Flag to prevent recursive registration attempts */
	private isRegistering = false;

	/**
	 * Private constructor to enforce singleton pattern.
	 * Initializes subscriptions for template changes.
	 */
	private constructor() {
		this.initializeSubscriptions();
	}

	/**
	 * Gets the singleton instance of the BlockRegistrationManager.
	 * Creates the instance if it doesn't exist.
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
	 * Handles both string and number inputs due to Gutenberg changes.
	 *
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
	 * Initializes subscriptions for template changes and block registration.
	 * Sets up listeners for the site editor and handles initial block registration.
	 */
	private initializeSubscriptions(): void {
		if ( this.initialized ) {
			return;
		}

		const unsubscribe = subscribe( () => {
			const editSiteStore = select( 'core/edit-site' );
			if ( ! editSiteStore ) {
				return;
			}

			// Only run this once
			unsubscribe();

			// Set up the template change listener
			subscribe( () => {
				const previousTemplateId = this.currentTemplateId;
				this.currentTemplateId = this.parseTemplateId(
					editSiteStore?.getEditedPostId<
						string | number | undefined
					>()
				);

				if ( previousTemplateId !== this.currentTemplateId ) {
					this.handleTemplateChange( previousTemplateId );
				}
			} );

			// Initial registration of blocks
			this.blocks.forEach( ( config ) => {
				this.registerBlock( config );
			} );

			this.initialized = true;
		} );
	}

	/**
	 * Handles block registration/unregistration when template context changes.
	 * Specifically manages transitions to and from single product templates.
	 *
	 * @param {string | undefined} previousTemplateId - The previous template ID
	 */
	private handleTemplateChange(
		previousTemplateId: string | undefined
	): void {
		const isTransitioningToOrFromSingleProduct =
			this.currentTemplateId?.includes( 'single-product' ) ||
			previousTemplateId?.includes( 'single-product' );

		if ( ! isTransitioningToOrFromSingleProduct ) {
			return;
		}

		this.blocks.forEach( ( config ) => {
			if ( ! this.isRegistering ) {
				this.unregisterBlock( config );
				this.registerBlock( config );
			}
		} );
	}

	/**
	 * Unregisters a block or block variation.
	 * Handles both regular blocks and variations with error handling.
	 *
	 * @param {BlockConfig} config - Configuration of the block to unregister
	 */
	private unregisterBlock( config: BlockConfig ): void {
		const { blockName, isVariationBlock, variationName } = config;

		try {
			if ( isVariationBlock && variationName ) {
				unregisterBlockVariation( blockName, variationName );
			} else {
				unregisterBlockType( blockName );
			}
		} catch ( error ) {
			// eslint-disable-next-line no-console
			console.debug(
				`Failed to unregister block ${ blockName }:`,
				error
			);
		}
	}

	/**
	 * Registers a block or block variation.
	 * Handles different registration requirements for various contexts.
	 * Includes checks to prevent recursive registration.
	 *
	 * @param {BlockConfig} config - Configuration of the block to register
	 */
	private registerBlock( config: BlockConfig ): void {
		const {
			blockName,
			blockMetadata = blockName,
			blockSettings,
			isVariationBlock,
		} = config;

		// Prevent recursive registration
		if ( this.isRegistering ) return;

		try {
			this.isRegistering = true;

			// Check if block is already registered
			if ( getBlockType( blockName ) ) {
				// eslint-disable-next-line no-console
				console.debug( `Block ${ blockName } is already registered.` );
				return;
			}

			if ( isVariationBlock ) {
				registerBlockVariation(
					blockName,
					blockSettings as BlockVariation< BlockAttributes >
				);
			} else {
				const ancestor = isEmpty( blockSettings?.ancestor )
					? [ 'woocommerce/single-product' ]
					: blockSettings?.ancestor;

				// @ts-expect-error - This can be either a string or an object.
				registerBlockType( blockMetadata, {
					...blockSettings,
					ancestor: ! this.currentTemplateId?.includes(
						'single-product'
					)
						? ancestor
						: undefined,
				} );
			}
		} catch ( error ) {
			// eslint-disable-next-line no-console
			console.error( `Failed to register block ${ blockName }:`, error );
		} finally {
			this.isRegistering = false;
		}
	}

	/**
	 * Registers a new block configuration with the manager.
	 * Main entry point for adding new blocks to be managed.
	 *
	 * @param {BlockConfig} config - Configuration for the block to register
	 */
	public registerBlockConfig( config: BlockConfig ): void {
		const key = config.variationName || config.blockName;
		this.blocks.set( key, config );

		// Only attempt registration if we're initialized
		if ( this.initialized && ! this.isRegistering ) {
			this.registerBlock( config );
		}
	}
}

/**
 * Registers a block for use in single product templates and optionally in the post editor.
 * Main export and public API for the block registration system.
 *
 * @example
 * ```typescript
 * registerBlockSingleProductTemplate({
 *     blockName: 'woocommerce/product-price',
 *     blockSettings: {
 *         title: 'Product Price',
 *         category: 'woocommerce',
 *     },
 *     isAvailableOnPostEditor: true
 * });
 * ```
 *
 * @param {BlockConfig} config - Configuration object for the block
 */
export const registerBlockSingleProductTemplate = (
	config: BlockConfig
): void => {
	if ( ! config.blockName ) {
		// eslint-disable-next-line no-console
		console.error( 'Block name is required for registration' );
		return;
	}

	BlockRegistrationManager.getInstance().registerBlockConfig( config );
};
