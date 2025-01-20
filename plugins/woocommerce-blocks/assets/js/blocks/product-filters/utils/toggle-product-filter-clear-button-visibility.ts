/**
 * External dependencies
 */
import { dispatch, select } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import {
	BlockPosition,
	getCurrentBlockPositionByClientId,
} from './get-current-block-position-by-client-id';
import { getProductFilterClearButtonBlock } from './get-product-filter-clear-button-block';
import { getInnerBlockByName } from './get-inner-block-by-name';
import { getClientIdByBlockName } from './get-client-id-by-block-name';

interface ToggleProductFilterClearButtonVisibility extends Function {
	previousClearButtonBlockPosition?: BlockPosition | undefined;
}

export const toggleProductFilterClearButtonVisibilityFactory = () => {
	const toggleProductFilterClearButtonVisibility = function ( {
		clientId,
		showClearButton,
		positionIndexToInsertBlock,
		parentClientIdToInsertBlock,
	}: {
		clientId: string;
		showClearButton: boolean;
		positionIndexToInsertBlock?: number;
		parentClientIdToInsertBlock?: string;
	} ) {
		const { clearButtonBlock } =
			getProductFilterClearButtonBlock( clientId );

		if (
			typeof toggleProductFilterClearButtonVisibility.previousClearButtonBlockPosition ===
			'undefined'
		) {
			toggleProductFilterClearButtonVisibility.previousClearButtonBlockPosition =
				getCurrentBlockPositionByClientId( clearButtonBlock?.clientId );
		}
		const { previousClearButtonBlockPosition } =
			toggleProductFilterClearButtonVisibility;
		const currentClearButtonBlockPosition =
			getCurrentBlockPositionByClientId( clearButtonBlock?.clientId );
		// @ts-expect-error @wordpress/data types are outdated.
		const { getBlock } = select( blockEditorStore );
		// @ts-expect-error @wordpress/data types are outdated.
		const { insertBlock, removeBlock, updateBlockAttributes } =
			dispatch( blockEditorStore );

		function resetPreviousClearButtonBlockPosition() {
			toggleProductFilterClearButtonVisibility.previousClearButtonBlockPosition =
				undefined;
		}

		function setPreviousClearButtonBlockPosition(
			position: BlockPosition | undefined
		) {
			toggleProductFilterClearButtonVisibility.previousClearButtonBlockPosition =
				position;
		}

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
					createBlock( 'woocommerce/product-filter-clear-button' ),
					clearButtonBlockPosition,
					clearButtonParentBlockId,
					false
				);

				resetPreviousClearButtonBlockPosition();
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
				createBlock( 'woocommerce/product-filter-clear-button' ),
				positionIndexToInsertBlock,
				parentClientIdToInsertBlock,
				false
			);

			resetPreviousClearButtonBlockPosition();

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
					createBlock( 'woocommerce/product-filter-clear-button' ),
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
				createBlock( 'woocommerce/product-filter-clear-button' ),
				0,
				clientId,
				false
			);

			resetPreviousClearButtonBlockPosition();

			return true;
		}

		if (
			showClearButton === false &&
			Boolean( clearButtonBlock?.clientId )
		) {
			updateBlockAttributes( clearButtonBlock?.clientId );
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
				clearButtonWasInserted = insertClearButtonToTheFirstPosition();
			}
		}
	} as ToggleProductFilterClearButtonVisibility;

	return toggleProductFilterClearButtonVisibility;
};
