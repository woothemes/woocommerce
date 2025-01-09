/**
 * External dependencies
 */
import {
	Fragment,
	createElement,
	useMemo,
	useEffect,
} from '@wordpress/element';
import { sanitize } from 'dompurify';

/**
 * Sometimes extensions will place a <script /> tag in the custom output of a settings field,
 * this function will extract the script content and return it as a SettingsField and the clean HTML.
 *
 * @param {string} html - The HTML content to process.
 * @return {Object} An object containing the clean HTML and script settings.
 */
const processCustomView = ( html: string ) => {
	const parser = new DOMParser();
	const doc = parser.parseFromString( html, 'text/html' );

	const scriptElements = Array.from(
		doc.getElementsByTagName( 'script' )
	).filter(
		( script ) =>
			script.getAttribute( 'type' ) === 'text/javascript' &&
			script.textContent?.trim()
	);

	const scripts = scriptElements.map( ( script ) => {
		const content = script.textContent as string;
		script.remove();
		return content;
	} );

	return {
		cleanHTML: sanitize( doc.documentElement.outerHTML ),
		scripts,
	};
};

const SettingsScript = ( { content }: { content: string } ) => {
	useEffect( () => {
		try {
			const scriptElement = document.createElement( 'script' );
			scriptElement.type = 'text/javascript';
			scriptElement.innerHTML = content;
			document.body.appendChild( scriptElement );

			return () => {
				document.body.removeChild( scriptElement );
			};
		} catch ( error ) {
			// eslint-disable-next-line no-console
			console.error( 'Failed to execute script:', error );
		}
	}, [ content ] );
	return null;
};

export const CustomView = ( { html }: { html: string } ) => {
	const { cleanHTML, scripts } = useMemo(
		() => processCustomView( html ),
		[ html ]
	);

	return (
		<Fragment>
			<div dangerouslySetInnerHTML={ { __html: cleanHTML } } />
			{ scripts.map( ( script, index ) => (
				<SettingsScript key={ index } content={ script } />
			) ) }
		</Fragment>
	);
};
