/**
 * External dependencies
 */
import { box as icon } from '@wordpress/icons';
import { registerProductBlockType } from '@woocommerce/atomic-utils';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';

registerProductBlockType( {
	blockName: metadata.name,
	// @ts-expect-error: `metadata` currently does not have a type definition in WordPress core
	blockMetadata: metadata,
	blockSettings: {
		icon,
		edit,
		save,
	},
	isAvailableOnPostEditor: false,
} );
