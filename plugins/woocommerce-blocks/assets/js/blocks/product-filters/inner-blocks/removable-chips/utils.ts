/**
 * Internal dependencies
 */
import { BlockAttributes } from './types';

function getCSSVar( slug: string | undefined, value: string | undefined ) {
	if ( slug ) {
		return `var(--wp--preset--color--${ slug })`;
	}
	return value || '';
}

export function getColorVars( attributes: BlockAttributes ) {
	const {
		chipText,
		chipBackground,
		chipBorder,
		customChipText,
		customChipBackground,
		customChipBorder,
	} = attributes;

	const vars: Record< string, string > = {
		'--wc-product-filter-removable-chips-text': getCSSVar(
			chipText,
			customChipText
		),
		'--wc-product-filter-removable-chips-background': getCSSVar(
			chipBackground,
			customChipBackground
		),
		'--wc-product-filter-removable-chips-border': getCSSVar(
			chipBorder,
			customChipBorder
		),
	};

	return Object.keys( vars ).reduce(
		( acc: Record< string, string >, key ) => {
			if ( vars[ key ] ) {
				acc[ key ] = vars[ key ];
			}
			return acc;
		},
		{}
	);
}

export function getColorClasses( attributes: BlockAttributes ) {
	const {
		chipText,
		chipBackground,
		chipBorder,
		customChipText,
		customChipBackground,
		customChipBorder,
	} = attributes;

	return {
		'has-chip-text-color': chipText || customChipText,
		'has-chip-background-color': chipBackground || customChipBackground,
		'has-chip-border-color': chipBorder || customChipBorder,
	};
}
