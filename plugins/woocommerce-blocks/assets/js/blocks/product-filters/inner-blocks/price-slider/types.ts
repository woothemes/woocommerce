/**
 * External dependencies
 */
import type { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import type { Color, FilterBlockContext } from '../../types';

export type BlockAttributes = {
	showInputFields: boolean;
	inlineInput: boolean;
	sliderHandle: string;
	customSliderHandle: string;
};

export interface EditProps extends BlockEditProps< BlockAttributes > {
	context: FilterBlockContext;
	sliderHandle: Color;
	setSliderHandle: ( color: string ) => void;
}
