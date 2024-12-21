/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { Navigation } from '../components/navigation/navigation';
import { IntroOptInEvent } from '../events';

/**
 * This is a temporary page for testing the blueprint import functionality.
 * This will be replaced with more user-friendly design in the future.
 */
export const BuilderIntro = ( {
	sendEvent,
	navigationProgress = 80,
}: {
	sendEvent: ( event: IntroOptInEvent ) => void;
	navigationProgress: number;
} ) => {
	const [ file, setFile ] = useState( null );
	const [ message, setMessage ] = useState( '' );
	const [ importing, setImporting ] = useState( false );

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleFileChange = ( event: any ) => {
		setFile( event.target.files[ 0 ] );
	};

	const handleUpload = () => {
		if ( ! file ) {
			setMessage( 'Please select a file first.' );
			return;
		}

		setImporting( true );

		const formData = new FormData();
		formData.append( 'file', file );

		if ( window?.wcSettings?.admin?.blueprint_upload_nonce ) {
			formData.append(
				'blueprint_upload_nonce',
				window.wcSettings.admin.blueprint_upload_nonce
			);
		}

		apiFetch( {
			path: '/wc-admin/blueprint/queue',
			method: 'POST',
			body: formData,
		} )
			.then( ( data ) => {
				// @ts-expect-error tmp
				if ( data.errors.length === 0 ) {
					apiFetch( {
						path: '/wc-admin/blueprint/process',
						method: 'POST',
						data: {
							// @ts-expect-error tmp
							reference: data.reference,
							// @ts-expect-error tmp
							process_nonce: data.process_nonce,
						},
					} ).then( () => {
						setMessage( 'Schema imported successfully' );

						setImporting( false );

						// window.setTimeout( () => {
						// 	// @ts-expect-error tmp
						// 	window.location.href = response.data.redirect;
						// }, 2000 );
					} );
				} else {
					setImporting( false );
					setMessage(
						`Error: There was an error importing the blueprint.`
					);

					// @ts-expect-error tmp
					setMessage( JSON.stringify( data.errors, null, 2 ) );
				}
			} )
			.catch( () => {
				setImporting( false );
				// @ts-expect-error tmp
				setMessage( JSON.stringify( data.errors, null, 2 ) );
			} );
	};
	return (
		<>
			<Navigation
				percentage={ navigationProgress }
				skipText={ __( 'Skip setup', 'woocommerce' ) }
				onSkip={ () =>
					sendEvent( {
						type: 'INTRO_SKIPPED',
						payload: { optInDataSharing: false },
					} )
				}
			/>
			<div className="woocommerce-profiler-builder-intro">
				<h1>
					{ __(
						'Upload your Blueprint to provision your site',
						'woocommerce'
					) }{ ' ' }
				</h1>

				<input
					className="woocommerce-profiler-builder-intro-file-input"
					type="file"
					onChange={ handleFileChange }
				/>
				<Button
					variant="primary"
					onClick={ handleUpload }
					isBusy={ importing }
				>
					{ __( 'Import', 'woocommerce' ) }
				</Button>
				<div>
					<pre>{ message }</pre>
				</div>
			</div>
		</>
	);
};
