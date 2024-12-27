/**
 * External dependencies
 */
import {
	type BlockInstance,
	type InnerBlockTemplate,
	getBlockType,
	// @ts-expect-error Type definitions for this function are missing in Gutenberg
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';

export const filterUnavailableBlocksFromTemplate = (
	innerBlocksOrTemplate: InnerBlockTemplate[] | BlockInstance
): InnerBlockTemplate[] | InnerBlockTemplate => {
	if ( ! Array.isArray( innerBlocksOrTemplate ) ) {
		return [];
	}

	return innerBlocksOrTemplate.filter( ( innerBlock ) => {
		const innerBlockTemplate = Array.isArray( innerBlock )
			? innerBlock
			: [
					innerBlock.name,
					innerBlock.attributes,
					innerBlock.innerBlocks,
			  ];
		const [ name, attributes, innerBlocks = [] ] = innerBlockTemplate;
		const blockType = getBlockType( name );
		return blockType
			? [
					name,
					attributes,
					filterUnavailableBlocksFromTemplate( innerBlocks ),
			  ]
			: false;
	} );
};

/**
 * Filters out any blocks from a template that are not currently registered
 * before creating blocks from the template.
 * This prevents editor crashes when a template contains references to blocks
 * that may have been unregistered by plugins or are otherwise unavailable.
 * Any unregistered blocks will be replaced with the core/missing block
 * for graceful fallback handling.
 *
 * - See https://github.com/woocommerce/woocommerce/issues/53765 for more details.
 * - This util can be removed once the Gutenberg PR is merged and released in
 * a WordPress release (L-1): https://github.com/WordPress/gutenberg/pull/68043.
 */
export const createSafeBlocksFromInnerBlocksTemplate = (
	template: InnerBlockTemplate[] | BlockInstance
) => {
	const filteredTemplate = filterUnavailableBlocksFromTemplate( template );

	console.log( { template, filteredTemplate } );

	return createBlocksFromInnerBlocksTemplate( filteredTemplate );
};
