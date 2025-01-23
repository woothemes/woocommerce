export interface ProductGalleryBlockAttributes {
	cropImages: boolean;
	hoverZoom: boolean;
	fullScreenOnClick: boolean;
	mode: 'standard' | 'full';
}

export interface ProductGallerySettingsProps {
	attributes: ProductGalleryBlockAttributes;
	setAttributes: (
		attributes: Partial< ProductGalleryBlockAttributes >
	) => void;
}
