/**
 * External dependencies
 */
import {
	type BlockInstance,
	getBlockType,
	// @ts-expect-error Type definitions for this function are missing in Gutenberg
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';

export const filterUnavailableBlocksFromTemplate = (
	template: BlockInstance[]
): BlockInstance[] => {
	if ( ! Array.isArray( template ) ) {
		return [];
	}

	const validBlocks = template.filter( ( { name } ) => {
		const blockType = getBlockType( name );
		return !! blockType;
	} );

	return validBlocks.map( ( { innerBlocks, ...rest } ) => ( {
		...rest,
		innerBlocks: filterUnavailableBlocksFromTemplate( innerBlocks ),
	} ) );
};

export const createSafeBlocksFromInnerBlocksTemplate = (
	template: BlockInstance[]
) => {
	const filteredTemplate = filterUnavailableBlocksFromTemplate( template );

	return createBlocksFromInnerBlocksTemplate( filteredTemplate );
};
