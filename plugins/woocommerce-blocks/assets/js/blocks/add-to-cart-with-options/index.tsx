/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Icon, button } from '@wordpress/icons';
import { dispatch } from '@wordpress/data';
import { getPlugin, registerPlugin } from '@wordpress/plugins';
import { isExperimentalBlocksEnabled } from '@woocommerce/block-settings';
import { getSettingWithCoercion } from '@woocommerce/settings';
import { isBoolean } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import registerStore, { store as woocommerceTemplateStateStore } from './store';
import PluginDocumentSettingTemplateSelectorPanel from './plugins';
import getProductTypeOptions from './utils/get-product-types';
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
	// Register the store
	registerStore();

	// loads the product types
	dispatch( woocommerceTemplateStateStore ).setProductTypes(
		getProductTypeOptions()
	);

	// Select Simple product type
	dispatch( woocommerceTemplateStateStore ).switchProductType( 'simple' );

	// Extend editor, blocks, etc
	const PLUGIN_NAME = 'document-settings-template-selector-pane';
	if ( ! getPlugin( PLUGIN_NAME ) ) {
		registerPlugin( PLUGIN_NAME, {
			render: PluginDocumentSettingTemplateSelectorPanel,
		} );
	}

	// Register the block
	registerBlockType( metadata, {
		icon: <Icon icon={ button } />,
		edit: AddToCartOptionsEdit,
		save,
	} );
}
