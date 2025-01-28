/**
 * Internal dependencies
 */
import { ThumbnailsPosition } from './inner-blocks/product-gallery-thumbnails/constants';

export interface ProductGalleryBlockAttributes {
	cropImages?: boolean;
	hoverZoom?: boolean;
	fullScreenOnClick?: boolean;
	mode?: 'standard' | 'full';
}

export interface ProductGalleryThumbnailsBlockAttributes {
	thumbnailsPosition: ThumbnailsPosition;
	thumbnailsNumberOfThumbnails: number;
	productGalleryClientId: string;
}

export interface ProductGalleryBlockEditProps {
	clientId: string;
	attributes: ProductGalleryThumbnailsBlockAttributes;
	setAttributes: (
		newAttributes: ProductGalleryThumbnailsBlockAttributes
	) => void;
}

export interface ProductGallerySettingsProps {
	attributes: ProductGalleryBlockAttributes;
	setAttributes: ( attributes: ProductGalleryBlockAttributes ) => void;
	context: ProductGalleryContext;
}

export interface ProductGalleryThumbnailsSettingsProps {
	context: ProductGalleryThumbnailsContext;
}

export type ProductGalleryContext = {
	thumbnailsPosition: ThumbnailsPosition;
	thumbnailsNumberOfThumbnails: number;
	productGalleryClientId: string;
};

export type ProductGalleryPagerContext = Pick<
	ProductGalleryContext,
	'productGalleryClientId'
>;

export type ProductGalleryLargeImageNextPreviousContext = Pick<
	ProductGalleryContext,
	'productGalleryClientId'
>;

export type ProductGalleryThumbnailsContext = Pick<
	ProductGalleryContext,
	| 'productGalleryClientId'
	| 'thumbnailsPosition'
	| 'thumbnailsNumberOfThumbnails'
>;

export type ProductGalleryAttributes = ProductGalleryThumbnailsBlockAttributes &
	ProductGalleryBlockAttributes;
