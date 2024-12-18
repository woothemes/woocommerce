/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Icon, button } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import AddToCartWithOptionsVariationSelectorEdit from './edit';
import { shouldRegisterBlock } from '..';
import './style.scss';
import './editor.scss';

if ( shouldRegisterBlock ) {
	registerBlockType( metadata, {
		edit: AddToCartWithOptionsVariationSelectorEdit,
		attributes: metadata.attributes,
		icon: {
			src: (
				<Icon
					icon={ button }
					className="wc-block-editor-components-block-icon"
				/>
			),
		},
		save() {
			return null;
		},
	} );
}
