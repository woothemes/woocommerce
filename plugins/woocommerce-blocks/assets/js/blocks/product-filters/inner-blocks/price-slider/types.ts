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
	customSliderHandleColor: string;
};

export interface EditProps extends BlockEditProps< BlockAttributes > {
	context: FilterBlockContext;
	sliderHandleColor: Color;
	setSliderHandleColor: ( color: string ) => void;
}
