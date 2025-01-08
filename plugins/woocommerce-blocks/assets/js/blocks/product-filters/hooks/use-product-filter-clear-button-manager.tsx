/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
	getProductFilterClearButtonBlock,
	getClientIdByBlockName,
	getInnerBlockByName,
} from '../utils';
import {
	BlockPosition,
	getCurrentBlockPositionByClientId,
} from '../utils/get-current-block-position-by-client-id';

const clearButtonDefaultAttributes = {
	lock: { remove: true, move: false },
};

export const useProductFilterClearButtonManager = ( {
	clientId,
	showClearButton,
	positionIndexToInsertBlock,
	parentClientIdToInsertBlock,
}: {
	clientId: string;
	showClearButton: boolean;
	positionIndexToInsertBlock?: number;
	parentClientIdToInsertBlock?: string;
} ) => {
	const [ previousShowClearButtonState, setPreviousShowClearButtonState ] =
		useState< boolean >( showClearButton );
	const { clearButtonBlock } = getProductFilterClearButtonBlock( clientId );
	const currentClearButtonBlockPosition = getCurrentBlockPositionByClientId(
		clearButtonBlock?.clientId
	);
	const [
		previousClearButtonBlockPosition,
		setPreviousClearButtonBlockPosition,
	] = useState< BlockPosition | undefined >( undefined );
	const { getBlock } = useSelect( ( select ) => ( {
		// @ts-expect-error @wordpress/data types are outdated.
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
		const filterBlockHeading = getClientIdByBlockName(
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
				clearButtonDefaultAttributes
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ showClearButton, previousShowClearButtonState ] );
};
