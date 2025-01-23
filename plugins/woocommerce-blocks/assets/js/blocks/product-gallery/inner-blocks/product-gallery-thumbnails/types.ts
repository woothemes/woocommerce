/**
 * Internal dependencies
 */
import { ThumbnailsPosition } from './constants';

export type ProductGalleryThumbnailsBlockAttributes = {
	thumbnailsNumberOfThumbnails: number;
	thumbnailsPosition: ThumbnailsPosition;
	productGalleryClientId: string;
};

export type ProductGalleryThumbnailsSettingsProps = {
	attributes: ProductGalleryThumbnailsBlockAttributes;
	setAttributes: (
		attributes: Partial< ProductGalleryThumbnailsBlockAttributes >
	) => void;
};
