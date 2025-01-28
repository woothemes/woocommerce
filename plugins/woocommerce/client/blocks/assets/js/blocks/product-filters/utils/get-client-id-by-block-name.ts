/**
 * External dependencies
 */
import { BlockAttributes } from '@wordpress/blocks';

/**
 * Returns the client ID of a block by its name.
 *
 * @param block      The block attributes.
 * @param targetName The name of the target block.
 * @return The client ID of the block or undefined if not found.
 */
export const getClientIdByBlockName = (
	block: BlockAttributes,
	targetName: string
): string | undefined => {
	if ( ! block ) {
		return undefined;
	}

	if ( block.name === targetName ) {
		return block.clientId;
	}

	if ( block.innerBlocks && block.innerBlocks.length > 0 ) {
		for ( const innerBlock of block.innerBlocks ) {
			const blockId: string | undefined = getClientIdByBlockName(
				innerBlock,
				targetName
			);
			if ( blockId ) {
				return blockId;
			}
		}
	}

	return undefined;
};
