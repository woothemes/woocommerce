/**
 * Internal dependencies
 */
import { ThumbnailsPosition } from './constants';

export type ProductGalleryThumbnailsBlockAttributes = {
	numberOfThumbnails: number;
	thumbnailsPosition: ThumbnailsPosition;
};

export type ProductGalleryThumbnailsSettingsProps = {
	attributes: ProductGalleryThumbnailsBlockAttributes;
	setAttributes: (
		attributes: Partial< ProductGalleryThumbnailsBlockAttributes >
	) => void;
};
