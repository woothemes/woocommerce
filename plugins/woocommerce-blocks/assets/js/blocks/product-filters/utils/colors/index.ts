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
	value: string | undefined = ''
): string {
	if ( slug?.length ) {
		return `var(--wp--preset--color--${ slug })`;
	}

	return value;
}

/**
 * Get custom key for a given color.
 *
 * @param {string} color Color name.
 * @return {string} Custom key.
 */
function getCustomKey( color: string ): string {
	return `custom${ color.charAt( 0 ).toUpperCase() }${ color.slice( 1 ) }`;
}

export function getStyleColorVars< T >(
	prefix: string,
	attributes: T,
	colors: readonly Extract< keyof T, string >[]
): Record< string, string > {
	const styleVars: Record< string, string > = {};

	colors.forEach( ( color ) => {
		const normalColor = attributes[ color ];
		const customKey = getCustomKey( color );
		const customColor = attributes[ customKey as keyof T ];

		if (
			typeof normalColor === 'string' ||
			typeof customColor === 'string'
		) {
			styleVars[ `--${ prefix }-${ kebabCase( color ) }` ] = getCSSVar(
				normalColor as string | undefined,
				customColor as string | undefined
			);
		}
	} );

	return styleVars;
}

export function getHasColorClasses< T extends Record< string, unknown > >(
	attributes: T,
	colorAttributes: readonly Extract< keyof T, string >[]
): Record< string, string | undefined > {
	const cssClasses: Record< string, string | undefined > = {};

	colorAttributes.forEach( ( attr ) => {
		if ( ! attr.startsWith( 'custom' ) ) {
			const customAttr = getCustomKey( attr );

			/*
			 * Generate class name based on the attribute name,
			 * transforming from camelCase to kebab-case.
			 * Example: `warningTextColor` -> `has-warning-text-color`.
			 */
			const className = `has-${ kebabCase( attr ) }-color`;

			cssClasses[ className ] =
				( attributes[ attr ] as string | undefined ) ||
				( attributes[ customAttr ] as string | undefined );
		}
	} );

	return cssClasses;
}
