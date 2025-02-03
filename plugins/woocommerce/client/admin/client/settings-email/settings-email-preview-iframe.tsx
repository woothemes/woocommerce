/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';
import { debounce } from 'lodash';

/**
 * Internal dependencies
 */
import { emailPreviewNonce } from './settings-email-preview-nonce';

type EmailPreviewIframeProps = {
	src: string;
	isLoading: boolean;
	setIsLoading: ( isLoading: boolean ) => void;
	settingsIds: string[];
};

export const EmailPreviewIframe: React.FC< EmailPreviewIframeProps > = ( {
	src,
	isLoading,
	setIsLoading,
	settingsIds,
} ) => {
	const [ counter, setCounter ] = useState( 0 );
	const nonce = emailPreviewNonce();

	useEffect( () => {
		const handleFieldChange = async ( jqEvent: JQuery.Event ) => {
			const event = jqEvent as JQuery.Event & {
				target: HTMLInputElement;
			};
			const target = event.target;
			const key = target.id;
			const value = target.value;

			setIsLoading( true );

			try {
				await apiFetch( {
					path: `wc-admin-email/settings/email/save-transient?nonce=${ nonce }`,
					method: 'POST',
					data: { key, value },
				} );
			} finally {
				target.dispatchEvent( new Event( 'transient-saved' ) );
				setCounter( ( prevCounter ) => prevCounter + 1 );
			}
		};

		const handlers: Record< string, ( event: JQuery.Event ) => void > = {};

		// Set up listeners
		settingsIds.forEach( ( id ) => {
			handlers[ id ] = debounce( handleFieldChange, 400 );
			const field = jQuery( `#${ id }` );
			if ( field.length ) {
				// Using jQuery events due to select2 and iris (color picker) usage
				field.on( 'change', handlers[ id ] );
			}
		} );

		return () => {
			// Remove listeners
			settingsIds.forEach( ( id ) => {
				const field = jQuery( `#${ id }` );
				if ( field.length ) {
					field.off( 'change', handlers[ id ] );
				}
			} );
		};
	}, [ nonce, setIsLoading, settingsIds, setCounter ] );

	return (
		<div>
			<iframe
				className={ isLoading ? 'iframe-is-loading' : '' }
				src={ `${ src }&hash=${ counter }` }
				title={ __( 'Email preview frame', 'woocommerce' ) }
				onLoad={ () => setIsLoading( false ) }
			/>
		</div>
	);
};
