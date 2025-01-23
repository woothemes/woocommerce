export interface ProductGalleryBlockAttributes {
	productGalleryClientId: string;
	cropImages?: boolean;
	hoverZoom?: boolean;
	fullScreenOnClick?: boolean;
	mode?: 'standard' | 'full';
}

export interface ProductGallerySettingsProps {
	attributes: ProductGalleryBlockAttributes;
	setAttributes: ( attributes: ProductGalleryBlockAttributes ) => void;
}

export type ProductGalleryContext = {
	productGalleryClientId: string;
};
