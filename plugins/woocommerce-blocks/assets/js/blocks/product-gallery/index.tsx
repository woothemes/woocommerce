/**
 * External dependencies
 */
import { registerProductBlockType } from '@woocommerce/atomic-utils';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import { ProductGalleryBlockSettings } from './settings';
import './style.scss';
import './inner-blocks/product-gallery-large-image-next-previous';
import './inner-blocks/product-gallery-pager';
import './inner-blocks/product-gallery-thumbnails';

registerProductBlockType( {
	blockName: metadata.name,
	blockMetadata: metadata,
	blockSettings: ProductGalleryBlockSettings,
	isAvailableOnPostEditor: true,
} );
