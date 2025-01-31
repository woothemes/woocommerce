/**
 * External dependencies
 */
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { ActiveFilterType } from './frontend';

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
	type: ActiveFilterType;
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

export function isFilterOptionItem(
	value: string | null | FilterOptionItem
): value is FilterOptionItem {
	return (
		typeof value === 'object' &&
		value !== null &&
		typeof value.type === 'string' &&
		typeof value.value === 'string' &&
		typeof value.label === 'string' &&
		typeof value.ariaLabel === 'string'
	);
}
