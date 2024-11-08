/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { isExperimentalBlocksEnabled } from '@woocommerce/block-settings';
import { productFilterStatus } from '@woocommerce/icons';
import { getSetting } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import './style.scss';
import edit from './edit';
import metadata from './block.json';
import save from './save';

if ( isExperimentalBlocksEnabled() ) {
	const blockSettings = getSetting( 'blockSettings' );

	registerBlockType( metadata, {
		icon: productFilterStatus,
		save,
		edit,
		blockSettings,
	} );
}
