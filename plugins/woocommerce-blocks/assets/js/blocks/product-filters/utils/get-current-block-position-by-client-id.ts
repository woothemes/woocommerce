/**
 * External dependencies
 */
import { select } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

export interface BlockPosition {
	blockPositionIndex: number;
	parentBlockId: string;
}

/**
 * Returns the position of a block by its client ID. The position is the index of the block in the parent block's inner blocks array.
 *
 * @param clientId - The client ID of the block.
 * @return The block position or undefined if the client ID is not found.
 */
export const getCurrentBlockPositionByClientId = (
	clientId: string
): BlockPosition | undefined => {
	if ( ! clientId ) {
		return undefined;
	}
	// @ts-expect-error @wordpress/data types are outdated.
	const { getBlock, getBlockParents, getBlockOrder } =
		select( blockEditorStore );
	const blockParents = getBlockParents( clientId, true );
	const parentBlock = blockParents.length
		? getBlock( blockParents[ 0 ] )
		: null;
	const parentBlockInnerBlocksOrder = getBlockOrder( parentBlock?.clientId );
	const clearButtonIndex = parentBlockInnerBlocksOrder?.findIndex(
		( blockId: string ) => blockId === clientId
	);

	return {
		blockPositionIndex: clearButtonIndex,
		parentBlockId: parentBlock?.clientId,
	};
};
