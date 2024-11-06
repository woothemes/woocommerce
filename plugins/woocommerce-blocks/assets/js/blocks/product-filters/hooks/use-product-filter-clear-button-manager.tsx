/**
 * External dependencies
 */
import { useDispatch, useSelect, select } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { BlockAttributes, createBlock } from '@wordpress/blocks';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { getInnerBlockByName } from '../utils';

function findClientIdByName(
	block: BlockAttributes,
	targetName: string
): string | undefined {
	if ( ! block ) {
		return undefined;
	}

	if ( block.name === targetName ) {
		return block.clientId;
	}

	if ( block.innerBlocks && block.innerBlocks.length > 0 ) {
		for ( const innerBlock of block.innerBlocks ) {
			const blockId: string | undefined = findClientIdByName(
				innerBlock,
				targetName
			);
			if ( blockId ) {
				return blockId;
			}
		}
	}

	return undefined;
}

const clearButtonDefaultAttributes = {
	lock: { remove: true, move: false },
};

interface BlockPosition {
	blockPositionIndex: number;
	parentBlockId: string;
}

function getCurrentBlockPositionByClientId(
	clientId: string
): BlockPosition | undefined {
	if ( ! clientId ) {
		return undefined;
	}
	const { getBlock, getBlockParents, getBlockOrder } =
		select( blockEditorStore );
	const blockParents = getBlockParents( clientId, true );
	const parentBlock = blockParents.length
		? getBlock( blockParents[ 0 ] )
		: null;
	const parentBlockInnerBlocksOrder = getBlockOrder( parentBlock?.clientId );
	const clearButtonIndex = parentBlockInnerBlocksOrder?.findIndex(
		( blockId ) => blockId === clientId
	);

	return {
		blockPositionIndex: clearButtonIndex,
		parentBlockId: parentBlock?.clientId,
	};
}

function getClearButtonBlock( parentBlockClientId: string ) {
	const { getBlock } = select( blockEditorStore );
	const filterBlockInstance = getBlock( parentBlockClientId );
	const clearButtonId = findClientIdByName(
		filterBlockInstance,
		'woocommerce/product-filter-clear-button'
	);
	const clearButtonBlock = clearButtonId
		? getBlock( clearButtonId )
		: undefined;

	return { clearButtonBlock };
}

export const useProductFilterClearButtonManager = ( {
	clientId,
	showClearButton,
	positionIndexToInsertBlock,
	parentClientIdToInsertBlock,
}: {
	clientId: string;
	showClearButton: boolean;
	positionIndexToInsertBlock: number;
	parentClientIdToInsertBlock: string;
} ) => {
	const [ previousShowClearButtonState, setPreviousShowClearButtonState ] =
		useState< boolean >( showClearButton );
	const { clearButtonBlock } = getClearButtonBlock( clientId );
	const currentClearButtonBlockPosition = getCurrentBlockPositionByClientId(
		clearButtonBlock?.clientId
	);
	const [
		previousClearButtonBlockPosition,
		setPreviousClearButtonBlockPosition,
	] = useState< BlockPosition | undefined >( undefined );
	const { getBlock } = useSelect( ( select ) => ( {
		getBlock: select( blockEditorStore ).getBlock,
	} ) );
	// @ts-expect-error @wordpress/data types are outdated.
	const { insertBlock, removeBlock, updateBlockAttributes } =
		useDispatch( blockEditorStore );

	function insertClearButtonBlockToPreviousKnownPosition() {
		if (
			previousClearButtonBlockPosition &&
			getBlock( previousClearButtonBlockPosition.parentBlockId )
		) {
			const {
				blockPositionIndex: clearButtonBlockPosition,
				parentBlockId: clearButtonParentBlockId,
			} = previousClearButtonBlockPosition;
			insertBlock(
				createBlock(
					'woocommerce/product-filter-clear-button',
					clearButtonDefaultAttributes
				),
				clearButtonBlockPosition,
				clearButtonParentBlockId,
				false
			);

			setPreviousClearButtonBlockPosition( undefined );
			return true;
		}

		return false;
	}

	function insertClearButtonToThePositionReceivedFromProps() {
		if (
			positionIndexToInsertBlock !== undefined ||
			parentClientIdToInsertBlock !== undefined
		) {
			return false;
		}
		if ( ! getBlock( parentClientIdToInsertBlock ) ) {
			return false;
		}
		insertBlock(
			createBlock(
				'woocommerce/product-filter-clear-button',
				clearButtonDefaultAttributes
			),
			positionIndexToInsertBlock,
			parentClientIdToInsertBlock,
			false
		);

		setPreviousClearButtonBlockPosition( undefined );

		return true;
	}

	function insertClearButtonToTheFirstGroupContainingHeadingBlock() {
		const filterBlock = getBlock( clientId );
		const filterBlockHeader = getInnerBlockByName(
			filterBlock,
			'core/group'
		);
		if ( ! filterBlockHeader ) {
			return false;
		}
		const filterBlockHeading = findClientIdByName(
			filterBlockHeader,
			'core/heading'
		);
		const lastFilterBlockHeaderPosition =
			filterBlockHeader.innerBlocks.length;
		if ( Boolean( filterBlockHeading ) ) {
			insertBlock(
				createBlock(
					'woocommerce/product-filter-clear-button',
					clearButtonDefaultAttributes
				),
				lastFilterBlockHeaderPosition,
				filterBlockHeader?.clientId,
				false
			);

			return true;
		}

		return false;
	}

	function insertClearButtonToTheFirstPosition() {
		insertBlock(
			createBlock(
				'woocommerce/product-filter-clear-button',
				clearButtonBlock
			),
			0,
			clientId,
			false
		);

		setPreviousClearButtonBlockPosition( undefined );

		return true;
	}

	useEffect( () => {
		if ( showClearButton !== previousShowClearButtonState ) {
			if (
				showClearButton === false &&
				Boolean( clearButtonBlock?.clientId )
			) {
				updateBlockAttributes( clearButtonBlock?.clientId, {
					lock: { remove: false, move: false },
				} );
				removeBlock( clearButtonBlock?.clientId, false );
				setPreviousClearButtonBlockPosition(
					currentClearButtonBlockPosition
				);
			}
			if ( showClearButton === true && ! clearButtonBlock ) {
				let clearButtonWasInserted =
					insertClearButtonBlockToPreviousKnownPosition();
				if ( ! clearButtonWasInserted ) {
					clearButtonWasInserted =
						insertClearButtonToThePositionReceivedFromProps();
				}
				if ( ! clearButtonWasInserted ) {
					clearButtonWasInserted =
						insertClearButtonToTheFirstGroupContainingHeadingBlock();
				}
				if ( ! clearButtonWasInserted ) {
					clearButtonWasInserted =
						insertClearButtonToTheFirstPosition();
				}
			}
		}
		setPreviousShowClearButtonState( showClearButton );
	}, [ showClearButton, previousShowClearButtonState ] );
};
