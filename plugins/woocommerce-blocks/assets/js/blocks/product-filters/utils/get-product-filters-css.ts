/**
 * External dependencies
 */
import { isString, objectHasProp } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { getColorsFromBlockSupports } from '.';
import { type BlockAttributes } from '../types';

function presetToCssVariable( preset: string ) {
	if ( ! preset.includes( ':' ) || ! preset.includes( '|' ) ) {
		return preset;
	}

	return `var(--wp--${ preset
		.replace( 'var:', '' )
		.replaceAll( '|', '--' ) })`;
}

export function getProductFiltersCss( attributes: BlockAttributes ) {
	const colors = getColorsFromBlockSupports( attributes );
	const { overlayIconSize } = attributes;
	const styles: Record< string, string | undefined > = {
		'--wc-product-filters-text-color': colors.textColor || '#111',
		'--wc-product-filters-background-color':
			colors.backgroundColor || '#fff',
		'--wc-product-filters-overlay-icon-size': overlayIconSize
			? `${ overlayIconSize }px`
			: undefined,
	};
	if (
		objectHasProp( attributes, 'style' ) &&
		objectHasProp( attributes.style, 'spacing' ) &&
		objectHasProp( attributes.style.spacing, 'blockGap' ) &&
		isString( attributes.style.spacing.blockGap )
	) {
		styles[ '--wc-product-filter-block-spacing' ] = presetToCssVariable(
			attributes.style.spacing.blockGap
		);
	}
	return styles;
}
