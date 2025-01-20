/**
 * External dependencies
 */
import { BlockEditProps } from '@wordpress/blocks';

export type BlockAttributes = {
	productId?: string;
	overlayIcon:
		| 'filter-icon-1'
		| 'filter-icon-2'
		| 'filter-icon-3'
		| 'filter-icon-4';
	overlayButtonType: 'label-icon' | 'label-only' | 'icon-only';
	overlayIconSize: number;
};

export type EditProps = BlockEditProps< BlockAttributes >;

export type FilterOptionItem = {
	label: string;
	ariaLabel: string;
	value: string;
	selected?: boolean;
	type: string;
	data?: Record< string, unknown >;
};

export type FilterBlockContext = {
	filterData: {
		isLoading: boolean;
		items?: FilterOptionItem[];
		price?: {
			minPrice: number;
			minRange: number;
			maxPrice: number;
			maxRange: number;
		};
	};
};

export type Color = {
	slug?: string;
	class?: string;
	name?: string;
	color: string;
};
