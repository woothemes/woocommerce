/**
 * External dependencies
 */
import { registerBlockSingleProductTemplate } from '@woocommerce/atomic-utils';
import { Icon, button } from '@wordpress/icons';
import { isExperimentalBlocksEnabled } from '@woocommerce/block-settings';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import AddToCartOptionsEdit from './edit';
import './style.scss';

const blockSettings = {
	edit: AddToCartOptionsEdit,
	icon: {
		src: (
			<Icon
				icon={ button }
				className="wc-block-editor-components-block-icon"
			/>
		),
	},
	ancestor: [ 'woocommerce/single-product' ],
	save() {
		return null;
	},
};

if ( isExperimentalBlocksEnabled() ) {
	registerBlockSingleProductTemplate( {
		blockName: metadata.name,
		blockMetadata: metadata,
		blockSettings,
		isAvailableOnPostEditor: true,
	} );
}
