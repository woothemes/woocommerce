/**
 * External dependencies
 */
import { select } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { getClientIdByBlockName } from './get-client-id-by-block-name';

/**
 * Returns the Product Filter Clear Button block.
 *
 * @param parentBlockClientId The client ID of the parent block.
 * @return The Product Filter Clear Button block or undefined if not found.
 */
export const getProductFilterClearButtonBlock = (
	parentBlockClientId: string
) => {
	// @ts-expect-error @wordpress/data types are outdated.
	const { getBlock } = select( blockEditorStore );
	const filterBlockInstance = getBlock( parentBlockClientId );
	const clearButtonId = getClientIdByBlockName(
		filterBlockInstance,
		'woocommerce/product-filter-clear-button'
	);
	const clearButtonBlock = clearButtonId
		? getBlock( clearButtonId )
		: undefined;

	return { clearButtonBlock };
};
