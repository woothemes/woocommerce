/**
 * Internal dependencies
 */
import { DefaultColors } from './settings-email-color-palette-slotfill';

const colorFieldMap = {
	woocommerce_email_base_color: 'baseColor',
	woocommerce_email_background_color: 'bgColor',
	woocommerce_email_body_background_color: 'bodyBgColor',
	woocommerce_email_text_color: 'bodyTextColor',
	woocommerce_email_footer_text_color: 'footerTextColor',
};

const setColor = ( inputId: string, color: string ) => {
	const inputElement = document.getElementById( inputId ) as HTMLInputElement;
	inputElement.value = color;
	inputElement.dispatchEvent( new Event( 'change' ) );
};

const getColor = ( inputId: string ): string => {
	const inputElement = document.getElementById( inputId ) as HTMLInputElement;
	return inputElement.value;
};

export const setColors = ( colors: DefaultColors ) => {
	for ( const [ inputId, colorName ] of Object.entries( colorFieldMap ) ) {
		setColor( inputId, colors[ colorName as keyof DefaultColors ] );
	}
};

export const getColors = (): DefaultColors => {
	const colors = {} as DefaultColors;
	for ( const [ inputId, colorName ] of Object.entries( colorFieldMap ) ) {
		colors[ colorName as keyof DefaultColors ] = getColor( inputId );
	}
	return colors;
};

export const areColorsChanged = ( colors: DefaultColors ): boolean => {
	for ( const [ inputId, colorName ] of Object.entries( colorFieldMap ) ) {
		const inputElement = document.getElementById(
			inputId
		) as HTMLInputElement;
		if (
			inputElement.value !== colors[ colorName as keyof DefaultColors ]
		) {
			return true;
		}
	}
	return false;
};

export const addListeners = ( listener: () => void ) => {
	// Input listeners
	for ( const inputId of Object.keys( colorFieldMap ) ) {
		const inputElement = document.getElementById(
			inputId
		) as HTMLInputElement;
		inputElement.addEventListener( 'change', listener );
	}
	// Color picker listeners
	const $colorPickers = document.querySelectorAll( '.iris-picker' );
	$colorPickers.forEach( ( item: Element ) =>
		item.addEventListener( 'click', listener )
	);
};

export const removeListeners = ( listener: () => void ) => {
	// Input listeners
	for ( const inputId of Object.keys( colorFieldMap ) ) {
		const inputElement = document.getElementById(
			inputId
		) as HTMLInputElement;
		inputElement.removeEventListener( 'change', listener );
	}
	// Color picker listeners
	const $colorPickers = document.querySelectorAll( '.iris-picker' );
	$colorPickers.forEach( ( item: Element ) =>
		item.removeEventListener( 'click', listener )
	);
};
