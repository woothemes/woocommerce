/**
 * External dependencies
 */
import { BlockAttributes } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { getCSSVar } from './colors';

export const getColorsFromBlockSupports = ( attributes: BlockAttributes ) => {
	const { backgroundColor, textColor, style } = attributes;
	return {
		textColor: getCSSVar( textColor, style?.color?.text ),
		backgroundColor: getCSSVar( backgroundColor, style?.color?.background ),
	};
};
