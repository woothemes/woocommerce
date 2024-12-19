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
	private currentTemplateId: string | undefined;
	/** Flag indicating if the manager has been initialized */
	private initialized = false;
	/** Set to track block registration attempts to prevent duplicate registration attempts */
	private attemptedRegisteredBlocks: Set< string > = new Set();

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
	 * Sets up listeners for both the site editor and post editor contexts.
	 */
	private initializeSubscriptions(): void {
		if ( this.initialized ) {
			return;
		}

		// Main store subscription to detect which editor we're in
		const unsubscribe = subscribe( () => {
			const editSiteStore = select( 'core/edit-site' );
			const editPostStore = select( 'core/edit-post' );

			// Return if neither store is available yet
			if ( ! editSiteStore && ! editPostStore ) {
				return;
			}

			// Site Editor Context
			if ( editSiteStore ) {
				const postId = editSiteStore.getEditedPostId();
				if ( postId === undefined ) {
					return;
				}

				// Unsubscribe from the main subscription since we've detected our context
				unsubscribe();

				// Set initial template ID
				this.currentTemplateId = this.parseTemplateId(
					postId as string
				);

				// Set up the template change listener
				subscribe( () => {
					const previousTemplateId = this.currentTemplateId;
					this.currentTemplateId = this.parseTemplateId(
						editSiteStore.getEditedPostId<
							string | number | undefined
						>()
					);

					if ( previousTemplateId !== this.currentTemplateId ) {
						this.handleTemplateChange( previousTemplateId );
					}
				}, 'core/edit-site' );

				// Register all blocks for site editor
				this.blocks.forEach( ( config ) => {
					this.registerBlock( config );
				} );

				this.initialized = true;
			}
			// Post Editor Context
			else if ( editPostStore ) {
				// Unsubscribe from the main subscription since we've detected our context
				unsubscribe();

				// Register only blocks available in post editor
				this.blocks.forEach( ( config ) => {
					if ( config.isAvailableOnPostEditor ) {
						const key = config.variationName || config.blockName;
						if ( ! this.hasAttemptedRegistration( key ) ) {
							this.registerBlock( config );
						}
					}
				} );

				this.initialized = true;
			}
		} );
	}

	/**
	 * Handles block registration/unregistration when template context changes.
	 *
	 * Note: This implementation is currently coupled to the 'single-product' template,
	 * as it's our only use case where blocks need different ancestor constraints.
	 * If we need to handle more templates in the future, this should be refactored
	 * to be more generic.
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
			// When the template changes, we need to unregister and register all blocks that are available on the new template
			// Unregistering the block will remove it from the `hasAttemptedRegistration` set, so we can register it again
			this.unregisterBlock( config );
			this.registerBlock( config );
		} );
	}

	/**
	 * Checks if a block has already been attempted to be registered.
	 *
	 * @param {string} blockKey - The key of the block to check
	 * @return {boolean} Whether the block has already been attempted to be registered
	 */
	private hasAttemptedRegistration( blockKey: string ): boolean {
		return this.attemptedRegisteredBlocks.has( blockKey );
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
				this.attemptedRegisteredBlocks.delete( variationName );
			} else {
				unregisterBlockType( blockName );
				this.attemptedRegisteredBlocks.delete( blockName );
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
			variationName,
			isAvailableOnPostEditor,
		} = config;

		try {
			// Check if block is already registered
			const key = variationName || blockName;
			if ( this.hasAttemptedRegistration( key ) ) {
				return;
			}

			const editSiteStore = select( 'core/edit-site' );

			// Don't register if we're in post editor context and block isn't available there
			if ( ! editSiteStore && ! isAvailableOnPostEditor ) {
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

				// Only remove ancestor if we're in site editor AND in single-product template
				const shouldRemoveAncestor =
					editSiteStore &&
					this.currentTemplateId?.includes( 'single-product' );

				// @ts-expect-error - blockMetadata can be either string or object
				registerBlockType( blockMetadata, {
					...blockSettings,
					ancestor: shouldRemoveAncestor ? undefined : ancestor,
				} );
			}

			this.attemptedRegisteredBlocks.add( key );
		} catch ( error ) {
			// eslint-disable-next-line no-console
			console.error( `Failed to register block ${ blockName }:`, error );
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

		// If we have executed `siteEditorUnsubscribe` and `postEditorUnsubscribe` and initialized already, we can register the block immediately
		if ( this.initialized ) {
			const editSiteStore = select( 'core/edit-site' );
			const editPostStore = select( 'core/edit-post' );

			if ( editSiteStore ) {
				// Register in site editor context
				this.registerBlock( config );
			} else if ( editPostStore && config.isAvailableOnPostEditor ) {
				// Register in post editor context if available
				this.registerBlock( config );
			}
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
