/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Icon, button } from '@wordpress/icons';
import { getPlugin, registerPlugin } from '@wordpress/plugins';
import { isExperimentalBlocksEnabled } from '@woocommerce/block-settings';
import { getSettingWithCoercion } from '@woocommerce/settings';
import { isBoolean } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import registerStore from './store';
import ProductTypeSelectorPlugin from './plugins';
import metadata from './block.json';
import AddToCartOptionsEdit from './edit';
import save from './save';
import './style.scss';

// Pick the value of the "blockify add to cart flag"
const isBlockifiedAddToCart = getSettingWithCoercion(
	'isBlockifiedAddToCart',
	false,
	isBoolean
);

export const shouldRegisterBlock =
	isExperimentalBlocksEnabled() && isBlockifiedAddToCart;

if ( shouldRegisterBlock ) {
	registerStore();

	// Register a plugin that adds a product type selector to the template sidebar.
	const PLUGIN_NAME = 'document-settings-template-selector-pane';
	if ( ! getPlugin( PLUGIN_NAME ) ) {
		registerPlugin( PLUGIN_NAME, {
			render: ProductTypeSelectorPlugin,
		} );
	}

	// Register the block
	registerBlockType( metadata, {
		icon: <Icon icon={ button } />,
		edit: AddToCartOptionsEdit,
		save,
	} );
}
