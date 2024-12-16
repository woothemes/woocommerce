/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Icon, button } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import AddToCartWithOptionsButtonBehaviorEdit from './edit';
import AddToCartWithOptionsButtonBehaviorSave from './save';
import { shouldRegisterBlock } from '..';
import './style.scss';
import './editor.scss';

if ( shouldRegisterBlock ) {
	registerBlockType( metadata, {
		edit: AddToCartWithOptionsButtonBehaviorEdit,
		attributes: metadata.attributes,
		icon: {
			src: (
				<Icon
					icon={ button }
					className="wc-block-editor-components-block-icon"
				/>
			),
		},
		save: AddToCartWithOptionsButtonBehaviorSave,
	} );
}
