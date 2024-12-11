/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect } from 'react';

type EmailPreviewIframeProps = {
	src: string;
	setIsLoading: ( isLoading: boolean ) => void;
	settingsIds: string[];
};

export const EmailPreviewIframe: React.FC< EmailPreviewIframeProps > = ( {
	src,
	setIsLoading,
	settingsIds,
} ) => {
	useEffect( () => {
		const handleFieldChange = async () => {
			setIsLoading( true );

			setTimeout( () => {
				setIsLoading( false );
			}, 1000 );
		};

		// Set up listeners
		settingsIds.forEach( ( id ) => {
			const field = jQuery( `#${ id }` );
			if ( field.length ) {
				// Using jQuery events due to select2 and iris (color picker) usage
				field.on( 'change', handleFieldChange );
			}
		} );

		return () => {
			// Remove listeners
			settingsIds.forEach( ( id ) => {
				const field = jQuery( `#${ id }` );
				if ( field.length ) {
					field.off( 'change' );
				}
			} );
		};
	}, [ setIsLoading, settingsIds ] );

	return (
		<iframe
			src={ src }
			title={ __( 'Email preview frame', 'woocommerce' ) }
			onLoad={ () => setIsLoading( false ) }
		/>
	);
};
