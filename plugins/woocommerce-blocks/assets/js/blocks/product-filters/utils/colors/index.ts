/**
 * External dependencies
 */
import { paramCase as kebabCase } from 'change-case';

/**
 * Get CSS variable value for a given slug or value.
 *
 * @param {string} slug  Slug of the color.
 * @param {string} value Value of the color.
 * @return {string} CSS variable value.
 */
function getCSSVar(
	slug: string | undefined,
	value: string | undefined
): string {
	if ( slug ) {
		return `var(--wp--preset--color--${ slug })`;
	}

	return value || '';
}

export function getColorVars( attributes: Record< string, string > ) {
	const {
		optionElement,
		optionElementBorder,
		optionElementSelected,
		customOptionElement,
		customOptionElementBorder,
		customOptionElementSelected,
	} = attributes;

	const vars: Record< string, string > = {
		'--wc-product-filter-checkbox-list-option-element': getCSSVar(
			optionElement,
			customOptionElement
		),
		'--wc-product-filter-checkbox-list-option-element-border': getCSSVar(
			optionElementBorder,
			customOptionElementBorder
		),
		'--wc-product-filter-checkbox-list-option-element-selected': getCSSVar(
			optionElementSelected,
			customOptionElementSelected
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

export function getHasColorClasses< T extends Record< string, unknown > >(
	attributes: T,
	colorAttributes: readonly Extract< keyof T, string >[]
): Record< string, string | undefined > {
	const cssClasses: Record< string, string | undefined > = {};

	colorAttributes.forEach( ( attr ) => {
		if ( ! attr.startsWith( 'custom' ) ) {
			const customAttr = `custom${ attr
				.charAt( 0 )
				.toUpperCase() }${ attr.slice( 1 ) }` as keyof T;

			/*
			 * Generate class name based on the attribute name,
			 * transforming from camelCase to kebab-case.
			 * Example: `warningTextColor` -> `has-warning-text-color`.
			 */
			const className = `has-${ kebabCase( attr ) }`;

			cssClasses[ className ] =
				( attributes[ attr ] as string | undefined ) ||
				( attributes[ customAttr ] as string | undefined );
		}
	} );

	return cssClasses;
}
