/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Icon, button } from '@wordpress/icons';
import { isExperimentalBlocksEnabled } from '@woocommerce/block-settings';
import { getSettingWithCoercion } from '@woocommerce/settings';
import { isBoolean } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import AddToCartOptionsEdit from './edit';
import './style.scss';
import registerStore from './store';

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

	// Register the block
	registerBlockType( metadata, {
		icon: <Icon icon={ button } />,
		edit: AddToCartOptionsEdit,
		save: () => null,
	} );
}
