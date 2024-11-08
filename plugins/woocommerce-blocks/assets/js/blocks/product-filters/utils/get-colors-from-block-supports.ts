/**
 * External dependencies
 */
import { BlockAttributes } from '@wordpress/blocks';

function getCSSVar( slug: string | undefined, value: string | undefined ) {
	if ( slug ) {
		return `var(--wp--preset--color--${ slug })`;
	}
	return value || '';
}

export const getColorsFromBlockSupports = ( attributes: BlockAttributes ) => {
	const { backgroundColor, textColor, style } = attributes;
	return {
		textColor: getCSSVar( textColor, style?.color?.text ),
		backgroundColor: getCSSVar( backgroundColor, style?.color?.background ),
	};
};
