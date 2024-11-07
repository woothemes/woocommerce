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
	const statusOptions = getSetting( 'statusOptions' );
	const stockStatusOptions = getSetting( 'stockStatusOptions' );

	const stockStatusAttributes: {
		[ key: string ]: { type: string; default: boolean | string };
	} = Object.entries( stockStatusOptions ).reduce( ( acc, [ key ] ) => {
		acc[ key ] = {
			type: 'boolean',
			default: false,
		};

		return acc;
	}, {} );

	const statusAttributes: {
		[ key: string ]: { type: string; default: boolean | string };
	} = Object.entries( statusOptions ).reduce( ( acc, [ key ] ) => {
		acc[ key ] = {
			type: 'boolean',
			default: false,
		};

		return acc;
	}, {} );

	const attributes = { ...stockStatusAttributes, ...statusAttributes };

	attributes.showCounts = {
		type: 'boolean',
		default: false,
	};

	attributes.displayStyle = {
		type: 'string',
		default: 'woocommerce/product-filter-checkbox-list',
	};

	attributes.isPreview = {
		type: 'boolean',
		default: false,
	};

	attributes.hideEmpty = {
		type: 'boolean',
		default: true,
	};

	attributes.clearButton = {
		type: 'boolean',
		default: true,
	};

	registerBlockType( metadata, {
		icon: productFilterStatus,
		save,
		edit,
		attributes,
	} );
}
