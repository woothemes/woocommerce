/**
 * External dependencies
 */
import { registerProductBlockType } from '@woocommerce/atomic-utils';
import { Icon } from '@wordpress/icons';
import { productDetails } from '@woocommerce/icons';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import './style.scss';

registerProductBlockType( {
	blockName: metadata.name,
	// @ts-expect-error: `metadata` currently does not have a type definition in WordPress core
	blockMetadata: metadata,
	blockSettings: {
		icon: {
			src: (
				<Icon
					icon={ productDetails }
					className="wc-block-editor-components-block-icon"
				/>
			),
		},
		edit,
	},
	isAvailableOnPostEditor: false,
} );
